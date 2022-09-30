/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  BoltIcon,
  MapIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "Maintenance Volume",
    abbreviation: "MV",
    description:
      "This is the amount of training (aka number of sets) that allows you to maintain your current level of muscular size.",
    icon: GlobeAltIcon,
  },
  {
    name: "Minimum Effective Volume",

    abbreviation: "MEV",
    description:
      "This is the amount of training that actually grows your muscles: anything below this amount may only maintain them.",
    icon: ScaleIcon,
  },
  {
    name: "Maximum Adaptive Volume",

    abbreviation: "MAV",
    description:
      "This is the range of volume in which the most optimal muscle gains happen.",
    icon: BoltIcon,
  },
  {
    name: "Maximum Recoverable Volume",

    abbreviation: "MRV",
    description:
      "The range of volumes in which you make your best gains. It’s much more of a range than the other volume landmarks because it changes greatly within each training microcycle (week to week).",
    icon: MapIcon,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="inline bg-gradient-to-l from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Visualize the landmarks more clearer.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex bg-gradient-to-tl from-indigo-200 via-sky-400 to-indigo-200 items-center justify-center h-12 w-12 rounded-md text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-slate-100">
                    {feature.name}{" "}
                    <span className="text-xs text-slate-400 ml-3">
                      {feature.abbreviation}
                    </span>
                  </p>
                </dt>
                <dd className="mt-2 text-base text-slate-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
