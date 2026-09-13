import React, { useRef, useState } from 'react';

const timepass = () => {
  return (
    <div className='timepass' >timepass</div>
  )
}

export default timepass


function Profile({ username, age }) {
  return (
    <div>
      <h2>{username}</h2>
      <p>Age : {age}</p>
    </div>
  )
}

function Profile(props) {
  props.username = "Changed" // ❌ Not allowed
  return <h2>{props.username}</h2>
}

function Profile(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>{props.age}</p>
      <button onClick={() => alert('Clickd!')}>Click Me</button>
    </div>
  )
}

function App() {

  function handleClick() {
    alert('Button Clicked')
  }

  return (
    <Profile username="avinash" age={200} />
  )
}
function App() {
  function handleClick(name) {
    alert('Button Clicked')
  }

  return <button onClick={() => handleClick("Jerry")}>Click Me</button>;
}
function App() {
  function handleClick(name) {
    alert(`Hello ${name}`)
  }
  return <button onClick={() => handleClick("Jerry")}>Click Me</button>;
}


function InputBox() {
  function handleChange(e) {
    console.log(e.target.value); //Access input value
  }
  return <input type="text" onChange={handleChange} />;
}


function handleChange(e) {
  setTimeout(() => console.log(e.target.value), 1000);
  // e.target.value is null
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  return (
    <button> Count : {count}</button>
  );
}


const Form = () => {
  function handleSubmit(e) {
    e.preventDefault(); // prevent form reload
    console.log("Form Submitted");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}

function Parant() {
  function handleParant() {
    alert('Parant Clicked')
  }

  function handleChild() {
    e.stopPropagation(); // stops bubbling
    alert('Child Clicked')
  }

  return (
    <div>
      <button onClick={fun()}>Click Child</button>
    </div>
  );
}

function App() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <h1>Wellcome back!</h1>
  }
  return <h1>Please log in</h1>
}

function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <h1>Wellcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
}

consition ? <ComponentA /> : <ComponentB />
consition && <ComponentA />

function Notification({ hasMsg }) {
  return (
    <div>
      {hasMsg && <p>You have new messages!</p>}
    </div>
  )
}

1. Basic Props(Strings, Numbers, Booleans)

function Greeting({ name, age, isStudent }) {
  return (
    <h2>
      {name} is {age} years old. Student: {isStudent ? "Yes" : "No"}
    </h2>
  );
}

function App() {
  return <Greeting name="Manas" age={21} isStudent={true} />;
}


2. Props as Objects

function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

function App() {
  const userobj = { name: "Manas", age: 21 };
  return <Profile user={userObj} />;
}

3. Props as Arrays

function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={1}>{item}</li>
      ))} ;
    </ul>
  )
}
function App() {
  return <List items={["Apple", "Banana", "Mango"]} />;
}

4. Props as Functions (Callback Functions)

Used for event handling or passing logic.

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
function App() {
  const handleClick = () => alert("Button Clicked!"); return <Button onClick={handleClick} />;
}


5. Props as JSX Elements

Passing React elements.

function Card({ content }) {
  return <div className="card">{content}</div>;
}

function App() {
  return <Card content={<h2>Hello World</h2>} />;
}

6. Props as Children (Special Prop)

Anything between component tags becomes props.children.

function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>Welcome to my site</h1>
      <p>This is content inside children.</p>
    </Layout>
  );
}


7. Default Props

You can define default values if a prop is not passed.

function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: "Click Me"
};

8. Spread Operator for Props

Pass all props at once.

function Profile({ name, age }) {
  return <h2>{name} is {age}</h2>;
}

function App() {
  const user = { name: "Manas", age: 21 };
  return <Profile {...user} />;
}



function Dashboard({ option }) {
  let content;

  if (option === "a") {
    content = <ComponentA />;
  }
  else if (option === "b") {
    content = <ComponentB />;
  } else {
    content = <ComponentC />;
  }
  return <div>{content}</div>;
}

function Button({ isActive }) {
  return (
    <button className={isActive ? "btn-active" : "btn-inactive"}>
      Click Me
    </button>
  );
}



Conditional Rendering with State

import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>This is a secret message!</p>}
    </div>
  )
}
// Returning null(Hide Completely)

function Alert({ show }) {
  if (!show) return null;
  return <div className="alert">This is an alert!</div>;
}

// Returning null means "render nothing".

// Common in modal or popup components.



// Advanced: Conditional Components

function Layout({ type }) {
  const Component = type === "home" ? HomePage : AboutPag
  return <Component />;
}

// Using switch Statement

// When you have 3 or more conditions, if/else becomes messy. That's when switch makes your code cleaner and more readable.

function StatusMessage({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data loaded successfully </p>;
    case "error":
      return <p>Something went wrong</p>;
    default:
      return <p>Idle state...</p>;
  }
}


// Using Mapping(Object Lookup)

// For even more elegant and scalable conditional rendering - you can use object maps to store your UI patterns.

function StatusMessage({ status }) {
  const statusMap = {
    loading: <p>Loading...</p>,
    success: <p>Data loaded successfully </p>,
    error: <p>Something went wrong X</p>,
  };

  return statusMap[status] || <p>Idle state...</p>;
}


function NameList() {
  const name = ["Arpit", "Jerry", "Muskan"];
  return (
    <ul>
      {name.map((name, index) => {
        <li key={index}>{name}</li>
      })}
    </ul>
  )
}



const users = [
  { id: 1, name: "Manas", age: 21 },
  { id: 2, name: "Muskan", age: 19 },
  { id: 3, name: "Mehek", age: 18 }
];

<ul>
  {users.map(user => (
    <li key={user.id}>
      {user.name} - {user.age} years old
    </li>
  ))}
</ul>


const data = [
  ["HTML", "CSS", "JavaScript", "React"], ["Node", "MongoDB", "SQL"]
];
< div >
  {data.map((group, i) => (
    <ul key={i}>
      {group.map((item, j) => (<li key={j}>{item}</li>))}
    </ul>
  ))}
</div >


// Rendering Components with.map()
// 
// Instead of inline JSX, create a reusable component.

function UserCard({ user }) {
  return <li>Name is {user.name} and age is {user.age}</li>;
}

function UserList() {
  const users = [
    { id: 1, name: "Manas", age: 21 },
    { id: 2, name: "Muskan", age: 19 },
  ];
  return (
    <ul>
      {users.map(user => <UserCard key={user.id} user={user} />
      )}
    </ul>
  );
}




// Conditional Rendering with Mapping

// You can also conditionally show elements during map

{
  users.map(user =>
    user.age > 18 && <p key={user.id}>{user.name}</p>
  )
}

{
  users.map(user => (
    <p key={user.id}>{user.age > 18 ? user.name : "Too young"}</p>
  ))
}


// Common Beginner Mistakes

// Mistake 1: Forgetting return when using curly braces in arrow function:

// Wrong
{ items.map(item => { <li>{item}</li> }) }
// Correct
{ items.map(item => <li>{item}</li>) }
// OR
{ items.map(item => { return <li>{item}</li>; }) }
{/* 
Mistake 2: Not using key prop.

Mistake 3: Mutating the original array before mapping.

Mistake 4: Returning multiple root elements inside .map() without wrapping (use <React.Fragment>) */}


const [name, setName] = useState("");

return (
  <div>
    <input
      type="text"
      value={name}
      onChange={() => setName(event.target.value)}
      placeholder="Enter your name" />
  </div>
);



const inputRef = useRef();

function handleSubmit() {
  alert("Input value:" + inputRef.current.value);
}

return (
  <div>
    <input ref={inputRef} type="text" placeholder="Type here..." />
    <button onClick={handleSubmit}>Submit</button>
  </div>
);


const [formData, setFormData] = useState({
  name: "",
  email: ""
});

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

return (
  <form>
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
    />
    <h3>{formData.name} - {formData.email}</h3>
  </form>
);

const [gender, setGender] = useState("");
<label>
  <input type="radio"
    name='gender'
    value={gender}
    checked={gender === "Male"}
    onChange={() => setGender(e.target.checked)}
  />
  Male
</label>


const [selectedLang, setSelectedLang] = useState("");
const languages = ["JavaScript", "Python", "C++", "Java"];

{
  languages.map(lang => (
    <label key={lang} style={{ display: "block" }}>
      <input
        type="radio"
        name="language"
        value={lang}
        checked={selectedLang === lang}
        onChange={e => setSelectedLang(e.target.value)}
      />
      {lang}
    </label>
  ))
}



const payments = [
  { id: "UPI", info: "Instant transfer via UPI apps" },
  { id: "Card", info: "Pay using credit or debit card" },
  { id: "COD", info: "Pay when the order arrived" }
];


// Basic Single Select

const [language, setLanguage] = useState("");

<select value={language} onChange={(e) => setLanguage(e.target.value)}>
  <option value="">-- Select --</option>
  <option value="JavaScript">JavaScript</option>
  <option value="Python">Python</option>
  <option value="C++">C++</option>
  <option value="Java">Java</option> A
</select>


// Dynamic Dropdown(Using.map())

// If you have many options, it's best to render them dynamically from an array.

const [country, setCountry] = useState("");
const countries = ["India", "USA", "Canada", "Japan"];

<select value={country} onChange={e => setCountry(e.target.value)}>
  <option value="">-- Select Country --</option>
  {countries.map(c => (
    <option key={c} value={c}>
      {c}
    </option>
  ))}
</select>




// Dependent Select(Cascading)

// second dropdown's options depend on which specific item is selected in the first dropdown also called a dependent or cascading select.

// For Example: When a user selects a country, the city dropdown should show different cities for that particular country.And maybe, for some countries, even custom special cities or messages.

[

  India: ["Delhi", "Mumbai", "Kolkata", "Bengaluru"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
  Germany: ["Berlin", "Munich", "Hamburg"],
]


{/* Basic Syntax: */ }

{

  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div >
  );
}



{
  const videoRef = useRef()

  function playVideo() {
    videoRef.current.play();
  }
}

{
  //   2. Storing Mutable Values(Without Re - render)

  // Sometimes you want to store data between renders without triggering updates.

  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div>
      <h3>Count: {count}</h3>
      <h4>Render Count: {renderCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );

}

{
  //   JSON

  // JSON stands for JavaScript Object Notation.

  // It's a lightweight data format used to store and exchange data like sending data between a browser and a server.

  // JavaScript Object
  const user = {
    name: "Manas",
    age: 25,
    isStudent: true
  };

  // JSON version (as a string)
  const jsonUser = {
    "name": "Manas",
    "age": 25,
    "isStudent": true
  };
}

{
  // Basic Example

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);
}


{
  What is Axios 

❑ External library 
❑ Clean syntax 
❑ Automatic JSON parsing 
❑ Better error handling 
❑ Interceptors(request / response) 
❑ Timeouts inside 
❑ Upload / Download progress support

}


{
  Installation

  1 // installation
  2 npm install axios

Basic Example

  useEffect(() => {
    axios.get("https:// jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
}

{
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

  npm install axios
}

{

  //   Axios Configuration

  // These are the available config options for making requests.

  const config = {
    url: './users',
    method: 'get', //default
    baseURL: 'https://some-domain.com/api/',
    params: {
      id: 1
    },
    data: {
      name: 'Manas',
      age: 21,
    },
    responseType: 'json',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }

  axios(config)

  //   Note:

  // timeout is by default 0 which means no time limit.

  // some headers are also by default set, so you don't need to mention such headers. (you can see in browser network tab)

  // Only the url is required.Requests will default to GET if method is not specified.

}

{

  //   Interceptors

  // Request ke beech me kuch inject karna.

  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}'`;
    return config;
  });

  axios.interceptors.response.use(
    res => res, err => {
      console.log("Global Error:", err);
      return Promise.reject(err);
    }
  );

}

{

  Timeouts

  axios.get(url, { timeout: 5000 })
    .catch(err => console.log("Timeout Error"));

File Upload Progress

  axios.post(url, formData, {
    onUploadProgress: (progress) => {
      console.log((progress.loaded / progress.total) * 100);
    }
  });

}


{

  // Using Axios instance

  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });

  const fetchUsers = async () => {
    const { data } = await api.get("/users");
    setUsers(data);
  };

  // You can mention baseURL, default headers, timeout, auth token and common configuration, etc

}

{
  // Basic Syntax of a HOC

  const withRedBackground = (WrappedComponent) => {
    return (props) => {
      return (
        <div style={{ backgroundColor: "red", padding: "20px" }}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
  const EnhancedComponent = withBlueBackground(MyComponent);
}


{
  // 5. createSlice()

  // Creates a slice of state along with its reducers and actions.

  const counterSlice = createSlice({
    name: "counter",

    initialState: {
      value: 0
    },

    reducers: {
      increment: (state) => {
        state.value += 1;
      }
    }
  });

  // 6. configureStore()

  // Creates the Redux store.

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer
    }
  });

  // Store = Central place where the application's global state is stored.

  // 7. useSelector()

  // Used to read data from the Redux store.

  const count = useSelector(
    (state) => state.counter.value
  );

  // 8. useDispatch()

  // Used to dispatch actions.

  const dispatch = useDispatch();

  dispatch(increment());

  // 9. createAsyncThunk()

  // Used for asynchronous operations, especially API requests.

  const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
      const response = await axios.get("/api/products");
      return response.data;
    }
  );

  // It commonly handles three states:

  // pending
  //    ↓
  // fulfilled / rejected


}