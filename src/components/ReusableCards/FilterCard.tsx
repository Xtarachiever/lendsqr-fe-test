import Input from "../ReusableInputs/Input";
import Button from "../ReusableButtons/Button";
import Select from "../ReusableSelect/Select";
import useFilterHook from "../../hooks/FilterFormHook";


type formProps ={
    organization:string
    phoneNumber:string
}

const FilterCard = ({ data, handleFilter, handleReset }: any) => {
  const organizations = ["Irorun", "Lendsqr"];
  const statuses = data?.map((item: { statuses: string[] }) => item?.statuses);

  const {
    email,
    phoneNumber,
    date,
    handleSubmit,
    handleValueChange,
    username,
    reset
  } = useFilterHook();

  const onSubmit = (values:formProps) =>{
    handleFilter(values)
    // console.log(values)
  }



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="filter-wrapper">
          <div className="filter-div">
            <Select
              defaultValue="Select"
              value="Organization"
              values={organizations}
              name="Organization"
              form={true}
              onChange={(e) =>handleValueChange('organization',e.target.value)}     
            />
            <div>
              <p>Username</p>
              <Input placeholder="User" value={username} onChange={(e) =>handleValueChange('username',e.target.value)} />
            </div>
            <div>
              <p>Email</p>
              <Input value={email} placeholder="Email" onChange={(e) =>handleValueChange('email',e.target.value)} />
            </div>
            <div>
              <p>Date</p>
              <Input
                value={date}
                placeholder="Date"
                type="date"
                onChange={(e) =>handleValueChange('date',e.target.value)}
              />
            </div>
            <div>
              <p>Phone Number</p>
              <Input
                placeholder="Phone Number"
                value={phoneNumber}
                type="text"
                onChange={(e) =>handleValueChange('phoneNumber',e.target.value)}
              />
            </div>
            <Select
              defaultValue="Select"
              values={statuses[0]}
              value="Status"
              name="Status"
              form={true}
              onChange={(e) =>handleValueChange('status',e.target.value)}            
              />
            <div className="buttons">
              <Button
                name="Reset"
                type="button"
                onClick={() => handleReset(reset)}
                style={{ padding: "10px", width: "100%" }}
              />
              <Button name="Filter" type="submit" style={{ padding: "10px" }} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterCard;
