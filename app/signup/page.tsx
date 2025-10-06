"use client";

import React, { useState, useReducer, useRef } from "react";
import { useRouter } from "next/navigation";

// ---- Mock Auth Store ----
const useAuthStore = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return {
    currentStep,
    increaseStep: () => setCurrentStep((s) => s + 1),
    decreaseStep: () => setCurrentStep((s) => Math.max(1, s - 1)),
    login: async (data: any) => {
      console.log("Mock login:", data);
      return { status: true };
    },
    sendVerificationCode: async (form: any) => ({ status: true }),
    verifyCode: async (form: any) => ({ userId: "mock-user-id" }),
    uploadDocuments: async (fd: FormData) => ({
      user: { role: "patient" },
    }),
    uploadDocumentsDoctor: async (fd: FormData) => ({
      user: { role: "doctor" },
    }),
    setUser: (user: any) => console.log("User set:", user),
    setUserRole: (role: string) => console.log("User role set:", role),
    setCurrentView: (view: string) => console.log("View set:", view),
  };
};

// ---- Static Data ----
const countries = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "AU", label: "Australia" },
];
const cities: Record<string, string[]> = {
  US: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
  CA: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  DE: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  FR: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
  AU: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
};
const roles = [
  {
    value: "patient",
    label: "Patient",
    icon: "🏥",
    description:
      "Seek medical treatment and access healthcare services on the blockchain platform",
  },
  {
    value: "doctor",
    label: "Doctor",
    icon: "👨‍⚕️",
    description:
      "Provide medical services and consultations to patients worldwide",
  },
  {
    value: "dao",
    label: "DAO/Partner",
    icon: "🤝",
    description:
      "Contribute to platform governance, funding, and strategic development",
  },
];

export default function Signup() {
  const router = useRouter();
  const auth = useAuthStore();
const handleChange = (field: keyof typeof form, value: string) => {
  setForm((prev) => ({ ...prev, [field]: value }));
};
const getRoleLabel = (role: string) => {
  const roleMap: Record<string, string> = {
    patient: "Patient",
    doctor: "Doctor",
    dao: "DAO/Partner",
  };
  return roleMap[role] || role;
};

  // ---- State ----
  const [tab, setTab] = useState<"login" | "signup">("signup");
  const [selectedRole, setSelectedRole] = useState("dao");
  const [userId, setUserId] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isCompletingRegistration, setIsCompletingRegistration] = useState(false);

  const [form, setForm] = useState({
    phone: "",
    role: "",
    code: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    communicationPreference: "",
    passport: null as File | null,
    photo: null as File | null,
    reports: [] as File[],
  });

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [extendedForm, setExtendedForm] = useState({
    diagnosis: "",
    specialization: [] as string[],
    diplomas: [] as File[],
    serviceCountry: "",
    serviceCity: "",
    profession: "",
    joinReason: "",
    xhspStake: 1000,
    liquidityLock: 1000,
  });

  // ---- Handlers ----
  const nextStep = async () => {
    if (auth.currentStep === 2) {
      const res = await auth.sendVerificationCode(form);
      if (res.status) {
        auth.increaseStep();
        alert("OTP sent to email");
        return;
      }
    }
    auth.increaseStep();
  };

  const prevStep = () => {
    auth.decreaseStep();
    setPaymentStatus("");
  };

  const verifyCode = async () => {
    const res = await auth.verifyCode({ ...form, code: verificationCode });
    if (res.userId) {
      setUserId(res.userId);
      nextStep();
    } else {
      alert("Verification failed");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const files = e.target.files;
    if (!files) return;
    const maxSize = 10 * 1024 * 1024;
    if (type === "passport" || type === "photo") {
      if (files[0].size > maxSize) return alert("File too large");
      setForm((f) => ({ ...f, [type]: files[0] }));
    }
    if (type === "reports") {
      const valid = Array.from(files).filter((f) => f.size <= maxSize);
      setForm((f) => ({ ...f, reports: valid }));
    }
    if (type === "diplomas") {
      const valid = Array.from(files).filter((f) => f.size <= maxSize);
      setExtendedForm((ef) => ({ ...ef, diplomas: valid }));
    }
  };

  const payActivationFee = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setPaymentStatus("success");
      setIsProcessingPayment(false);
      setTimeout(() => nextStep(), 2000);
    }, 3000);
  };

  const completeRegistration = async () => {
    setIsCompletingRegistration(true);
    const fd = new FormData();

    if (selectedRole === "patient") {
      Object.entries(form).forEach(([k, v]) => {
        if (v instanceof File) fd.append(k, v);
        else if (Array.isArray(v)) v.forEach((f) => fd.append(k, f));
        else fd.append(k, v as string);
      });
      fd.append("userId", userId || "");
      const res = await auth.uploadDocuments(fd);
      auth.setUser(res.user);
      auth.setUserRole(res.user.role);
      auth.setCurrentView("treatments");
      router.push("/dashboard");
    }

    if (selectedRole === "doctor") {
      extendedForm.diplomas.forEach((f) => fd.append("diplomas", f));
      fd.append("userId", userId || "");
      fd.append("specs", extendedForm.specialization.join(","));
      fd.append(
        "location",
        JSON.stringify({
          country: extendedForm.serviceCountry,
          city: extendedForm.serviceCity,
        })
      );
      const res = await auth.uploadDocumentsDoctor(fd);
      auth.setUser(res.user);
      auth.setUserRole(res.user.role);
      auth.setCurrentView("patients");
      router.push("/dashboard");
    }

    if (selectedRole === "dao") {
      fd.append("userId", userId || "");
      fd.append("joiningReason", extendedForm.joinReason);
      fd.append("profession", extendedForm.profession);
      const res = await auth.uploadDocumentsDoctor(fd);
      auth.setUser(res.user);
      auth.setUserRole(res.user.role);
      auth.setCurrentView("proposals");
      router.push("/dashboard");
    }

    setTimeout(() => setIsCompletingRegistration(false), 3000);
  };

  // ---- JSX ----
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {tab === "signup" ? "Create Your Account" : "Login to Your Account"}
        </h1>

        {/* STEP LOGIC */}
        {auth.currentStep === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Select Your Role</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`p-4 rounded-lg border ${
                    selectedRole === role.value
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-3xl">{role.icon}</div>
                  <h3 className="font-medium">{role.label}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        )}
         {/* Step 2: Registration Form */}
        {auth.currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Registration Information
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <input
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    type="password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email {selectedRole === "patient" ? "(Optional)" : "*"}
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    type="email"
                    required={selectedRole !== "patient"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Country *
                  </label>
                  <select
                    value={form.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Communication Preference *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="commPref"
                      value="whatsapp"
                      checked={form.communicationPreference === "whatsapp"}
                      onChange={(e) => handleChange("communicationPreference", e.target.value)}
                      className="mr-2"
                    />
                    <span className="flex items-center">
                      <span className="mr-2">📱</span> WhatsApp
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="commPref"
                      value="telegram"
                      checked={form.communicationPreference === "telegram"}
                      onChange={(e) => handleChange("communicationPreference", e.target.value)}
                      className="mr-2"
                    />
                    <span className="flex items-center">
                      <span className="mr-2">✈️</span> Telegram
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent rounded-md text-sm font-medium text-white hover:opacity-90 bg-indigo-600"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}
           {auth.currentStep === 3 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Verify Your Email</h3>
            <div className="text-center">
              <div className="text-6xl mb-6">📱</div>
              <p className="text-sm text-gray-600 mb-6">
                We've sent a verification code to <strong>your@email.com</strong>
              </p>
              <div className="max-w-xs mx-auto mb-6">
                <input
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={verifyCode}
                disabled={verificationCode.length !== 6}
                className={`px-6 py-2 rounded-md text-sm font-medium text-white transition-colors ${
                  verificationCode.length === 6
                    ? "bg-indigo-600 hover:opacity-90"
                    : "bg-indigo-400 cursor-not-allowed"
                }`}
              >
                Verify Code
              </button>
            </div>
          </>
        )}

        {/* Step 4: Payment */}
        {auth.currentStep === 4 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Activation Fee Payment</h3>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💳</div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">
                  One-time Activation Fee
                </h4>
                <p className="text-3xl font-bold text-indigo-600">$100 USD</p>
                <p className="text-sm text-indigo-700 mt-2">
                  Required to activate your {selectedRole} account
                </p>
              </div>
            </div>

            {/* Payment Form */}
            <div className="max-w-md mx-auto space-y-4">
              <input
                value={paymentForm.cardNumber}
                onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  value={paymentForm.expiryDate}
                  onChange={(e) => setPaymentForm({ ...paymentForm, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  value={paymentForm.cvv}
                  onChange={(e) => setPaymentForm({ ...paymentForm, cvv: e.target.value })}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {paymentStatus && (
              <div
                className={`mt-6 p-4 rounded-md ${
                  paymentStatus === "success" ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">
                    {paymentStatus === "success" ? "✅" : "❌"}
                  </span>
                  <div>
                    <h4
                      className={`font-medium ${
                        paymentStatus === "success" ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {paymentStatus === "success" ? "Payment Successful!" : "Payment Failed"}
                    </h4>
                    <p
                      className={`text-sm ${
                        paymentStatus === "success" ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {paymentStatus === "success"
                        ? "Transaction ID: TXN123456789"
                        : "Please check your card details and try again"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={payActivationFee}
                disabled={isProcessingPayment}
                className={`px-6 py-2 rounded-md text-sm font-medium text-white ${
                  isProcessingPayment ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600"
                }`}
              >
                {isProcessingPayment ? "Processing..." : "Pay $100"}
              </button>
            </div>
          </>
        )}

        {/* Step 5: Extended Registration */}
        {auth.currentStep === 5 && (
          <>
            <h3 className="text-xl font-semibold mb-6">
              Complete Your {getRoleLabel(selectedRole)} Profile
            </h3>
            {/* You can expand Patient/Doctor/DAO forms here as in your original code */}
            {/* ... */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={completeRegistration}
                disabled={isCompletingRegistration}
                className={`px-6 py-2 rounded-md text-sm font-medium text-white ${
                  isCompletingRegistration ? "bg-green-400 cursor-not-allowed" : "bg-green-600"
                }`}
              >
                {isCompletingRegistration ? "Completing..." : "Complete Registration"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
