import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
const languages = ["تونسي", "عربي", "Français", "English"];
const DropdownLanguages = () => {
  const [language, setLanguage] = useState("تونسي");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ width: "110px" }} size="small">
      <Select
        sx={{
          "& fieldset":{
            display: "none",
          },
          "& svg": {
            color: "green.main",
          },
          color: "green.main",
        }}
        value={language}
        onChange={handleChange}
      >
        {languages.map((language) => (
          <MenuItem
            sx={{ color: "green.main" }}
            key={language}
            value={language}
          >
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default DropdownLanguages;
