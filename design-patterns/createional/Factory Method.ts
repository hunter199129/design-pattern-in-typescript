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

class DevelopmentManager extends HiringManager {
  makeInterviewer = () => {
    return new Developer()
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer = () => {
    return new CommunityExecutive()
  }
}

export default function factoryMethodSample() {
  let devManager = new DevelopmentManager()
  devManager.takeInterview()

  let marketingManger = new MarketingManager()
  marketingManger.takeInterview()
}