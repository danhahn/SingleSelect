import React from "react";
import "./styles.css";
import SingleSelect from "./components/SingleSelect/SingleSelect";

const data = [
  "George Washington",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "James Monroe",
  "John Quincy Adams",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler",
  "James K. Polk",
  "Zachary Taylor",
  "Millard Fillmore",
  "Franklin Pierce",
  "James Buchanan",
  "Abraham Lincoln",
  "Andrew Johnson",
  "Ulysses S. Grant",
  "Rutherford B. Hayes",
  "James Garfield",
  "Chester A. Arthur",
  "Grover Cleveland",
  "Benjamin Harrison",
  "Grover Cleveland",
  "William McKinley",
  "Theodore Roosevelt",
  "William Howard Taft",
  "Woodrow Wilson",
  "Warren G. Harding",
  "Calvin Coolidge",
  "Herbert Hoover",
  "Franklin D. Roosevelt",
  "Harry S. Truman",
  "Dwight D. Eisenhower",
  "John F. Kennedy",
  "Lyndon B. Johnson",
  "Richard M. Nixon",
  "Gerald R. Ford",
  "James Carter",
  "Ronald Reagan",
  "George H. W. Bush",
  "William J. Clinton",
  "George W. Bush",
  "Barack Obama",
  "Donald J. Trump"
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

export default function App() {
  const [state, setState] = React.useState("");

  const onChange = data => {
    setState(data.selectedItem);
  };

  return (
    <div className="App">
      <h1>The best single select ever?</h1>
      <p> State: {state}</p>
      <SingleSelect data={states} onChange={onChange} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        quod voluptatum tempore fugiat eveniet minima atque id facilis iure,
        rerum hic reiciendis nihil. Voluptates maxime iure ut ex, earum nobis
        ipsa eum accusamus rem consectetur rerum magni expedita minus quisquam
        at aspernatur fugiat suscipit beatae. Sapiente ad eius reprehenderit vel
        optio voluptatibus velit, non corporis repellat necessitatibus? Velit
        unde corporis atque nisi dolorem optio omnis dignissimos nemo maiores,
        voluptatem itaque ab non ratione voluptas hic, vitae corrupti
        doloremque, eligendi ipsa. Deserunt ducimus, beatae eos inventore,
        voluptatum, sint fugit provident libero ad saepe ea sit consectetur
        illum dicta iste nulla quam!
      </p>
      <p>
        Sunt, non a. Quos enim ut similique, fugiat sit a suscipit nulla sunt
        velit quod rerum maiores ipsam vel tenetur illo sint laborum cupiditate
        quasi porro iusto ab? Dolorem maiores facere aliquam. Nostrum, error
        sapiente expedita aliquid eligendi asperiores necessitatibus nisi fugiat
        voluptates deserunt aspernatur repellat explicabo labore cumque nulla
        architecto culpa ipsa corporis laborum enim natus assumenda. Saepe
        omnis, quasi provident unde dolore animi sequi eaque officia a deserunt,
        itaque vitae odit dolorem eos eum est tempora reiciendis dolor maiores
        pariatur excepturi consectetur impedit odio aut. Atque dolores quam quia
        ratione, tenetur ea quaerat eius amet sequi itaque autem!
      </p>
      <p>
        Praesentium adipisci, a distinctio qui aspernatur omnis. Molestiae eos
        sed pariatur perspiciatis commodi. Suscipit quae placeat officiis
        repellat, at repudiandae recusandae maiores perspiciatis consequuntur
        deleniti amet ratione ducimus, rem animi, doloribus consectetur
        reprehenderit accusantium saepe! Enim ipsam perferendis tenetur quo rem
        temporibus. Harum, magni quia! Magni cum hic beatae placeat possimus
        minus nemo voluptas tempore? Quia nam minima deleniti dolorum fuga!
        Error dolor officia odit autem laborum sint officiis iure molestiae
        aspernatur illum voluptatem ipsa perspiciatis expedita aperiam modi
        nemo, porro vitae debitis minus. Esse dolor neque fuga consequatur
        excepturi suscipit voluptatibus debitis cumque, facilis unde accusamus
        assumenda cupiditate tempore?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        quod voluptatum tempore fugiat eveniet minima atque id facilis iure,
        rerum hic reiciendis nihil. Voluptates maxime iure ut ex, earum nobis
        ipsa eum accusamus rem consectetur rerum magni expedita minus quisquam
        at aspernatur fugiat suscipit beatae. Sapiente ad eius reprehenderit vel
        optio voluptatibus velit, non corporis repellat necessitatibus? Velit
        unde corporis atque nisi dolorem optio omnis dignissimos nemo maiores,
        voluptatem itaque ab non ratione voluptas hic, vitae corrupti
        doloremque, eligendi ipsa. Deserunt ducimus, beatae eos inventore,
        voluptatum, sint fugit provident libero ad saepe ea sit consectetur
        illum dicta iste nulla quam!
      </p>
      <p>
        Sunt, non a. Quos enim ut similique, fugiat sit a suscipit nulla sunt
        velit quod rerum maiores ipsam vel tenetur illo sint laborum cupiditate
        quasi porro iusto ab? Dolorem maiores facere aliquam. Nostrum, error
        sapiente expedita aliquid eligendi asperiores necessitatibus nisi fugiat
        voluptates deserunt aspernatur repellat explicabo labore cumque nulla
        architecto culpa ipsa corporis laborum enim natus assumenda. Saepe
        omnis, quasi provident unde dolore animi sequi eaque officia a deserunt,
        itaque vitae odit dolorem eos eum est tempora reiciendis dolor maiores
        pariatur excepturi consectetur impedit odio aut. Atque dolores quam quia
        ratione, tenetur ea quaerat eius amet sequi itaque autem!
      </p>
      <p>
        Praesentium adipisci, a distinctio qui aspernatur omnis. Molestiae eos
        sed pariatur perspiciatis commodi. Suscipit quae placeat officiis
        repellat, at repudiandae recusandae maiores perspiciatis consequuntur
        deleniti amet ratione ducimus, rem animi, doloribus consectetur
        reprehenderit accusantium saepe! Enim ipsam perferendis tenetur quo rem
        temporibus. Harum, magni quia! Magni cum hic beatae placeat possimus
        minus nemo voluptas tempore? Quia nam minima deleniti dolorum fuga!
        Error dolor officia odit autem laborum sint officiis iure molestiae
        aspernatur illum voluptatem ipsa perspiciatis expedita aperiam modi
        nemo, porro vitae debitis minus. Esse dolor neque fuga consequatur
        excepturi suscipit voluptatibus debitis cumque, facilis unde accusamus
        assumenda cupiditate tempore?
      </p>
      <SingleSelect
        data={data}
        onChange={onChange}
        displayNumber={10}
        buttonText="Select President"
      />
    </div>
  );
}
