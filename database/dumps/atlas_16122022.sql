PGDMP             
            z            ots_test    14.5    14.5     c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false                       1259    179316    atlas-exports    TABLE     ?  CREATE TABLE public."atlas-exports" (
    id integer NOT NULL,
    "sloeId" integer NOT NULL,
    sync_flag integer DEFAULT 0,
    company character varying(255) NOT NULL,
    subdivision character varying(255),
    field character varying(255) NOT NULL,
    facility text NOT NULL,
    prod_area text NOT NULL,
    place_install text,
    position_tag character varying(255),
    partic_sbpaz character varying(255),
    phys_quantity text,
    clarification text,
    category character varying(255),
    name text,
    type_eq text,
    model_eq text,
    country character varying(255),
    factory text,
    type_protection character varying(255),
    sn character varying(255),
    prod_dt date,
    life_time character varying(255),
    set_type character varying(255),
    set_sn character varying(255),
    actual_mc character varying(255),
    dt date,
    m_range character varying(255),
    dt_next date,
    type_doc character varying(255),
    number_doc character varying(255),
    organization text,
    low_limit character varying(255),
    upper_limit character varying(255),
    units character varying(255),
    acc character varying(255),
    num_registry character varying(255),
    method_mc text,
    measur_area text,
    type_measur text,
    group_eq text,
    sgroei text,
    remark text,
    actual_tech_condition character varying(255),
    distance double precision,
    contract text,
    opo character varying(255),
    rpo integer,
    flag_rtk integer,
    tko character varying(255),
    path_to_doc text,
    path_to_method_mc text,
    path_to_type_app_cert text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public."atlas-exports";
       public         heap    postgres    false                       1259    179315    atlas-exports_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."atlas-exports_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."atlas-exports_id_seq";
       public          postgres    false    268            g           0    0    atlas-exports_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."atlas-exports_id_seq" OWNED BY public."atlas-exports".id;
          public          postgres    false    267            ?           2604    179319    atlas-exports id    DEFAULT     x   ALTER TABLE ONLY public."atlas-exports" ALTER COLUMN id SET DEFAULT nextval('public."atlas-exports_id_seq"'::regclass);
 A   ALTER TABLE public."atlas-exports" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    268    267    268            `          0    179316    atlas-exports 
   TABLE DATA           x  COPY public."atlas-exports" (id, "sloeId", sync_flag, company, subdivision, field, facility, prod_area, place_install, position_tag, partic_sbpaz, phys_quantity, clarification, category, name, type_eq, model_eq, country, factory, type_protection, sn, prod_dt, life_time, set_type, set_sn, actual_mc, dt, m_range, dt_next, type_doc, number_doc, organization, low_limit, upper_limit, units, acc, num_registry, method_mc, measur_area, type_measur, group_eq, sgroei, remark, actual_tech_condition, distance, contract, opo, rpo, flag_rtk, tko, path_to_doc, path_to_method_mc, path_to_type_app_cert, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    268   -       h           0    0    atlas-exports_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."atlas-exports_id_seq"', 19, true);
          public          postgres    false    267            ?           2606    179324     atlas-exports atlas-exports_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."atlas-exports"
    ADD CONSTRAINT "atlas-exports_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."atlas-exports" DROP CONSTRAINT "atlas-exports_pkey";
       public            postgres    false    268            ?           2606    179325 '   atlas-exports atlas-exports_sloeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."atlas-exports"
    ADD CONSTRAINT "atlas-exports_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public."atlas-exports" DROP CONSTRAINT "atlas-exports_sloeId_fkey";
       public          postgres    false    268            `     x??T[OA~???y??lg??Ƙ??	11???˶?*??K|????K?@Q_?ZZZ???/????n|4?nw?|??o?s??!?ÀIFkԦ?t??h@?ԧT-?y?$?5'8??e5??(e???!??,~]?SM??r?F?M?b??Z????1i?'?P?Yxe???#iJ=??-isڥZ?Sv?/Ю-??#v?!??9vR G~???S?lq?? ?1?Y????@)U???:`?3?;??!?|?ıǸ?@b?@!???v?O-??M1z?M?ʠ?u??)?i?e?H???f??k?0byr??WhO??v?ez?E+??X???!?=F[???m?ڗ?$4??H??z??uQ????????~????O?????3DF?|[???$6?????GS0??.?Ml[wـ??i$?g-??4??&K?ȸe?t"?X?F-Sb?Y?h??G???2??Q?a?pC&E??\t4n8RH?t?8????ih?C?Bu?z-??????4Jq???JA?G]?2a??f???BI??|\??W??N??Uj??3???t?v>?yX?;'x)?j??zܸsEʂ?'?O݊")=?_?E?????!X?]=???`猑Zġ?'???7?r?U@??s?g?T??-=?YO???Ѣ?C?/???Ò+?%<?b胑???IB?q,??? ?$?~U?'E?\???T???T'?V=??????.?I 
v???_???	?"??:???s?!??\n{?n0.???d?7?\d?r??Ja?T     