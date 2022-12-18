-- Table: public.atlas-exports

-- DROP TABLE IF EXISTS public."atlas-exports";

CREATE TABLE IF NOT EXISTS public."atlas-exports"
(
    id integer NOT NULL DEFAULT nextval('"atlas-exports_id_seq"'::regclass),
    "sloeId" integer NOT NULL,
    sync_flag integer DEFAULT 0,
    company character varying(255) COLLATE pg_catalog."default" NOT NULL,
    subdivision character varying(255) COLLATE pg_catalog."default",
    field character varying(255) COLLATE pg_catalog."default" NOT NULL,
    facility text COLLATE pg_catalog."default" NOT NULL,
    prod_area text COLLATE pg_catalog."default" NOT NULL,
    place_install text COLLATE pg_catalog."default",
    position_tag character varying(255) COLLATE pg_catalog."default",
    partic_sbpaz character varying(255) COLLATE pg_catalog."default",
    phys_quantity text COLLATE pg_catalog."default",
    clarification text COLLATE pg_catalog."default",
    category character varying(255) COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    type_eq text COLLATE pg_catalog."default",
    model_eq text COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    factory text COLLATE pg_catalog."default",
    type_protection character varying(255) COLLATE pg_catalog."default",
    sn character varying(255) COLLATE pg_catalog."default",
    prod_dt date,
    life_time character varying(255) COLLATE pg_catalog."default",
    set_type character varying(255) COLLATE pg_catalog."default",
    set_sn character varying(255) COLLATE pg_catalog."default",
    actual_mc character varying(255) COLLATE pg_catalog."default",
    dt date,
    m_range character varying(255) COLLATE pg_catalog."default",
    dt_next date,
    type_doc character varying(255) COLLATE pg_catalog."default",
    number_doc character varying(255) COLLATE pg_catalog."default",
    organization text COLLATE pg_catalog."default",
    low_limit character varying(255) COLLATE pg_catalog."default",
    upper_limit character varying(255) COLLATE pg_catalog."default",
    units character varying(255) COLLATE pg_catalog."default",
    acc character varying(255) COLLATE pg_catalog."default",
    num_registry character varying(255) COLLATE pg_catalog."default",
    method_mc text COLLATE pg_catalog."default",
    measur_area text COLLATE pg_catalog."default",
    type_measur text COLLATE pg_catalog."default",
    group_eq text COLLATE pg_catalog."default",
    sgroei text COLLATE pg_catalog."default",
    remark text COLLATE pg_catalog."default",
    actual_tech_condition character varying(255) COLLATE pg_catalog."default",
    distance double precision,
    contract text COLLATE pg_catalog."default",
    opo character varying(255) COLLATE pg_catalog."default",
    rpo integer,
    flag_rtk integer,
    tko character varying(255) COLLATE pg_catalog."default",
    path_to_doc text COLLATE pg_catalog."default",
    path_to_method_mc text COLLATE pg_catalog."default",
    path_to_type_app_cert text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "atlas-exports_pkey" PRIMARY KEY (id),
    CONSTRAINT "atlas-exports_sloeId_fkey" FOREIGN KEY ("sloeId")
        REFERENCES public."summary-list-of-equipments" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."atlas-exports"
    OWNER to postgres;