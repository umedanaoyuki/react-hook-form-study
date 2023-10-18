import './App.css'
import {useForm} from "react-hook-form";

const App = () => {

    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    
  return (
    <div className="form-container">
        <h1>ログインフォーム</h1>
        <form>
            <label htmlFor="name">名前</label>
            <input id="name" type="text" />
            <label htmlFor="mail">メールアドレス</label>
            <input id="mail" type="email" />
            <label htmlFor="password">パスワード</label>
            <input id="password" type="password" />
            <button type="submit">送信</button>
        </form>
    </div>
  )
}

export default App
