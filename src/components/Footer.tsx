import React from 'react'

export const Footer = () => {
  return (
    <div className="md:px-16 lg:px-24 px-5 pt-16 pb-5 flex flex-col md:flex-row justify-between bg-beige">
      <div className="w-full md:max-w-[20rem] mr-10 mb-5">
        <h1 className="font-bold text-lg">IndieBrew</h1>
        <p>With IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews and much more.</p>
        <p className="mt-5">{`Made with ${'<3'} in the UK.`}</p>
      </div>
      <div className="flex justify-around flex-wrap">
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Sitemap</li>
          <li>Homepage</li>
          <li>Pricing</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Resources</li>
          <li>Support</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Company</li>
          <li>About</li>
          <li>Customers</li>
          <li>Blog</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2">Portfolios</li>
          <li>HackerNews</li>
          <li>Reddit</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  )
}
