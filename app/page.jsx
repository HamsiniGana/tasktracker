import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import {Button, ButtonGroup} from "@heroui/button";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import GradientText from './components/gradientText'
import AnimatedContent from './components/animatedContent'
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-5xl min-h-full">
        <AnimatedContent>
            <div className="text-5xl">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={5}
                    showBorder={false}
                    className="custom-class mb-5 pb-4"
                    >
                    Welcome to Task Tracker!
                </GradientText>
                <Link href='/tasksPage'>
                    <Button variant="shadow" className="w-[170px] h-[70px] bg-black border-solid border-2 text-1xl ml-[220px]">
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="custom-class"
                            >
                            Start tracking!
                        </GradientText>
                    </Button>
                </Link>
            </div>
        </AnimatedContent>
       
        
    </div>
  );
}
