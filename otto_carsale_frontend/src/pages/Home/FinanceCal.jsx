import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const FinanceCal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [mamount, setmAmount] = React.useState("");
  const [err, setErr] = React.useState("");

  const registerHandle = (e) => {
    err && setErr("");
    e.preventDefault();

    const amount = e.target[0].value;
    const downPayment = e.target[1].value;
    const interestRate = e.target[2].value;
    const loanTerms = e.target[3].value;

    if (
      !amount || !downPayment || !interestRate || !loanTerms
    ) {
      handleOpen();
      return;
    } else {
      if (parseFloat(downPayment) > parseFloat(amount)) {
        setErr("Down Payment cannot be greater than the amount");
        return;
      } else if (interestRate > 100) {
        setErr("Interest Rate cannot be greater than 100");
        return;
      } else {
        const monthlyAmount =
          ((amount - downPayment) * (interestRate / 100)) / loanTerms;
        const monthlyfullAmount =
          monthlyAmount + (amount - downPayment) / loanTerms;
        setmAmount(monthlyfullAmount);
      }
    }
  };

  return (
    <div style={{
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 5px"
    }} className="p-5 px-5 border rounded-xl mb-10 justify-center">
      <Typography
        className="flex justify-center items-center font-normal"
        color="blue-gray"
      >
        Calculate your monthly finance payments
      </Typography>
      <Typography
        className="flex justify-center items-center my-3"
        variant="h3"
        color="green"
      >
        Finance Calculator
      </Typography>
      <Typography
        className="flex justify-center items-center font-normal pb-2"
        color="blue-gray"
      >
        Planning to buy your dream vehicle from us? Use our finance calculator
        to find out how much you can borrow and what your payments might be.
      </Typography>
      <Typography className="flex justify-center items-center" color="red">
        <span className="font-bold pt-1"> {err} </span>
      </Typography>
      <div>
        <form onSubmit={registerHandle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-36 mt-2 justify-around items-center">
            <div className="w-full p-2">
              <Input label="Amount" />
            </div>
            <div className="w-full p-2">
              <Input label="Down Payment" />
            </div>
            <div className="w-full p-2">
              <Input label="Interest Rate" />
            </div>
            <div className="w-full p-2">
              <Input label="Loan Terms" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit" className="mt-4 mb-1" size="sm">
              Calculate
            </Button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex justify-center items-center border rounded-xl border-light-green-500 w--full px-5 py-2">
          {err === "" ? (
            <div>Monthly Payment : {mamount}</div>
          ) : (
            <div>Monthly Payment : <span style={{ color: "red" }}>
            Try again
          </span>
          </div>
          )}
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          handler={handleOpen}
          size="xs"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Error</DialogHeader>
          <DialogBody>
            Please fill all the fields to calculate the monthly payment
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default FinanceCal;
