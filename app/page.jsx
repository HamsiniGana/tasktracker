import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import {Button, ButtonGroup} from "@heroui/button";
import { siteConfig } from "@/config/site";

import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
    <Link href='/tasksPage'>
      <Button variant="shadow"
              className="w-72 h-20 bg-gradient-to-r from-blue-500 to-green-600"
              >
          Click
      </Button>
    </Link>
    </>
  );
}
