import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_h2ezdke",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ho8vmvg",
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "GIYW9S99-fqnOA9q-"
    );
    return response;
  } catch (error) {
    throw error;
  }
};
