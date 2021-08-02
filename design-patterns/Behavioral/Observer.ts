export class JobPost {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }
  getTitle = () => this.title;
}

// Observer
interface IJobSeeker {
  onJobPosted(job: JobPost): void;
}

export class JobSeeker implements IJobSeeker {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  onJobPosted(job: JobPost) {
    console.log(`Hi ${this.name}! New job posted: ${job.getTitle()}`);
  }
}

// Observable
interface IJobPostings {
  addJobs(jobPosting: JobPost): void;
  attach(jobSeeker: JobSeeker): void;
  notify(jobPosting: JobPost): void;
}

export class JobPostings implements IJobPostings {
  protected observers = Array<JobSeeker>();

  notify(jobPosting: JobPost) {
    this.observers.forEach((observer) => {
      observer.onJobPosted(jobPosting);
    });
  }

  attach(jobSeeker: JobSeeker) {
    this.observers.push(jobSeeker);
  }

  addJobs(jobPosting: JobPost) {
    this.notify(jobPosting);
  }
}
