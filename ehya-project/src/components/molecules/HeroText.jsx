import Button from "../atoms/Button";

export default function HeroText() {
  return (
    <div className="text-center md:text-left text-white">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        We help you <br /> grow your business <br /> 
        <span className="text-blue-200">faster</span>
      </h1>
      <p className="mt-4 text-lg">
        Ehya is the Instagram analytics platform teams use to stay focused on
        goals, track engagement, and report your business.
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <Button variant="primary">See how it works</Button>
        <Button variant="outline">Get a free demo</Button>
      </div>
    </div>
  );
}
