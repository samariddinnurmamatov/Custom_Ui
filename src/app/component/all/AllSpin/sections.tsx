import React, { useState } from "react";
import Spinner from "../../ui/Spinner/Spinner";
import Select from "../../ui/Select/Select";
import Table from "../../ui/Table/Table";
import { SectionProps, columns, data, options } from "@/app/types";

const Sections: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

   const spinner1 = <Spinner variant="dark" width="60px" height="60px" />;
   const spinner2 = <Spinner variant="blue" width="70px" height="70px" />;


  const sections: SectionProps[] = [
    {
      title: "Spinner",
      content: [spinner1, spinner2],
      py: 100,
    },
    {
      title: "Select",
      content: <Select options={options} onChange={handleSelectChange} />,
      py: 100,
    },
    {
      title: "Table",
      content: <Table data={data} columns={columns} />,
      py: 100,
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ title, content, py }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-[20px] py-[${py}px] min-h-screen`}>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default Sections;
