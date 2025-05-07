import Footer from "../components/Footer";
import Post from "../components/Post";

const BlogsPage = () => {
  const postData = [
    {
      department: "Neuro Divergence",
      title: "Neuro-divergence and mental health: the expert view",
      author: "DR AMBER JOHNSTON ",
      designation: "",
      info: `Freud and William James used medical cases to show the impact of emotion state and the unconscious mind on physical illness`,
      image:
        "https://www.healthista.com/wp-content/uploads/2024/03/Neuro-divergence-and-mental-health-MAIN.jpg",
      date: "MARCH 07, 2024",
      url: "https://www.healthista.com/neuro-divergence-and-mental-health-the-expert-view/",
    },
    {
      department: "Weight Loss ",
      title:
        "Dr Michael Mosley reveals 3 benefits of intermittent fasting – plus how to get started",
      author: "Jatin Sharma",
      designation: "",
      info: `Is breakfast the most important meal of the day or is intermittent fasting the key to a healthier you? Doctor Michael Mosley reveals three health benefits, plus how to get started `,
      image:
        "https://www.healthista.com/wp-content/uploads/2023/11/Dr-Micheal-Mosley-reveals-3-benefits-of-intermittent-fasting-plus-how-to-get-started-MAIN.jpg",
      date: "NOVEMBER 07, 2023",
      url: "https://www.healthista.com/dr-michael-mosley-reveals-3-benefits-of-intermittent-fasting-plus-how-to-get-started/",
    },
    {
      department: "Health",
      title: "10 Micro-Habits That Will Transform Your Life",
      author: "BY MEGAN MCCARTY",
      designation: "",
      info: `Here are ten of my tried-and-true micro-habits that’ll have you feeling more organized and in control in a wildly unruly world. `,
      image:
        "https://media.theeverygirl.com/wp-content/uploads/2020/07/lack-of-poc-in-wellness-the-everygirl-3.jpg",
      date: "JANUARY 5, 2023",
      url: "https://witanddelight.com/2023/01/micro-habits-transform-your-life/",
    },
    {
      department: "Pregnancy",
      title:
        "Motherhood and Mental Health: Nurturing Your Well-Being During Pregnancy",
      author: "Creekside Center",
      designation: "",
      info: `Welcoming a new life into the world is a miraculous journey filled with joy, but it’s essential to acknowledge the mental health challenges that can accompany pregnancy. Remember to prioritize your well-being as you nurture the precious life growing within. This blog post is your compass to navigate the ups and downs while expecting. Let’s dive into practical tips and strategies that empower you to nurture your mental health during pregnancy.`,
      image:
        "https://creeksideobgyn.com/wp-content/uploads/2023/12/Motherhood-and-Mental-Health-980x551.jpg",
      date: "Mar 15, 2024",
      url: "https://creeksideobgyn.com/motherhood-and-mental-health-nurturing-your-well-being-during-pregnancy/",
    },
    {
      department: "Sleep",
      title: "Try a Sleep Tracker for Better Health",
      author: "Jacquelyne Froeber",
      designation: "",
      info: `Sleep … elusive sleep. It’s a much needed, yet somehow complicated part of life, especially if you’re perimenopausal. Luckily, like so many things these days, we have technology to help us figure it out. Enter sleep trackers.`,
      image:
        "https://www.healthywomen.org/media-library/image.jpg?id=51803995&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0",
      date: "Mar 21, 2024",
      url: "https://www.healthywomen.org/your-wellness/sleep-tracker-for-better-health",
    },
    {
      department: "Blood Banking",
      title: "The Benefits to Cord Blood Banking",
      author: " Dr. Meghan A. Nichols",
      designation: "MD",
      info: `July is Cord Blood Awareness Month. There are often many questions when it comes to cord blood, its benefits, and why people choose to donate or store it. In this article you can learn more about cord blood and help make an informed decision on what to do with your own cord blood after birth.`,
      image:
        "https://www.kcobgyn.com/images/Blog/the-benefits-to-cord-blood-banking.png",
      date: "19 June 2021",
      url: "https://www.kcobgyn.com/blog/the-benefits-to-cord-blood-banking",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center container mx-auto">
        <h1 className="font-bold text-4xl text-blue-800 mt-4 mb-6">
          Welcome to Health Care Blog Page!
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {postData.map((e, i) => {
            return <Post key={i} content={e} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
