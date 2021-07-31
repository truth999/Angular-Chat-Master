export interface ActiveRequest {
    id: string;
    name: string;
    callId: string;
    customerId: string;
    type: string; //chat, voice or email
    callType: string; // INBOUND, OUTBOUND
    callStatus: string; //incoming, new, accepted, ignored, completed, wrapup, ...
    startTime: number; //timestamp incoming or outcoming(new)
    connectedTime: number; //timestamp accepted
    incomingTime: number; //incoming time before accepting.
    endTime: number; //timestamp ignored, completed or wrapup
    isActive: boolean;
    isDefered: boolean;
    linkedTo: string;
    //email: string; ???
    //phone: string; ???
}
