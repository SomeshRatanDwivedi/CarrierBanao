import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { industries } from "@/constants";
import { useState } from "react";
import { Button } from "./ui/button";

const JobInsightsInputs = ({ handleSearch }: { handleSearch:(value:string)=>void}) => {
  const [value, setValue] = useState({ industry: '', subIndustry: '' });
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div className="flex items-end justify-center bg-background">
      <div className="space-y-2 w-[500px] mr-4">
        <Label htmlFor="industry">Industry</Label>
        <Select
          onValueChange={(value) => {
            setValue({ industry: value, subIndustry:'' });
            setSelectedIndustry(
              industries.find((ind) => ind.id === value)
            );
          }}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent className="select-content w-[500px] cursor-pointer">
            <SelectGroup>
              <SelectLabel>Industries</SelectLabel>
              {industries.map((ind) => (
                <SelectItem key={ind.id} value={ind.id}>
                  {ind.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {selectedIndustry && (
        <div className="space-y-2 w-[400px]">
          <Label htmlFor="subIndustry">Specialization</Label>
          <Select
            onValueChange={(value) => setValue((prev)=>({...prev, "subIndustry": value}))}
          >
            <SelectTrigger id="subIndustry">
              <SelectValue placeholder="Select your specialization" />
            </SelectTrigger>
            <SelectContent className="select-content w-[400px] cursor-pointer">
              <SelectGroup>
                <SelectLabel>Specializations</SelectLabel>
                {selectedIndustry?.subIndustries.map((sub) => (
                  <SelectItem key={sub} value={sub}>
                    {sub}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
      <Button size="lg" className="btn ml-4" onClick={()=>handleSearch(value.subIndustry)}>Search</Button>
    </div>
  );
}

export default JobInsightsInputs;