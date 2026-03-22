import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Appointment = {
    name : Text;
    phone : Text;
    service : Text;
    date : Text;
    timestamp : Int;
  };

  module Appointment {
    public func compare(appointment1 : Appointment, appointment2 : Appointment) : Order.Order {
      Text.compare(appointment1.date, appointment2.date);
    };
  };

  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Int.compare(form1.timestamp, form2.timestamp);
    };
  };

  let appointments = Map.empty<Text, Appointment>();
  let contactForms = Map.empty<Text, ContactForm>();

  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, service : Text, date : Text) : async () {
    if (appointments.containsKey(phone)) { Runtime.trap("This phone number has already booked an appointment.") };
    let appointment : Appointment = {
      name;
      phone;
      service;
      date;
      timestamp = Time.now();
    };
    appointments.add(phone, appointment);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contactForm : ContactForm = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactForms.add(email, contactForm);
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort();
  };

  public query ({ caller }) func getAppointmentByPhone(phone : Text) : async Appointment {
    switch (appointments.get(phone)) {
      case (null) { Runtime.trap("No appointment found for this phone number.") };
      case (?appointment) { appointment };
    };
  };
};
