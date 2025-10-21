import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, MapPin, Users, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { bookingsApi, clientsApi } from '../services/api';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const services = [
    { id: 'mc', name: 'Master of Ceremony', description: 'Konsultasi via WhatsApp untuk detail harga' },
    { id: 'wedding_organizer', name: 'Wedding Organizer', description: 'Konsultasi via WhatsApp untuk detail harga' },
    { id: 'both', name: 'Paket MC + Wedding Organizer', description: 'Konsultasi via WhatsApp untuk detail harga' }
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Create client first
      const clientData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsapp,
        address: data.address
      };

      const clientResponse = await clientsApi.create(clientData);
      
      // Create booking
      const bookingData = {
        client_id: clientResponse.data.id,
        service_id: data.service_id,
        event_date: data.event_date,
        event_time: data.event_time,
        event_location: data.event_location,
        event_details: data.event_details,
        guest_count: parseInt(data.guest_count),
        budget: parseFloat(data.budget),
        notes: data.notes
      };

      await bookingsApi.create(bookingData);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white border border-primary-100 rounded p-12 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-light text-primary-900 mb-6 tracking-wide">Booking Submitted</h2>
          <p className="text-primary-600 mb-8 font-light leading-relaxed">
            Terima kasih atas permintaan booking Anda. Tim kami akan menghubungi Anda dalam 24 jam via WhatsApp untuk konfirmasi detail.
          </p>
          <button
            onClick={() => {
              setSubmitStatus(null);
              setStep(1);
            }}
            className="px-8 py-3 bg-primary-900 text-white rounded font-light tracking-wide hover:bg-primary-800 transition-colors"
          >
            Book Another Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-light text-primary-900 mb-4 tracking-wide">Pesan Acara Anda</h1>
          <p className="text-primary-600 font-light leading-relaxed">Mari ciptakan sesuatu yang ajaib bersama-sama</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-light ${
                  step >= i ? 'bg-primary-900 text-white' : 'bg-primary-100 text-primary-400'
                }`}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`w-20 h-px mx-4 ${
                    step > i ? 'bg-primary-900' : 'bg-primary-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-primary-100 rounded-lg p-12">
          
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-light text-primary-900 mb-8 flex items-center tracking-wide">
                <User className="w-5 h-5 mr-3" />
                Select Service & Personal Info
              </h3>
              
              <div className="grid gap-3 mb-8">
                <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-4">Select Service *</label>
                {services.map((service) => (
                  <label key={service.id} className="flex items-center p-6 border border-primary-100 rounded cursor-pointer hover:bg-primary-50 hover:border-primary-200 transition-all">
                    <input
                      type="radio"
                      value={service.id}
                      {...register('service_id', { required: 'Please select a service' })}
                      className="mr-4"
                      onChange={(e) => setSelectedService(e.target.value)}
                    />
                    <div className="flex-1">
                      <div className="font-light text-primary-900">{service.name}</div>
                      <div className="text-sm text-primary-500 font-light">{service.description}</div>
                    </div>
                  </label>
                ))}
                {errors.service_id && <span className="text-red-500 text-sm font-light">{errors.service_id.message}</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Full Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="text-red-500 text-xs font-light">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Email *</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs font-light">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Phone Number *</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="+62 812 3456 7890"
                  />
                  {errors.phone && <span className="text-red-500 text-xs font-light">{errors.phone.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">WhatsApp Number</label>
                  <input
                    type="tel"
                    {...register('whatsapp')}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Address</label>
                <textarea
                  {...register('address')}
                  rows={3}
                  className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  placeholder="Your address"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button type="button" onClick={nextStep} className="px-8 py-3 bg-primary-900 text-white rounded font-light tracking-wide hover:bg-primary-800 transition-colors">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-light text-primary-900 mb-8 flex items-center tracking-wide">
                <Calendar className="w-5 h-5 mr-3" />
                Event Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Event Date *</label>
                  <input
                    type="date"
                    {...register('event_date', { required: 'Event date is required' })}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  />
                  {errors.event_date && <span className="text-red-500 text-xs font-light">{errors.event_date.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Event Time</label>
                  <input
                    type="time"
                    {...register('event_time')}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Number of Guests</label>
                  <input
                    type="number"
                    {...register('guest_count')}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Budget (IDR)</label>
                  <input
                    type="number"
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                    placeholder="5000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Event Location *</label>
                <input
                  type="text"
                  {...register('event_location', { required: 'Event location is required' })}
                  className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  placeholder="Venue name and address"
                />
                {errors.event_location && <span className="text-red-500 text-xs font-light">{errors.event_location.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Event Details</label>
                <textarea
                  {...register('event_details')}
                  rows={4}
                  className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  placeholder="Tell us about your event: theme, special requirements, timeline, etc."
                />
              </div>

              <div className="flex justify-between pt-6">
                <button type="button" onClick={prevStep} className="px-8 py-3 border border-primary-200 text-primary-600 rounded font-light tracking-wide hover:bg-primary-50 transition-colors">
                  Previous
                </button>
                <button type="button" onClick={nextStep} className="px-8 py-3 bg-primary-900 text-white rounded font-light tracking-wide hover:bg-primary-800 transition-colors">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Notes & Submit */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-light text-primary-900 mb-8 flex items-center tracking-wide">
                <MessageSquare className="w-5 h-5 mr-3" />
                Additional Information & Submit
              </h3>
              
              <div>
                <label className="block text-xs font-light text-primary-600 tracking-wider uppercase mb-3">Additional Notes</label>
                <textarea
                  {...register('notes')}
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-200 rounded focus:outline-none focus:border-primary-400 font-light"
                  placeholder="Any special requests, questions, or additional information you'd like to share..."
                />
              </div>

              <div className="bg-primary-50 rounded p-8">
                <h4 className="font-light text-primary-900 mb-6 tracking-wide">What happens next?</h4>
                <ul className="space-y-4 text-sm text-primary-600 font-light">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-primary-400 rounded-full mr-4"></div>
                    We'll receive your booking request immediately
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-primary-400 rounded-full mr-4"></div>
                    Our team will contact you via WhatsApp within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-primary-400 rounded-full mr-4"></div>
                    We'll discuss your requirements and provide a detailed quote
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-primary-400 rounded-full mr-4"></div>
                    Once confirmed, we'll begin planning your perfect event
                  </li>
                </ul>
              </div>

              <div className="flex justify-between pt-6">
                <button type="button" onClick={prevStep} className="px-8 py-3 border border-primary-200 text-primary-600 rounded font-light tracking-wide hover:bg-primary-50 transition-colors">
                  Previous
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-8 py-3 bg-primary-900 text-white rounded font-light tracking-wide hover:bg-primary-800 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Booking Request'}
                </button>
              </div>
            </div>
          )}

        </form>

        {submitStatus === 'error' && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.732 0L3.866 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800">
                  There was an error submitting your booking. Please try again or contact us directly.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;