import type { NextPage } from 'next';

const Home: NextPage = () => {
  const myAccounts = [
    { service: 'Linkedin', url: 'https://www.linkedin.com/in/hi6okuni' },
    { service: 'Github', url: 'https://github.com/hi6okuni' },
    { service: 'Twitter', url: 'https://twitter.com/hi6okuni' },
    { service: 'Instagram', url: 'https://www.instagram.com/hi6okuni' },
  ];

  return (
    <div className="h-screen bg-slate-800	flex justify-center items-center">
      <div className="relative w-36 h-36 bg-gradient-to-tr from-emerald-100 via-lime-100 to-emerald-50 rounded-md">
        <div className="absolute top-4 right-6">
          <span className="font-inter text-slate-700">hi6okuni</span>
        </div>
        <div className="absolute bottom-3 left-4">
          <span className="font-inter text-slate-700">software engineer</span>
        </div>
      </div>
      <div className="pl-6 w-36 h-36 flex flex-col justify-between font-inter">
        {myAccounts.map((account, index) => (
          <a
            target="_blank"
            href={account.url}
            rel="noreferrer"
            key={`${account}-${index}`}
            className="text-emerald-100 hover:text-emerald-300 transition duration-300 ease-in-out"
          >
            {account.service}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
