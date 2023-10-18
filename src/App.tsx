import './App.css'

const App = () => {

  return (
    <div className="form-container">
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
