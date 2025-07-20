type MajorBrand = {__brand: 'MajorCredits'}
type MinorBrand = {__brand: 'MinoeCredits'}

export interface MajorCredits {
  credits: number
  brand: MajorBrand
}

export interface MinorCredits {
  credits: number
  brand: MinorBrand
}

export function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits): MajorCredits{
  return {
    credits: subject1.credits + subject2.credits,
    brand: {} as MajorBrand
  }
}

export function sumMinorCredits(subject1: MinorCredits, subject2:MinorCredits): MinorCredits{
  return{
    credits: subject1.credits + subject2.credits,
    brand: {} as MinorBrand
  }
}