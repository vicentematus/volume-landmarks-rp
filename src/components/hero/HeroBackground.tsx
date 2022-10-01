import { useId } from "react";

export function HeroBackground(props: any) {
  let id = useId();

  return (
    <>
      <svg
        aria-hidden="true"
        width={668}
        height={1069}
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="608" height="593" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="0.0921053"
            height="0.165261"
          >
            <use transform="scale(0.00164474 0.00168634)" />
          </pattern>
          <image
            id="image0_1405_1041"
            width="56"
            height="98"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABiCAYAAAAFkxCPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAURSURBVHgB7VthVhs3EB7ZwO/2BMU3aE5Q5wSlL4RHQtqaE9g5gZcTYE5g571CeYW+uieAnqC5AT4C/RF+4LXVGYOdzVojaSUtifL0/cGsdnb1rWZWs5pPAmrCywMpi/9fnApRpT0UGvCVIxGMHYlg7EgEY0ciGDsSwdhRC8GdjvwGKgJttqEGBCe490ZmmzncQEVsTuFq95XsQWAEy+B338h2Q8IQPxG2Ve2mr4kCJnOA7M9T8Q4CwHsE99G1sLNXQsKVkpyE9zCHtuL4IdpMFJfcxk6N8JrDEG7rPIIUZ+iKGXa0y5xyi23ZxZk40V1n90D2cOS7UqhHHjs4uN+Ek/FITMABTgT3sFPYoT4SUL5McCQH+Qc4Go/Frc319vfl9qyB1xPQYU5xdttKBCnO0K2O8ef3qnYkdo3tb3HU3nP2+QZMuNEgonkThtipNqgxkTM4vDwX12AJK4IUZ7MpDIG7McWShM7F7+IfjX0ff3YeD42mmzjCDNGXr2UHO9bn3NZkX4SWIMXZVg49HJku4463+C4c5HcYIwp3NNjf4mif/HEmMu7+OOJ9PIemDmUoYNuRzn5xDtdATxHfscdcnOHx0fQO3nJx9uKV3GmiPTdtFKCNL9/4XCP4GGfkTm2VwSLO5vh2ZNzRZM8BPWGcb+ED08TnvIFTEe+2E3Tb52X7FUFFnJR6gE9K8E/KdtrAv//5xFfV+BS+cUag9ExjT6OTFe193Y76vJFDVzw8MBVW8S1wTrvh4gRPGt/P0W3O1U/TlJ6RO+f4WufsF9MCxikmcTughnd8ClVOaIoz32mjDN9pYfcX+WMjh4HKvkxQm16FSs84+KZtqge1SrYpTqYfoMV1jtKzxWcQQ47SM529DS5PxaAxh+c0BTH36NFn1YsD+auqHe89KtsLfGpXujjxTc9csYivJvzF3RdBYfATd99lfLITfeg4c4VvfK4RDDFt1IHHtC3j2rm07dOvbM/0rG64zJ8rgvRVDo7p2VPDJm3DJZIW/dgoHGyvnWZIzz4Xzh9eiC1NfK7+Z9dkFtPGHTz70sgVQdPC/RY8Q4IZd07RRZ+kZl4XuP6nle3YkQjGjkQwdiSCsSMRjB2JYOxIBGNHIhg7EsHYkQjGjkQwdiSCsWODa9h7LTNcNR5gWeqzFFpssaqGMeJMfuleQB+rqf9y1dQvAcuqs3zQ5SixImjQbt7UJTl2AVWdqRqGg6Ys9VE1bPl7rT4YSgRXB6jqPM/hGEdMLTtRVMOUFV5bkQ08EXyqznyNvkaRahWYRH0msRLpZIZabdjP8gcxg5HGba/R/jC02/qKApciipUQyEVkU0KQ+PQVG5Xty0onozZs3oQuCXJADWe3tYizNVFfGSotuWD2L2i10aHj01fUpxMrCcxYbp5Ku1lGIC241n7xFvXVRlcV0YWIM9tp46Pi19PtbO2bAN/67LmoKlYSqo66aKOL9gYRHdMv854Ll2lDq7qvWVu97FnVPRdr9jqxknHfhCFtm2DbO4u9D6p2nz0XRvsl7Ha+hI5Pzz0XpvTsk3OhAnTaaILN3oeZgO9c91y4iAKd5Fqh07Y6teDOerRQ2UzVPRdV4S24s9n7gJ3sXZ6Jv4sHfdMzWwRTFJrc1noPb2AteLBlQ9Ju4nTRIu0ms75jAsVZD6/TCqksDr4uevmbOFrsXagI3z0XHGpZ+D13iJu6hO5p6T52JIKxIxGMHYlg7EgEY0ciGDv+B6Q3Wp1/t4lqAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>

      <svg aria-hidden="true" width={668} height={1069} fill="none" {...props}>
        <defs>
          <clipPath id={`${id}-clip-path`}>
            <path
              fill="#fff"
              transform="rotate(-180 334 534.4)"
              d="M0 0h668v1068.8H0z"
            />
          </clipPath>
        </defs>
        <g opacity=".4" clipPath={`url(#${id}-clip-path)`} strokeWidth={4}>
          <path
            opacity=".3"
            d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474"
            stroke="#334155"
          />
          <path
            d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588"
            stroke="#334155"
          />
          <path
            d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175"
            stroke="#334155"
          />
          <circle
            cx="83.5"
            cy="384.1"
            r="10.438"
            transform="rotate(-180 83.5 384.1)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="83.5"
            cy="200.399"
            r="10.438"
            transform="rotate(-180 83.5 200.399)"
            stroke="#334155"
          />
          <circle
            cx="83.5"
            cy="81.412"
            r="10.438"
            transform="rotate(-180 83.5 81.412)"
            stroke="#334155"
          />
          <circle
            cx="183.699"
            cy="375.75"
            r="10.438"
            transform="rotate(-180 183.699 375.75)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="183.699"
            cy="563.625"
            r="10.438"
            transform="rotate(-180 183.699 563.625)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="384.1"
            cy="651.3"
            r="10.438"
            transform="rotate(-180 384.1 651.3)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="484.301"
            cy="574.062"
            r="10.438"
            transform="rotate(-180 484.301 574.062)"
            fill="#0EA5E9"
            fillOpacity=".42"
            stroke="#0EA5E9"
          />
          <circle
            cx="384.1"
            cy="749.412"
            r="10.438"
            transform="rotate(-180 384.1 749.412)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="384.1"
            cy="1027.05"
            r="10.438"
            transform="rotate(-180 384.1 1027.05)"
            stroke="#334155"
          />
          <circle
            cx="283.9"
            cy="924.763"
            r="10.438"
            transform="rotate(-180 283.9 924.763)"
            stroke="#334155"
          />
          <circle
            cx="183.699"
            cy="870.487"
            r="10.438"
            transform="rotate(-180 183.699 870.487)"
            stroke="#334155"
          />
          <circle
            cx="283.9"
            cy="738.975"
            r="10.438"
            transform="rotate(-180 283.9 738.975)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="83.5"
            cy="695.138"
            r="10.438"
            transform="rotate(-180 83.5 695.138)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="83.5"
            cy="484.3"
            r="10.438"
            transform="rotate(-180 83.5 484.3)"
            fill="#0EA5E9"
            fillOpacity=".42"
            stroke="#0EA5E9"
          />
          <circle
            cx="484.301"
            cy="432.112"
            r="10.438"
            transform="rotate(-180 484.301 432.112)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="584.5"
            cy="432.112"
            r="10.438"
            transform="rotate(-180 584.5 432.112)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="584.5"
            cy="642.95"
            r="10.438"
            transform="rotate(-180 584.5 642.95)"
            fill="#1E293B"
            stroke="#334155"
          />
          <circle
            cx="484.301"
            cy="851.699"
            r="10.438"
            transform="rotate(-180 484.301 851.699)"
            stroke="#334155"
          />
          <circle
            cx="384.1"
            cy="256.763"
            r="10.438"
            transform="rotate(-180 384.1 256.763)"
            stroke="#334155"
          />
        </g>
      </svg>
    </>
  );
}
