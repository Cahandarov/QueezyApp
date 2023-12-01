// import { Button } from "semantic-ui-react";

// const ModalButtons = () => (
//   <Button.Group>
//     <Button className="w-20 h-7 border flex items-center justify-center rounded-lg">
//       One
//     </Button>
//     <Button>Two</Button>
//     <Button>Three</Button>
//     <Button>Four</Button>
//   </Button.Group>
// );

// export default ModalButtons;

// import { Button } from "semantic-ui-react";

// const ModalButtons = () => (
//   <Button.Group>
//     <Button>Cancel</Button>
//     <Button.Or />
//     <Button positive>Save</Button>
//   </Button.Group>
// );

// export default ModalButtons;

"use client";

import { Button } from "flowbite-react";

function ModalButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Default</Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  );
}

export default ModalButtons;
