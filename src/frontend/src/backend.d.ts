import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface Appointment {
    service: string;
    date: string;
    name: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    bookAppointment(name: string, phone: string, service: string, date: string): Promise<void>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAppointmentByPhone(phone: string): Promise<Appointment>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
