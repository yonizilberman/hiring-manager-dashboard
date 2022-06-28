export interface Name {
    title: string,
    first: string,
    last: string
}
export interface Location {
    street: {
        number: number,
        name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
        latitude: string,
        longitude: string
    },
    timezone: {
        offset: string,
        description: string
    }
}

export interface Personal {
    description: string
    applicationStatus: CANDIDATE_STATUS,
    gender: string,
    name: Name,
    location: Location,
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
    },
    dob: {
        date: Date,
        age: number
    },
    registered: {
        date: Date,
        age: number
    },
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string
}

export interface Info {
    seed: string,
    results: number,
    page: number,
    version: string
}

export enum CANDIDATE_STATUS {
    "APPROVE" = "Approve",
    "REJECT" = "Reject",
    "PANDDING" = "Pandding"
}