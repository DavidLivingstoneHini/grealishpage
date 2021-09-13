function FeatureItem({ title, text }) {
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-medium">{title}</div>
      <p className="text-lg lg:text-[22px] text-pirGray-500 leading-snug my-3 lg:mt-6">{text}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-7 mt-10 lg:mt-24 mb:14 lg:mb-40 max-w-520 lg:max-w-none mx-auto">
      <FeatureItem
        title="No Cookie Banner"
        text="Get rid of those annoying cookie banners. Grealish does not 
        track users across websites and devices 
        like traditional web analytics."
      />
      <FeatureItem
        title="Own Your Data"
        text="Anything we collect belongs to 
        you, it will never be shared or sold. 
        Export your data to CSV or make 
        use of our API to work with it in 
        your tools."
      />
      <FeatureItem
        title="We Are Independent"
        text="Grealish is completely self-funded, 
        based and hosted in Ghana 
        under strict privacy laws."
      />
      <FeatureItem
        title="Unlimited Websites"
        text="Add as many websites as you like. 
        Our pricing model is based on the 
        total number of page views, check 
        our pricing to learn more."
      />
      <FeatureItem
        title="Regular Email Reports"
        text="Receive the most important 
        numbers in your inbox or send 
        them to multiple recipients 
        automatically."
      />
    </div>
  );
}
