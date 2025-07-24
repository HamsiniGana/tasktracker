import { Link } from "@heroui/link";
import {Button, ButtonGroup} from "@heroui/button";
import { GithubIcon } from "@/components/icons";
import GradientText from './components/gradientText'
import AnimatedContent from './components/animatedContent'
import Nav from "./components/nav"

export default function Home() {
  return (
    <>
    <Nav/>
        <div className="flex flex-col justify-center items-center min-h-full">
        <AnimatedContent>
            <div>
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={5}
                    showBorder={false}
                    className="custom-class mb-5 text-5xl"
                    >
                    Welcome to Task Tracker!
                </GradientText>
                <h1 className="text-1xl ml-[100px] mb-5 pb-5">The perfect place to track more and stress less 😎</h1>
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
    </>
    
  );
}
