import './displayQuestion.css'

function handleInput(event) {
  if (event.key === 'Enter') {
    console.log(event.target.value)
  }
}

export default function DisplayQuestion() {
  return (
    <div className="main-container">
      <div className='display-box'>
        <div className='question-text'>Question</div>
        <input className='input-answer' type="text" onKeyUp={handleInput} />
      </div>
    </div>
  )
}
