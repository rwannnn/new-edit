"use client";
import React, { useState } from "react";
import Image from "next/image";
import bg from "../../../public/images/request2.jpg";
import Header from "@/app/components/request/header";

export default function Request() {
  const [formData, setFormData] = useState({
    startAddress: "",
    unit: "",
    endAddress: "",
    taskDetails: "",
    taskSize: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [showStartAddressFields, setShowStartAddressFields] = useState(true);
  const [showEndAddressFields, setShowEndAddressFields] = useState(false);
  const [showTaskOptions, setShowTaskOptions] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative z-10 max-w-4xl mx-auto bg-light p-8 rounded-lg   ">
        <div className=" shadow-xl p-3 rounded-md ">
          {/* Progress Bar */}
          <div className="mb-6 border border-dark p-4 rounded-md">
            <div className="flex justify-between items-center mb-6">
              <Step
                step={1}
                label="Describe your task"
                currentStep={currentStep}
                onClick={() => handleStepClick(1)}
              />
              <Step
                step={2}
                label=""
                currentStep={currentStep}
                onClick={() => handleStepClick(2)}
              />
              <Step
                step={3}
                label=""
                currentStep={currentStep}
                onClick={() => handleStepClick(3)}
              />
              <Step
                step={4}
                label=""
                currentStep={currentStep}
                onClick={() => handleStepClick(4)}
              />
            </div>

            {/* Progress Bar Line */}
            <div className="relative w-full h-2 bg-gray-100 rounded-full">
              <div
                className="absolute top-0 h-2 bg-dark rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }} // Progress based on the current step
              />
            </div>
          </div>
          {/* Form Content (based on the current step) */}
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div>
                {/* Start Address Section */}
                <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
                  <button
                    type="button"
                    className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
                    onClick={() => {
                      setShowStartAddressFields(!showStartAddressFields);
                      setShowEndAddressFields(false);
                      setShowTaskOptions(false);
                      setShowTaskDetails(false);
                    }}
                  >
                    Start Address
                  </button>
                  {showStartAddressFields && (
                    <div className="mt-4">
                      <input
                        type="text"
                        name="startAddress"
                        placeholder="Street address"
                        value={formData.startAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mb-4 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                      />
                      <input
                        type="text"
                        name="unit"
                        placeholder="Unit or apt #"
                        value={formData.unit}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                      />
                      <button
                        type="button"
                        className="my-5 w-full px-4 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                        onClick={() => {
                          setShowEndAddressFields(true);
                          setShowStartAddressFields(false);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
                {/* End Address Section */}
                <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
                  <button
                    type="button"
                    className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
                    onClick={() => {
                      setShowStartAddressFields(false);
                      setShowEndAddressFields(!showEndAddressFields);
                      setShowTaskOptions(false);
                      setShowTaskDetails(false);
                    }}
                  >
                    End Address
                  </button>
                  {showEndAddressFields && (
                    <div className="mt-4">
                      <input
                        type="text"
                        name="endAddress"
                        placeholder="End Address"
                        value={formData.endAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mb-4 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                      />
                      <input
                        type="text"
                        name="unit"
                        placeholder="End Address Unit or apt #"
                        value={formData.unit}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                      />
                      <button
                        type="button"
                        className="my-5 w-full px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                        onClick={() => {
                          setShowEndAddressFields(false);
                          setShowTaskOptions(true);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
                {/* Task Options Section */}
                <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
                  <button
                    type="button"
                    className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
                    onClick={() => {
                      setShowStartAddressFields(false);
                      setShowEndAddressFields(false);
                      setShowTaskOptions(!showTaskOptions);
                      setShowTaskDetails(false);
                    }}
                  >
                    Task Options
                  </button>
                  {showTaskOptions && (
                    <div className="mt-4">
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Task options
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, taskSize: "small" })
                          }
                          className={`py-2 px-4 rounded-md border ${
                            formData.taskSize === "small"
                              ? "bg-gray-300"
                              : "bg-gray-100"
                          }`}
                        >
                          Small
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, taskSize: "mid" })
                          }
                          className={`py-2 px-4 rounded-md border ${
                            formData.taskSize === "mid"
                              ? "bg-gray-300"
                              : "bg-gray-100"
                          }`}
                        >
                          Mid
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, taskSize: "large" })
                          }
                          className={`py-2 px-4 rounded-md border ${
                            formData.taskSize === "large"
                              ? "bg-gray-300"
                              : "bg-gray-100"
                          }`}
                        >
                          Large
                        </button>
                        <button
                          type="button"
                          className="my-5 w-full px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                          onClick={() => {
                            setShowTaskOptions(false);
                            setShowTaskDetails(true);
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Task Details Section */}
                <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
                  <button
                    type="button"
                    className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
                    onClick={() => {
                      setShowStartAddressFields(false);
                      setShowEndAddressFields(false);
                      setShowTaskOptions(false);
                      setShowTaskDetails(!showTaskDetails);
                    }}
                  >
                    Tell us the details of your task
                  </button>
                  {showTaskDetails && (
                    <div>
                      <textarea
                        name="taskDetails"
                        placeholder="Enter details here..."
                        value={formData.taskDetails}
                        onChange={handleChange}
                        className="w-full mt-4 px-4 py-2 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                        rows="4"
                      />
                      <button
                        type="button"
                        className="w-full bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                        onClick={() => setCurrentStep(2)}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Step({ step, label, currentStep, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer ${
        currentStep >= step ? "text-bg" : "text-gray-600"
      }`}
    >
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
          currentStep >= step
            ? "border-dark bg-dark text-light"
            : "border-gray-400"
        }`}
      >
        {step}
      </div>
      <span
        className={`text-sm mt-2 ${currentStep === step ? "text-black" : ""}`}
      >
        {label}
      </span>
    </div>
  );
}
