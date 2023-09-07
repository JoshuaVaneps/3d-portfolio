import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// this adds functionality to our contact form
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [blurredFields, setBlurredFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field has been blurred (clicked into and out of without entering text)
    if (!value && blurredFields[name] === false) {
      // Field has been blurred without text, show error message
      const updatedBlurredFields = { ...blurredFields, [name]: true };
      setBlurredFields(updatedBlurredFields);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleMouseEvent = (e) => {
  //   e.persist();
  //   // Check if the input value is empty
  //   if (e.target.value.trim() === "") {
  //     e.target.style.color = "#D03D56";
  //     e.target.value = "*this field is required*";

  //     setTimeout(() => {
  //       e.target.style.color = "";
  //       e.target.value = "";
  //     }, 2000);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElement = formRef.current;
    const errorMessages = formElement.querySelectorAll(".error-message");

    // Check if any required field is empty
    const hasEmptyFields = Object.values(form).some((value) => value === "");

    if (hasEmptyFields) {
      // There are empty fields, show error messages for fields that have been blurred
      Object.keys(blurredFields).forEach((fieldName) => {
        if (blurredFields[fieldName]) {
          errorMessages[fieldName].style.display = "block"; // Show error message
        }
      });

      // Focus on the first invalid field
      const firstInvalidField = formElement.querySelector(":invalid");
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // If all required fields are filled, hide error messages
    Object.keys(blurredFields).forEach((fieldName) => {
      errorMessages[fieldName].style.display = "none"; // Hide error messages
    });

    setLoading(true);

    emailjs
      .send(
        // service id
        "service_cqh32ue",
        // template id
        "template_mdoont9",
        {
          from_name: form.name,
          to_name: "Joshua Vaneps",
          from_email: form.email,
          to_email: "joshuavaneps@yahoo.com",
          message: form.message,
        },
        // public key
        "vQQH70qDYKpC1O0tc"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] super-gradient p-[1px] rounded-[20px]  shadow-card"
      >
        <div className="bg-tertiary/70 rounded-[20px] py-5 px-12 ">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={() =>
                  setBlurredFields({ ...blurredFields, name: true })
                }
                placeholder="What's your name?"
                className="bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <span
                className="error-message"
                style={{
                  display:
                    blurredFields.name && form.name.trim() === ""
                      ? "block"
                      : "none",
                }}
              >
                This field is required
              </span>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() =>
                  setBlurredFields({ ...blurredFields, email: true })
                }
                placeholder="What's your email address?"
                pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                title="Please enter a valid email address"
                className="bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <span
                className="error-message"
                style={{
                  display:
                    blurredFields.email &&
                    (form.email.trim() === "" ||
                      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                        form.email
                      ))
                      ? "block"
                      : "none",
                }}
              >
                This field is required and must be a valid email address
              </span>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={() =>
                  setBlurredFields({ ...blurredFields, message: true })
                }
                placeholder="Leave a message below"
                className="bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <span
                className="error-message"
                style={{
                  display:
                    blurredFields.message && form.message.trim() === ""
                      ? "block"
                      : "none",
                }}
              >
                This field is required
              </span>
            </label>

            <button
              type="submit"
              className="bg-tertiary/80 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
