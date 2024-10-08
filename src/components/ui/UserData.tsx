const users = [
    {
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      password: 'hashedPassword',
      avatar: 'alice_avatar.jpg',
      country: 'USA',
      briefInfo: 'Web Developer',
      badges: ['Bronze', 'Silver'],
      
      
      playedQuizzes: [
        {
            quizId: 1,
            category: 'Geography',
            difficulty: 'easy',
            title: 'World Capitals Quiz',
            description: 'Test your knowledge of world capitals.',
            coverImage: 'world_capitals_quiz.jpg',
            date: '2023-01-01',
            result: "Passed",
            score: 60,
            correctAnswers: 6,
            wrongAnswers: 4,
            creator: {
              firstName: 'John',
              lastName: 'Doe',
              avatar: 'john_avatar.jpg',
            },
            questions: [[
              {
                id: 1,
                type: 'Multiple',
                question: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin', 'Madrid'],
                correctAnswer: 'Paris',
                answeredOption: 'Paris',
                explanation: 'Paris is the capital of France.',
                score: 10,
                image: 'question1.jpg',
                
              },
              {
                  id: 2,
                  type: 'True and False',
                  question: 'The capital of France is Berlin.',
                  options: ['True', 'False'],
                  correctAnswer: 'False',
                  answeredOption: 'False',
                  explanation: 'Paris is the capital of France.',
                  score: 10,
                  image: 'question1.jpg',
                  
                },
                {
                  id: 3,
                  type: 'Type answer',
                  question: 'What is the capital of France?',
                  correctAnswer: 'Paris',
                  answeredOption: 'Parij',
                  explanation: 'Paris is the capital of France.',
                  score: 0,
                  image: 'question1.jpg',
                },
                {
                    id: 4,
                    type: 'Multiple',
                    question: 'What is the capital of France?',
                    options: ['Paris', 'London', 'Berlin', 'Madrid'],
                    correctAnswer: 'Paris',
                    answeredOption: 'Paris',
                    explanation: 'Paris is the capital of France.',
                    score: 10,
                    image: 'question1.jpg',
                    
                  },
                  {
                      id: 5,
                      type: 'True and False',
                      question: 'The capital of France is Berlin.',
                      options: ['True', 'False'],
                      correctAnswer: 'False',
                      answeredOption: 'False',
                      explanation: 'Paris is the capital of France.',
                      score: 10,
                      image: 'question1.jpg',
                      
                    },
                    {
                      id: 6,
                      type: 'Type answer',
                      question: 'What is the capital of France?',
                      correctAnswer: 'Paris',
                      answeredOption: 'Parij',
                      explanation: 'Paris is the capital of France.',
                      score: 0,
                      image: 'question1.jpg',
                    },
                    {
                        id: 7,
                        type: 'Multiple',
                        question: 'What is the capital of France?',
                        options: ['Paris', 'London', 'Berlin', 'Madrid'],
                        correctAnswer: 'Paris',
                        answeredOption: 'Paris',
                        explanation: 'Paris is the capital of France.',
                        score: 10,
                        image: 'question1.jpg',
                        
                      },
                      {
                          id: 8,
                          type: 'True and False',
                          question: 'The capital of France is Berlin.',
                          options: ['True', 'False'],
                          correctAnswer: 'False',
                          answeredOption: 'False',
                          explanation: 'Paris is the capital of France.',
                          score: 10,
                          image: 'question1.jpg',
                          
                        },
                        {
                          id: 9,
                          type: 'Type answer',
                          question: 'What is the capital of France?',
                          correctAnswer: 'Paris',
                          answeredOption: 'Parij',
                          explanation: 'Paris is the capital of France.',
                          score: 0,
                          image: 'question1.jpg',
                        },
                        {
                            id: 10,
                            type: 'Multiple',
                            question: 'What is the capital of France?',
                            options: ['Paris', 'London', 'Berlin', 'Madrid'],
                            correctAnswer: 'Paris',
                            answeredOption: 'Paris',
                            explanation: 'Paris is the capital of France.',
                            score: 10,
                            image: 'question1.jpg',
                            
                          },
               
            ],], 
            
          },
      ],

      matches: [
        {
          firstname: 'John',
          lastname: 'Smith',
          date: '2023-01-05',
          result: 'Won',
        },
        {
          firstname: 'Josua',
          lastname: 'King',
          date: '2023-03-05',
          result: 'Lost',
        },
        
      ],
      friends : [
        {
          Name: "John",
          lastName: " Smith",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 107, gainedDate: "12.01.2023 17:43" },
            { point: 207, gainedDate: "12.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
          ],
        },
        {
          firstName: "Patrick",
          lastName: " Johnson",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 107, gainedDate: "12.01.2023 17:43" },
            { point: 207, gainedDate: "12.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
          ],
        },
        {
          firstName: "Bruce",
          lastName: " White",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 107, gainedDate: "12.01.2023 17:43" },
            { point: 207, gainedDate: "12.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
          ],
        },
        {
          firstName: "Lee",
          lastName: "Bruce",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 107, gainedDate: "12.01.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
          ],
        },
        {
          firstName: "Sasha",
          lastName: "Green",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
          ],
        },
        {
          firstName: "Brundi",
          lastName: "Black",
          avatar: 'alice_avatar.jpg',
          country: 'USA',
          pointsTotal: [
            { point: 107, gainedDate: "12.01.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.11.2023 17:43" },
            { point: 207, gainedDate: "12.10.2023 17:43" },
            { point: 57, gainedDate: "14.11.2023 17:43" },
            { point: 107, gainedDate: "12.01.2023 17:43" },
          ],
        },
      ], 
    }
  ];