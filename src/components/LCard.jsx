import React from 'react';

const LCard = ({ imageSrc, title, description }) => {
  return (
    <section id="hashira" className="w-full h-screen flex items-center justify-start">
      <div className="max-w-7xl mt-12 bg-white shadow-2xl rounded-lg overflow-hidden flex h-[32rem] ml-4">
        <div className="w-5/12 p-2 mx-4 my-4 bg-gray-200 flex-shrink-0 rounded-lg">
          <img
            src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cd772c6-96ce-4561-aafc-e8e4d50eaa43/dfle3cd-961c063f-1b19-4916-8bec-625f583696e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljZDc3MmM2LTk2Y2UtNDU2MS1hYWZjLWU4ZTRkNTBlYWE0M1wvZGZsZTNjZC05NjFjMDYzZi0xYjE5LTQ5MTYtOGJlYy02MjVmNTgzNjk2ZTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hRlcEvdSLrN0MHS5fHBtj4yiO0h6SIIAXTxZPsyJG0s"}
            alt="Card Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-2/3 p-12">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-700 text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default LCard;
