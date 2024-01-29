import { SignUp } from "@clerk/nextjs";

const appearance = {
  elements: {
    card: "bg-gray-800 rounded-lg text-white",
    footerActionLink: "text-green-200 hover:text-green-100",
    formButtonPrimary:
      "bg-green-300 text-green-900 hover:bg-green-200 text-sm normal-case",
  },
};

export default function Page() {
  return <SignUp appearance={appearance} />;
}
