create table users(
    id serial not null primary key,
    name varchar(255) not null,
    username varchar(255) not null,
    password text not null,
    created_at timestamp not null default current_timestamp
);

create table business(
    id serial not null primary key,
    image varchar(255) not null,
    title varchar(255) not null,
    text varchar(255) not null,
    created_at timestamp not null default current_timestamp
);

create table culture(
    id serial not null primary key,
    image varchar(255) not null,
    title varchar(255) not null,
    description varchar(255) not null,
    created_at timestamp not null default current_timestamp
);

create table politics(
    id serial not null primary key,
    image varchar(255) not null,
    title varchar(255) not null,
    by_who varchar(255) not null,
    post_time timestamp not null default current_timestamp,
    text varchar(255) not null,
    created_at timestamp not null default current_timestamp
);

create table travel(
    id serial not null primary key,
    image varchar(255) not null,
    text varchar(255) not null,
    created_at timestamp not null default current_timestamp
);

create table comment(
    id serial not null primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    website text not null,
    message text not null
);