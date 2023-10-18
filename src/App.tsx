import './App.css'
import {useForm} from "react-hook-form";
import React from "react";

const App = () => {

    const { register,
        handleSubmit,
        formState: { errors},
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

  return (
    <div className="form-container">
        <h1>ログインフォーム</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">名前</label>
            <input id="name" type="text" {...register("name", {required: "名前は必須です。"})}/>
            <p>{errors.name?.message as React.ReactNode}</p>
            <label htmlFor="mail">メールアドレス</label>
            <input id="mail" type="email" {...register("mail", {required: "メールアドレスは必須です。"})}/>
            <label htmlFor="password">パスワード</label>
            <input id="password" type="password" {...register("password", {required: "パスワードは必須です。"})}/>
            <button type="submit">送信</button>
        </form>
    </div>
  )
}

export default App
