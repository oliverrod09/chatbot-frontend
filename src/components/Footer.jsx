import { Typography } from "@material-tailwind/react";
 
function Footer() {
  return (
    <footer className="w-full bg-blue-500 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x- text-center md:justify-between">
        <img src="/ISOSIA.png" alt="logo-ct" className="w-24 object-contain" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://oliverrod.website/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-pink-300 focus:text-pink-400 text-white"
            >
              About Us
            </Typography>
          </li>
          
          <li>
            <Typography
              as="a"
              href="mailto:Oliver.antonio.09gmail.com"
              color="blue-gray"
              className="font-normal transition-colors hover:text-pink-300 focus:text-pink-400 text-white"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; Oliver Rodrìguez 2023
      </Typography>
    </footer>
  );
}

export default Footer