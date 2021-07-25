interface IInterviewer {
  askQuestions(): void
}

class Developer implements IInterviewer {
  askQuestions = (): void => {
    console.log('Asking about design patterns!')
  }
}

class CommunityExecutive implements IInterviewer {
  askQuestions = (): void => {
    console.log('Asking about community building')
  }
}

abstract class HiringManager {
  // Factory Method
  abstract makeInterviewer(): IInterviewer

  takeInterview() {
    let interviewer = this.makeInterviewer()
    interviewer.askQuestions()
  }
}

export class DevelopmentManager extends HiringManager {
  makeInterviewer = () => {
    return new Developer()
  }
}

export class MarketingManager extends HiringManager {
  makeInterviewer = () => {
    return new CommunityExecutive()
  }
}