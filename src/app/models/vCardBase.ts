export abstract class vCardBase {
    constructor(
        private firstName: string,
        private lastName = "Kirkland",
        private occupation = "CEO and Founder of Kirkland Enterprises Unlimited, LLC",
        private phoneNumber = "912-536-7419",
        private email = "kirklandenterprisesunlimited@gmail.com"
    )
    {}

    public youtube: string;
    public website: string;
    public facebook: string;
    public instagram: string;
    public twitter: string;
    public snapchat: string;
    public linkedin: string;
    public tiktok: string;
}