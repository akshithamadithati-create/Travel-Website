
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  travellerFormSchema,
  type TravellerFormData,
} from "./travellerSchema";

const emptyTraveller = {
  fullName: "",
  email: "",
  phone: "",
  passportNumber: "",
  passportExpiry: "",
};

function TravellerDetailsForm() {
  const [submittedData, setSubmittedData] =
    useState<TravellerFormData | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TravellerFormData>({
    resolver: zodResolver(travellerFormSchema),
    defaultValues: {
      travellers: [{ ...emptyTraveller }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "travellers",
  });

  const handleTravellerCount = (count: number) => {
    if (count > fields.length) {
      for (let i = fields.length; i < count; i++) {
        append({ ...emptyTraveller });
      }
    } else if (count < fields.length) {
      for (let i = fields.length - 1; i >= count; i--) {
        remove(i);
      }
    }

    setSubmittedData(null);
  };

  const onSubmit = (data: TravellerFormData) => {
    setSubmittedData(data);
  };

  return (
    <div className="traveller-form">
      <h2>Traveller Details</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="travellerCount">
          Number of Travellers
        </label>

        <select
          id="travellerCount"
          value={fields.length}
          onChange={(e) =>
            handleTravellerCount(Number(e.target.value))
          }
        >
          {[1, 2, 3, 4, 5, 6].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>

        {fields.map((field, index) => (
          <div className="traveller-card" key={field.id}>
            <h3>Traveller {index + 1}</h3>

            <label htmlFor={`fullName-${index}`}>
              Full Name
            </label>
            <input
              id={`fullName-${index}`}
              {...register(`travellers.${index}.fullName`)}
              aria-invalid={!!errors.travellers?.[index]?.fullName}
              aria-describedby={`fullName-error-${index}`}
            />
            <p id={`fullName-error-${index}`} className="error">
              {errors.travellers?.[index]?.fullName?.message}
            </p>

            <label htmlFor={`email-${index}`}>Email</label>
            <input
              id={`email-${index}`}
              type="email"
              {...register(`travellers.${index}.email`)}
              aria-invalid={!!errors.travellers?.[index]?.email}
              aria-describedby={`email-error-${index}`}
            />
            <p id={`email-error-${index}`} className="error">
              {errors.travellers?.[index]?.email?.message}
            </p>

            <label htmlFor={`phone-${index}`}>Phone Number</label>
            <input
              id={`phone-${index}`}
              type="tel"
              {...register(`travellers.${index}.phone`)}
              aria-invalid={!!errors.travellers?.[index]?.phone}
              aria-describedby={`phone-error-${index}`}
            />
            <p id={`phone-error-${index}`} className="error">
              {errors.travellers?.[index]?.phone?.message}
            </p>

            <label htmlFor={`passportNumber-${index}`}>
              Passport Number
            </label>
            <input
              id={`passportNumber-${index}`}
              {...register(`travellers.${index}.passportNumber`)}
              aria-invalid={!!errors.travellers?.[index]?.passportNumber}
              aria-describedby={`passport-error-${index}`}
            />
            <p id={`passport-error-${index}`} className="error">
              {errors.travellers?.[index]?.passportNumber?.message}
            </p>

            <label htmlFor={`passportExpiry-${index}`}>
              Passport Expiry Date
            </label>
            <input
              id={`passportExpiry-${index}`}
              type="date"
              {...register(`travellers.${index}.passportExpiry`)}
              aria-invalid={!!errors.travellers?.[index]?.passportExpiry}
              aria-describedby={`expiry-error-${index}`}
            />
            <p id={`expiry-error-${index}`} className="error">
              {errors.travellers?.[index]?.passportExpiry?.message}
            </p>
          </div>
        ))}

        <button type="submit">Submit Traveller Details</button>
      </form>

      {submittedData && (
        <div className="traveller-summary">
          <h2>Traveller Details Submitted Successfully!</h2>

          {submittedData.travellers.map((traveller, index) => (
            <div key={index}>
              <h3>Traveller {index + 1}</h3>
              <p>Name: {traveller.fullName}</p>
              <p>Email: {traveller.email}</p>
              <p>Phone: {traveller.phone}</p>
              <p>Passport: {traveller.passportNumber}</p>
              <p>Expiry: {traveller.passportExpiry}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TravellerDetailsForm;
