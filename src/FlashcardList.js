import React from 'react'
import FLashcard from './FLashcard'

export default function FlashcardList( { flashcards} ) {
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard => {
            return <FLashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}
