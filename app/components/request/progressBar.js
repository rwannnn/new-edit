import Step from "./Step";

export default function ProgressBar({ currentStep, onStepClick }) {
  return (
    <div className="mb-6 border border-dark p-4 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <Step
          step={1}
          label="Describe your task"
          currentStep={currentStep}
          onClick={() => onStepClick(1)}
        />
        <Step
          step={2}
          label="Details"
          currentStep={currentStep}
          onClick={() => onStepClick(2)}
        />
        <Step
          step={3}
          label="Review"
          currentStep={currentStep}
          onClick={() => onStepClick(3)}
        />
        <Step
          step={4}
          label="Confirmation"
          currentStep={currentStep}
          onClick={() => onStepClick(4)}
        />
      </div>
      <div className="relative w-full h-2 bg-gray-100 rounded-full">
        <div
          className="absolute top-0 h-2 bg-dark rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}
