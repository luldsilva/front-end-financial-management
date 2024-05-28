import { Link } from "react-router-dom";

interface headerProps {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

const Header = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}: headerProps) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 font-light text-center text-sm text-gray-600">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-navy-blue hover:text-medium-blue"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
