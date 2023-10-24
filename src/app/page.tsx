"use client";
import Button from "@/app/component/Button/Button";
import Spinner from "./component/Spinner/Spinner";
import { useState } from "react";
import Select from "./component/Select/Select";
import { columns, data, options } from "./types";
import CustomTable from "./component/Table/Table";
import Affix from "./component/Afix/Afix";


export default function Home() {

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  
  return (
    <main className="flex flex-col gap-[30px]">
      <Button
        type="button"
        buttonVariant="loading"
        className="max-w-[160px]"
      >
        Samariddin
      </Button>
      <div>
        <Spinner />
      </div>
      <div>
        <Select options={options} onChange={handleSelectChange} />
      </div>
      <div>
        <CustomTable data={data} columns={columns} />
      </div>
      <div>
        <Affix top={100}>
          <div className="affix-content transition-all">
            Affixed element
          </div>
        </Affix>
        <div style={{ height: "1200px" }}></div>
      </div>
    </main>
  );
}
