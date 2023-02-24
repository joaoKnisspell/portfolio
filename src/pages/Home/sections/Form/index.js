//React
import { useState } from "react";

//Style
import { FormContainer } from "./style";

//Form
import emailjs from "@emailjs/browser";

//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPage = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    if(name === '' || email === '' || message === ''){
      toast.warning("Preencha todos os campos!");
      setLoading(false)
    }else{
      emailjs.send("service_guwz2x6", "template_m3w5hit", templateParams, "h1TZrQZqmnqSiyMnt")
      .then((res) => {
        console.log("EMAIL ENVIADO", res.status, res.text)
        setName('');
        setEmail('');
        setMessage('');
        toast.success('Email enviado com sucesso!')
        setLoading(false)
      }, (error) => {
        console.log(error)
        setLoading(false)
      })
    }


  }

  return (
    <FormContainer>
      <ToastContainer autoClose={2000} />
      <h3 id="contact">Contato:</h3>
      <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text"  value={name}  onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            <span>Email:</span>
            <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </label>

          <label>
            <span>Mensagem:</span>
            <textarea   value={message}  onChange={(e) => setMessage(e.target.value)}/>
          </label>

          {loading ? <button type="submit">Enviando...</button> : <button type="submit">Enviar</button>}

      <input type="hidden" name="accessKey" value="df707ff7-d9f2-4c3f-80f3-4ad4ee77db4d"></input>
      <input type="hidden" name="redirectTo" value="localhost:3000/#inicio"></input>
      </form>
    </FormContainer>
  )
}

export default FormPage;