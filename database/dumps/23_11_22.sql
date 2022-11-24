PGDMP     -    8            
    z            ots_test    14.1    14.1    ^           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            _           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            `           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            a           1262    20005    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    20006    building-comments    TABLE     �  CREATE TABLE public."building-comments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer,
    "monitoringId" integer,
    "directionId" integer,
    "criticalityId" integer,
    "normativeId" integer,
    "userId" integer,
    comment text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public."building-comments";
       public         heap    postgres    false            �            1259    20011    building-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."building-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."building-comments_id_seq";
       public          postgres    false    209            b           0    0    building-comments_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."building-comments_id_seq" OWNED BY public."building-comments".id;
          public          postgres    false    210            �            1259    20012 	   cable-log    TABLE     f  CREATE TABLE public."cable-log" (
    id integer NOT NULL,
    "sloeId" integer,
    "numberOfTrace" character varying(255),
    "cableMark" character varying(255),
    "cableSection" character varying(255),
    "fromUnit" character varying(255),
    "fromPlace" character varying(255),
    "toUnit" character varying(255),
    "toPlace" character varying(255),
    "cableLenght" character varying(255),
    range character varying(255) DEFAULT 'м'::character varying,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."cable-log";
       public         heap    postgres    false            �            1259    20018    cable-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cable-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."cable-log_id_seq";
       public          postgres    false    211            c           0    0    cable-log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."cable-log_id_seq" OWNED BY public."cable-log".id;
          public          postgres    false    212            �            1259    20019    counterparties    TABLE       CREATE TABLE public.counterparties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.counterparties;
       public         heap    postgres    false            �            1259    20024    counterparties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.counterparties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counterparties_id_seq;
       public          postgres    false    213            d           0    0    counterparties_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counterparties_id_seq OWNED BY public.counterparties.id;
          public          postgres    false    214            �            1259    20025    criticalities    TABLE     m  CREATE TABLE public.criticalities (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    threshold character varying(255),
    goal character varying(255),
    "tenseGoal" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.criticalities;
       public         heap    postgres    false            �            1259    20030    criticalities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.criticalities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.criticalities_id_seq;
       public          postgres    false    215            e           0    0    criticalities_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.criticalities_id_seq OWNED BY public.criticalities.id;
          public          postgres    false    216            �            1259    20039    design-documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public."design-documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."design-documents_id_seq";
       public          postgres    false            �            1259    20031    design-documents    TABLE     b  CREATE TABLE public."design-documents" (
    id integer DEFAULT nextval('public."design-documents_id_seq"'::regclass) NOT NULL,
    code character varying(255) NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "uqstId" integer,
    "subUnitId" integer,
    "suqstId" integer,
    "supplierId" integer,
    "stageId" integer DEFAULT 3 NOT NULL,
    "sectionId" integer DEFAULT 57 NOT NULL,
    "sloeId" integer,
    "cableLogId" integer,
    "monitoringId" integer,
    title character varying(255) NOT NULL,
    revision character varying(255) DEFAULT '1'::character varying NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "filePath" character varying(255) NOT NULL,
    "fileName" character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."design-documents";
       public         heap    postgres    false    218            �            1259    20040    designs    TABLE     
  CREATE TABLE public.designs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    20045    designs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.designs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    219            f           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    220            �            1259    20046 
   directions    TABLE       CREATE TABLE public.directions (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.directions;
       public         heap    postgres    false            �            1259    20051    directions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.directions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.directions_id_seq;
       public          postgres    false    221            g           0    0    directions_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.directions_id_seq OWNED BY public.directions.id;
          public          postgres    false    222            �            1259    20052    documentation-comments    TABLE     �  CREATE TABLE public."documentation-comments" (
    id integer NOT NULL,
    "pdcId" integer,
    "udcId" integer,
    "sudcId" integer,
    "sdcId" integer,
    "directionId" integer,
    "criticalityId" integer,
    "normativeId" integer,
    "userId" integer,
    comment text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 ,   DROP TABLE public."documentation-comments";
       public         heap    postgres    false            �            1259    20057    documentation-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."documentation-comments_id_seq";
       public          postgres    false    223            h           0    0    documentation-comments_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."documentation-comments_id_seq" OWNED BY public."documentation-comments".id;
          public          postgres    false    224            �            1259    20058    documentation-solutions    TABLE     p  CREATE TABLE public."documentation-solutions" (
    id integer NOT NULL,
    "commentId" integer,
    "statusId" integer,
    answer text,
    "designContacts" text DEFAULT 'н/д'::text NOT NULL,
    "solutionId" integer,
    "userId" integer,
    solution text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 -   DROP TABLE public."documentation-solutions";
       public         heap    postgres    false            �            1259    20064    documentation-solutions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."documentation-solutions_id_seq";
       public          postgres    false    225            i           0    0    documentation-solutions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."documentation-solutions_id_seq" OWNED BY public."documentation-solutions".id;
          public          postgres    false    226            �            1259    20065 
   equipments    TABLE       CREATE TABLE public.equipments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.equipments;
       public         heap    postgres    false            �            1259    20070    equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.equipments_id_seq;
       public          postgres    false    227            j           0    0    equipments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.equipments_id_seq OWNED BY public.equipments.id;
          public          postgres    false    228            �            1259    20071 
   facilities    TABLE     o  CREATE TABLE public.facilities (
    id integer NOT NULL,
    country character varying(255) DEFAULT 'Россия'::character varying NOT NULL,
    vendor character varying(255) DEFAULT 'Не определен'::character varying NOT NULL,
    title character varying(255) NOT NULL,
    "equipmentType" character varying(255) NOT NULL,
    "measurementArea" character varying(255),
    "meansurementType" character varying(255),
    "meansureGroup" character varying(255),
    modifications character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.facilities;
       public         heap    postgres    false            �            1259    20078    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    229            k           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    230            �            1259    20079    fields    TABLE     %  CREATE TABLE public.fields (
    "subsidiaryId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.fields;
       public         heap    postgres    false            �            1259    20084    fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.fields_id_seq;
       public          postgres    false    231            l           0    0    fields_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.fields_id_seq OWNED BY public.fields.id;
          public          postgres    false    232            �            1259    20085    impulse-line-log    TABLE       CREATE TABLE public."impulse-line-log" (
    id integer NOT NULL,
    "sloeId" integer,
    "numberOfTrace" character varying(255),
    "impulseLineType" character varying(255),
    "fromPlace" character varying(255),
    "toPlace" character varying(255),
    "impulseLineLenght" character varying(255),
    range character varying(255) DEFAULT 'м'::character varying,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."impulse-line-log";
       public         heap    postgres    false            �            1259    20091    impulse-line-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impulse-line-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impulse-line-log_id_seq";
       public          postgres    false    233            m           0    0    impulse-line-log_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impulse-line-log_id_seq" OWNED BY public."impulse-line-log".id;
          public          postgres    false    234            �            1259    20092    logos    TABLE     �  CREATE TABLE public.logos (
    "subsidiaryId" integer,
    "counterpartyId" integer,
    "designId" integer,
    "userId" integer,
    id integer NOT NULL,
    "filePath" character varying(255) NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "fileName" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.logos;
       public         heap    postgres    false            �            1259    20097    logos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.logos_id_seq;
       public          postgres    false    235            n           0    0    logos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.logos_id_seq OWNED BY public.logos.id;
          public          postgres    false    236            �            1259    20098    metrologies    TABLE     g  CREATE TABLE public.metrologies (
    id integer NOT NULL,
    "sloeId" integer,
    "counterpartyId" integer,
    sgroei character varying(255),
    grsi character varying(255),
    min character varying(255),
    max character varying(255),
    range character varying(255),
    accuracy character varying(255),
    mpi character varying(255),
    "metrologyType" character varying(255),
    "documentType" character varying(255),
    "documentNumber" character varying(255),
    "fromDate" character varying(255),
    "toDate" character varying(255),
    document character varying(255),
    status character varying(255),
    arshin character varying(255),
    "verificationProcedure" character varying(255),
    "typeApprovalCertificate" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.metrologies;
       public         heap    postgres    false            �            1259    20103    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    237            o           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    238            �            1259    20104    monitorings    TABLE     c  CREATE TABLE public.monitorings (
    id integer NOT NULL,
    "sloeId" integer,
    "mountDate" character varying(255),
    "mountDocument" character varying(255),
    "connectDate" character varying(255),
    "connectDocument" character varying(255),
    "testDate" character varying(255),
    "testDocument" character varying(255),
    "awpDate" character varying(255),
    "awpDocument" character varying(255),
    "commisionDate" character varying(255),
    "commisionDocument" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.monitorings;
       public         heap    postgres    false            �            1259    20109    monitorings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.monitorings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monitorings_id_seq;
       public          postgres    false    239            p           0    0    monitorings_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monitorings_id_seq OWNED BY public.monitorings.id;
          public          postgres    false    240            �            1259    20110 
   normatives    TABLE     �  CREATE TABLE public.normatives (
    id integer NOT NULL,
    code character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    revision character varying(255) NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "filePath" character varying(255) DEFAULT 'normatives'::character varying NOT NULL,
    "fileName" character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.normatives;
       public         heap    postgres    false            �            1259    20116    normatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normatives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.normatives_id_seq;
       public          postgres    false    241            q           0    0    normatives_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.normatives_id_seq OWNED BY public.normatives.id;
          public          postgres    false    242            �            1259    20117    projects    TABLE     {  CREATE TABLE public.projects (
    "fieldId" integer NOT NULL,
    "designId" integer DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.projects;
       public         heap    postgres    false            �            1259    20123    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    243            r           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    244            �            1259    20124    sections    TABLE       CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    20129    sections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sections_id_seq;
       public          postgres    false    245            s           0    0    sections_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;
          public          postgres    false    246            �            1259    20130    signals    TABLE     �  CREATE TABLE public.signals (
    id integer NOT NULL,
    "sloeId" integer,
    "signalType" character varying(255),
    "signalProtocol" character varying(255),
    "signalParameter" text,
    "signalTag" character varying(255),
    ll character varying(255),
    l character varying(255),
    h character varying(255),
    hh character varying(255),
    "emergencyProtocol" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.signals;
       public         heap    postgres    false            �            1259    20135    signals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.signals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.signals_id_seq;
       public          postgres    false    247            t           0    0    signals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.signals_id_seq OWNED BY public.signals.id;
          public          postgres    false    248            �            1259    20136    stages    TABLE     	  CREATE TABLE public.stages (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.stages;
       public         heap    postgres    false            �            1259    20141    stages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.stages_id_seq;
       public          postgres    false    249            u           0    0    stages_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.stages_id_seq OWNED BY public.stages.id;
          public          postgres    false    250            �            1259    20142 	   sub-units    TABLE     �  CREATE TABLE public."sub-units" (
    "unitId" integer NOT NULL,
    "equipmentId" integer DEFAULT 1 NOT NULL,
    "supplierId" integer DEFAULT 1 NOT NULL,
    id integer NOT NULL,
    "position" character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."sub-units";
       public         heap    postgres    false            �            1259    20149    sub-units_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sub-units_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sub-units_id_seq";
       public          postgres    false    251            v           0    0    sub-units_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sub-units_id_seq" OWNED BY public."sub-units".id;
          public          postgres    false    252            �            1259    20150    subsidiaries    TABLE       CREATE TABLE public.subsidiaries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.subsidiaries;
       public         heap    postgres    false            �            1259    20155    subsidiaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subsidiaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.subsidiaries_id_seq;
       public          postgres    false    253            w           0    0    subsidiaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.subsidiaries_id_seq OWNED BY public.subsidiaries.id;
          public          postgres    false    254            �            1259    20156    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer NOT NULL,
    "facilityId" integer,
    "technicalCardId" integer,
    "installationLocation" character varying(255),
    "systemType" character varying(255)[] DEFAULT ARRAY['РСУ'::character varying(255)],
    "facilityModification" character varying(255) DEFAULT 'н/д'::character varying,
    "factoryNumber" character varying(255) DEFAULT 'н/д'::character varying,
    tag character varying(255),
    "controlledParameter" character varying(255),
    year character varying(255),
    month character varying(255),
    period character varying(255),
    specification text,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 0   DROP TABLE public."summary-list-of-equipments";
       public         heap    postgres    false                        1259    20164 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    255            x           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    256                       1259    20165    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false                       1259    20170    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
    "technicalCardId" integer NOT NULL,
    id integer NOT NULL,
    "workType" character varying(255) NOT NULL,
    "operationTitle" text NOT NULL,
    "categoryExecutor" text,
    "laborCosts" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 .   DROP TABLE public."technical-card-operation";
       public         heap    postgres    false                       1259    20175    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    258            y           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    259                       1259    20176    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    257            z           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    260                       1259    20177    units    TABLE     �  CREATE TABLE public.units (
    "projectId" integer NOT NULL,
    "equipmentId" integer DEFAULT 1 NOT NULL,
    "supplierId" integer DEFAULT 1 NOT NULL,
    id integer NOT NULL,
    "position" character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.units;
       public         heap    postgres    false                       1259    20184    units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.units_id_seq;
       public          postgres    false    261            {           0    0    units_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.units_id_seq OWNED BY public.units.id;
          public          postgres    false    262                       1259    20185    users    TABLE     �  CREATE TABLE public.users (
    "subsidiaryId" integer,
    "fieldId" integer,
    "designId" integer,
    "counterpartyId" integer,
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "secondName" character varying(255),
    "lastName" character varying(255) NOT NULL,
    subdivision character varying(255),
    "position" character varying(255),
    email character varying(255) NOT NULL,
    phone character varying(255),
    password character varying(255) NOT NULL,
    roles character varying(255)[] DEFAULT ARRAY['OTS'::character varying(255)] NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false                       1259    20191    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    263            |           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    264            �           2604    20192    building-comments id    DEFAULT     �   ALTER TABLE ONLY public."building-comments" ALTER COLUMN id SET DEFAULT nextval('public."building-comments_id_seq"'::regclass);
 E   ALTER TABLE public."building-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    20193    cable-log id    DEFAULT     p   ALTER TABLE ONLY public."cable-log" ALTER COLUMN id SET DEFAULT nextval('public."cable-log_id_seq"'::regclass);
 =   ALTER TABLE public."cable-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    20194    counterparties id    DEFAULT     v   ALTER TABLE ONLY public.counterparties ALTER COLUMN id SET DEFAULT nextval('public.counterparties_id_seq'::regclass);
 @   ALTER TABLE public.counterparties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    20195    criticalities id    DEFAULT     t   ALTER TABLE ONLY public.criticalities ALTER COLUMN id SET DEFAULT nextval('public.criticalities_id_seq'::regclass);
 ?   ALTER TABLE public.criticalities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    20197 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    20198    directions id    DEFAULT     n   ALTER TABLE ONLY public.directions ALTER COLUMN id SET DEFAULT nextval('public.directions_id_seq'::regclass);
 <   ALTER TABLE public.directions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    20199    documentation-comments id    DEFAULT     �   ALTER TABLE ONLY public."documentation-comments" ALTER COLUMN id SET DEFAULT nextval('public."documentation-comments_id_seq"'::regclass);
 J   ALTER TABLE public."documentation-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    20200    documentation-solutions id    DEFAULT     �   ALTER TABLE ONLY public."documentation-solutions" ALTER COLUMN id SET DEFAULT nextval('public."documentation-solutions_id_seq"'::regclass);
 K   ALTER TABLE public."documentation-solutions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    20201    equipments id    DEFAULT     n   ALTER TABLE ONLY public.equipments ALTER COLUMN id SET DEFAULT nextval('public.equipments_id_seq'::regclass);
 <   ALTER TABLE public.equipments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            �           2604    20202    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229            �           2604    20203 	   fields id    DEFAULT     f   ALTER TABLE ONLY public.fields ALTER COLUMN id SET DEFAULT nextval('public.fields_id_seq'::regclass);
 8   ALTER TABLE public.fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231            �           2604    20204    impulse-line-log id    DEFAULT     ~   ALTER TABLE ONLY public."impulse-line-log" ALTER COLUMN id SET DEFAULT nextval('public."impulse-line-log_id_seq"'::regclass);
 D   ALTER TABLE public."impulse-line-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            �           2604    20205    logos id    DEFAULT     d   ALTER TABLE ONLY public.logos ALTER COLUMN id SET DEFAULT nextval('public.logos_id_seq'::regclass);
 7   ALTER TABLE public.logos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235            �           2604    20206    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237            �           2604    20207    monitorings id    DEFAULT     p   ALTER TABLE ONLY public.monitorings ALTER COLUMN id SET DEFAULT nextval('public.monitorings_id_seq'::regclass);
 =   ALTER TABLE public.monitorings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239            �           2604    20208    normatives id    DEFAULT     n   ALTER TABLE ONLY public.normatives ALTER COLUMN id SET DEFAULT nextval('public.normatives_id_seq'::regclass);
 <   ALTER TABLE public.normatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    241            �           2604    20209    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    243            �           2604    20210    sections id    DEFAULT     j   ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);
 :   ALTER TABLE public.sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    245                        2604    20211 
   signals id    DEFAULT     h   ALTER TABLE ONLY public.signals ALTER COLUMN id SET DEFAULT nextval('public.signals_id_seq'::regclass);
 9   ALTER TABLE public.signals ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247                       2604    20212 	   stages id    DEFAULT     f   ALTER TABLE ONLY public.stages ALTER COLUMN id SET DEFAULT nextval('public.stages_id_seq'::regclass);
 8   ALTER TABLE public.stages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    249                       2604    20213    sub-units id    DEFAULT     p   ALTER TABLE ONLY public."sub-units" ALTER COLUMN id SET DEFAULT nextval('public."sub-units_id_seq"'::regclass);
 =   ALTER TABLE public."sub-units" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251                       2604    20214    subsidiaries id    DEFAULT     r   ALTER TABLE ONLY public.subsidiaries ALTER COLUMN id SET DEFAULT nextval('public.subsidiaries_id_seq'::regclass);
 >   ALTER TABLE public.subsidiaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    253            	           2604    20215    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    256    255            
           2604    20216    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    257                       2604    20217    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    258                       2604    20218    units id    DEFAULT     d   ALTER TABLE ONLY public.units ALTER COLUMN id SET DEFAULT nextval('public.units_id_seq'::regclass);
 7   ALTER TABLE public.units ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261                       2604    20219    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    264    263            $          0    20006    building-comments 
   TABLE DATA           �   COPY public."building-comments" (id, "projectId", "unitId", "subUnitId", "monitoringId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   Q~      &          0    20012 	   cable-log 
   TABLE DATA           �   COPY public."cable-log" (id, "sloeId", "numberOfTrace", "cableMark", "cableSection", "fromUnit", "fromPlace", "toUnit", "toPlace", "cableLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   n~      (          0    20019    counterparties 
   TABLE DATA           `   COPY public.counterparties (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   ԍ      *          0    20025    criticalities 
   TABLE DATA           }   COPY public.criticalities (id, title, code, description, threshold, goal, "tenseGoal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   d�      ,          0    20031    design-documents 
   TABLE DATA             COPY public."design-documents" (id, code, "projectId", "unitId", "uqstId", "subUnitId", "suqstId", "supplierId", "stageId", "sectionId", "sloeId", "cableLogId", "monitoringId", title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   d�      .          0    20040    designs 
   TABLE DATA           Y   COPY public.designs (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ��      0          0    20046 
   directions 
   TABLE DATA           \   COPY public.directions (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   ��      2          0    20052    documentation-comments 
   TABLE DATA           �   COPY public."documentation-comments" (id, "pdcId", "udcId", "sudcId", "sdcId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   ��      4          0    20058    documentation-solutions 
   TABLE DATA           �   COPY public."documentation-solutions" (id, "commentId", "statusId", answer, "designContacts", "solutionId", "userId", solution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   TK      6          0    20065 
   equipments 
   TABLE DATA           \   COPY public.equipments (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   ��      8          0    20071 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   ܐ      :          0    20079    fields 
   TABLE DATA           h   COPY public.fields ("subsidiaryId", id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   ̣      <          0    20085    impulse-line-log 
   TABLE DATA           �   COPY public."impulse-line-log" (id, "sloeId", "numberOfTrace", "impulseLineType", "fromPlace", "toPlace", "impulseLineLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   ҥ      >          0    20092    logos 
   TABLE DATA           �   COPY public.logos ("subsidiaryId", "counterpartyId", "designId", "userId", id, "filePath", "fileType", "fileName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   �      @          0    20098    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   Ц      B          0    20104    monitorings 
   TABLE DATA           �   COPY public.monitorings (id, "sloeId", "mountDate", "mountDocument", "connectDate", "connectDocument", "testDate", "testDocument", "awpDate", "awpDocument", "commisionDate", "commisionDocument", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    239   )�      D          0    20110 
   normatives 
   TABLE DATA           �   COPY public.normatives (id, code, title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   ��      F          0    20117    projects 
   TABLE DATA           {   COPY public.projects ("fieldId", "designId", id, title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    243   ?�      H          0    20124    sections 
   TABLE DATA           Z   COPY public.sections (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    245   c�      J          0    20130    signals 
   TABLE DATA           �   COPY public.signals (id, "sloeId", "signalType", "signalProtocol", "signalParameter", "signalTag", ll, l, h, hh, "emergencyProtocol", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    247   K�      L          0    20136    stages 
   TABLE DATA           X   COPY public.stages (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    249   ��      N          0    20142 	   sub-units 
   TABLE DATA           �   COPY public."sub-units" ("unitId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    251   ��      P          0    20150    subsidiaries 
   TABLE DATA           ^   COPY public.subsidiaries (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    253   G�      R          0    20156    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    255   k�      T          0    20165    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    257   �      U          0    20170    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    258   �      X          0    20177    units 
   TABLE DATA           �   COPY public.units ("projectId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    261    x      Z          0    20185    users 
   TABLE DATA           �   COPY public.users ("subsidiaryId", "fieldId", "designId", "counterpartyId", id, "firstName", "secondName", "lastName", subdivision, "position", email, phone, password, roles, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    263   E�      }           0    0    building-comments_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."building-comments_id_seq"', 1, false);
          public          postgres    false    210            ~           0    0    cable-log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."cable-log_id_seq"', 148, true);
          public          postgres    false    212                       0    0    counterparties_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.counterparties_id_seq', 194, true);
          public          postgres    false    214            �           0    0    criticalities_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.criticalities_id_seq', 116, true);
          public          postgres    false    216            �           0    0    design-documents_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."design-documents_id_seq"', 404, true);
          public          postgres    false    218            �           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 13, true);
          public          postgres    false    220            �           0    0    directions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.directions_id_seq', 5, true);
          public          postgres    false    222            �           0    0    documentation-comments_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."documentation-comments_id_seq"', 937, true);
          public          postgres    false    224            �           0    0    documentation-solutions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."documentation-solutions_id_seq"', 489, true);
          public          postgres    false    226            �           0    0    equipments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.equipments_id_seq', 37, true);
          public          postgres    false    228            �           0    0    facilities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.facilities_id_seq', 164, true);
          public          postgres    false    230            �           0    0    fields_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.fields_id_seq', 16, true);
          public          postgres    false    232            �           0    0    impulse-line-log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."impulse-line-log_id_seq"', 3, true);
          public          postgres    false    234            �           0    0    logos_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logos_id_seq', 5, true);
          public          postgres    false    236            �           0    0    metrologies_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.metrologies_id_seq', 48, true);
          public          postgres    false    238            �           0    0    monitorings_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.monitorings_id_seq', 135, true);
          public          postgres    false    240            �           0    0    normatives_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.normatives_id_seq', 10, true);
          public          postgres    false    242            �           0    0    projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.projects_id_seq', 230, true);
          public          postgres    false    244            �           0    0    sections_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.sections_id_seq', 400, true);
          public          postgres    false    246            �           0    0    signals_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.signals_id_seq', 147, true);
          public          postgres    false    248            �           0    0    stages_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.stages_id_seq', 12, true);
          public          postgres    false    250            �           0    0    sub-units_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."sub-units_id_seq"', 74, true);
          public          postgres    false    252            �           0    0    subsidiaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subsidiaries_id_seq', 15, true);
          public          postgres    false    254            �           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 464, true);
          public          postgres    false    256            �           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 920, true);
          public          postgres    false    259            �           0    0    technical-card_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."technical-card_id_seq"', 4800, true);
          public          postgres    false    260            �           0    0    units_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.units_id_seq', 561, true);
          public          postgres    false    262            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    264                       2606    20221 (   building-comments building-comments_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_pkey";
       public            postgres    false    209                       2606    20223    cable-log cable-log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_pkey";
       public            postgres    false    211                       2606    20225 "   counterparties counterparties_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_pkey;
       public            postgres    false    213                       2606    20227 '   counterparties counterparties_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_title_key UNIQUE (title);
 Q   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_title_key;
       public            postgres    false    213                       2606    20229     criticalities criticalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_pkey;
       public            postgres    false    215                       2606    20231 %   criticalities criticalities_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_title_key;
       public            postgres    false    215                       2606    20233 &   design-documents design-documents_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_pkey";
       public            postgres    false    217                        2606    20235    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    219            "           2606    20237    designs designs_title_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_title_key UNIQUE (title);
 C   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_title_key;
       public            postgres    false    219            $           2606    20239    directions directions_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_pkey;
       public            postgres    false    221            &           2606    20241    directions directions_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_title_key;
       public            postgres    false    221            (           2606    20243 2   documentation-comments documentation-comments_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pkey";
       public            postgres    false    223            *           2606    20245 4   documentation-solutions documentation-solutions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_pkey";
       public            postgres    false    225            ,           2606    20247    equipments equipments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_pkey;
       public            postgres    false    227            .           2606    20249    equipments equipments_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_title_key;
       public            postgres    false    227            0           2606    20251    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    229            2           2606    20253    fields fields_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_pkey;
       public            postgres    false    231            4           2606    20255    fields fields_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_title_key;
       public            postgres    false    231            6           2606    20257 &   impulse-line-log impulse-line-log_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_pkey";
       public            postgres    false    233            8           2606    20259    logos logos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT logos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.logos DROP CONSTRAINT logos_pkey;
       public            postgres    false    235            :           2606    20261    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    237            <           2606    20263    monitorings monitorings_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT monitorings_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT monitorings_pkey;
       public            postgres    false    239            >           2606    20265    normatives normatives_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.normatives
    ADD CONSTRAINT normatives_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.normatives DROP CONSTRAINT normatives_pkey;
       public            postgres    false    241            @           2606    20267    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    243            B           2606    20269    projects projects_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_title_key;
       public            postgres    false    243            D           2606    20271    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    245            F           2606    20273    sections sections_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_title_key;
       public            postgres    false    245            H           2606    20275    signals signals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT signals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.signals DROP CONSTRAINT signals_pkey;
       public            postgres    false    247            J           2606    20277    stages stages_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_pkey;
       public            postgres    false    249            L           2606    20279    stages stages_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_title_key;
       public            postgres    false    249            N           2606    20281    sub-units sub-units_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_pkey";
       public            postgres    false    251            P           2606    20283    subsidiaries subsidiaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_pkey;
       public            postgres    false    253            R           2606    20285 #   subsidiaries subsidiaries_title_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_title_key UNIQUE (title);
 M   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_title_key;
       public            postgres    false    253            T           2606    20287 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    255            X           2606    20289 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    258            V           2606    20291 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    257            Z           2606    20293    units units_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.units DROP CONSTRAINT units_pkey;
       public            postgres    false    261            \           2606    20295    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    263            ^           2606    20297    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    263            _           2606    20298 6   building-comments building-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_criticalityId_fkey";
       public          postgres    false    3354    209    215            `           2606    20303 4   building-comments building-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_directionId_fkey";
       public          postgres    false    3364    209    221            a           2606    20308 5   building-comments building-comments_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_monitoringId_fkey";
       public          postgres    false    3388    239    209            b           2606    20313 4   building-comments building-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_normativeId_fkey";
       public          postgres    false    209    3390    241            c           2606    20318 2   building-comments building-comments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_projectId_fkey";
       public          postgres    false    243    209    3392            d           2606    20323 2   building-comments building-comments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_subUnitId_fkey";
       public          postgres    false    3406    209    251            e           2606    20328 /   building-comments building-comments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_unitId_fkey";
       public          postgres    false    261    209    3418            f           2606    20333 /   building-comments building-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_userId_fkey";
       public          postgres    false    263    3422    209            g           2606    20338    cable-log cable-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_sloeId_fkey";
       public          postgres    false    3412    211    255            h           2606    20343 1   design-documents design-documents_cableLogId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_cableLogId_fkey" FOREIGN KEY ("cableLogId") REFERENCES public."cable-log"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_cableLogId_fkey";
       public          postgres    false    217    211    3348            i           2606    20348 3   design-documents design-documents_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_monitoringId_fkey";
       public          postgres    false    217    239    3388            j           2606    20353 0   design-documents design-documents_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_projectId_fkey";
       public          postgres    false    243    3392    217            k           2606    20358 0   design-documents design-documents_sectionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.sections(id) ON UPDATE CASCADE;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sectionId_fkey";
       public          postgres    false    3396    245    217            l           2606    20363 -   design-documents design-documents_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sloeId_fkey";
       public          postgres    false    3412    255    217            m           2606    20368 .   design-documents design-documents_stageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES public.stages(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_stageId_fkey";
       public          postgres    false    3402    217    249            n           2606    20373 0   design-documents design-documents_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_subUnitId_fkey";
       public          postgres    false    217    251    3406            o           2606    20378 1   design-documents design-documents_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_supplierId_fkey";
       public          postgres    false    3350    213    217            p           2606    20383 .   design-documents design-documents_suqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_suqstId_fkey" FOREIGN KEY ("suqstId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_suqstId_fkey";
       public          postgres    false    217    251    3406            q           2606    20388 -   design-documents design-documents_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_unitId_fkey";
       public          postgres    false    217    261    3418            r           2606    20393 -   design-documents design-documents_uqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_uqstId_fkey" FOREIGN KEY ("uqstId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_uqstId_fkey";
       public          postgres    false    217    261    3418            s           2606    20398 @   documentation-comments documentation-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_criticalityId_fkey";
       public          postgres    false    3354    215    223            t           2606    20403 >   documentation-comments documentation-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_directionId_fkey";
       public          postgres    false    221    3364    223            u           2606    20408 >   documentation-comments documentation-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_normativeId_fkey";
       public          postgres    false    241    3390    223            v           2606    20413 8   documentation-comments documentation-comments_pdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pdcId_fkey" FOREIGN KEY ("pdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pdcId_fkey";
       public          postgres    false    217    223    3358            w           2606    20418 8   documentation-comments documentation-comments_sdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sdcId_fkey" FOREIGN KEY ("sdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sdcId_fkey";
       public          postgres    false    217    3358    223            x           2606    20423 9   documentation-comments documentation-comments_sudcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sudcId_fkey" FOREIGN KEY ("sudcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sudcId_fkey";
       public          postgres    false    223    217    3358            y           2606    20428 8   documentation-comments documentation-comments_udcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_udcId_fkey" FOREIGN KEY ("udcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_udcId_fkey";
       public          postgres    false    223    217    3358            z           2606    20433 9   documentation-comments documentation-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_userId_fkey";
       public          postgres    false    3422    263    223            {           2606    20438 >   documentation-solutions documentation-solutions_commentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."documentation-comments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_commentId_fkey";
       public          postgres    false    225    3368    223            |           2606    20443 ;   documentation-solutions documentation-solutions_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 i   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_userId_fkey";
       public          postgres    false    225    263    3422            }           2606    20448    fields fields_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT "fields_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.fields DROP CONSTRAINT "fields_subsidiaryId_fkey";
       public          postgres    false    231    3408    253            ~           2606    20453 -   impulse-line-log impulse-line-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_sloeId_fkey";
       public          postgres    false    233    255    3412                       2606    20458    logos logos_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_counterpartyId_fkey";
       public          postgres    false    3350    235    213            �           2606    20463    logos logos_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_designId_fkey";
       public          postgres    false    235    3360    219            �           2606    20468    logos logos_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_subsidiaryId_fkey";
       public          postgres    false    235    253    3408            �           2606    20473    logos logos_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_userId_fkey";
       public          postgres    false    263    3422    235            �           2606    20478 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    3350    237    213            �           2606    20483 #   metrologies metrologies_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_sloeId_fkey";
       public          postgres    false    237    3412    255            �           2606    20488 #   monitorings monitorings_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT "monitorings_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT "monitorings_sloeId_fkey";
       public          postgres    false    255    239    3412            �           2606    20493    projects projects_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_designId_fkey";
       public          postgres    false    243    219    3360            �           2606    20498    projects projects_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_fieldId_fkey";
       public          postgres    false    243    231    3378            �           2606    20503    signals signals_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT "signals_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.signals DROP CONSTRAINT "signals_sloeId_fkey";
       public          postgres    false    247    3412    255            �           2606    20508 $   sub-units sub-units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_equipmentId_fkey";
       public          postgres    false    251    3372    227            �           2606    20513 #   sub-units sub-units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_supplierId_fkey";
       public          postgres    false    251    3350    213            �           2606    20518    sub-units sub-units_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_unitId_fkey";
       public          postgres    false    251    3418    261            �           2606    20523 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    229    3376    255            �           2606    20528 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    243    3392    255            �           2606    20533 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    251    3406    255            �           2606    20538 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    3414    257    255            �           2606    20543 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    261    3418    255            �           2606    20548 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    3414    257    258            �           2606    20553    units units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_equipmentId_fkey";
       public          postgres    false    227    3372    261            �           2606    20558    units units_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_projectId_fkey";
       public          postgres    false    3392    243    261            �           2606    20563    units units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_supplierId_fkey";
       public          postgres    false    213    3350    261            �           2606    20568    users users_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_counterpartyId_fkey";
       public          postgres    false    3350    213    263            �           2606    20573    users users_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_designId_fkey";
       public          postgres    false    3360    263    219            �           2606    20578    users users_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_fieldId_fkey";
       public          postgres    false    3378    231    263            �           2606    20583    users users_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_subsidiaryId_fkey";
       public          postgres    false    263    253    3408            $      x������ � �      &   V  x��\_���>�<B�;%����0�E8⢨<�%߀Gv%�$�8��ن��T�*|����o���ά4�����a�*�[�ͪ��ju�4�1��1�������~V������a��~Q�T{�����W��������H}�~R_���������iQ���-�̸�X�����Ћ�����^�<��~���p3{��u��I��?���[?㯗��O����l���������;|������yů0N�_`��t�M�d�Ti���5E�F4�4����C�����)U�T	Φ4C�r F.Z�h�ǿ	I�$9I������?<���g�����egI}P?*������g�)Q	UJ�aB�bT������H��.���w�Y��ٻ���ak�:��Y����A�L)cRC�rI�n9�1�XJ
bR�8H	VI]kRV!D�"ƴ��DZ"�����9Z���Leh����iɘ��JX����U2�B�b\��L�b^f*/�^�+����!�-���g'��1/�;����*�Jn��C��*���H��e"^\L�^��HP�L�WQtb"^��;�_0%5�U�K-u�.�(�V������ =��u��qR�t��p�8,7��C�۶��ˣ����-O��QŇHC$jm��1�d�� �u�VS|lZA�n(}��}s�q������rr�[�:�#?o�η�r�hڂCS�R��h&Iki�c�)��&��4�@�@}íQ���l�|�w���ɺ!F��)PIY�A�O 
�8x�7�� �Q<�(��i�[������_٨_4���j_�u��^�	a|���x���7/� ��?������A�%�C,q�S�+���D�&���T���c��#Nu��)�-�!�)� ���F�	:��x�_Q!	hM�ݘ�v��rG�'6�E�q��5�dV?�Ы8��{�~���P0��#�;):��3R��ޝ���)>{����E+���Y���5߻�>��(��7��Y��ـ�����w�>�|�}�|�5SS�	��Am�@T ���k�s\�9@�|�9�	�cEka0�Ӗ/��A��!xa1�!�T�S������E��^6A��F �y�_{�������?���%�7�������s�#ي��ݕΩ��b�
�F����$g$�J,$�B�r��f<kA��3���-�H�%#��YXL��x��c\�	V�f�+X0v�cv����G�Jb�/�vhLeL�?bIn�%[�
7����%s�
S�JF�0�Z^�84*F8q]o�#S���:6�964_���uCG@�`�7ߛ[���ޝ�R˽yܖ�Y��
T�@e,@TZ���~a�e�n�q:�~��K�G�M'ȻX:�w��lk��Ҧ���T�W+q��l�,f�/�����~2�g7��`�6���!�̛���%�1D�<m��YI��(������NY�� �R�6�I��*��6�#<r��5a�	�5�Q�m���I܏!*�i�ls�@T��W���H��U��*v���qQ�AՇ.�j�Z,C�݆2�e��)K�L�!��QV�2$��ʯı������J�6�.3�C�*_yiO��{l��d�p�R�tlc���c�R�d��r�48o��!D�>m�ө{Qeb�c�����VSV-e{�(�r���W^��&��[��yX��)E��Jb��M�B�jv���q����L��c��^ŧ����'~��BT�zg9��t��v�ڶ�ru:�J@	67��jy�	��IC�j5`4�玙��,����1R�����5�cY���`��.	Uq(��D���M�`-#���C����'��a�!j�k�ur���QQ���e�j*���풐d���b��uQB�n:!XK(y�<��'��˭r�5�5t�\M��Z�t��Q�̇z:����R�����8��	Mv���`5!,Du�����D���B�9�Я!�ۯ���r�l���dy.l(VI��T!D1�4��k��!D1FƄ_�:�1�Մۭ疟*�&S��R��7d/��J7���(�b������/�Urd�rTs�����~�>N��մ�֗*����������G�U�Z4���[����>�?b�ܟ�z��}��8�s�@s�[�ot'0����W1��	�
$׭��+��Q j}}c��8T��!��הߖ�,f������U� �rx�qAHW�Ӥʋj}M�Z�0��58��:�,f���9��l�a��y��ۯ�Y��mr�f�)>n�lͭr> j��n
Q��l���A�'�.�8BԱqcN�Y�Yo��&+�1D?�f1�͢s�LQ�������[���e�`:�a���C4�GM�m��[���۞��O�\����b���B�a��Tk8m���i�_E����1�7�6��^#�R������1�Lk�S�5��k�iN3���1D�cNHo�@|��"�k���L4�88���mh�X���}��碕<�<H�_�M�<w��H&+�W�M7��Ew̶v��e�v񦦷�V�L�$�����1I��!�,�h�K�n�*�LʳӇ���~X)��P��c̔<=�C�94��&�U��d�{O��궒¯%	�T�1D9c�]��7���=F�������j�3Kh��6��� b���$ �vao���M�.��b�Nm�ń���H|<���lC��W<l��4�� ܐx�F��Gt�J&eK���>MI����n�n���j|y媱���@��%90���?T� �ꏧ�����u��s��A���%�t�ѝ|�:e�A�mO�nA�E���JR����H�t:�����-_�J)�.[$Ei!)��l���	)
]{[q���Q��x��C�	k'�_�S�|۽V��.gN^q��!�Ŏ��:�����3ϸ&���KW��|1Ӎ!D}!Eo�q��'P^J܆r��G^����]'1����]D�#o�ٞ�R�n(c2g¯%i=|A<��2FUa}�q�
�����x�4�HxÎa��%�d�I�Q�%8*�ܥ�|�U���J`n%nCs�B ��(�*���cVA0d��7�
r��ȫ�Yp^n@�A��7�:%2��@��x��/�5�=@9�����	`� ϛ@B��=c� ��q)��*���]��q�`W�K�7��pq(�h���D�:�W�-��#j!�ܻ8�%�Dv�l��}vZ';2{/�#�2���T]*��B���ċ��N,{]�{�7w��s*|1D�ղR���\O�6�9���6�S��P������xn��O-��#�Z*���)Yx^B)�[Jلg/z���h�6���!T Üj��lVv
<��{��_>w�?٘������Ysg!U#�Pt�o���6����]��%�C�_�+t
�U
`������`�}y|@��ɰ�!ꯛ�Ju��u�z��g�H���[6]���tB-���&�=Xi��
�;�]m���қ���Io����֪�z#��dsm���q� ���O5��6�W��{ӣQ��H�ڙ�HU��!��"M�{x��{m�������S8K�O�\qʒ�{3iU�\�P�ˆN��d�_� �s�_6�<#;�P6>�P��DC^�_�AWH�8BP0<���Ƃ��	n]Wr�J!�AN7A��bfu_/�����Ȯ�)�B�c)ȆQ�W��r}B�_L.5�~���!�f��d�+�T�&#<�P8��7�����Z�p�cZ,��`S���ge�f��Γ��A�2��!��%$&�!���LKrmo�Q_�vF���L#��� ��r����R�����z�I�!(�tr7��V.�lJv�VN�擠C(�.EoLy��9���JJ�!�/      (      x��\[o�~����^�]��[A��~p��@^\[M��(.��ɲ���˒��$J��(в3�P���!���2�;���bX��{V󝙝��e�0��mu��:/�#u�O��Y�Y���8�7;��F�|ϧQ�u~�L+DA\S+j'���F�AS?a��P�S���e@��'a�ʵ/n/ܸ��^��p���kj[EI��6��O�`�B�%\,�(Hkj�!��������<~ (�B5�;5P�?���m�&��d8Y޿���@� ��+�!4�觺���p�"��!��� Q*i��Z�(h�Z�����8��Rۙ�6���5�+� �;"e������k�'u����?������z��U}�g�ۗ4��Z4���&����~�jP������ �T����������[��1�;/��c����cgz�9��dM���7�c�Q�`�V��U�r���f��;�	w2~4^F<A$�we�.�4Ӈa��r}} Ô�5 �'�?��=@�G��*ׇ	�)�"�Db͏M�i���k�8;�	&&�ջL�"͌N$�G��2�>x�D�з�a��R嚿0u ��K75I$�ʄK� *(�G3�v��*��'����#���,����x�8Ԑ_L_�0�5LHÂ��%;�k����S�4$�z�q%0� �(�l~�q��	�����ӠD�p�PC_�̬0�s3�lA����!|>෤��$UdE� nZ�l��{K��zn����|Dh�8r�b�h���$�U��0�7 �z�������P��FJ�lIđ3���~lC�;��������m�R�x���.IȲ-$Qǎ��W�!��}_����
JR	��hٱ,{y{�f�nY�ځ��/����b��'��;z�dgQ��
�#�3qZ�2z!y-@�Ɓ�W��8���
��9��^TX�T"�Kx�{3b�-�5���@�u)5.[#qgb��!�^�g�N񘤗l�H��Z�>{�A�Q`5d�-d閄%�I�|X?�����DAR8yk�,�5fV7|��!�Ʌ������r ��l�e��ʶ�DA��4�����w'N>bI��I$-'ZU�:��.�I����@�eTv�<��&��GD��!I���h>+�g���+� e�>|B4b�K"��&L�����uF�L�-	���;�4pyWʎt&�k?�@CDA��4}�I�*�F���M/R���؈�V��`��hGm�K��C���ƥ�hQвW�q����=�Dz�A<l{�C҉\#b��s���u����@�F�Z�w� �À����yO���8$��#~ؾ��!{�G�@�F�r����&�J��j�$�'�]�tA����u�~i����	ՇތŖ?c���Q�jOZ�5���e�:�(hu�ss_�+ D�S�˙����IF�=����,�o�g%��6� ��ǝ���b	^ p#
��a��q%>e&�f��OJ³��q�8��).:��Q��������м��{�g�d�@6!��r�h�=S�tVl���>��o�%�wS�!z<�q�Q9�A˷g����s��^�r�Z�a����d�E��T> ) �;i���P�h������
���Et�I��9�{�a�wd�-9�e�!�� ��i��h�b�4�^/���T�t��c�;9vFj�Ҁ�7���0._^� �`e�G� �	�?�����GգX��<�(sY�FI�$`�b�(�b'��A�^��$�[�<�|7�#�Pq1�JaҬ��d;G� +�l��Y=C�u�Aq*�y�3�OH���7Z�4_��t���:&�		N;��IM�X�J�`�� z�<Sq�d�D� ��Ol�������L�Č��)���u
p�hߑ d�'Q����:�mX�+�V~9s�vt��ߤ���%��Pt$��l7˩�}�4��3�w��:7П��vH��VXm�^=k�&�AR�M� )'3?��v�	S�@â��'2F�1�`v��)I��I�mjۡi�������r�#��@%%��d�����4�&��	I	نļ�����+�q�j����!�=���>8��W/%Ed�'Q�v)e� u{�1��$h"/Km;Gd��7hxRT>$�"���WA�r���ѻ�e�ߌ��KZ�s�DA��g%����=�)pO�yG��9@n�U̽V��<��>���d�RA$�����N�qlUg"�zPRHv1HtZN<��>�/n�t1$�= Qб4Z1X�C�/!sC���)O�̟�9%���Iʍ��3v�@pL��O�)�R�u�s"�Ϩ���*�j����v�#�2��(�����D�����C�����/[X�4������󸤋�n�(�˫���*��Sh�Ř�-	O�N�f	��U2C��{�Ʃ��0*�2��nNX�QB)�O�S�>����5�NO����m�i�e0����ۘ�{<�Sޒ9�DA7�Ѷ�>��k2��E��z-5.�5��n˿�q�sPSD;B�/�gb`�6�m���^�e��Q*�ˆ��5��c���
�9�F@�^�T����n�)��T�#��{y��!
|:3�p���|&�]; {�5_&��	N���Mm�_�A9�]�MwLW^��//Z=Q�i��V��߲n���G*�������ӵ�I0]L��NI�Cc�e��.޻������/b\�����KJ=	S6)��5�aJ>� ��f��T9�Gq�oKx�H�:�i����g�.�4ɳ�b��y�9����o),����������*�/� ����=mm�����|`v:vM2���\�rLθY��*Γ# � z�;�B؁;�]���Q�I�s���yGy:d��Λ
�r�����<��l�R]���`���
��gM�i³�)(�!���2ݛ��A�y\�����K���)P���3ٜdlN�r}#�.�(>-|�5�!	"	^�'ۓ(��*ɫ��\��j8.��e�#�����=�x8�<��+�bbج-��e<�wh�i�qG�dc���*�ι�gO����ע��l�2�OQׅ8�o�����t����f�'��͓N���;=#i"[ӌ�i�f�w�k���8�n�������!FV�,L-����e�����ҙlK2�%q��&�+>���|_�����g� ���������@��;���:3
��n�<��_,����Y�r��樊/��e�= i ��6�����9:����]xg\��oZ�R�2��y�(���U�k,E>{~�(tw��$T���L�N���~��J&܆|��x�/w>�����̉|5r
�7�-�U\:�0��%%�9�%�%t���i��5�c:E@��[SC���+3 I���p<b��1ަ�qI����~nP�ϣ�yTR�b��"u�����S�DP��o�{�?�:������::J�-[7fG�,,����n~!�,s�>��F���PG/���QY.h wM���@=���N��;'[�{|�#�j�uF|�
S"I%l�_�IT��V�ٖc���Op�kOS�Z�_K�E�t�=�u����(pv̹5;��DV�y����}�ww/���Tp&e]��F؉�s�����F�AO#���P��������<���a���)�pr��~\8��	C6:|�4ª��p/���X�sݺްNݹN2�	]�X�)��>�>�E���X�/Gt�YR#�~��6��6���/V1M�n�i�%pl�,�M��\����%䓨Q����g���ҹP#
��s�.�0_#�},;Q��R$5"@uO�����\�w�)j�+)u��C?�����e�F.@ʈЉ�h ��c�+7n-��RjX6@]��6웆���tka��;�go܍��"Yw{�TA;�ީt�Ԉ ۮi���t埛�q��핺����}!�-)>���*-���@8%�3�
*kz��\��^�U�;)��ećV������Ll^���fݙ*vFt�|v@;�Glg&�5\���l�hl�T\����Kl�#9W�}q������¢�"�>�j3 {  �ZC(v��}ֵp
S
��(pb���Ӟ����%���3�-74w"�7��v�����g�e�`��ܮ#�2O�C,Z����A�O�Z��R�LA�·�O8d'� ۮ1>7�ɋ�ge{���j�_����֗��E���~��D�zʹ�[��8mDV��BbU�nq�,'��M�V�3u盝F�Z�^ ��C�m�ۡ��-ǭ�V��{E�r�����o����ͅ���w�|�ڂ}��|6�L��H�(�:���9*����C��\����hu���� #�]���wn�W���X��l�=�l6�l���"h؍�V�e�M?��S]E��-snyA���yն@se��
v�ŭzb�V)�hН��F��u���W��Q��
7����<٧zpR��9ōN�3.���3i�r����j����$nD���\D]�dE�P���9]9sI�2���0V<�Q%�oō�:��*I1�`w}�ƿ=m&����nG��ys�["N���$�:���'��+���U���Ɣ��s���@r�B�i�A���sc��=o�6;�B-N����𬛄ލ��zE�gV���~�?&�I瓴Ѷ
��"h�S�r��˟^�(�����C�k�Ac�ڕ�]�����k(�6Ҷ�s��_\�I��x�o'�eJ��|�uq��������sƙ�}��.��E�m�V)�*�D��wL-(��
����"}]�0�O^����=Н�V�h[�%�"�n��=�F#p�KB��j�����_�,�O�xկ���_1�o]y�-�(�H[���s/�^X�z3����w�,~~��p�����o�^o���bj<K�G��P[��n�A�V�ݠ�6�E�j�;6R��&��N#������F�:M�      *   �  x��[�n��>SO�K ���d�grL�A�`/s
$� ��m�O�{�8�`wf�� ��d�hɢ�}����n�IvS�ăYX�쮪���jn�	�;�P��L�ٱ�����XM�#�L�0;W�P��#����!}?��P%�e;����	���C�愮��~��NBQ�􏗩���K�r�?�^�n�m���N��nw����Q�,�u����w�C�h/P?�B�Z�jAk��=Iӷ�Ͳo�<;�NI:dA_��9���yJ����~�E���/g�KS��1���v4Ҋ)}�ez�/e/��"Uʶ���<�����2[����ha�%ݢ��0`J�n`�F$JL���	y��B��[�lm+M#�Nl�m�9.�t�B+W�ǥB�)�}f�`���ΪC�9���ۜe�Q�B�7���o��D}��{�:�	��)ݾ)jE���;)2 HbE�ϕ� �˦f�gG�a�����O�?�9�d�+ҽٹL�K�H�5�IC8�#������/Ȣih`qx��� e�h ��.����a��]q�,q��%������)�� P�U�h.*g�xݩ��T�([�9#�G8I��\����[����|�
V��P����=�K�?�b˕�E�ǅ�	Ǒ�^��Z�Ў��e�bW(���]��u�HxL�"X)��2������� ӧ�yp���(G���/�3c�?:|7�N0s���abժc�s�w�>ړ����-m�EN؈R�
G������mDFu��Õ�����i���F]��4�[�]��M^�=�����l{�-����mn�E��=���;¤)��ӎ�ze'����]�;�R�MXˎe��H4�b�%�G9c�d�BY�L{u�˗�)$��@Ej�rP�r 6C<�31�f���p��L�[�\��pe�SrMr:����=r�n%��E�IA]&������0�Oe�]A���.�_�������U\�Z/��#�+��q�6`?h�Q'�ͷ�HŖOمJh/�8	a_X+�&#�%�u����K��
H�M�tM1V*����N�G%���3�$��5�=��%�*�g�f�n�mw��;�pS*��TsH��3����P��@�;��²&�|�e�Gܑp��(�˼�2IX5�Y��S<��.�M�<�3�t�������D��U%���tŚ���c��xT�2&�w-*�j�쌽B�K��m��=��p�J�?���v����1�;=/@z�G߃�ki�j.%l�l�T� 5.X����I�9llṏ�D̤8��(����:��Tq�'k�9��A;)&�	���ScC�P�$�Υ���>c��>���.�n$��������t�F�v쭂���������f�(U����{�w�"T�nu��&ELTAcA��R���-gٺ��b4�/xJ�:e�O=or� �T\��?���3�r<�����N7}�S�3s���+���
�7~���_?�}�믾�c���=�ퟞ���MX�������H|�E_�gjK� )�Ε�FVǮ�����p�R���؛����2ܩ�D=�$�0��ju��R�-�KDA�9x��S�;�+��M��r�A�q���!�T+��-���?�n��=üy��́qF��12��}�@q��T�5e�t{�cM)��S�D���u,[x��UC�h��y�_o���+��k�M]�
8w��v:&x'��'F7d|I����"@��^A��ol��ۡ\�5�2�-p�̑��P�xqФ�_8��a{���
��g)�ӭ�
�ܡ��?v��h��i�?�}!9���7�?�$��juy~� ���ʜ�T(ڦ������ZJ�U@g@���r}�8��t@,q��Ҵ�(��0d�cPZ	y}����d�RC_�O���zOb���K���ޅ?���'�O>�z��O��OX�=�%j���f�1����=ͭ4�@:4����:@��pI7�;�ss>��nW�%����돨j��M�%�ݽ�キ���f��	b�/�Y"���3�Q+������~�Pk�w4?�q#��U௬@��D�9�k��U�A�BͰ^TOxs�����'�������F��B�8�G߷��z��6��Zc�%�a����:~�D���\J]g�2�xS\iޔ ����˴�/`>���5ދ�:чUV�5{�<Xv()r�N$}{&���u�#���C���@�����[Ι�������͗�ʹ�-�씼��֑���u�T*@Ry����x$=�]7��)�-�Z�z�a���|v6�֘+�8��x������EZe���p���)���p����i���yJ��+��=�})���:(���Gw�;�gm��"¿N�����<�J p��>���u�4כ��(c�S<Q�WF���<��`� Stq^Z�+�a�4��t��o~HX��������!N/t8�����0G�'7V>�W/ܸ	p�/���u�y�v�7,����j����z���OXonr���G�7�y�� �T�p���ŵ�a�Iɩ�U<�&H*�oy�o��K��Gu�T����'��tX���΁��yp�P�#M�����yk<�h��.3�ߍ+�KP���v?���'&8�� �����@_Jʑ�U~@�h `n,�>]��Em�����~��i�r/3�5��8���b�W<1*^J����<��Ti�j2�\\[�~}M&�����1��	¦��E��3�rE35 B �����~�7�
39ΰ�;+����j��kz��](�(����6+��Px�,T����y��4��Mps�vCk��< 9V�����V/�?��S&ݸ�9p����7�wm�ז4
�cx��&�}��T�e�^��Z� 1���ݡ1��MK�Uކ^N���&��r��z��o�"����b�c����zs��c��G�"-��箋v��n�ʰ�ƞ��#4q��n>�|��T��v���A��<      ,      x��}[�$Ǖ�sׯ�'C�n$�~�G��}� ؂a,���cװaC�$E�Œ��H�Ĉ��̐�CEq���������YݝYUYUS�S�S�:u���'�9q�;�������?�a'�\�k�m>i>����y���}r�|{�j�M�����漽���3NXAO��Z�xsV������_~������r�V������TPWP�Dq��o���7�_�4=�ns�U��K�|��S\�7��7_����r񏸆���RXE=%��Hd��x�))��Ng����u�)�Z��)�s%�毨Z)�����<<��k8z����u�t�ӗ_�o�<l>ƿ����Z9�qVi"����$��5�M�=�q��S5W�P�.:��%�R�����̓��p�	��/~
Pq�O.~���'�z�����>����ڋ�Q`�����4�`e��G-�	�{��Sj��Y��Ћ�1�I�����6}X=3�P�g��f2?t�P�z�7A��F��#g�ۛ��4��ZQR+a����PZE(c����V�,Pv.,t)�ӵd���-;(�VY�����I�6���Rj���W@U*I�U�]�Q�P��dPF����P4�+L�B�d�D�̚�%	��8��˕$Fax3�T��,�,�T��=��\YAC�8i�͛�C��T�h �Ԛ8�<T�E]V.V��B��R���f�J��@�`�`4���TUM��k"Y��F�*+�0Q�*��ZX��]�������̰��O�o����曋W���ïaP���JR)k_׼�ND����B�̄����V=/���`�Z��#)c0��uE�2��:T������Υ.��LM}�����4���7�%~�����t��{����S���\~{��t��������E;�?�s�:����!PG�bQ��i�T��T^�Z�Ҹ,�b����/�1��X?���՛��e���9��<��F����U��t�6�df��h��F?�x|�^������(����p�6|�=`[��KR
� 憸�=�^zh�Q䱕��j\۞h�_��)���v?�ڦ ���5�W���i�����]����I��4��j�Uk*ϛϻoל?x����l��`��kXiU_���Z��Bi.$�fL�x�<�Vy|Ӥ����e�}z���B�Ji̅zn`�C�,a�	,��gQ�?c�U�h�t���i����6�r��-=-O��s��]>y.�6Δ�r�h���*%+ωs�H/���
�.@朎�h��F�����,�|�j��zN��2��B�Dj4��*�J	g��e]g���L��v���'���(N��б{q`>��ğm���ܷ�Ǯ��V�*B�k� �S�N��6�K���n�R�禶�h�܉��j���z4b�?%��r�"�QQ̀���J�he�liu��s�fDn��f�f�]xk�=p��ia�KSV2�(��(N�1�!9p�e>�sP��_��h�Y�����p�Z�5� Z�!R.akc�Y%���17��`�$OO2�W��;<KK�.���y�V����^ҚW%��������5��+���e6�#�\�*�C�͸��������s\�)(k��-e��
�W�*�徒H�<q%�֕S�Q�ւ�1�ͬ��E3.��&z���s�}�=�)�bM%I�)<#^xE�e�K��:�B�Ķ�y�}ь_-p�;d��s�m���s)��H��`q���C|O���.�
9��0.��=ь�k��!���y{�J����"&z�)��d�����
�|��g��s���xo�jm���{�|ؼ���Ռ�%�19�.;����+^G|w�u*E�P��Hz��-Z��Ư[��:ˡ�U�^IČ���ՄJ�JA5��pQ�9����S���u:z�W�c��_���-���� ��������*����N	�~�߷EUz�=�>�/@�����v鉿�C����/-�)������_4�^�@��	�w����y��;쯙:E��wW=�yt�*i>�r���	$����J�*# 5lB�C�!TW�XSֵ�/2JM�P��R4d�u:+�1�&8��_ �fqA�G����wJ�?L��,0������������� �W�
�R�w�K����/a�X���V��j��6�i���=w�|!]�Cu"U�����RؐZ[��U���1��P�=e"-b��+���u�$���_��X�'���a���g����������_�9�Q��ݓ��F�iIԵ�٩��j�dїNh��:�t�-���#ьq�r��AndL��0�<���/�!���T�Vna,��iq�Q��P���~w�/	?X�;��N��X���%���DR�b�T�rΖ�Ĺ�3�U���ڕq�G$"`���W�'� �*Ɣ�C�a�fs��r1����v0L�(�]��,j��V'�QQ�@EXU�MH�`nΝ8�u8_�=�j߾3��jG�e�5)i�RM�!�sAj�Sh]�V�1���eZ�/��P�Մj��B�R���"PW�G�"���p E �#���AH�d�V�܉ �����}�2�V��ZV�	5�ϚY̚����5@��@�h�������ڀȃzـ�Rrc�#QE8!��f�U$���:B�s�˴��B�!� ����U��mRRM(%Q���%q��-��eA�*�;P� ���ݷ ��|	`��0�jO���b�s����(p� ������Wg�`��DIxՒ���:�����:�9���TH=r�"�����t�Σ�j�����I��[xC\*�,�Z�uU��Ŝ2:�|NM!�p6���o�n��o4��^Ɛ��*���u�$�D���-�sM%�*�;���ﺭXw[�c(y�:w4́���J���A��-��Z(E�C�85F�/�fu�w_���R�/s��nE�����!m��n��r�
�N���;�q��Y8�mUS�F��,�̈2A#�փ*�k(u�ݺ<�D3��Iw%'�.-[�5�4���_��C`�y'����[�b⮢$y�g	���m�Ն�����W:�A�L���4�*��,fD��0\n%j�J#��{$��M-J����nZ��6�.]��*�B�F]���岇�W.��=ьɵ1rgC���vJ��
éU�T���%��t5��-l-���z^�c��"���j{�CBʚQ؊:�^����-U�zm��y3ڡ�/?͊ t?2V�d�^�Ϝ^B�q�_�˻��%���Em������R��쏛��)s�>8m��)�<��i�	�X%bE}��Yٜ���,��g����f����q�?_���t��B5�~���Y0��Sf����u3����Nx����MWW�r"$̦��H�꜕u��� p�-��h	a�β1b}�Z7/�xn'A��ׄY㈤e�XJT$%+�2��^b�����e_�7	Z_��6_�4�i�.o�K��Uzjk�2��%��eԹ/ГA������ud��RZ@mk���pATUm���k�*U�37��"��A��_���*?�Ӿ�Pyb��r՘θ0yunф/�
�N�'��`%ѿ�VY��C�j�:	���Ts���cR} 3���CP� J���#�: '�tUk�k�)��<��_ƭ�DS�U8wM�pS���+�t��h0.=0�x�XcN��^h|&F�����֣��P�7��8������,+c�lCh߃YΨΤ.�4t%Н@�]T��-�v�rY�p�yyY��h�F�������x�B�Uic�\slR�s�9o��3� �P��gQ�,�!T5��l��[J�䎔�Қk!�ϸ�H
:
U�"��A���ݷ�������%���R���q1!&�5@�Q�2赡�U/��0�Z����~�Z`n�Ti��k��r�`�W�6791r�"@>����A�Z� ,����} �0ڱ��#⨴Y�2/�8?婠%��З�
��5L�Cj<	�AER�h. ����d*g�{" �N��"i>l�    �̀�U�u�'����_o[�����k�b:��� x��}�h(�m��-����iڡ�3ExR��`��Y_j�+��O6��M6��UB����-�/���'NL,�lZ͘���0�m�߆�%3����b��_��%×�d�v��y�o� O���ko��j�/L��R��w	p��p �3t������w�H�x���9�x
��PV�"����D��^��tƟ\���l���yڅ����݇�Z�I����k]�F<���)IM��^�8�N�7N�Ǵ�������z++���j�����������R�+�-���8�R�j�}D�c�.��$����8gF�`���W!SW/eG� �"@�A'�K�ʡB�{˥��)��МEb�����f) �r9w�C>�*�;��VVL��I�����>j(D�\S��%Rٚ��pW�ʶ�D����r	�PsJK3c�/�	�A��ʝ�Z�vou���w��{����Y�>�$�Mڏl���_c���\���� Ϸ,����v~{���I�}�~}��H����G�c�2��O��K�y;�$��䞓:'�O����M�՗�~^����A��s<��������i��t��ؾ�<�~�~"�N���p?�Kw"�W�����H{pǷ�b.~�~�<��{�o]��Q�����0&8�"5�6�WS(AjC��Ec��ؕ|�ma��ݾ��>��ۆ�Ý��cYJ�����l��_�PIJo}�c�׎�	6Wf.L��V�G"@����^Jt�E���.�֭�u�X��TԊDέs�\�����b��C�^�ڽ�X��(}�"UQ�J������8�A���(�����&F�# �l��
y��d��<�h���FB������0U9���/�Ԃ�B�͘�Z�K@�V�PQ�,�q�W��DDu6�%�IA��wm��3�}4G�@��ƪno���W:թ�J-c)ӎ��0U� B�fZ��t�2�1�} ��U��v�*�8�;+}�65Z�%	��Me�ԪZ��Q+���J��*ʋ ���Pޑ�O�e�R+Fi��q%L�ջB�fu_�'�C���E,�I�����TBh9��L�.�$B*&M�5WY���\ʬ��I����b/�A����r)O]�U�8dR���h	v٥���Lz�L#F;e�" =U�����㠕Y�K��4E.^:b�`I�>�sz���J��c
�1}P� :{):T��n��t�a�B�cJ���GN��<x��۰��d��p(�1��-6lm�i7��_�
rJk�b���1\&�DR"�Q�Ȱ�!�Y���j%h�΄��߳h��Y�������֙��a-�����1ʨTZ���Z�;n�����G5gn�o�no�+�v�@˻��̘��Ė*2�H�{� �S�M�<&�h�݅��
�G"���Ys[�M��u��0�t�\���,�J��L����8嵥eTR-J�E�+J��6�"�?��m�Y��,�C�J_��!�8E�6�H"e��Ue�hNT�F�>�M��K��Q�eUK�Q�X�~�&���X�d4.�0*����J�UWd׺un�"�M����xܱ\�d�v�$���)Z�l:�/�J���d�ұri���C��,w�|���/ևP�Q�ZOd)`�)�V�8�z�Zg2���=��ob�·�a_����xIje��#=U+S����H3K��:򳇢�X���i�ST$��a�2@Ne ����or�ߦ�b���{"p�I���E������~�����@�7�����睦W�dy���������lX�t��Y���૑���7�����}�-��d;�8�@�%;r�Ԝ���A�B,����Kr�s:��,���vM����k��;r��%�#�T�;�����Mg�:'Ϻ��-�(�U��P�6�lܝD@�M%�<��3є�&/��o��=1J��*f�5��V �����X��R:�C��3��1cm�Se
6lo?a�mҜ��y'�ُ1���&|��P4�q�d�1��sUԔ�@��S��7�%,8��e��I�>	|ؗ|,���?gt���y;H� ƙ�����f�YO֦��Z�^���5�J¤��8!�JN��u�T�����Y��.?�fF�DW.���t�w��)F[���UX���g���N�Dp	��.���<5!��ЊLQGĔ�'���}���hdE dj�^���;B���''n{�0{�TY�N,�nybY����Ma�l�[K���"�5�~���-��V�-�8��oPQ ��ӾyO���!hز�=��&Q��)�~$mk���K�Q*b(i����2�GҶ%-�v�B��2�P4�r����)ڛ',-wd�Z<<�F�qx�8[��ȗ���o#	�Q����g?���KV8�����_ߐxA؝�v9 ��\��c��"����(	ۆ0���wK�E3�7a;�";�a25�+�-zE3�� Pv���X�=.�p�5��`myK�lY�*��N��S{lJG�X�VĪd��מ�L�r+����ew��S�ׯ�?r7��e�����c�[;�I&_�6\W�=�V�Fs�P��l�:\��Ι�\��\��#rr��h�'�%��1���T�tYX�q��"��A���)�e��甥��܍f���M�f&��7OX�I^�#�'�<65���e4�;��g��y5S1����E`k*lv��9��[\�t9:ؚ2�f�B�#[۱�IN�$3�6p�q��Kȴ�b�(75�����q���R��ˑ/?��`��9.��8a2URjy�r(����Zv��Kq����Pv��.Ya:-z13r�"06�n�]+I_ģ^��1��X\eLb_Ʀ��v�j�#c�0f2�r_Ʀ֜�����m�ظ��@�c��V�zg��������!��ū���VP��\�B�Q�5a(M��w;�7>��R.��rM�w�F��*���"a=�@E0���N�^�S̵��{��J��!�a[�c ��;��u�l�9c���fbrq����n!+!�̨º��0a�M�r�;9����ţS�"G	��Ĭ-W�#1{#Ƥn�̎条Ԭ�� �H�>��mU�.�x��Pj�.c$kw�f��t.�(�H@���\�vGb�LL眍ӦC�Y�9H��L�
ǭ��n&����Kg�"x�k�)HzAػš%�\����h&�e��Ϗ�ϛ9.čKZ�" ��&(G��Z��o⼰c���EÎ#,�J��"��oP{��avDؤ�-Fa�P�7�^�����N�9�?i
1�̿$�n�q�����t�l1�$�kj݃u9�k�~��j�56;ͽ�e���y޼ȝW��FA�A{O�78Q�����g?<D��|�Mf(���qs�� )�� yԴ�V��w����`]�n����h��ک�]杖�#����CA��GM{��=w��p:�q�ˁt����1^"Bw0A$^FML�4S�sn���aƊ����f����vG�ߧ�/z2������%����=Ï���(�G�b|��@2��Ͻ�V��+1<�/D��K{C�Y�y���#5{�?�P�j��h����Sk�������46�@��$,��H;�ѩ�׌��Cь�?e�ۣ�oj;����N4�n��qG7`��t;(�݈�6ݕ�Gb�K�l[�;J�E���d-5G'`�ԘL&`,B�9�+w���bx�[��2�t�ӆ"06��+ő��h��Nl�9Ɔ"06�R,w=6���.����"06�t&wmudl��j�̂��Z�kS�#c�0�k������w�qdl+��Cl�x��P4�bj��ܹ�Ƒ�s#�~(���������H����nѵ�%p������}����	���1h�[����7��H`'ψ߹a��no[i;�*�W;7�92�=cҎJM�"06��P;�E92�c�ay|l�"06��P�D�m26�m8���$�:&o�1��1�`l*ɡ����dl\�?���$�ڽ������ݯ�)q�J߱�Q_}ь˩�ڽ�����ؒ9��'[Sq�ڽ������ҹs�{"�5��<<��-[�Z�lM�_�� F  8�lm�o��͝Pٓ����K��8r�%W��v6E`k*�һf6�lm�V�t�k	������9�#W�r%2�V_��b-�k>�E��4l������d_4�j*�һ�2�lmɖ`���lM�Zz�'���S�rh-2�j*���?��U�=�<���HK�ǻq��j����E`k2��=�qdk;�l�#���d��{���Vl�[~$�j*�2�g1�\m��J3��8��H���8r�陮���N��f\OEZf�,Ƒ����?����8��?�q�*�H.����T�e���8���D�΍���T�Jsܾp+�):��P�UȾh���M0����
��&C�L0���f��sZ�EԷȘa�ի�h�XN0�Y����$Cd��dL5Z�G/��όL�т�N����T����gK�Yꮜ�/����W����~��	�G�m^�I����w7�,�(u�}7��#Mc�r�����b�|�>/Nۧ.��4�i�u�m�NBT�FnI�KO����jR�Z[IiU	�;ej.�\*��0�3A٧c�sY9��y�#m3�FG�v�4�B�h���/�s�#c[1�6��n�uc(cS��s�#c[1���t�I�/���}�=�x��V}�]�����Y�#7����ؑ�-��I�����A���>�ۆ��)�ʌ��h&֟��9�zdls����SS�q����MA���Uۜ1�]�v�8��)���Ω֎��Dې.vpt�o�O�1F윪\:h(�	iO���t��tI���)<?����"}��>�^S���_p�:��8o>;7�6>�W�� �-�ow���:��,0FX�H�k⴪��cT�>�N���_/q���͹.F�� h�=����'�^_5��>L^�\�Z�RՔH�#��{I��~�J��*��u%�	Es_��P=�(�m�X�0�&��1���F](�)��%�T1F�<5:� �1�?�N{�u�Xy�c�)���+�c��JG�B\����^jc:��CW?2J��t��y��?�����7���T�W�v�xe1[�;���=������+�;R�|\Oz��N�vhмK8}�1*Dz3k^j>|�jB�n�"��3�OU;]�U����r�5�TFR �8β�9Ws.
kG�;�y�ٕ,q�jrO��O/^�$������<�x�����?�櫘���7Hw���7����k~�*���kx�V�O�oۙ�	lȓ4���;?Ō�-��H��z���S���������x�g��DW�4��t��x�#���Ė�2�2Q���wi����o�xl.t���`Y��1u�Bwrt^C����u���Q�c~1����ULH�x��a8�ݵ��e('�`I)uM�+I��_��W/��i���t����ӿ����^Vj\�+��%�A��/l��ĕ����q~��,� ��s��*��;�E��9+��!�Y3@V�lZ�{����]���&s|�j�Lb%I�%��B=�+��Ss�	�4�PK-wG"�f��}�#S��xYo��r'S+�_���J;q}��k'��F�\��x���`�Q�5B֒fq�u\ND�D��p������d�u8_/+�и�ZW�{&��ª���Zk�%-�2"2��Gd(,Q�x\{Vf� ��HXQ�S�h&��J�������b*��`����Z���4j�x�EObE����GA;ǧs�2�D@�_ե4������h�v�,I��~REI,� hc�Q��ets&`_2SQ_4���	�:��2O�������Y.�v��\j<�d�4����oU^R��K�U|����6��� (=�2-Zk>�C0�7��mf��`�4OrA�U���[�����~�T�+�X[;�C`w�:hsQ��-%�KA�2�Di������� $E�j��s$~��𻆍�^Ϛ���T�ys����+�w�DI=�/^��8l�%���np?�u��w��+z�y��(���y���G>�߷���l��������M��� r3OcfԵy$j�����⸁�9���"���R���2b|��	n��5�/7�tD*�
+Gvn(�f��ͽ�g?RP�4��興�ؘ�?���(ʒZ�j��a��Q�!z����[���3̈́K^�V41K���<l�����Bp] ��;I��3t5���{��і�	|r����v���J����m;ľH�GA����p�Z�����X�=j/h0o���X�1�"n�����灥�ޘ�*��$�9��5v[h���K"��ׁ��h;�%{N���Cp��6�T��+�RL~�)�J�P�t���=K"@O�V�<-�c~x�-����<��?\O�y����9�t��	KH����=3(��S���ֻ���$c����3�tW8��!*]^7Z̈́�W�(���KP����3'jj��O��}ݛ��������l��4S���S�?�%�^K t`ߖڦ	�Q�9x��}�����JKa�#�N��1�W�&��*r�*sKt����3��xZ�l p�]��x7�=Lۯ~��T��=z��le`ً�g������v��.R߹J�$�\%����o�����{j�̪��m�͢z�>Ѷ�&EtF#��G��#��Z����2�K|I���\��Df⍈dÄ9�M�ϣ��p�NC{Ǚ��	g69T�"�	��AGv��mQ�.�^^�[��l>�:��E7=4i����c��I��.��#��|��?��8ǫ�;;��ăx���྆�jcP���ۂpB�
�I��UJ�D)��:"N�����9w�9Jz"PB��D,��](���[ۇ>�����|�r���O/~�2hl���V���n�����~§����r�_��&�`�GM$��*���a\D�b)���)t��"�{C�7sr:Fwi�y�o�i~kk��g��=�<N�p�f�����J��#�b^�ʴ�u#��#L��W�quM8)3�W�n[az(+4�&�fL�eT{U#4�N���dI_U���6�+����R��p�؈��T�Ծ�eP�D�U]6O?2g݇"��ׂmh!��;��9��2HS�T�d��ZO����d�m�%����B�j�D ܬ��%�x�s
6��
�l�%��u�X�#~P��Z�Z� �l�4˂}%�D��[�0�j���ZB�y	�^��Ԟ�M�}���F�B�<�T'_v}u_���6s�p���6q��D,��ֹH�����B�u�aњ�N�=���J�*8�y�+0��T���%}0_;S��Vn����7Ly�)����RV�X�"1B��1��۔��5�kiK"�m�͠M�3�+�������)��$��s>O��t�� ��:߱}�!$ڜW@��R�S�V��RVJ�V+mp��*xΤ�E3I�&�o�t�)v
զ�U��Z�l pQ<т�Ӫ\]�*��"�g!
GG��8��H�g��AE�J��m��TIg�k[Fj1�	��ٴcp�t1� �&�.&��w?��ߜ���6�"��/��_��)4{�9; �Z��K�������`�cU�]����4y�D0�t�Ė�lm�G�s:�1ӡ&���33S�ܗ4ʚ���p�/GI��^�;��䙃��.)M�ڝ��2 ���
�D��MN�7WfN� �=�x��NiI�垔�W�ܔ&�SF\Цv�U�r�"s�2b*������<�ȧ���/�5�5\��I{S�mI��Sa�T��ںU�$�5��xl�`�֒ܢ�>�܆�@�e��X���5O�$��"�l@��P�+Ɔd ���v�����3��R��� ��&;��;/H�6!T�	Y���(3�������l6���"�      .   �  x����J�@�י���(I��iw*ZD��+��.\�
n�_q#Jm-�?�'��F�;�����!�w��s�n��ΨOӤ1uhlZ&�m@#J́����é�w#g/r|����pޫh�Pu��.��`�-�Hʟ���nq�Ԧw��д�M� Ǡ�A�굺D+B��%��C7�c�{�z���m��m�C��I�/!���Q�z-�)�"�
f��aį�	�����M�7�D_+�bfuWt�1״�!�=�mn����ϒ*e���c����|�jQ�d
K��.*�_Θz*�F �W[b�ʁ��/I�����>F#	��g�<�FT�yE�ǒ�̚z�����>��QQ��w�oZ�6r�U��,)��$����=��z'�ya�k+)�� ��4>#z�|Gh�i�]M}���+�Dc[b�>�
��������W�:�T�=�z8�܁O���K����R�6�      0   �   x�}�AN�0E��)��ٓ�М�ô�JA]�%BU� -"J��܈� U,�<�̗���;����Ո��e�g����ڇ��.&.�#Y1x�9N�Ե��H����M�m�ĶA�w���t�7���(�#�H�4�"j3P��/�\q��������u5��_�؍1�83I�2����`I�q������~Ɠ��z�+��̣K�Z��6x��3�ƳL�Y�˅Ҵ.C�BJIY�
k�7k��]      2      x���y�\�u/���S7�v\ux��(\�,�DbG���5��+��� 8��_�-�T(sv�Pɦ��S\,v����j����W�'y{{�=��nbS*�X��=���ߚ����_)���_�������n=_\^���������vR�O�דzw��,6�Q��?�$�����QQ�W,6�����^=�o�գdqv�<@��D��e��y�J���e��6|G����|qN=n�^|�M=M�����%�-��Z=NԿ���q���D�f���$y�?�e��+��L�*-�"O��C�J�M�;��j6�q���w�܋�+�E't�a��Neũ�L�a����d�U<������ڶ}�j@}�������J����^Rob���}�$��ǟ߶wOU�4Ķ�j�ⶫió��[���y�^:S�+ժi;�G�I���8�&�����E����Wi�����^/�H�g,.��p������ P ��9�j�����Q��zJO����B-&z�yї���Z�w�<�7N�c�E���C�v��87�<3�}@�S�}'�<T{9"����S7���"P8���L��~dqA?��U[��}3̓�fς#�V���xF0%q^�W S�_O�F��Gm��z�:m~���O��	]F���6�OU��_ZJ�ݡVw��O��eѓ���Z��iȴ`�j�s��@~�6\Iu�q7a��TdGSb�#N�Z�﨟~fD,\�۝��f���_G�),a ��Z}�%�]�Sp�",pȇN��bo���G�L.���L'�v OqT�����?�$�+6V��X��'��s.���˦�w͞����P����e��E�>�G��ydns�c�W��o���Ph������U�]��z�V�R'6�N]qeg�(�������^�	� ^di�#��gw�_�"� ��%E=�!�j��$�Jc
K�A����~U���8Ab��*�h^�d�
�&���C<�ߨ� 3�Q�#}�A �f�z˔� .LJ����3z��N���Y�L��ѥ�}��:4� �J�r)l��:�o.[$�kjhNח^���˫�t΁���������x�8������KP���+��2l�EzJ�"����o~CXK%/�Zy�Stv䅢���h��~C�$��$��|q�D�y�z�K$�\b��, p���>��M~����^��P�Mx�~����I�=��Mn��0�E퍺���@�\��uE���P�[�6C]�a����� �]W�"�^���t���I��>�]d%�#��;�hv ��s���XP8��}[M�6Rr"�v���5\h%;k	lz�[����01�ȉ�}[�0���nj뎌��d��Y�Y��ߨ;��P�Wi�r�9�7NJ�|�\�g����%2�,����6C�l8��I�/�v�k�-T�Ρ��U��`�"7g�C�����c�;cTVwQ�A�	&��U�4��-'��ὄ��ژ�jg�`8�:�����»�;���S���X(�k~���^}����T���ǿ��/��tJ^���,�vQ�D�5�g~
��Y�H}���5�4e]�Zy�;膷���yS)\[�� ����nXk�]����8��,.�t4=Y��Qh��1]������sM"뮼�.���5�s�Gn�{~0N��Z������U�>�+JS4�ŗ n�+>ZI{��^憎>���Fv�&��sͭ����(��~�/
&��cAc�C��{��G����^S�s���/��l��Տ���Ig��K(�tMl] ji1�� ^E�i��5׬�f�;áfMF#����j��d���nd��7MbV���_��/�� cq�Zyߣ�>Q&�a��G+٨�~��T�m3�	3�@�D����}d?�kQ6�
�0'=�mm�_Rd�H�S���$ ���C#�^�ph�@�������%��Lz����u@D4w����f��������N�}�?���6M�}ߠ-ۙy	g���pܜǚ����5iͼEv.kWiW��d�Q,n��:�	Y�O�DB<|C�5/��j��v���h�a�T����Vby�pv�q�ٝP�Gf�:
���u�
y�:��|�iZ������:��1�mjf�Kܪ�I�Dq�D�ɡ��ߨ �lIN�ʆW�\�s�pKՌ�3�Yነ��ֵ 9��^2E)3%^ ��ZvL#��1�M�6%=���k���W���D�n���>��4�l�3f�q=n7���5�7G[���;�q#x $�l|<s��h>�SO&�w������N7�������Y�������e��W&�h���4���pѸ90AJ�&�8<K�ǆ���VĎ���	L���l,`]�?����=)dV���٨�G����n@0c�%�}�&����Y��f?	3FS�6@��q��<4�+Z ��'���SE���ؖZC�"{z!_=�Ѱe�h�Z.����)�t��"J�zte��)Y����:�u���gt!���Oj���Ϭd��F{��N���X,F��s�7H��*a=y��N�M3r�Ԁ����e%�e��}�!�2ҕ�cjy\�B~~��n�����ݤ�}�;x����X+��lk��Cc"H�Զ�"�@áh@��\Zo#v�Ā�.a�ȷi��{�l����"D
n�,I,����$g��\>rr��9m���q��K&3��K_��I8G�1p��D���l�47�F�N҄�XEg�B�������ca}QS�j>����b<�Mv�GtJaP$jPm���&�Zqވ�]�r�F
���بെZE s����Zie1�s �Vu`t��XS�fx���1e:���ai���3�X������&}x��v�hSdGS'�d[WԞɺ��7��6? \���&b���ݺ�ְF����(O��{C;�o�E�5M�s��k�c�>���ok�U�0a�j(����Dn��?0�AGi��6��g��N�60��jb!��/.�@d;!a���ïK�qvk�Uġ���G.�
�ih���4��2��;�0x���#Ҕݼ܀<�����3
��?\iO���q��u��Ɛ?k�U�!�`{q�;�OhX_U�����侅'�5�����V�:E��a{>hw�8����X�VWԁ^W�~+�H��Kb���M>x��>q�1��:��y�#4Aq�Kξ��y��$c^�f�Uތ	\���àU6.4�����C#�B�$a;�Қ	n�1��ܶ's�E��U���L�-���h��㓎7ל%������f:�Kp�q(M)	=�\�^���������j�Ĭ<�9��@�����0f�%���+�u��n�J�J�5 2BFon^$�� ��u�2���I����Sd�@�ѧYķ�]��$_��a�k&^lY�E�L�j#vV�'��Wh���G���$�E�����L� �/���GڹC�L@r�(�C"=�y?*�=��<j[;`�2n�8���w��+�8�*};I{���E�9:k'o�e�V�}9@�1�B��'�फ़��Y��Z� ʅ���M���Cv�o<�4��q@���׸D9T�����%,A�8�*���-l��$��$LmJEJ�.�;�[H������y��oT�o���o�f�[�<�L�	D���k?�)�RE�w�z���*��e4=,���ބQ�0.B��S�i��G��,3���˛�/b�t��Rxk�WN�T�j��eZ'R�y��_nx�r�pcx]��4S�>�
�G���'+H}Ґ�qB6�-p �
[~�ݡ-���n��%�k� )2~��l�����ѱ�7mkL�!S�h�ic)�5N��\�����~",�j`�ъ�s#�׶�&2?Xt[_�90m��(���f��K��ܨ�3'&�ԏmNӯu^�(�	��Q�� ��qx;��[�����s���@����'Y��z��l���}���,�M��z�p���)6H�\�p�U��~L�r_[}[��mw��Mk�R�L�S
��S    �ֈh����H�*�#�l
�l2�Q��< @t݉L�hgtbP\hT�0��uzwR�ԁ�����jS߭uP��x�v7��4Y�ǡV�d�1�v���w�N��P�ߣN�d Q��,{p�U�eO�I���]v|�A���a��TC	:ǻ����v�d�ۊ4Ћ����Hx�`Bn;41��%U�o���[�Gd)�*Qʕ�W��1�l�򰬇�=�0PZq��A}L�o�&�M�*���/���K�f���,�~�K����b�׃�N�y�B�@��U�∪���㍀g��6BXߔ�iM6��c�@?��H�0�=��F,k6tvNb��`r:�tIH���O�Uc�^Z��7뫠�OM��K�p����jU��]|��3�#�  ���|v�J{ir��{�l�=w	b�okc������HR�̸�ĸ}��~e��u$A�
�4Ҟ��D�}-��F�E}n���(q��3zӁ����T�p���p�@<ֲ��Å؆�W|�d�d��b-��|����G�f$g����q}�׮��~t}[RE��d��gǅ���2�	e��V�����z��}aI��(ju}M�@a�f�y�O�����=I�ښ�FDA�[ ���:�FQ�Q��%N�B{�:�)� �����N�XqR�Ӄ��s��Q���Q������a�w~��(�,1����6`vPw]�������*�տW�������_�����
��ўGGV�f'��B�ٟ� ��G��(y��g�?�A��	v�$͈'��gM?�n7B��h�hl�w��{���������9�����n0Ìc:�C��T��AOD���EJ���Fhr}�_N`z�;���u��Wb_8i��"����>���!���Z+���&oA��V#`��!w�Jʣln#B(�t���_����ͷ����������͸��5]%�܌��=r�� ��ڈp	/��rA&�/�?i&����_���KŻ����b�(�G��hgǜ����ay��5���a&T������x�[0{f�@���'@y�#@�����F�:���'��߬?�ҫ[��ޒ�D�+��[��z��{B���H�F�����$
٣=�6�_�l����E|̠��7b:��0c�a��R���Wղ���4��&Nt�%ë#o��̜��l[VK��Esy]Ѓ̛=&��0(%��\�N.	�� 8S�!\���nC =��, p��&L���}�Y��C����ٵ
�+R�l���G[�����h0�BԶ���{��cW�yD�0����)R�Ƙ�8a�w��{��|�c��YM�C�	���[⏙�DQ
C�y3��[]s��>�/�+�L:X.�q���?ӔS��l��!$4���n�>W����,`��X�3�t�2����O��r�!_�n���0ɲ2� s���~�gm˓�.x����$���s
�!�d�l3'�#	.�XM��4�k;���p"g������H_ 
>#k7':����S_���i"Q��ˤ�V7�|YQǗ�:D���������������Ey�����`���XG�QH�<<+2Ș�d��[7�O�:�����d�N����E����K��:o*76`!{}���hN �Ԥo��n��q�Ɖ$ q��s��VW���O�ju@���+ju����k��7��/��&�K0+aE�x��ѦbZ����5����X%=��l6�K��WC��	2x���\���`BI$/�
�!�~�Ɣ����!�N���X^:��r�8���WW���ʽ�o�,;��� �\�W����2B�1��m6[�k@my�#���\�t�:�54cT�tU;v�|����+�
3}1k.�b���S�x7��8 ����N�0k�B�'���fGFK\x�rU�L��\�M�^I�Y'=������8���j�1ֵ�dF'^�"�T�VP�L-$, �,_�Т�V��I�A��V���E)"�J��A8O��������3T�ׅ�~9j�4��R�A�L�T�)�����D�MC�~?*m�k���
^j��dFӛ͒<p�հ:�Gs�|��wsab6-FfE��]j(|�m�Ɉ�c�	���+�1����6����R�L�vm&U���s����
�Х�z>je�=��7�:ec*��O�:~),c�K�����WD��H�<��jc�4)����˙�(�:L�\��<��(��B�u|4y��:�-�ce�p�ǀ�T�4�;Bxų毤�e� [�_�#T8E]NF�#ׂ��a����c�2�
`RfM�Ƭ��U-&�I0/i�}Xы�+6��e�5��'��E�����Zop�e��7�M�R5�ߥ��@�.v���:�+�����������_��W��#���Գ>�\y�c��r}�9�3g�;G������ ��+��iݱ��R���tLY�g�Q��ښ��:9����JN�^��$�� DD����qn�����tq�] �gOga�8V�d����?����N�z���@�_��g�	J=� ^����&-���M�.���g_R��k��e��M)/��Z��b������TC`n��u��a:�H�r�E�����Þ~Xߥ�C�̱��FX��TH� �t�9gw�O6!�.�Ę�&������o�>KP)��b'c����'��W��nD�o�j�@q1���M":)�ޔ#ڥ�>N]���B�q��˂۝�n���<֊�$V�ϝN@�q�����p�]��iO�A9��b�"�8��s�MGj��8�䓖����UD;eYC�^��DE;q��z4>B�4.��?eE~N��V:Pc�ԥx���Z�h����qņ�[���q��M'�Gw�:�Ŭ�S��2,&Zk���Ը���:$�A�.����Q�M��_��w�?���`�ßw�m����ի�;�M���/:�>���ڼQJ�;LJTg\��e*[r� z;�EK��$��B����A���|����_���o������Ʒ�a(3����i�#��q����X]Q���:@G'9�bѨ�$F�_"iA�foj'c?<�7u��Һ��T��e�D)k%i>�-����:!9�p��l[d�M=�z�����t"!�V9��ӷc��IʶYKtI�cz�<�w�)TP�G#]{�l$o��?�~���2���HL� nDT��_�����y%	~naq�,t�>RT���hIsk���� ��m�tа�#3�v�.����IZo�#ͳ�ir|И<�3N���$�<���ma��/�Z=�\Z��I����G.��T����7
������<�-�.��G����8�J�j�}���#:��:w+1�	���ܻV�LA�%L J������6����:[*W�&�y<�5O ڭ��]h�z��C%#�Mi2��H#f���|��[�}�Dk��7��w�^i[U���!�[v2���ĦD4aR]���Oq����#5vQ�ۜ��HQ�=��;J�P�e��Jg�kk�[�HS^g)��܏ә��m�e����&Ut��F�8���Ś��rp�a��0K��O�N��=���E��5�����f�Dǻ������s�(<T���</��V����u+/�Ѽ��FO���q��%!!Y�q�	2X�v�[�v�"�q�Ĉ�m����&H�H�U�@�[��r�S��D��5�����<�����=���6e�e��ҁ���6��,�ST.|�F/��d�Pk (D+":-��tWW�ٳ�fY�P�遠����(�ܗU`jVA��b�e��'�#���m>�6�"�O"P�n~)�\Ɯ�ZÕ��,�H�p�5��Q^
"��*U��L�g@D28���P04V�|�M��*������Z}Ӕvי؏,;v��&�Ǎzʛn��<��	�?b v8�J��p�c��TM�J�ݪo�:�4I0�s��x��fB5�q�%E��lZO5��m�~X��쟠� ٝ���7    Թ�!�!=1��<����0�5h����aC4a=XL/�a�Xp�y���[���
�����{����6�vRo�J�j���0}sDY���>�TO�������7]����|:�����\7�>uﵓ^���Kp�\z�\�N�nH"\޻&��L�zWAQ:�x�&<S���el�=�y�ɵCN�]ź,x.��ݚ�ӛ�4���Ȯ� �,��yu��Y^�,�<ǽ�t���gj^�!���I�{�x�7�%y��~����w�?�T��K�qs2]���6.O���	9ùp%7���GI��Ŕ.��M�6��=�u)ͭ6M�c,n��c��,���o�bD/�uv�	,�,9�`&��Dܪ8Y�����F7��6\��|:~��\p��6�ㄩ��1��r�����;������q�L@��͟:@�O�a����N��o{�5���=�F����YW�}�8�����֊ds�����V�ҊVZ�J+ZiE+�h�}ٵ�%�ArRYX'��Ly��B V��^ej�<��-\E�+�O�$풁[�mɵQ�󷺒,� 38�n(��Iz:��=�8�ʳ,>㏨`�x�ɬ)O���Q�竫�=J�2�����CL�3�4g"ܫ��[5��yF���_6~�,('%��2�~i'�i歩�=]s�F����T���J�P\,ql�&3���\i�i0
�E/�W���
�[ٰp�@zq����;�L�;Ioy�Ƚ�F�Ub1��s(3��Pi���d����Y��k�iV�'*�_s1��9�1��F���r��4%<kNb�R��LD�X�V�MC[S����pNq��?c�z��==\��w�<��*�`qHj��;}�S����c>����Γ���/)�/�}�扐�,���!���[4�_4�����(9��k?ZB[c��[��N/Ϥ3�Mh�^�gU|z7i�$0�f�t���ZmB�Z7�4/�45�N�+����jͥ�	@x������K�ŝI)��!5�^0=�/x���|��d������O<���ooD��$Y�p��~��Z�z�i�����\���dE��t������� ����uT4����T0��૿l|d�{ڮI�>[P��(+�E�oy��d �h�Tڏ�@.��g�Αۣ*(D�MY��k��e&�&M�Ȗ06ecS�����-/CލxP����պiu�nj�af�:�(<[O�6��F �ͫ>c�=���F�a����.�}l%:gW��U:8e�!up�ภ�ЫX'?�s�OA��;��?��h�E���;u�PG�&�L����ͤ���ɰ�u�ӧ�^'����4ڿ�(Q�ѐZ�oe�G��E���K�]�p�k�qn�dkg�U���L丯��p��?������?��^Q㷴%7�?nb���4���n'��әZ>�*=��!!�
�ݟ��Wy��~��a�N3�n}�U_����
������}��-��;�=z�w�Z=�*;�k?*3��ed�b�"����O
�q�t�`�?<��o�y��hb�7O��L��M��o�$>Q�����"���e�w�W��{@3���x[}�#�'M�sG\[ܠ.��4��s߾�����a��%�	t��1F�:��V(uuB�r)S�ϫ	 4�,ېYv#ץ�}!���-�����ºE��T��a�u�ӯ�_=�7����kɏ^őW�����7�魟$����֯��{���������������`�S�����s�('������j;~�5s�ш���~��u(~��,3�&���]-]���i�Hғ&��̐���y/�@c��a������[?����孟��_I�sx3�&�k�҄����ɯl1M����o)�Ro���y��-3������jĆ5�CM�U����v�
��E�RY��Z� <qw"R�������Jv��+��-�dG�Ҁ	`m�	!bn�x�7���"���ޣ������y�Ty�d�^}P'���Y���P���"����qE��=��5�G�6=?Ҧ#���f�;Dѣ���^����:hpU��{��N^��V��	є��r
�K֪W`�F#	�1�=s>�+��흼F*���p����W/X��1u����9Րb%%��x�q���c�5��jG;屹Z����:��Rko���LW��w��[���޻�Z��$'yR�Z��2g�m�.J��^����B�Y�S�Y�(k&T�7/|}�9NF�h9I�BB}.П�#��Z����\�� �ba��J���R��5�~0��?+������ځד���(@��6s
�S=1g)��0��"��HC�j��d|%,<��������0�x�R�����x2�(�i�u=<���uBAC3�V�D���2�fHM���q2�-邖�T�(=x�r)�ԉ�9����kj�m\"M�P�V&Mcס9I���V�D��]�>F�s*�L�����1�[��~��Y��5�5��7n
�Y�c�zd��k,������V���f�vb����^���tb#�Z��䚤^�b��o��?����W�����2[#�V����+R�Ҧ��)L���Ayi�hB�.\}R�q�d��Cv/A<�w�h��KB9?N��H�?���dY^J��P���^�a~�p�iGk��ȃ�=�c� ���D{)A�3�������doݳ=QN�X���1U�E�����Xձ0�ՙ'Mw^>M
��~�ȕ6ɳ�U���\���T�:ք�<��N�~#p��W9�1�mr�AΜ��"/P��x���z����XCd_�C%H����W �S�8���J�j����
�yy@�R6�K2�K�X[�8O�T�!P�!P����ӽ���fHM��3+��������k͐��o�E͒��Jۚ!����F�Ϛ�V^l#�� N%3銘t�����Š{Q����NWf�]b���=�C�!*8�W��*��5Cj2�L[A8��]<]r�T�k^L=���F��t �m�+�y�	lwA��ʂ�K����z�����k�B��@���˖�Dk҅�����/\l�����c� 8��f�/VfÌh8Ľl"d�jۭ!Ԅhm��-*�B�d3����<耀e$ɻ�,��o�l*)%�����F�1~��Um ��d�*������p���ėix���
`{V\�u�,5�q8��&藃�p9'i-m��'6�q�[�#��s�c"��i���%Z����lۭ���i���#��0r/�5���$Q:��<�o̠��\W�K�Ӳ�+�\�ĮiA�JD���">���+�c�r؃�$P�'����n._���t�U�w3^m΃�!�W��'ag[Mr/1Sq�꛸�~����x� ��ӅUz�J>~܀��C��.89�'W��>�/�&c꛻Zܞǈ��/���tdė�f}��%���}P-�[�����h�악���Zk�/\�q��t��\�[�Q�c�%Fa���{E������ ��ɱ,'�M �l�Mo�:5��.xanAL"U�`�R��?B"���mܖsȥ���z+���_ �����$���H��VޑhM�=�
s��vI�P���D"����LF��־��-~P���8+=Y^�H^w�qR�ƌ(.�"�<�9�QSj%����P�^�]�W=8M_ʇ��Һe[��Q�ݞ�n<��D���(����tJ�Wvwd�y����RK���e�E<,���ȡ�q���M�QG���47_��%[�Ta9����#�V��$89�{}e����(�,���VvO��* �<$=�M�Q�$�\I:}i�d��g�4<�S��	�Εu$y��O;�\�D�Fa��1��� .KS���@�{�"�tꢫ�Y��-��5Cj2��?lpC��EZ-�+�8���m^d�Օ���tC��5jN���[�Q��ʴ�!�M��YNl�Jo_�t�&v>�c��M����q1���;�.��M���'-���T��B%W3�V,�wi�P����;��r!%�D��#�;!�i0�9ŀ8EO��:�Q��/-��4C�=AC�mT�mT���*���K���'�=_����{.������ȓ3    �)yr���~�<�^R�������o����-�V�K++�Th0�	�av�@��(F~����E��H��,�q�R"�T�
]��|�\��j�Gs�Bm[�A� Y�X�Am7�8��1�iY:f���M�;��c�j�W8�PX�P�����t�p�e�b�4��01%�?�c�Xe��>�n-mBԔ�x�W@Z�,��6O�q����[��]S��Mh���-���حqP��f5��ݣ�ES,�l��I��=rc��Wo�)��,:�N��a���̭�y؅����As��?�Q���8žx��Yi+d���q�u��(�qxE<��a�T��9��$|߸3�R���q$���Au��L&����Z;3���	���j���QLZ�T�����@�q���q���or����x:��t��c��v�k'�k�NʢmH��=� K�փ�UK<m��@�մ�����ª�F6����3Y����_P��0x��v=�3+�5T�_�����_�뛿z+�m��B��P�\q�y���*>ڞ+m*�	����0�L�hHM;T��ɴ�@�>�@��@��rf�=��Ԣ[�,~�Y�1�p'^����/��V��/~�������?�:��O���_����䯄�m�!W\�Q�>�.�$FM@"kN�����_�c8S*!b43�&݉���%���ZC���?�z_z�B"-��é����f,��e�`��ʕV-�C��48��|�_&D��tm��B
���]i���2��#���b��S&����P��\Rˉ+�q�QU����_���y�W�x�ש��k+�s�j{_�k�vZ�3���!*	��6!+� 0/`����0��IFƫw��@r&�Q�ŞQ�[����I�2���׎r?�޻�q��P(�d����u��c1����8� ��a՚U���� �%���C�-��DO���tj.�~>B}��*���������ƫ��<2�՘��j?L���[A{YF��@��J��I� �v`e��]WiOc�xtr�\�� �v���Tˢ�.jJ3�_��f����f�0ѐ��P��p�R�mn�=�S_�B���Y�io�T-����?4&��%��_W�s��ė���D����׏�v��������wc��1�z�1�	8�e��>�K�p�e�5'��z�aa$��W}�$o��+_nmm��ʨ�\g'�c�	��b{�Qr�,6�W��n��r�a�(�}�	Ԑg	��"=2�C���p�c��ʲ�n�A����z���v҄��߲�l?�V�%���IC.�D=���ͥc�}��i�?/q_D:�\UF�Ϳ�oD�M��iZf%�P�G4�zD�$9�<Ėwć�F����՟�ϗz��ׁ:�X ��ڼ�F%��I���%:7���*Ou+�)��4��~{J?��H�d�yTP8}��V��Z�N6r2�'rޏY@v��f�WJkH��﹍��'h�O����q�F$���N��׊I,DݸTF��dZ7�O��.�ӈ�Ytc�_�`-�ɲÆ겢3��G����;���MyY��y��~H������ZBc���`B�<��R��^Vv�E;��&�'�40x���)w���ʿ_��ϑ�l7�F%D��
01/�I��ZݻVh��C��h�q������`�s�F�����9!.��������;����i~������� ��w�	�ִ��A��}3''��Ⱥ�O"}�IS��M���J���f�>�Wsn�M����k4}��`%��X�{�,۷��z�D7����o����#�ntF���Cэrg��cpw���v���vsm��}����7Y&:tb��r_6hȞ���_�ۗ�z��'�K`˙C�0U>�N���_�4��ڹ�TYP�$䮉�\+�˼A��K��
ސ��Q���{�]�Q�Nܥ��H���	R������j}p�F�ù߫?����G��/~�������I>��IҰ��8a���ϙ3J/*����@.�7��zԵ<��k��q�a�Q���_�S�� ��X�-��E���u��\��Z��s7y�fv�!w�u�L䳍�H�(E	 #4���vy������ĩP�s�&�S��G3��M�m��l���W �KNvZ
�s�]צ.6�;��)�J+W��o�l��2�4�v���߭�%�Z�����8�ÿ���W�~�e�
���:�� �;F��Ml-y�"�ӘN��:Ɛ ��W���]�3��|-P�'_\�Y�{��.�jSh�$���la�-�]�N|��,��(.Z��J�ƹ�#��Ӥ�W��u��+N��� @44�L��bi��Y�m6`��XH��ҹ6�&�~�8N�]�nd�H�xF�ڎ����=Ր�.����fą�o�јȤ�/�2 	�� ��VA]C���G�{ � zj�Df
)�5��e⛂����w�S�[���Ԧ0T*�L]m�@�r�NR����C�0��-���Ľ��G����d���<|�Ġ*��v�4�=eS�� �Lu)���?9��x0�����-��f<p�eCK��>E��O�����1�f(d��Yd�>���Y�'!^��{ab2B�Cj΂�E�#p��U�01�*���J	�f/+T���|�Qgv�<����Y��5ދVm�G�!V�$s�a�6�;��l�lX�l��P��wi����8Gx�Ҟ���K�`0e�\dM�����%�Q�Wi^yn�&��/�`Rp��
����aY&���!W�K��h7��%����O݂[�$�"�-67�Q)9gyLS*���ݴ��h�8 �4�kO��萵7���Q�:Jb,x3�ڜb���=����M�:	��l�5J�6��L���z@J�Sy�F]�͈"�a������O��-(��ׁ��$�[������c/���|���j�9a�� ~+��!�bK�P�m���Zu����gm�}@d �5Dq\��ezF�.��q���Ʊ���.��ԯ���)�>���'ɟ�zd������8�W\A���;�	���3?��S�=�w�˛�y�t�(,�@��ԇ������װ�RcQ�F��������y�U��5���bV�5�*�P<�yq�O)=�479�٭8Lj�e�h�1�ߎ_�ل:�Q�����]�w�������=G�J�žli��4.�҅��gJ���]X8L?���Ӄ�"�6�<���P��Z��y�iל�T���D_s+*�wFۓZ$g�e(A�鋸���8���K�����%V9,��X�A΃���vӪӈp�`�RD;<[C�%�q�|���p�Z�ϒ*�����?�T��V}גw��xs��h+�.�>�)�KQ9N�\\ �Q�� GGel.�r}����	��G����g�k��pZ������\�(j�蘩���Y����Q�w�Z8q;���:��FTR8��T���M��y�\�x஺����8؊�k�m��`x"!��=̗@8�%Dp�I�1��R� ��a!U����ې����69�6����[�d�d�����N,9޸#��K��r"He�ɠ`N9��B��Ud)�,=��U��j�M���W-҅�b}ePB�yh��Q���/Ĺ�%�f�}�f�?�ً��j��g=�	��[Mx��e�hJ�1�?q�a���,O�9t帄�t"��o�ֆ��UK��#W����fR���`:��.�J���PC�d�r��7�I8�1�����z��mV�R=� ��I� ɏ�.�j�J=u�vb},�XG�B��\�PXT�əc0��f7���]_�h�U�m�5-`�.��MJ��xEvM��aZD�`=H�E�������ۉ���-y�T��d�`�:yQc���U+�*ߜ��Ll'6�\;iIӣ-XM���Rl���̲>"�N�,V,[���|��cS��s{��ϗ�bE&���!�ĺQ&�! '������8�!�3��6J�'Q��l��8`��k*�17�5��ދ/]�,r"����S��    ����&ŗ9�~���#��}�v������8縺ˈ��uM��|��G�V4%N�H�q��9�Uhd�Ɣ�ta8��J�?�Y�Śk�rנ��t<�ƴ0�7D:XjZO^l:]���#'�*+��1�b�-~�
֎U��3ɀi� S��P�!X.�Xoj��SRy`���Ӊ��Zō�d[G
?d^?n��(�5���k���h��K�m�k,�X��<���e�4���t�PL��}K�:���$wY�5׏�.�t�+�H)�@8{��*����^���%)�T����	h�`t�I `ÜMp�3y�P��d_�Y,���A2�q��ִ�*�u$�'f���,t����j�$=۲�g��8B|^��P1Ƣ�!^�:[B�AP�+7UNݜ	RXX��K+�^��ց��[с���(���A}����N4w�o5l z�M����Xq�!&�=w����S�����J�y��褡R����ؿh)�c^֯��J?,���[��J9.e7b�8l�~|�/��X6Hb�+$tQ�l䪻��:(��k��zqNG>N��sY5��4#���BŜB9�#��n���[�sTȱ(|S"�贵?�C}K�qj�Hgq�c2���F6��]4�?�ØP:M��wB��g&�)��G��SLv���{"���st�9��n��M4���[/I�-��)�i��t-��Ӗe�Iz�Q��Ft��N���u<����\u_V���H �����n��GV����ɍSz�B��<KK�6�06�)� ,/�zB;-��"Om�w8�;AFg�����Q4���#*�_;��[ơ
�L!�f0	�+@]g��I���ɲ��u�>\r�w#>e9A�4^q�'�|1.�	>Bw�[��x���mʙh�Do��S��K���F٤k	�	�܏��ܺ�����=�~�0F���}T��8H7�*I�?��RA/6�Ǡ�k?��{�p�3��p=ó���(�ȡ��_8�'�"ZJ�R�Sy�3�a��;nPL���PA�a���58�����}w�pu�"�I�t����HI�h��Z}8�+P�2�u�U�⋆�Ps�,�/���L��%I��SmLS+_}%�(���wOw��*�BRs��s5S5���	L�XO�W����qC�E�r�5�����^�u����[{����i}	���N/�g�g$� 4�&;8�--4��><�s��
nd|�˜4'N�M����e&H5�
�Z|.�_pX<7>�-sp�pUp_��8w��!5�@R���҇j1ձ��ъG֐�;I�|�n�l��n�bTsA���{�y��E�=^���3=b��2�Fg�v�G'�Pj�2:��#=���4�*eCd���M\7��w-o�+h�Ц~��):{��^D��XC��z��t��?҆�"�ʂɅm)N���S��x�d¹�G�z����9�c�8(�8�"��
G���m��W����J��%dHtH��-��+�P)��m�QF�C���ڕ�[$G�	��o�X6lk���#��(���
k��3&�%�1Vfo�V�}�U��RP_�X�t݂�M��5�25�)���}@��b{�"�.Qk~` �P��'�-�k��l�+ocm+U�8��@�6���f�B%�����zӄ�(ZֺnG6fq�U�ƜJ>&��v��a6ۉh[A&��������L8iY�*Hע�� `[ꤸ;���b��Z��$_�TXSI���X@�͠��t)d����ԩ�ُ�ُB�&��YTAc�^��mT�p��bp��u�Ŗ�_�l�sQjO,,V��2��[1G��	c�B;F/bɲ9J�h7���
,�cN)n�M8��rA&F˥XCjz�fl�G�ų����c�$�b@g/?��/���K����W�n$�f���{�1����ژ?qar��R��B݃���;��ݾ[����U۱�2�85����.pDP���s%���L�\����pBC��^Q��j�a����F-7(i�B{��i�,�?��-�щk`Pn5g��mU��Rw�k�2흎�O~FN�j*t����a-�D�'�g�u��� �־��&yp�e`�!u E����Ŝ���Z�6|AO���eRrE�����ߔb	�(�|%Jw%}!Ow9R*���^J��	�s��]ݮ���OE�R%[�Y��z9���{J��~=lh���PEb��7�G�Q.vw�^�S�#p����S�Px��&�$�#$� 8/-�"�O.�(*Y,U$���q�`���A�l
���L�;�(��(&�Iq�fM��Έ���q1�F��]� ��:��J�C���kcs�13P�Z��c��(�v+���M+����tS1���p��&�c�j�=4f��r�r�S�Rt韭�lj�զI��%z�����&�]23�ظ[�Zm�Tg��g��㸉���yV���R3���[Cʤ��Q]S�C5/Y�^hNN�gLV�f�}�1�@Ҳ�W��G��c=�5�#��A}�`iOY�ܴi���D���TR�md!�� ,ʉ�:�{Kݺ������f��w��6����G��Ks�E�d�"�zSK�\�r�9*��%V��xP�Et	���s��\��܇��ms��>|!��A�����o3�6�D�f��6*��F[�Üx_�l�a@M���'���[����ӊ�`�/���_�aޔ̰S@�*��%d'�5�:����0��x4��%�}��8�F7��f~s� �=�J�>|u?�ޔ���Q��D=��$����n��R���X�Y���zY�D��2�%e�z��2o,M{�8i�������8ߥ��d�;�9`�^���5�r���/_�V�IWoa2����Zbm첄��>U��-�l�uɔ�v�A�@�E%XdK��qb�'[�D:Kx3��˱��C�{A2�"Pa��Rz�+v-��
]7�UTtee�K�F��}��p�,�cVw�P��$~��%�._�!��,<� �v�!�9�ƍ�.	�t�͑��M�}�PE9���S6Z���9���)5��שd�h@V京����q���S�A�蔏��E������mk�ÌL�v��j��T���L�	x��zF1{����ڧ�I�Lt�n�ɲ�;̆�R ����d�G u1/�*ϫbX�bXϦ�@w���c�i葤��v�RX�aDT�4�A�d��v:���_���V-Va�2��#����?����}�	�"��=R/�2"Z[kt�Uq�Uq��G����ld���q��+�z�׃����
�,o�ey�ӬnU�KR,NCr�݂+�����C�Ը�eHу��u`�3��tM8�j�d_k'EW�х�ÿ�Y�5�#�;;y_�hU����������\.vЋo�1-V�e;��vR�`��+������92+ӥ9.��~5nL��v�"�f���LvɅ-.l9��Uե���R!��,����+L� S��V�����g���n�c���6��*��1�B^W��A^_O���,�P0�����@��9�k�~	�WA&dU{@��P0oW��
{]a�+��s�^>%��\�z(@(/=�*�.� �P J^�U.]p9� ������z-�T���".�:~#�ZpA�!���*�c�U��@3�*3!��a�07v2Cj�Bx�
c|�0F<Q�F�L�>T���V��s�π���)�|FH�K������j��!�Ύ����ϼ �)+BIV3�Hu)�5��&^�Yl��A+Psj�@���yQ����ЗRL �^jL�'��6��
�{q�&.A�l
��
�\a�b�C����'`������V�/�0;�vZ(��!��\0D_(�9�?2Cjڂ��B5_:Ts
4C�}i�j�P�畎p��9>#���4BO;3�6e)豂�VЙ"��ƀe.�+�l����t�B��O�#)& H/;v6Z��!���B�^(v6���!���'뭰�v�ѐ<�P�,��c�����fH���Vͱ�hB�U3��7�W�
�y����)�|F��K��][͐�    ���
��R�4��ndRDt�z"+�fӬ`�L�B`�K�R,L�*^z�Fh9m��ҟ
�x�0�����R��W0�
�9��%�!E^b���i���fH�hiy���4(d�� ��p���"tu6Cjڇ/���ώ7|V��HI�H�c+�l�=��́���)�|FP�K��	��͐ڔ���
?�R�g���HjD_v_9g%ۏ�l��kR��>��3�~:1M�X*Y�;�;=��emP����(v
�,�R�\��ng{�!X �V �Q��&�iw
�oS/`��)��mtFzυ2
�oP��l��*�k�!l�,��_R�=��:�8Ý�'�гg��nm�6��T�S�����M3|MX�,�z,��������W`��K1	����/尯�¾����_,_��[I�[u��c+0~�{4$C�%A��Xf�x�񕬶V��VK�e{0��-ߊ,�J@�_(_�F\EV\%Ē����`�d�\�L�љ��g,k%+R+R�v~���J������
�_a��+�^��z�Q�z����~���^~֕��.;;��Ϻ���Kޏ�S!L/?���r��ć/s���V��GC2��%ܽ+FFO��+�4]�����1�Ϻ26�%l�+ Q/?���k��׮�d�7�H)I��������+A5�7d��}u.K�t������)��&yXQ��(y�CWx�$`�M Q5a�Q2ƏL���i]ob+����wI�=�=A�'Y����L��K��]�6Es��ү�����b,m��xb1=A&�p�?��PlG�P�6j���q-�lc���]����������"p����o)w��R�v_�F��Q���'Ȟ�4�y�,w2F��!�qK�H��e�] ��4S�w��w����0J�Oȇ��{�t(2a�d�J�\((����� ��j	�����AB�"��G��1VO̳�Rh�R��e(�T��l�>D�J���Ʈp�Y-��I�j?ѤK��k���?��o}��<˾���4K�|u�v#.�x�eJ�~3�Y�5���גI�����i��U�>-�vE�
;*_�Bp�~Z���5�q�T��E�~�����k��v�S/�������pۗ���be��O�[O����^��>1�h�s�YN�m$�F5�� �;Ϗ`!j�����~1T.K3rw����t��9{Z�k��D��U�H@�)L>�䑵�]�����Hd�O�GO��+�S�����ǰ/�	�C�,.I/C������p�� �l���.�ڨ����&��Q���#��}R{���[�E�����i�*h�Tо�<k�,���b�h%��?��[��P8ִ �wM͑��seO���f*��I�UdY�Q+`�A(x�/��/P��nhq�	�^�GZOy�Юd��e-�OZl�׷u�M4�l�<�w���y��j5ö�$}[���p��� N���';�=�,6� 4�l�l�z�)~s5���y7������~�?�9��wA��_�7i�yWʹ���꿷�,R�V�0v������Mn��KT�?H��K��"Bf)5��P����
/�r��ö����;AW|�V�2��2Z�؏;��e�EI���[-������#.�֞�Y��i?��"5�]�Qr<�vH<B֕��_����(�$�n;D��S�[�%�y��!�����mq� �,e����ѤZ����KFw��"�v���{�'��I��w��Vw]�!�"����@w���,e����CH��P 0��B�L��#C�=��9j��@.�%���bT"N,'�X@��ɥ��%�	c&�,��<d��WD� ��86�o� �c3���A�Eݰ�a�Ji49h�5���2�޼��yX��q |�zu"(;�a�.�g����g�.Jo.��<�u�������P~t�a>�����A$6s<��Ƈ��6��Xp�ہ;�Hbe�仇<��=��QT��Ū5xg��c(�SE9�����g�{�!w} ����F�kd�].?v����E ��V����?��臷vM�m�a�S� :��y��;��2�2<��P��.�8
�w�Wv4(t����Z4ϸg"6�|�<)���!�X�7u�ƀ��9��fg�,��w�ه�5F���
Ӊ>� ����'IŬ<;�E�=*���"�l�OM/���R�MX<��ʘ�K���y.�f���!
(��	K� ��h�v��%����G;v7.�}q�͑tW��%��h薋G��l�4џ��uF�X{��x�@P�};�6n��+Kޤ񏋐w�V2-~���/yx�%��;h�Xg	\Cu�{sC ���pk9�f�z�~�UV�6p�����!�7�9}���v�	�Uq	D � ?PmV*P�b�u&�B�������_Gהe��u�4��/af�Oϱ/���"i߲��
���-b�#썂f�~�4nI�&:+�݋=mV��+�Y�uKC�*#$y��ל��Iѭ���������u9��6�Ę>��j����?r�$��2�*�5��:�2z�w8,�,����Nx� �N�&!*rC�H��Y4��Lx��ʎ�@j�;ղ��CΜm���US�?!H�ψ4�1= ����^��e���.�(X�g��9��˧�s?�\bI�3i8쬞����yo�B���y�
'��i�<G��`��p=�g��:��T����'c�~.��􌿒x�i	�T�k�y�S��>�ۢ 0�/�(��S���I�JaWd�;��t�Px���{�m��/�&�̽��%�th����YPI8ba��G�t-��¹v7�̜�	Z^�Ç"H_�1t�ID"���D}��j���V�d�x�P1�lyv\�}�������
^nv&C20�Yt�+|��������W��
�_��+|�K��J$����J��$��M&�4�6�8�ƽT��0#R�.�^!�+�{�|?5��9	�^����ՋEn")�/���@����~q`"X��E�����2�K{#)ĽgfHQI�sPh>O��Wi̐Z��XXU�]U�}^Um���^J3�Hr��8Z�Gxv��S����Aŋ�~Ku�FMM283oĵ� B�o�<Aa�C�{"��p�q'�jUY������Y��w��:��+jM�Y��ϥ�A͎�-r19��Q�1�qnq/�R���G'ԡb5opm2˞ő=~:)��6�`�)gM�����=ufH�R�L�ĎfD�s��:��ʭ��0+M������*�xi}!#�*�X)�Rc0��"R�<T��"~Gm��D1�"��+�|ض	���p�@o�H���@�VX�,DqH-����l�e����Ī:�dL�5�5�e�o�%�N�S<�+��uc��G���q]�drJ���
��]~��d�RM���~z��yv%ZZ����g8�2�y����o�{S�Sd�F4��U�Q��%ѓQK/~�}��(�K}k��k�p��d-r�%BX�,�qH-�/�<��<���jM��n/�2+-��d[����b��+��E�B��ۓOS��I�Х��2�b*a��~���C7��mڍ�U�2ڔposw�4ghx� �Q6���6�4s_��z�fmjzp�ɤ^n��#W8���R�5+&=�F��x�����G��'���c�Y����У�Uk��W,�n��5�y�2�4MrS6����F�E=�����Ǘ��5X��an�R�+���f�X+���8]��H� ���S��*��}kP%�4Z���/��"	j��4/#������o\�;q\��;!i�^/��>T��z*m�lQ��*�uɾEd3��� � ����}���@�������,HwE�6s��Ґ81YLP5�*�������^����2���ͪ4y��/qir��dn���W"�ȹEX�C���n�}������H4H	�"��USa"���dN_5���M0��NC;�@A�Wh�[���V]6X0�����|WlpJ�Ĉ���-%m�l���>��j�&����� �H�'B�Pl��DKz����y�9�"��	�2�x�� �  �~�cQ8�f�oZx�5���~L����@�z�"^�ĩ�}���ģSD�n\-Ni��h3VI�.D�2O�]�v9�:�c;�q�>J�K4�6!sD�֪R�<�ط���U��Co&�VfǅԈhC���.!�c���38O&l�7�0��R��k�+�Dg�rSo��	5n�y��P����.cz4vI|�F?"K��K�)�ڎП���)X]�h�U\w����=�0C�	;�m,4�7C���(�z��� ��!.d��A/(ZM��j�W�Rf>l:����j�I �}���pX�ͷ&jn��X�7EA9��|U�[7��KM0�%lo�gM�.c}6�1F�&�!"�Ҡ*|[R�Q��Q�{!VB}
P��M�3���=J��l�S������K���^��F`����g�(�0�*/O���p���Վ	d�·nL��F��W"�����_������گX.lF��яm��a2tD��"n��r�[^߃�ω�ɷ�!�3�0xgf�.������d�����-=�b�U:��,{lguSxй=��78�r��G�o��
����hK�yI���N��Er0>_pMц��L����4��@ɱƬ�t�r>\5KT<7Y���XO<vY��U�[�O�º��vl�P}���O�]n��|�ұɪM�U�?�\�t�����j���쳔D2����ח!�>aev��W�}_��>���RD��D�5&�J*�V�`�`}�����[wr�
�M3�)�ES*�nfy��l�Z"�%Q}BYw3��[|����(Q�Dj=K�f���y����ɻ�@S�Լ���b����\k�O߰��
'�u(6�W1�O]E�a,��6�t�m�z~�?������������?}�g?���s;y�W��ǟ��x^i���y78`������X������ɛ����͌1�K�,�_�3i�Dt����D�4H'%�NOs��ԧj�����z�	�kc��|ɛm~�٘u<�;��E{l�h�t:xy.�v1̴�:Hk�ڠ��/Uj���W�w��g�3>�C����PSۯ���������Z�gW������V7��������?��G$�s^��;:��5'ѰψG9�b���3�}��F(im�{�O��JıEs �g����qB`OcN�$R����M�Fh՜�����'Vѹߊ�n��XO�cr=����	�i��\��B�lrO�\kr��Ȅ�fH-�]�� 8��uL,��6;	���4`+�m�'�o������B� �� ��}A�����w���F}��;j��q!��<��m�i��+U���ܪ�wzJ���lUȪ({1��+��+-�{ܧf$U�?�"Z�/��FU��BZ1bWB�Ei8�"U��镔^I镔>���i��^U�����y�����Biw3���>V2���h��j3�x���U�~7Tb��w1��/�K+�1Uߍ525{�L��^+����#�:e��թ�:��ii�A�Cj��N�i�b�̦I�س(1������q���XCj6C6����ڌ��b�Epp�Pkh�R��*��� ��rVi����t��Uw����-H�U���.�|���xP����*@pɫ&r�V�>���Nu{�o7:���K!�Z��7�6&Q3"��>��!�7��<O
V�4�{!&%XD��RZ{���E�Cj���&�hN;�W���M"9�����@��j��*����eb�����R�SE?�b+iF�B�c|ũ�L�VVtH-���Y��
7�i2�Ҁ��QةotΜ9Y��0] ���|����Ճ :���}�����e�T7�v8��l��ӍL�RS��z�~/̨f���;��!h@�{E�P(\�J3�-q���&6���F��@R��̈�:�D�m�A"L�Q��K��Q�j/��aU��g[�)K�Y����nڷ*�E��T9�HN�#�ʝ7�.�dKaͰ=��BGc栘����s�.8a�k��A�z�`,E���	��\,��s} \@M�38��QSNC�����i�;��j��汖��압Y��̠�<c�S���@c����2��&���$E���I1<���a7F�֐��@�ӗ�Z��bN�]ٗ`>����[#�c���_�y�96SP��(u��ȥ,sP�z����Z�"��d�ALfK�<S"OD؅�N�e��n��QfR��a��h�y��U��t/(*���J��.|���Q��d��H���:Jϻ�	������֟�$ca�M4I���5����!Z_�'�r��h�0���R+-���|���t�~��E��RK����,D3���3�R���O�خ�m? bw�5�x����	V��,-�tq��Z��ך=�Z�"-C[�Rk=F�i�K��<D3�!���_j�+���P��Oi�I���C���Z�2�R؀�{��'j�1A(��E`U �T�aN����������T,'�-��F�J�"������wO�����l�5��R�ԡ%'b��!}����'�^2�oyJϡ��g�i�n5���]�k���W�h��� t�-TDU�}�$M�9:�=��P��U���@q7�N��	�D}!��R�1+k�n�f�>��ͮVܨf�����ȯ�P�Dm��?,�Fi�!��Hɺ�DL9�ى��ԡ�t0C�V�n�I��|E<l����l���]��	�� �k�r~c���e{�|��~������M����P}���O���A��au��r��v�D{�� �A���1�+��Y˰���_n0�� ���r'���~�̫���������Ѫ9Qk�,�k2��B��;ـ?���%�cC��#<��Vٜ�P��i�������      4      x��}[��u�s֯H0@�ݩ�UeVc�a�]C��'�hmc!�,-�2���`���s4�P����ב�^,�]�b_�����_�����q�z�
Q�����'"N|�ĉsɢ�k>k�i�\ �?kV�2n.���/g����y7���9i����>}	?^A�*��k���k���<�i���n>���^��ERL�?L�#M�<�/9�g@�is_Z�7����y��n�W�I�O=�9M�"*.Iݣ�ys޼��|M���B]�S�M�2*/I�S$��3���c �>��?�ַc�~AO��?�,b�`��}ϟ��^4�1�_�����,d\���w�����o���|�o�����b����y� ����kH=o��1 u��1Pq�?[�Zߌ��x�"�'��>��عX�R�"�L{�W��y�_�n�dM߭�otE*}E�i2�f0W�����0���i���>��]x.2a�<ɲ�����L&�bao@�Y�H��͓�As�&�D�@�A�0a^�����s�F��<-������p�~��+>��;&�i���<�8o����`��1����t\"Xu�l}�h��x�I,K�@B�`�p}�hm�A�o"'h�����9�W��0Џ��|����L�s�v��Qd�c��#��+W`��8@���1N��+14�	���?_�SI������y�L�k^)����%n��o~��y�՟7�v�������SZk� �q1p���\1��/`�cw=��.�8�.~�,��vs
�|�!,�E2Mp_]�`Y��C�H�$�]Z]3��[L7-�u�z�eI���p��O�o�8�CY��d�@��V�}~vW��&�L�`~bZh��k�˼Ĺ8G&D:��S,s��GNh�h��ۃ�9r�O��	rƂV�<SLp6�#��_:�i#u x��Z6%V�N����,����4I�'���4c���������FvٶGq{e��#^d[�>�5�������vjω�������$o�w�@��Ǌ��n\b��:�c������/���2��C��SR�����!LÇF�>����{�ak�b��U�����5�ƾ�_6�.����I�����A	m�u�n[���ge��:~��j�䊣G\y�����LA#�xz�3���sF�p}�چ;���� ����/ana�g��	>#���xW������%�+�;i-I�c���T����ʀi������^C7i���7H�� �?�w�l��p�n�.ɨ��s>�v5��8��άDa����+s����C!��΅��]�!i�SXçͳ�(A�ϒz���/�Y`��?��.��π7���S�o��� ��;�vk����Y�.0��s�	@�9.�C�`�����M�h�;��{�,x\�Msd5�S��<vF��!@�=�ߎX�e@�b@85RG�yٹ �~+�N��Y&	�>��Twԃ�W�xm\��PU�;��s�����\?�bӤ�*<�#Eg4�8���6���/�*M�|�Qi4`��'{�	����M��Dސ��dl��N���.�!��^�17/*���@؈h|���W`��7�ܿ� l������s|&f"ؒ��Ә�3S�UUWl�X�3r�m��8���AB�e��CR�N@p��h?x@�KOȂ��2��QE2� 6��bpWd+P:^��>d�ܵ����Xg�M�:�I����˱��)�L&%^�c+h��r��@�)�$�I��� m)`n�ԑ���"?���|ɓ%��!�-@2�M<hD���B����T�ړ�t�RM�ﾘ0�,���<������%*��P��?����_��N+25�����5��%�>2���S���m��n��o~�<�͚��������8���kLV��͈������3Vҝ�ى�t7�d$߀���.��gն���3՟%��,yy�i�7x�F��Y�#��1�&壥j��%���<<���5O��4[?:d��9vټ��3:?�y�;��2�0��J�5J�x�9���f�|�g����'R�dG��Ъ)���A����9���^���`�Ӳ#Ð�u���.&�"4��uA�f��D@���l��б��P�IL���9��p��d�¦���A?bm�ua�<k�d"�4pHP"�,�h{8�=�+��Js�h��綻p�U����~����@ׂ��J�U@��쉜��GV\vz1���ut�ٗ��V'�����O9��1�H?2��!ᩭ��Nc����y��@Ħ�Zr]!���? Ġm���Ӱ�������Qi�,�,h��	�cq�.�&�3#_)��|��$H���A��3й�ӝ)>���[_���gy�k��u���`�ܱ�-fU�~g�o��Q��-�;f��z�'I����Еl�̣9)#�~#��c2�]���y>4����	�q{w�Լ���ФK�' 0���=�p�:��=�Z�W����T����]K,���b��I?K��*S��-�/6	����H�:i���h����n43���]�l�qw�ݦI�F���vN�q�t��x�_�Տ��^�(6D$9����{�I���d���t	�\�Ф�I�fl��])�m�-[�^��X���p����ͯ�lV& ���x{��-�`r������i�6[�H�A�:2;���E[�c�c3W{1�'_�ft�5�>2D�E�8��]���ꈝK>�Е�8���.j�w�8$�	,n��'I:J������tƢ�\n�;�O�^�0ث����h�T9@� +��31�DX��\����b9r��/v��d��`,�.�akG��P�$�%��{�N��G��ͻ����4Ɋ(+�Z�z�A��������#6��-���r��P���*]��w�
���uJ��g���0��Y�%��&
��>0�+_H�s䠭��$�QR����.b-f͓x�N�,)�����l~�	וj�de��i�ҕ/G��08���.D�4ɦQ6I�L'`F�"�	G�����4ɪ(�B�o���}�O0t��Ps�!����s��L�5$���I�Ey� }P�$ϣ<B�t/ϓ��iyN�$/��I�o8M����08Ƚ��M�Z����cB�i�Ϣ<J/>&t�&y�apPz���4��(��ҋ΄Sf�y��AB�e�3!5M�4*� ���SG��I�EE$�^|��i�yT���SУ[�[B���C�Qc�a���I�f���{t��;ˣ���ܿ�mM�tG����dD9������� ��4�t4ru;�
�&l撓�� ή��������v�d'l���I~m�u6��ݱ��'�u���d�������6�w��W���7�'��Y7��kրw���ù����=��1ھ�}]��(%�F���̛��9�cɱ���%��s��	�
�_e�|s�3N�7�+���tEM���
�S:ƨ��1�9�ܗ.��iR�QA*�]qu:���)�I|A�lcg��E�W1�����6CՊ-�r�p��~�w��Y?���Y=iݺzg�".:��k%|��8\����ټʕ.+������@S��O�s�������/����n���֍���͝��}��+�v�h>��9�n`��;���ҝY�ܹ�pG�W��
R��Z���{����75��&qw��A1�\XaC�@2i�g|��jbm����[1��>r?��v;�M{}�ڙ������]A�}��Q�x��i�{bG&�����m�#��$X�����!�b�������]qO�{zrg��Y���͝���NӤL�������F��Z�����e�.㭹�����qî��m&T�;�iRfQi�಻�!CY$�6��`��\+v����n���]�L�|Y�v"�����1�M�j��yT�><ﴅ��=�f��+�;����f�GX��K���	wkеw�n��y='	x��_�����b�ڿq��!�Θe�����u �3L��5�<��X=���/�~�y��s��K:=�    H��͝�r}��������B^D��5�����p�၇���w��RC�ZG������p��b�N���tj�����u`�� �=��m��o~u�cv��P����x�ޗ�>x�R� �@IB�_kק���C	�9� ^�5yo����%KG�9#X��<=qU�F���ܺ������G�p�q��H(��K��[�<��`���r;�|���M�r�>��u�R���&�4��r�z���4���\y�J:n�L�h�ޟg�	��&�"�����o�4���4��?�Ts;7Mfe?���馜H��i��`�O��������!Qӆ��K��q���������Q�7����f�\G��9���m�!(
�{?����ݿ��W}���= Y-y,h��8���/l,�8n�M�)��/X�1)�Dv/�9�^^��X��"}c�4���׽쒓�{�1ɢ�
��41�S�k��D�r�94�_6���؋��(�mm�先��(_4�������u?97F�s2:�$^�ˁ�+m���nt��������e�J�c���8-�y��E�Zȳ��nsy����3��l��Í����Y�v�u1�wjk�h>k�wP�l�Ё��aG��x�s�Ylxg낇��4�N2΍��U)�u��ZӑhxB`C���K�Ƥ�՚��0UO�5/�~���l7�T jH�u�<��`a?#�.T���׋K�k5�k�l3��.�ݛ�@�~��ӳVQ\��w�I��#����D��f��}}��R7.da����⓻ovA[������ʆ�<������+�S<U�d�ml��b$��i�H��~]2�*�aܨ�V������r�m>o����as��cP��еnۯ<i~E�Υl�s0 �\c1��[�&�c�����J8���Q��(n�xF �m�*���ZW����Y��6 o������s�x�D0��n�,�� }��H��.�2�3���F����f�Q��	���/n�Lgє��pB��Q����/��җv)������{���_�t��T"��9����+�zB�S�����v����Cg?���	���Jo��N@z'Fz'(��4���L��?!�?y���:q;c�oY@Y́�R��MBc�Ί�A�1�h��"�uc57M�U4�C���fnn1��<�S�_G�����n��ɴ���8(��5)���fQ0�Đ�r�� �a��c��K�@����2B���3��b������м �ι��	>@sP��K�&��5���0�������F�w�@<:���+ۨ�f����ynxl�o{�k=H"�iW��o��I�ah����{�x��儑p�,�M:�&������#Т������FY>R�{������/'p�a+��2�T�EM{�؃�4KTN�|?��V{O���b���W���-��k�����}��ñ}��j�#*��{l��EEېfG:�~��Dș�x=N�cꄺ�sZ|u�z��=�{��=㴱��`qF���O�'���"y���ך�k�M�38y���*.Cn��ݭ���n�����ᤐ���������w�������A�A��H�n����7���(�SZܗY#�a�Up�0�r��=v�1(��-1)+j�K#�c��#��C�$|'�����B`�NiA��g24�N���.T[H7�y!�������������w���������_����W��~�������}�?���ۖ5v6�#)ͼ����߿�?�w?�������1�6���H)��dâ=m�r�r��<��-�Z�� @��U��^�}_��$sb�K&��G +w���5���	ms��Y�=�\=��4.8|�q2w�ϴ��۰W�d���bw#��+W$>�M���<�}�k�m���A��ᡮ�`����y�;�Rg�;�lb��Ǽ�����t���P5�4�,vnR�xļU{Z���	�OE~�MbØ^f4�d��}g��-�h����l�V^�^�N^r&@B\a�I4q��wYS �#,���.2�����R�5 ����N��"�MrjI�8�;�C�̅� �&�%�lg�m!yJ9�3�1=�A>E��0��W�	G�k�|��۱�204$b�qM.LZ��^�A�잎U�%QY������o���ocCN��9W]�(Γ�Z���1FM����޷�-9������;&�2ޞU��:�i�<l�;�=�~fl���
����sx���s1YL�^��h¹�a��k�&�������vd��b��a�5���Tj���~r���l`'1� p�/�k�� ���N�d�E��fݫƵ�� ���?��η�^s���	�ΟP���vǸ��b��wŰv@��u:�5�l|Y��gJ�,�\����VO��2�p_�j�$���.P�K�]e�u�1����Kjp�����7���=?�C+�p}�hm3�&�c�qg�y�h����mlN�����/��BFF�)̖=k��8���ƜΈ���a/�F�l�Pr9��3��k�~��>�m��NS]�r��PD�G�3���f�dy��%�&ci����.[e���c��u
_����>�ѩՊj>2�ִY[ό��/WW�����$m�؆��!_��u'�z��d)�����z��0^m���v<c�dh�9��X.��*c�N����+�St�>g3�M#�	%O]�,�g�l�{]�,Ϋh0�7/t�<j���h0�7�f>q�&�y4���:PӤJ�*�W�7��4���
�Y��5M�<�BzE�Y�iRQ�+Rς�M�����^�zn�TӨ
�!��q�&�,�fAȧ��5M�*�B"�T�S�uT�DB=7M�yT�DB=7M�4�C"�>4�:��88�� 5M�<�C⠞��&u�!qP��M����8��~sӤ�FuH�%	�z�!QP���I]EuH�t�������QӤ�GuH�t���<��!QPN��<��!q�ҵ!j���hk}P�d^D�8��Os�d^F�8X뻀�&�i4����j��h	��dn�̫h	k}Լ�h	����y4��z�07M�&����}*���͸�H�ў1�M(+�զ��92r�%ݕ7O���z�|vm��t9Ǒ�Y
�t��/�:�}��������H�w�q7�'ͽd���=x���o�����5�l�)�Ե��|��~��ä��6��&�8hs޷�m���r����S_�{�񘷵F�d7cK�&������&މ�G/���M\�J�O�81OOS�o�:��ϲ��������ڟƉ�il��X����ކ��n����l�[��/���6Y~��}&+8�T(xb��╠8�����\��i�n˽�r��r���g�wn�h([�c�r�߀�!��檉��^D�L���'=�[��;�yu}p�٢SP�����}�y��y��f�U�Ovӈnϙ�S8]���
�f�Y�� |�+�j/Ɨ��#&��[��я���M�r��rnz�0�_�<B�[f�1�=I�Fx��Qث�%P/�g'�����8�L�����t�:ӳC8��	n���e3NF��HJ�^G� ,��ѩe��aŝ���u�L8��X�������`�g,݁�����m�A�8����øR��������i��ڕ�q(�/]��ƍh�:TNt�a[���le_#z�������}����@d7 �%��DLJ^7<dSu��͘'�W����b��o�6V�J��V��:#�Ӊ�7uR}�}����_��K�����/*�X�����Z��c�`��y�8�?���^e>�����Y��{(��K܏t����Բy��ofy�����l��:�u��S�1s���	:�>�m%�:�k�W&�1�W�Ϯ�gB�J�P6��nQ��t8k�-�<v�)��=������ER�Qty���0Q�@wT/�}p�b�������InƠ(.�k�(�Ly��qSB���?�)9t}�.LV�aGY�x�q.Y2{��W�
=U7�V�#�BV}j�M7��M/    x�=��������_���z�)N�O�qQj#� ��$���%W�� ������5oB�C-��'��O���&��yD�>'��3.|��D��7����i�a��,�J�vC:L.Ir>v��U�I5��e��.�&����/�Hr�Q���Cq��z�_���i��9-w��4�ZQBm�L�{6���V�6]p4Ά	TC�巷�&�����.�ִM@&�aB�Q�����y&K���	��t�x8#��#��]�g�|�N�yN).�v5~ۀ��9WT�̫&~ŅXk��W���;�l~m G3+lH�ީ�l��*��SfN]���΀�*ݩ�K̵_)�M0۠�ra��l�3E��I�R��@�ar����(R��ye�S�;��<�S�i{ȹ��#+��E�K��H�6瘰����	l�����I?:Ne�S �UB�~tH�:�ATM��l� �������VBV���@H )���s�U�a5�`Ѩ��o�����j�Q?�~�e?��
V���A� <XU4�Fg�B�P1X]4�gdd �UF�~tp�"�X-Xm4�G���ae�`�Ѩ���M@�b�5��& K��F]U`M�2!�Q	ձM@�b�u��& P���J��m �����4	��EHlTb�l� �X��Foc�i�a��2$6������sʐȨ.�& P���J�m ːȨԐ�M@�b��%�$ .�!�Q	`�M@�b�&�$ .�!�Q)fk����2$6�� � �X�DF%��6M2f�(����w7G��9��۵�����N>!*��	C�*�r�냙Rm�Y������zm$h��DC�i�[�_�eU�q��+k��X�®��#��~��&_�����O6YLu܅M|=64�a8���&6:��s�Q�se�K�$9�c�=9���!��3V�dZ����e޳��$dQȴ"����i�dXxg��2�O��m6t����DOg��:єK�NbO|_*F^�u��c���,��M�d���7�2�p������x�uw�?l��f9l׆��%�>A�5u�O��x:Ǘt��|�W�mY�5'd93��=�z��3b����|��kO��jo�ҕ��Q:�$q�����f��Gb$���d!A��T9�8�R[\nkK�S�"�#�#��T.��Z��KJy��I���հ�~����.�Bmgs���#�n��oSm��Kf�f�vD�f���q7�6�MJ���U�E�$�k�OG��v�㑥��'&zW-#�l���d�$wwN`g{vS�у7NA{l��Yl$8�: <_�;x�qv��)0���Y�'Y:��_�����Ӛ1�+I0˵������}ը�Ê6�����)o�0�@��^P���:~�_�wI���9�/�����ǋ'-��'ON#5��L�,�7X��.L�}�������>��z���w;�\��e#���L������qlI>~����u�ڌ�kX$�����-��g|\��`\�5����
���K�r�3��gF&feS�q���5_w�y��+w0#�N����{�T��fX���v��m,�[.�Z����5^ٕ��	(�#���n�*��º�o��N�R��2��7�����3ؖ/��Ƌ����]VQؚC�f�j����fp��o��t{��f��,S��"s�jZX@),��W\��(��Dԛ<�}cCx���M�����ԄZ���Bt����K�}����Å�D��P��7O�����b�rVl�%�=(w�3����}��P�g���ؾ�'}o�}e�<�m�'}� �|��G���%��J����{��6<K����I@K��d�q�6��,���V�n�.ً)3�����*�6�� �s�M&)?ܔ,$��ڸ@:-B
 <���Ƞ���y<v"����4d%ҏ����^�#+�n���w����o�.]+)Nl�$�ğYe߭�[[%]��Y�`v�*{�Jou�t	,�=0�,��}��G$�.��,�1�,%����LI��^�H��h{�ܓ36	�`�/�;l�ν��0U����ɍ�Ǌ&�d<���3��#���N
��i|���$4
��/��#�Ͻ�4 	��$p�Dc,d#I�nO[�-�L!�m 0�d�CJ/������}2��+G;�d�%*0�VD[��M��X����ỉ5���GTī5�V�̍D�ڤ ��rhe��7N��������JN�T��q.7+��N@��$I��m��$e��h�|ӟ��(�C��}��	63+��+��Q��l{H�O��ڐ홉+�g���،��n�3���i�ZL�R)F�����Ӿȏ��Ƙ�Qݍ�~Y��s�� �_a� Ֆ�\��W���s���x�(�&l0w�o�Ƨ�&��:��W̕����x�$��M�J ǜT�Xf�Qf��"�%�כ�oL�z�;��
�b��̇%D=��%
S��oz^�!�{^�3L9_o6<�)!�M��E7&����*=�F:���QV���Wpe�Q�z	b�4��f{����cG9TEHy��-a���Z�\���n�uJ�'q��"�D�F�:��BNMsF*�֖JJ8�,�#�Xm�@6];�n��"��S�%s�$4m]Y!u%�S�����R��&m!'��'��������\q�w}Ea��w�2ϒ2��b>%���"���"���&(G�Oȸ@)�V{N�m̹@e��Lc�>'쟫ْ��'����������4��f����?���y����v��M�yNY����֒��Y%���U�>�6�)\�'�Th�����k���ה�)���m�fR�3^ۭv�/(w�mq�:h_=5/��/~�<��|0�c��+��joZ �)̙����&Y���I�o&M���HV�3jo��w����
��{�r3%�h�h~���5�R���`6)ĖbL�r��h�6��t�����WI����Н"��ؗS�-1�C�����h��Imb�)l�9Gs�Z��	����m�!#��v������a.	�ס�?�x�^��l#�d��o�TG@o4�ۛp��/ �[K�9��A�jȏx���%���>,&�����s��ˉ+)B��'v�l�E��~t��U�3,)����K)I��EE��~t��A~+-B��ؚ���V^�ѹ�C��4�Ӏ���BGj��02	296�$A?�p�s��!�QO1�M@B�iHl,t����l��z�nfQ���F=�7	U��!�Q�Fa�:��0���D���	H�Gy���{�4M��11�-��4	��YȈY}d �0�(��T6�	H d�� ���.��|�2fa�Q���;��4ga�Q��lN� Ș�AF�g���0�(����i %j�+t�r��aK�(����-��d������$�,������A�)@k��ҍ�e�W5y2Pv@�GGF9?�!��~|���$���P����}.���@����2/@Y	�P�ѷ${��(+��J?#{�7e�(? ��*+�����rr/^��	H \�P�Q1���h�P�Q7$7	����J?���& �1Pv@�G�n e�~TL�& �1Pv@�G�ls�K��@���
���@��؍!/e�~tT�J��@����6/e�~tT��ټ��@���H_6�(�� G��1Pv@�G�rQ�K��@���d2��(?����_��
m��aN� �8���z��& �q��aN� �8���\�N� �8���9�	H��iHtԹQ��q��aN� �8��ތ�N� �8����0�	H l���F�u��4�g������͸�4	���6d��o\y�����k �	@޴/}qymg�u�a�{�wSɻi��96޸/;8%}>�fβ��}�L��! ��x�/��`Qo�?y֚�G��.k��.��ͦ�Yp��.����ΝxL��@�	��^��"�ԓ$�}�0^�����-��^�&������حF�g��;H1�N]�fe"Tm"�c���    !��]oZ�Nc�ys�C��-Lj�f��o�����B����Y�����ܟ��}o5�	H ܟq����Ea�G��KqN�K!�@��	��v�
J 9)�9jJ��Y�������$�;~����?}�y�1�BE��Zoץ;���+ zN�Z��ap�0X�W!UYo~�	H ԯB��S����Șu�
��zs�;M@Ȉ*�2����4	�^UHev�k 3� 08�
	j��N� �V�Tfg��0c}��C*�ޜ�N� �V�<��=�x�� }uȃ��ѓ�GO�X�DG}d �ب{����SCsu��\<zj��:$6V���dK6�!�Qw*�ũ�l�Cb��T��SQ�X��Fݩ(��9`�<$6�NE�8��!�Q�%��9 �<$2�9C�	H d"���Ĺ?�9`c���GGNՙϡ9Pt�������瀍��C���l�(:d�W�I��+�	H l"����6	����C�EBئI��Q(>D��#�m�����yT��n��d���"*E�H?~��6	eT��~tf���Q(:D�ѷ$g.�YT��~F�Qر��@�!܏_[1-@@��C�}?�e?̣"Xt��ԶiRd����C�]DQ� �,:������`c���g��3��`�!Џ�!y;f���bC��ԯ9�& p1Xl��nHn �ņP?��& p1Xl��
(n �ņP?*&p� �,�#�����,r@�`�&��	H dVi�Q�>m� �,L���w�?*r@�`a:ԏ�#������P?���& �1X����c&��,P����9l�C���!�� �,L��Q�0�$ 6ӡ~�-ɾ/E�,L��ѷ$�/`c�0�Gߒ|Q����t�]H���( ���`?:723���u�}K��aQ 2ԡ~t\bWâ d�C����,`c�@�Gߒ�lI��`�:ԏ�7��aQ 6ԡ~tT��E	�,T���5g�(J��`�:؏�h����`�:ԏ�)Kޔ%`c�P�G���V����Bu��KaG@�`�:ԏ.�JR%�c�P�G���@�`�:؏�
�	���u�}KNeK6ԡ~t!�Nu��1X�����SV]����u��V`^�6ԡ~t99e99l�C���Į���1X����S��`�:ԏL�ZXL���`?�k�m ���P?������:N/��x���C�J
9��TZ�o�)ԑk&��9��#�Q��F3�֙׽�7D��{����r�[�P�E��(f��R>��P�C;^3 n�:���p�c���:�r��b��No��J��!yR��BR�������N��Ae����<[�@�p@P?�����:�GB��ӑ��Y��Eo�:��ת9�aFo�:��Q��@UoQ�nZ��iU ���2ȿ���/]�Y��&�j1��X1����g��<��^��HL�~ERܷEU(3���	���2.��Y>ϒ4�c�!U@�5��̲.�1�[�E�s�0��-
ؑk:���@�V�,��o!��Y���]�����ƭ���R0W���vm�S4�k�RU��W��	�ω�_5�h�7�"-�4O�*ͩ��V�x�<��"M�r�[��|��(�i��o�$�t<����Fj��>�ɢ���O�NLs�1���'���^%���5���7x�����-w���K��UӋߕ��\,��.��;��K�ma���G�ى_]�G�x�/�xq`�N���|�XA���7�|�@M��HMԎ�b]�`���U�Fޮ�	b�@�
�H��@-� �Qm@c�2�淏�4�tz�*~����o��[b��ϛ';�Pc���X��+**E��oß�p��f�u�W���AE�B��T%A�@ h�#�0�I[Ԡl!�q�]��spb~�#$� ��5��-D8�����-j��-D8�����9��B��	:��K ,��8B�Ȟ�M	`��G�� �~h���F�{�?y.��s��-D7���b��l.怌[�o!A�9�Rs1d�B|����LJ���6	��[�o�I�O�i ��8B��m� �����F&Afpqэ#$��m ��8B�_@�& pqэ#$��X�4)�4*��8B��%9�Z�fQ�������6	yTn!�Q'A�ƒ	(�rэ#��mʨ�Bt�	:*06��\n!�q���u���E��GHзd)[���-D7���W[m�PG��GHзd)[r�[�o�IP��lӤ� ��8B��)9SY�6n!�q�}S��U�6n!�q�]N��S�:n!�q�}S��S�:n!�q�]N��Q�:n!�Q'A����-D8��oəlI��-D8���oəlI��-D8���oəlI��-D8����I�*s��-D8������9`�"GH��#r��-D8�����̔9`�"GH�E5�Ĕ9`�"ut}�Օ�q�#���^7eظ���t`bǓ2l�B��	:*T�
��[�p!AG�JP�q�#$��~"eظ��F6��q�#$��ľ(eظ�G��! �q�#��	���q�#$���e��F8v.*��"����'I������R�L�V�, �`Fooe��h�~�, 밼X�<j.��:�%��F����!^��=<^�~�_#�����u��_��r3�:$�uuY *����I)6���N-��W�錄�R��.�^%�\���K�k|�[�%$���V�~m�׆.��R+��	�lk�_w�⦶ig�h��أ,A�9�b:@7�pv��	_ߊm"�Usb<t�bpF�X��&��
��ͨy�<����Y�&y���Ì��ſ�6U+� ��ȟ�<	��c܅^�3�E��*� /��>&�ɽ�`�4��pô� �=Zw
K y�K@����(�еx]��i�rω���)���-�:���x���/N���ԫ>�9���~�y���}d���k^j
@�����x�ܻ�u�ʢ���usF;�<�pO�YR�W�|���|x��Kr=G�i��w���-����p��p(C/�C~���u��:��0ʠvN�w����7�"���N`�]������y���/���2����G�[hi��e���e��fZ�L��IG}X�?!����X�#+c��
�m��������������H��<�W���t��M�"�	�']�"��;���礝Q3����PW�����kh�1qH+j�܅���iE.���5�]��	mE�Rl;��-�{zB��}/D^r�\_�ٹ�Ub'��M�l/K;�qoLf	�9�� �$���T NT{y��N(��	PdͳP�	���i�d�hF_�� �m8�8��ˮ���b���)�����}]v7��C�dMq����׿?7��t�TN�&oL���#q�Mɭ~����/�����<�KA�)�mB+ 4��f{y2���4�5Z�EB�H�3�N:Bɖ�|�b��Wʰ�*s�w��,��,.Pu)jO�݂�4KJ'���iRV)P4�MP4�K�d���6EP4CT�O�
@��4�.�h��.�}��n�m��������/9��D�kNq�}[�%��^t�����S��p�G�I��)j>�$��h�Ei8���&����$�zq�	�N�|����u���iRM}��4�����["t�7͓�1�{��PP�3T�AGW���8��+%}�4�3�S�YZ1+��f���q���ys�JT
�&`(V����Z��`�I
�b��G<I�c6zY�۳�P`�$A)�4�1vՎ��,�y��P��2+�M�B�x�x<��z����?QG�?o���Jl5O��S���j���K[� �2�O0[?u�:�-V�^0bĖ�Dt�e�lJ������9/�A ���C�p�E�B��2�c��k�n�Kl�d%ɐJ`�ᴇ6V���Ր��7,]�W�A1�<K�4�ҁ�[K,��n���b��:�N�U��q���$�M�#h1|���= :  �଒*�(xn���`�Q� �y�׃Y�6A��W����8�'�9u&e:�M�io�P)�"��F�	z��xs��זyRװ�=�X-ޜk��:*b���cQ�56���`	�~���$�娱�Y9j:���"�ҥ��gN7Gt��h���;5��� i1��T���_�(�n��^���1��c�ae��)<��e)�s���� ;���'���4���������,�il@�{���4F)Zr�e�#) ��r���<����`�־���͇�N���gj�ں�"M���d���I��	�t��Dv|��<H����qŨs���{��,t1�,`�p��LF�o����}-Gk�s�w��2A^��{���4��&n�"�3omL(&|Q��z?�]��4v<A�����C5��]� -��y�0_Q"��`�o�#?U�#�׎HWz��pE�S�d�#�:�of<:3�2:K�U�3F���rdO+P��9�5�A`s&�8��`���:Bn�ֿ�#tA�M0��ov��^b|�1��G���d2��N��      6     x��V�RA}���}L*������/�c@bL
M4��E��<Z�.+�B��tWI>�*E���s�O����	M��㎦�ft��������}�DI�Uv�j���~����wQ�2I@g��C<�R��iH��-�?�M@�:����6C0x{�X�5�=�c���x��:����PNL�G^�"��C]����@���)pu�����s�7�'s���
��i��_���b�C�Э�<��R�����!��b?cţ�_�����!S
P�U%g�i�Ԣ!j3S>r�Kz�^@ߠؓ���>+4(��(p�?#��4�S�6q�Ω�3(�8d�isQ�UҮ!�:QX��~�o��u`�J@mv"z7]j���c "]���\�������q�T7�t���^\&V`*�����z��f��[R
�Hw~ 哷��0��z��ܷ8z��(.�}��uze�����ǭ��߶�_�P��=�g�&̈́c�ꢳ<�UtԊ���˟���s��cs������dՉ�B&.�S��[�D|�%:�	���]r�r!;�~��D�~N���哦fS�Q��m�{D677:�M�pHP�盄L\~q� 2@Q��{�ӓc�����s-��cY�B21���__4��o"�/w}�H�İߟ�|4k�-/]k{sV12	,����	AkC�/չ�O	�d���ːz2<3�؎�%e; L�um}��5�>�$d�MW[y��p3i��)	���_�S�b��H�r�TT�47@�p��9>�u���-7�`���&�=      8      x��=koǑ�9�b��(g4=��o�J�0�L��01�pd@�	�r''�E�6$02)J���5i�M �f�Q��gf��{v{w�F�2����NUu���͒��yv1�lfG�Gs�١�]d����0;��S�9�˶���> β�>|��#'�Qvl���+��  ����d.�Ϟν�z�߿�ǜ����k�,��Aǋ\���C�80Dr�. &�}���.�0xhӇ��0��˃�5(2������D�ێ�8jAVb��>������sD�=@���ޱ5
���"�����6e,�!�s����EvP�Km�:~��=�%���
�RC4��������l�eɞ�*��Q��lx��/ٸ��	��(�&O-�Ϝd�
�����g��u�s�~I������Q���
"_^�<Q���]�vY�z�}8A����k;>�-`�(v�0�d1�����*Gp�)�]*-����#D��V*��h���M�U(��,��DgVe��BS�/BlZ4u'zQ�_e�����x�<��
�P�bax�|���#��ß9"ɼ�Gv��]��)H��UG6پ�$3G"m�����������W]S�+�:s}��%���pU�����W���U���g�-�Ő�i�ŝ�9%�X���:��%��
��in���@/�5��b��e����i p�6Eb��� ����o�]~,���v�q
�I��o{E�v7���mU���% �$� ���g#���D��~�����cj�6]���A��X{9��N��jʦ1'�����z�:��ݱ�6��ܴ�4� �RS�%D�	nHA*�9��zcBv�m]�=�X�y�}J9I�Υ �=d���ŕ����a���l���F�[d:/y��E��}>s��L���r����z4�{(2�8�������M#ҭ�$�F�8j6�������rR�L��1��{�n�=�a�c\���<�E�Gڎ����v�!�f�%wNȺ�\����DI��L�R8)J���u�����1��{��Qy��S=
2��b�rF��>"r�ﺤȷ��@`���2�3Sa꼇�O�~���D��~�O
Sg�4k��}N;[:$_i(�e���iNsOu�� �YYh'�~��H9� wp�+a�c�	^����ͨ=tc��c��"��.� #I����/(�ma'gYc��q��	��ڱ�1��i��o���n�(�9��
mƙG�B=Ĳ��M~_W�+�;�˼��9.�f�N��1K��UY�����a+��&��7��dE��h��aI����.�AV<y*�q:��k�k�$�k��o�_ �p��K1�����hg8e$�ݰ�֠(���4���_�W�$�9�M�CV�MH��)��J:��N5�]k��4e|���{X��α�c�9�9w�W��$����w�Pj�V��+B�4R}�ܡU<&>�1����!�*�;��c�jƝ0q�8Ѩ� �XlȮ9�����Nv¶륒5UAV�ti��ZPْ
(�}�8^��V�`O/��)�B#\�v�5� ��k. +5u�l�)0�|�4X,o��_)�,ߴ�8E�y���l�g�8�>��_�Kt�.
��^�8L�Kc��ɸx���50]�}���%$�͠��C�ǲ��7��qO���Ro��L#ܺu����|��f��L��9œRH��	�x>pJC=�z(�F%;�7ۃ����(@?�K���O��ZKvB~��(�a�����r���S���z��T=)2\T�Ji[�3��Ps5��l&�����͋�y�BT���^x�w+��:=�?XRlR��O��qp���̾�<q��)��1�j������Ӵ���U��͟��<�2u�:E�%$��5�����@��uy� �b��O�@�&�/q�DW@V2U�~P�:��������0�4�	 +65F�M�����v�X Y��y����e'�n}²/|NY#7L�#�%�JL���Qk���g@V�P�mo��g�`��<7�u�(���X��$R���P0b8���.ӵD��6u	;�8�����~�~���=dp��ufd�M�yV�I�\}�0/�w�ך�ڦ�P[�g��g#x��,�B���@Y��/{���?�]!��9�FrvS��PBɦ��c>��P�l�e�2
��g=PR�y��� ғtL�T)����42��=!�B0w� :�&�%��н=*���nh�TJ�I)��J�\�$P���lt$�'H��9,
'�T�(���F+?��x�Q*��*�DB���#4�
���4�c8A��ϔ?���/�S�B\��w��ϭ�v#�[��E#�U���<29����s���M�31���"��׵qƍ6B���l�(81��7���q_��o�Sv)!�����A&���0��S�+v�Lٯ�$��v�����
��Se'ǋj�9�nų�E�O�	��/r"!�%�ꑆ�Qd1��}�Հ7��V��˷nv5����YT�q���0Ǘf	 kx
>~O;"��ʚ��{��Q�<H�S��W@�U���?v�] ��>Ϟ9٧� ����Bv�GtCpu���;!�D~��� ��A��)ѵ[?X��~����[��y���w?�����w��{�m��%M�5�*���vB�95�jԡ�t;���K+���?��;�����w�זߴWWޒ��ì<J�(mW�HYL���i}yB�Ma�W$1	����S>"��#?���#e��� @��P�� ��>�Uj�m5D����l���P��ﰤ:ة� ���-��6�Y�X�G��O��"���*n���T0���#A�|��FE ��n�(�s��]�s�����i�[�U3G$����������2|�Z%�Ʃ���=?D��E�c
Ud��X#�"���m�˶�}fW-R3n6��;p�y�x~�����v��-�Y�y������A�g۾B���	K/5�-�`ɪ�^�f.E�7�EA�U��s��^�"+�`%���l��/��Қ����3xp�	d�����m;H�>W���k��5�lß'N^��R�6+X=-Cbժ\ig򸆏=N����=��8���/�c������c'�\O1�/մsY��;T������m��!4�^����Xe'���g2E�8� p��1OW��e��U.��E�F��7y˸��@���9н��j�%�V�M���ƹ��SX�g�*nI�3j�G����"�^�Aت�?��~���X�j���R�H�*�N�f6[s��#�6�[.H1Y�n����b�}J��rX=��o�~�x� �\ˀ�� ��T��X�Q,��cP��^B�Ī���
�J !�@������.3n�Z߻���\��f�*�H	Fe8��dl�ϳ/��X��^���@�U ��V}!�7�� �4�@��7.r�+6Z�l��w~��gｷ~�^�so�����:l%�vʊ����Z[Y�����]�u�[���/�9Ktu�k�pU)���\?U�A�Y���G ��(�CH��a'Ej����t���}z7�Dv���;��Ƒ�� X�jA�s���=��BW��i��Bu)R#�&]��9�.�|Ǐ��	��·�q㹞�Y� �=�u�HFV�����ث�w>x�.�`��$G:2���h�V��b�$�)�;Q�ai�V
,2(	k(1�B�l��82�5�d�1���bD�eud�d���Se�uˠ��c|�vu(N�q��=)�я�'�hm$U?{�3]h��Z�~zM[��;s��|�
��Ʀ��8����S6˦���<W�0T�-������������?\\r���eg�J:�0�("Ԑ.�,�S��O�#�u{eپ�]������S�y��_�kᩕ9��-6C��CR���r��ȿ�)tpSCe�}'� 9��yٶf[�{~�;�{�:���Ex�T�*!����Z~sQ;�����UHf�Eg�Y�*/���j�#���*C��oq?�&0o �  u����R׾�f�֭�v�8]��JD4�%@ݻ(v۞FD��L��F�:a�F~�(W@��p&M<J=�CQ'�AnR� 5�teB�[�~9��W�S7��M����F�^]�0.���0�̀}��#�  ,�r��"mI:nt�{n��S����N ���Kf"�q�{���#[c�����E�!@ 7M^4n#�Rah���2����ۯ+|�^`궙�q"�Ӹ�1عX��k5{�m݂����|�(�_�W��mwV�|�L��#=��*H4l����K+]�7Vk�2(`�Q@�(�PC��(�Sv��`&.S�X�GAZ�8�)�{���rZ�Î��l9���31��e�R}@��$(I���e��t��f���>�e�����l��落�EX�R���]�Q��6/f�2��g
Q)��5!�A@T]7R��S�F� �=�#Ǡ��@*|7�hOr������8�$b���Ə���9���/�:n)�@�컾2AT1�L�83�`�y�;�8.|Z,b�U�A���L�����6��
*T���了�ۈ*�c�Ül������e:�v�X.s<�g�y����^�6\�y:�煁��
(�l]�16|�48~(����7�	OX%A	W��C�C��~��3�JC�w� b�H�A���	Du��f4�����َ_�c�B(�r�B��1ύ� �[�eYVz      :   �  x����NA��5O1G�ٶ�{{>�F�D$�pTbшcL`"�����~�B�Q=Y�]�b<tv&����U]�tL#:�5�Q膗�-��5��S?�g:��lu�hcZ�h�b�]�U����#J��ԣ_2{}S`^;匀�O���^؟T1�ml���=J���و�m��4l�YxM�i���㎈7�2m'������!�R�?Z�6�=�ȯ#�g@龜����u-�~qC��Uʖ:Jr�#6�ЈE���%���+�VD�+�ՙ�#�� ���1�K��M<J�l�r�}��=���d���Z}�4�Jr�ҟ�d���>��(+�T��@'���3�⧋�#��o\�MU�>D����X~����<�.5>�J��*7�QNEq/|�oX2�'eAH�N+��+`6�|�N'�^0Y��S�_��2�.�QD'>6�j2��q�-6�5�V��km6J�f���b�9l��n�2E��ΨL�5H��-�$�-�	1      <      x������ � �      >   �   x�}�;j1��z|��AF�%�q�tK����&���,!��\�|�t�o�������🷏�&�4C��@$V8�5ਚ���|-22&`}�XT
�����$Ǘʋ��m��P�W�uR����!oU-�ޢm�%�p�aQǤ6hd�d$$��jm4k�YZ�;�
��S���ReQ�j���������J	��V+,�Rڪ�ݽs�\�i�      @   I  x��͎�����S� �ܮ��/�@n���y�G�G'Q�� ���r��޵W���=��'I5gfE�0+Y�bgFf$��Uݬ߿��616�}+I��I���('� %�t���;�oK��@ }��������/
H�&UhSH�%��I}�)u�q��)�*so��Ʀ�'�_W� ��5!L)��ʉtb�;FaI���f#K
*���b ]H���� ��(���B.k��ӵ�qT:WSM�RЉ3�ZI�X��e E�ܠŰaJ�K�ی��C�B�B�=]alJ�&�"�Q�x��]a�L*�N_�blJ�%^^[��[T�QM)��7:�/�.�/~�>�.����ix��i^r��o>'����׿	�Gy^,���_<ʸ�q���k_����ɺ��<c7���~ﵣ����n˺��p��Ny�?�\�����W�reO�,�4O��I�_ǋ߲�,�9e���q���)����֎�|�+���K��n�ػ<�e�?�g��%r�i�bX|�o�S�#�?�g�">�`�`2_���^9��x�O����)����PZ!���C��p�ń��L�|�p9��'Y���q����<���~q�/���0|���'���s����\�8�I%��?	_rY��ǯ�xx��,�3�5��<�e?��1w�����G��oG3Gu���ఞ����/���;�l�����jݽ�GM����f^�r���S�Ƞ�,\IzL�G�R�u�D9��r�7}�|)ex/@<_�����=���,vC�FZN��NDPc��.\�ߵ��/[|�#�01����+���s��W$��>�ݞ�BmU��Ֆ!���o����p|����'���]����/~�V\�"k|�wB�����$a� Q`4	�#Q�~�&��Q����%	TRHͺs�{�w-X��nk��c�y�.G�M-�R���6��Q�fF}G`�͈��������E��8b��K��7� �أ���]�|��Eٛ��mh^w��|]�5qͳ�P�|ެs�F��MS�lB�_;�Ϩ_��J�i4��H�y=����������U'�U$Hy�d%�k*�@{l�aD���u� d�ԡUYo�6UI$k��_(Y ���e}�R�X^Z0�õ��[���B�{" �"����oJ+��_����& �Q�R�=��ں��5Z%����U\+[l�IP��7�#K�<�og������a�q��!�dI�Rc+@�t�%Tv�����}�K!�uQIT�x���t�V�i�	u U��LL���$냛����a��w�ղ�J�����s�O,$y�܀�Ԫ=���nP�6��<�"� *S;Q��#�H[NɃ�wl��	y�R�YT���pC�.ʃ�� _���u���,"^�_���>j�\��v��bzhJ	�i?�;9�_L{�Z�j+�N���	��`'�C��Z�7����(��Ko��y��tV8��h�����
�wq'3qi`hJ	Rr�|6HIb!0B�7	��;pW���Ѝn%H�A�RPc:��m}��-H�=��Z�-	��-��J۔�WU���zJL!]��ĥ��)%�� �<��|T|�j�'à����l+����`I�|_�7^�(�@0%�C[�ʢ��ˊZ��N^�>>=8q14�D,8��,;ʇ�]��*X�yv�p�����ݦk�����k�Fl���
���A���JQݨ��,ȉ�
�s��<\2���Yfq���rI����ś�L�p�Tz��l>q�ʐ�Jл����� o�jɤ�k!a�����Nv�Ր�l��k!�x�P���`tlJ9�ǫ�j�t')%>�3��܈+(��D��&�CS�:QRΔΔnc��=�� �(�	J�S
3�3�ۘ��M)��|�L�p��ؔ�eJq�t�t|�)��O>���-M):�T͔Δnc��=�&�"��ƌwlJ�3�4_��UJ����g?fJ�)��\n�k�dJ�dJ�7 fJ�������|�k�t�S�}.ǟF�4�
�S3s:s��)������Պ&8�R��S7>k�|֖��v}�-q�ǯ�rk&ԡ)U&!V�������m�r~=�
�9���wlJo�i����-      B   i  x�͜M�$�F�����	�D���� �jV�6�i����| ���!Ʋ0Kg���?f�f�$U�FUM��f�X���������7�������=Ywr����u�:}��7�[�78��������w�ߝ�s����������=~�?�	�;|�������G�w��>���e�������?9�����U��є�ZW��p׸:5����B����_pO^�8�xk�_�OL.�i�����no�"raIa:{�Պ	z���%�L����c��d$�;�C���t���M�������4�}\C6�e`_!ryIy:{v+�<��9]�Nf���qo�"�v�SŰ����3�+D�-�Mf�+*#�3���oy�d?�����&Y��׈</�'�G/���@H{���%ϖVP�e{�n�7�|\�TY�����Lm����䩪}.eE�>�{����%OU�a�&�+��o��T�~S��7���׈�[t�Z�)z�2�z��P��NU�/������>�-���\ŀS>�&r�۷�/:UN�F ��-}C(ȢS��f���,���kD�2n�=��������ʿ�F���]-'р/6yw��1�_�/J�)����/���o~�`E��rDƸlv����4�|^mXĥ�}��Q?:�
�(��_��?�|�������E�����80�1�\�;/��m|m)�T��Ѣ6+�b��˘�����Չ�y�1hrG��r`�q$Z!b���-C5�����޻K������;�뷈��*؋c^�5by�_!bԆ$ӭ~�x�7Я	jFzH�ݦ�+'���"A%I����=���`�kD��rsΥ�k�f�8 A�I����Ճ��h�kD����볅�с}EH �3��2۳c�HPo��v}A�b�L�HPo�C�����-��n�[D�z�g��m*�R�涄'?$mo�/��`���EQq�LG�G_����
QD��36_y#n�wjD5'?$moӏ%T�vu�EQs�C�&���4��5����I���Ԏ~;Ju���PY�C����K}b5��pK������#�
Qo�|y������B�F�Kۀ��&���Q�|�|y���;^5��<L�K[ަ;�FT�d:_�r@�����ٙ^K����'e�,[���E�ET�dz-A�$ۧHlW�ZD��`����R�K<k%�ҵ���o�hr�ZD)B�Z��Q)��K�δ�R�ҵT��R\�3��r�"JJײ�J��l�;�:BI!t-=�'TbW�훉Q�P��	wT����m5��4[��҃91��E�����l�*F�_9����m尰��9N�v{���7O�(3�gk���%yM�7O�(�gk���M��<-��?[{��C�T�?��r��lr.��A��կ���
g.͔�F�֯E���N8������E�������ޛ�_5o�[��q�k����AQ�W��C��S9~�~��"R���-u��e�L��կ)R�ϖ�Z�ŗ���`�kD����������^x�_!R���x��q^��I����p�#-"E�����]�_���L&����gK]�����5��"u�'N�Wl��.�q[5"g�~�ؕr_��JDC`�����f�O�@�B�G��bW�<�d�[5�?r7L���&�kq?t�!����tܣ�/(��E_��m��tQl�aO��Mq�m�R�3��"�P[�a���T��+Ͽ���,J	ۣe�>C)��5�.*��uSy�:�8ЭtQ(��[�ޔGc]�[#�!�p���{��l�A8󱺮|�]��^�E�E��r�n��3�;��.l�G�Ǟ���-�.2�˴�Ni{�!l?�"���D��ky����m9�D�͗�t�!S��X���L��3m��&8c]�i-�.2M�4���1ڗ�A�&g�v�G`t���P#�"���L���h�u��"�"���L���Ү�id�hrp���o�~s-�.MN4�~��5)w�A�&'�l�i��v���"���D+�V�������H498�d��Z#i�[#�"����&/�}���P#�"����&+G���U�A�N4)��Q���Y�Y<8��6�@���mt�g��<�ۯɑ�ޯ�����9d      D   �  x��T�r�6]�_�} �xh��:�)�3]�1M�k9���8���L�&�Ȏ5�e=~��z I9���H" ���s�H8�	�Mӌ�~D3ZД�q\%"�I�C�%�}����o~j�$u�*-�d�PL��`�j���Fs!L�$�$�L�L�A��̱�/�R��_L`�/�/	��-�s���s�O3�Ѕ��M0��
# �e�;}����	^��*��P������Y�
m��)W���w %�J���A�=��W�l��@��l�S��/����]HĔ��>�\n�.i�a���l��O��7�	͆F�LՅd�j��VJ�
+�G�r��wJ՞r��7~���7��� 8�@x���b�>p�'�%�D.1�~��E�&����G�����h�G_}��_��0J�$Pi��VUmJ˝�g>#	�*�����>���Ƚɹ��?���<�?�
����zW��P�]F�+0�
r�a�ǛJt+G��UnAǨ"=������1'����?�*jƈ6��E|�����U����5s��L�B������(J皻=��TT��_�!�
�P/z�%�٘i��Y�ĺ!S���V�s�u�/�&�
�ڞ�����;�gh
��2�&ɔ-��Z��F�*S��SJ�nz�كR����v����#�O��v��Y��B	d�o�.7�����]%Jq��
[f� �c����27Q�����/o�OC��ǘ㍳,&)�r��f�9��z`ʰ0�u������v]�j���gV������U!+�+��"������&�z�G:��C&�x�$.�?���6���2Z��޶=϶]�(6���=%L�^�E��tՅ��n�qV+��\
[�m��C�E$bs�8ޅ��y����S��      F     x��\K��>��b�B��{fzf����� g߂\|q���Vlǎ#i!��Z��N����DKZ
�/h���TUϛ]3�Y,�5��j��Ք�h"'�Y�w�yk����f _�m�A_n����ցycO��Wp�Y�+��͌N2/���W��� �.�k�����
NY���M�����'t����+��������c��h�����!�����"y(dM�Շ�%�qA��y8QB����*	dv ŁL�<ӿIi*A
���Ī�2�ÕYn�����-�.����f���Y���{w}�� x8es���9��G.�S�B(Y?6��y�3y��a����i4I�mz���&��6?�'D��M�6�b���*��oU  �p���ۯ�>P/��͙����\u1F�
�Dq'�+��xYXA�������`/ۯ�b��dR1�KT'(���%C�Ԥi�"Mx��$U�G���Y��S�<����	�݇��	���\���l�Vv�fB��HL4H$Z��D6=7
���[X�mH�s9�V$B�N̏���9�Ǫ�05��F�M:Tr��a;ԴI"t��\Xy����\����ޕ�0��;qCЎ7�$��:�oH��⭭b��=��]�y�w`��xyd�<�pD������V�&�G` K��z%�+�ۊD�HШ�Y�gA:�9��9v�JV,i�k%��)� K�����_R,_C +|�{�z�ك��WQ�Ԝm9�BU�%݆�$Yhj���Y���]��m�ҢJT��$�'�b���,ȼ GM��W1�X[�E�!S���{�׭$����6I|ODn�OH �n�����8�lxD�fl3gn����$��'�Jj�΂\��^�����K���G������ELN��~Yz��ZVX�o����#Yk� �2(ۗb˾$8��$�a�����V�V�s��&�ϫ0�U<�����A�̊�%+��\��v���+��#uʼ��6Ubn�1��D"���n6ҏ9k`vO% G��$Y�`����u���\���E?�$���`q	�PG"�$M��W�K�ݺ; 8)�<C�.J<���Yկ�t�?�unA�0p���R|?P��*�`�������H�V�B���< W�>b$�	%�B�xW��t_U\>���$�`�2�+�|��j�A�-"Y�����RFA+�VR-=Q��k�;��Bny��x�A	����#g�Y���>�bޫQb�c� �� ���@
P�۹q𒭲��)2y�?O6I���Y@�4F����z�\����m����/���M���hM�a�h���~u[�%4� �5'�ޡ��-�p���XDd�$U�p���J����1/ߴbB�����@��|^��bZ�"Ēs��<�\p$�E%���q|T#�4�d�B�JV��t�H\���$�8ke��U`��/�Vq�YwZ�����w�D�x�k�M}�V"�Zu��C�o,���6�Բ�q��B����:��@�:fL>w$��@�P�z���QUe�T��UV�U]7���U�ֵ:�$`9�}:y\CI΂hĳ �����b#ogYmg	��ט��*������=��0�\�cm\�~6ss�v,&*��[�;`�ڥk�_4iI�'�R�͓V�U3��J���u�892w��*�ߵ{5��c )}�K�	���!��i�A�{6�R� �+\�=�S�'�� �u��p�#z+��[/���*�*"M���8�a��ַ��}C��^�%����z�#xc�������@Q�Lt��s�υ�R�K�a�� �5J�����5���kE�y���2���s_�C��X�I�-����`
K�Ր�V��e-XodIiĴh7_��k��Lֵ[��q���w�r��VoqAuE�x�gP��*{-���(-9�C�7������"@�"w�~b��͒�D��^�V7d����%MN�[J|Z�\�}��PT�ٱ����z+y���e�$��BC���Mi�#��82��5ߓZ,(>���u�{s
@�?a<��Ւ�9"QWA�E	粵�v����[+&�M��e	��h��x����$s�1�=��X�el��U��4�8D>�ƻ"���1EԿ�:�76����W�ol��h�:��[����H"ј�N�[y{LW*)C�TA=���8\�k�#lU�Iڳ���;�5�d*%��/#�z���,��;��+�cປq��V��������
�,Pa����kr&my���T���$������N�Lvk}�v��G�,��B�kDUT�ݣ�h������ɢ�FTUjTN���	�۱�$�~|�TbTF#��`�$?|eI��1�Ҝ��9�9|��X��o&�-�d�쓶���G�2�t|cQ*�or��K�Y �wb���aM��
LeR|Q��^��,l��k���H��W;E�"N{��)�v�LV��ߢ"k�v`���d��Q�C�f����A ��<�;����*�����/h똝c_BF i��P"������Ȁ�g�,�,9�䨺P��B�Յ	�4��%�_�o�N�w[�	���(T�������V9oI�/�d~�m�)�/�9$d�)�{󘥪c��1,��B�~�,r�v7Q (�d���^�H��j^Nj��T��,���Zٖ%��0|A�׶8�l�u��Z�woNm=�sG%_t��8�4�ј�i���A�G;]��3��=̀π��Q�Z����0�?�~���p��v��.O����O>��uQ?|�N�e�4)V�q�1���y�k��hť�xqu�n�H�g(��޿��M��9��;��y� �U:�.~d�/��_������w'v&[~�{�����l�ɪ��ȏ�Y�����B6���fX���,�2��-�R��M�M�n��Ԭ�cO ������R���eG䈕=e�8V:c,	�
_�d� N�c�fg�:��t��hf'v�A�w;e��7e�+�,�e��wS��Y�4�i��=6����Î�渵]�]��G�������c^(�4v}��~}L'��,�9��ଉ{!�t��ѪX�yc{+� u����y����gy_b��������	�L��'n�t/����R[�_��WZ��K~�~~[+-���w�\4�N��ڗ3�x�VLBb
�1�9�e���]xՀ���f��=L��1@K¦">�w��8*�y<�<R)�����0�[_1a;B�ؿy������ի-Q�W;���7�l��/�7q:�N����[
��/n���5����s� r��$@�bo�^�5�#�`��$���H�<��wE6����b��/�p(�ǟu�����sz������m��[�dE?�e��;�i[���?������c��Ze����#�^s�;� 7H�n�9�ۃjJ��d��r��@{�vĕk	��v��E]*3A�ST��RdU���	a?�����i*5<JEb�~�ɟ��78~R���o��b��@&*>�*L^�I�~N�����	x      H   �
  x��ZYr�H�f��V��  n�C�	�0ZZ^Z���
�l-��r�E�(.W(ܨ3_@�D(�3ݔ�@eVV./3+��O��ڙ��.��������4�c<��';����N�t�_\��U�oG�p��N�}9��)���u흝%oh��~��>�>����c@�R����X��irӇ�hJ�?�}��$���9}3���=��^���<���x�+�dR��Q�S��{A��l��w�8�G��!���N<�I�}QV%��,�B���M���/�n��@2q�~��� X������o(�)9MOj$�5�s�"�����ʷ��=��i��0�4j�s�N�i�ʇ������Y9ݳt�!��q���bW$��K-��,,d�Ie��rѷ�rm��f�r�_]�-}}&�V�OIS8}�1He35y��E����0ɴk�O���T�.}��'Gl|l��|::&�N�ެm)����ś��cr��ņ$�� ��%�d�Uv��o�If���;��II�<f;����gJ���T1|�7/�A�َ>D�����͜0��+"�C�d�rkC��uE1��U{����5{���*y������5{��3�k�����g�H�'$���������=G�����d9}��d�}�\vT.t��'Ć(],��Ϝ5���v**�ot���$�*�	q�{�'gay���u�1X6�ϒ�5%�p&X���	�=)�d¦*� �H��4��0kq�q4�-�(���e7��s=��d�6{���10��a��wp��j�x��@��x�.M���/]L=�dBJ?R��n�M��SC~A�^=�dB��_1Yj�j��<K0%,F�ȱ��9˨�9q��+e�8������<��1
��\X���K�����2?�8��E��R� $E}K8���c�z�l�_=���k��:����{�R��q�
��F��Ҝ����e�2i��fR�k@Oj ��B�ْi�DCY�F�v3=��NM�|{R��E�0�������Q��SH&j�pd��qy,;�Ĳj���qĎd������'�LDQ��KN���j�����I��Vf�[
����@��b�P�����Yϑ �8|�Pha�/zK.ƫyt��B�L��Ϝ_�Q.4��P�`~�K�r�y�XP3�Y�n�~[�����2�����㙅}\�|GO� ���-�c�S��a0{6��Br�n�7�V�<
�������t�����3���Yb�U�+�ϰǣ��|L�bK$��'�!��m��Rs�Ե�]ٴ��o�ةqQ,*�~��&t S��,�߾<E��ս�r��UWS��L��,<^%\��aW�.�mg&ʙGp�x+���h���#��-5
1��|^��g�b]�n�l�Tѫ��Y^H�����oB�r�x��`hC�(��4JVr����W�����n?�ծ+u�&-���V{����_�p"!��@n��|�]��$ӈ�È����A�'�79��LA�y�Ɩ��u$	�4��0+��Ӳy�'����3Q��*��i4ח|����n�|���A�BK�|I��^�x\4��e����3�4�!h< t=e	/߭LW\�Wv����,�
SA��L��]z�����K�
�4:�[t���@���>�1�2���G���Fqhxd��H8��HXH�Y�Jپ2mu��-�>�
���be!�f%�x�� ��WD��<��5�x)���C�R<��祩N����#�ȷ~��U�"��3��$�H�=_wGd��w�Pǭ ���i��Q.��V�&ǡ�@2��Ă-1{�*7Q��������DM/N�4���E�������K̯��@��H��ٱ����Ï<ޛ�`X:�T)%$�7
T����p�]�ۉ�a�(Bl �f�H�|�p�&�e͈�7�3���A7�����Ő��$e�v���:��CA�r-�r��������Q�q~`"}w֋�@��P�(w���(<�Ѓ�C��r���:�˛j�i0I[J%�(Z_�Ӹ5$y"��F�ie�r��b�\>"8�:C�#?.�x�d����̐��|���s�u�3T��,�2v�7�x�Š�tL(#��uK�bFd����PGB �V�JE<ьr��Ƣ�u�@�3 �V��i���-	�$�Q��%�h\^@İ�LI�8�c��KW��6�N��PA �V��X��R�py����O�28h�Cg.�t�p׫�J�(�^�ʂ~���B����]���̓�qW��P�ӳ<�|���laN:�}��+�\ˌ���4�t �iq'pWlԍU�V�ç�L)����4��C�8�q�|����/�".���&(Uun���f7yLEleo[A �#1>�ҍ�Asg+�%a�/�\.i01�-���$���ڼ]Y/E��A�$N_�S�u:'=3��~):���>D������,���4���}�M�&�{��g��>�r/�Ȕ������%�.P���s���G({	]�|aш9�S��)L���(����1��������\%�� A�?��r�o��8I�j ������!������ʕ��I[�[W���|�x$UJ�(�K���&
D�m�v�lE���c&FPr����Ϻ�z���0�e�3�GB�H�Z����3r��Ԩ�.��N�?yx����B������2Ut���9�Z�`����c����4~ڄ.�Jc-�b�u���<?��!9�;�e8����Ti�><��Q޹���=PI�ү�Ƙ�5�``      J   �  x��\ݎ���z�LS�]]q�^6��b��$	!�J"�'�ܳ6�8F11( Dl���e��zm�Jy��W�Ir��g���j���vl�;��̩��:u���!�V�f|Dq��J~fec+k�i����Q�7~��__�?��N����_������^����a�|>p	�� .܃O�G߇w~���C�ּ�Aų�W�k���(�tD�������5���i,f@�f���g@dWS:���/Ğ�({!��ls=���J�/��S��%k�5m:]x&o7��m`y8�޹��i�هW��t���mk�@�ns�����MxW󃾐Ⱦ"1�A<+]�,�7B"��.{QF��Y�貟�8�sd���Nfj�0u�������4���F$>koc�,��Z������rj~���pt,���`�#�[ot���;��@G}e���w��OBCOF�P�b �2��T�T�!� !��|����I�p髂g���d*C�f�-G��\���.��"
�#�2���;y]�A�B-1��"�Ј�L D��,E�	���e]DdRO D ���%`&"j�Et�ŗ	�(^�]b�e!JqY@�Y�����[-EB�T�a�1YDW�ZU ����P��e�V1��"��HJ7�-͞?�5�!�I���:�,Yg��K9�����@�y�9����IRm���?��0��}CqZ>��@�2:�,���9X�8���;���V�g�R�e�֠�����+�6�To����݋}�l��IgI�'�*����kS}h���=�U]l@���%�ҽ����
8(>~=���������C��)��b$���sa:�0��1!�3����%�Y�߻�u��ٍc��?��ʜ��Z�B���i&Yb;PC���@[��.�8ˤh��ȹ3�+@��LJ(�kLk,^�I�!�3Yz&y�$�5/��A���A4�U�R��2��g���欨�Mv!�e&�gR�&��.���}�.�x�U�3YM�Z(/�y�*�H�$	�7��U(��:�BH���m̞��~��	��*h���\	�lKz�\	�n˓ͅ�`���[�ڪ�.#�@�9�*-p�P� $D�-VFm�2��Ձ����l��Dܖ��`�~0�cQ���UN����(��~��ʔߣM�C����,dOmB%��B�qp�/� �5��uB%��$&#X�N�>�	��iVUY���B������&P��&�v!TBFX��/ �n|��T_19 $ν����=�.|:"${�%B��/m�0!��W��f�5��]��z������g6���dwO��G����f��k�?6��ן��C�Rܔ�����ܵus�}��>�+ؿ�na��W��t�-o�7��J��
.$̐��s�GP	�k٭�!ݎ�n2)�r��wе��n~����[QO����VT�z�:���OW�M(P�v��1��*z[}AJF�����&,7a�qq����w���㥞����I�P!K��n��Эk�Tji��{cUl\x띋^?�]:�%�'���:�!$i*���os謾��_.��h���p1|�Wry<60L�o^|c�>�-(|I�ʧ��>sR$:`B�[S��x�<��t~�ʐ>A^�Hg��L��� ��/>� �7|�O'���V�8!Sj@Q�H��@3͓���XBPSP)�F�j�镞��NBP�$ҙ����6Z<���X>C"P��@�QJ��XU4�O܁Bs�4���P�ct9ԁ�\R5��N� ��*�Jg���d�!y:���3āH��F��@U��e��$籍�'�|U:@ˡ�C�9�5'P����J�3�y�\籍2X.����3�yh�󴍖��Ӆ�©|f8Mq�I���Յ����@l����QX�!ES��� �2f�Y*S�!�,�!>��N0�bp�u �x*�Ē�m6��v!�t|VC��u &jB�b]���6\���6ZҀ�t!�d*�x��S�m�fXB�J�Y3^���M��.���*��,�s��c}���@@�B�`l	�y��|j�-օ�޺Kdw!��Bm�20f]�]��A��C�<�4*�|��1*��NT�w"QSRH�!n	r�2ŉL�U(u!`$Rŝ�Lr���@nօ�DF(�:���D�ҋ���B��J�3ˉ�\'j[U�!�B@HYB��H&8�m��v˺"�2��~�/jۥ��.�tpd�v�o6ߚ�L��C'�{v}'�'ϣ����G Ŷ>ܔC�7����v��BF��3ON~g^�DkLj�!��"��~:���� 7G����@)���hbi��^P;z�@4XoT�>���	��7�~����Ou��`㫍~��<�a4kE:��*)�������!'w�z����se�������l����x�����t!
�A���4���	E}��Nu)�� VI�nK�.ף8�)8��M���SI[LKj�ť������P2c8p�;���	�Föo[[`�M�Ϗ�ڏ�7韃����sOSx�з������R�@��k��#��i�~J�<7AL��۫>Ժ���L
�ܑ�=Me֍~�8ׇ�(*W˅`0*��9�y��k�>�z`�5?=^���Q�A�"�QO@UH��t!PK�Z���^6�����:^<ɹ�Ĉ���ߺ���(�B���$�D�=N6�����`nJ��3>�&"]�dGI�:�"�6L+����B��XZ����HN��� �>����o�kԼ�=I���|���q~�������o�ΘkzUML���.����ʨ.u�uJ=�����0g����m�h��� ��O=���@�0�~;�&�����������������Ez��}�}���c��˶�ۆ�ק�W�Ͼ���6:������X�v,D*�����9�����2\ڝƳ)ϕխ�/�-�4N��Y���҄��Z�"���~���"8�aKQ>ś�0m��kF'b�]��ӋP��L�P�R�������4_���E�D��[Xb�hn#F���<�
6G:�,U�ۅ.}P'���:}��:�-G.�d�:�x��v�ფ�7��+y���k�����pW���\�n�iO~�r�Ai����t#y�M��aw�O;�N򇈣U|��o� ,y��N��,ٙN�)�S+[[k�_|��'�\�'/�a귦ɎND�|����g����Z.���������>n�b(����n2#������~��E��?��BЏ�����K)6��K(6��3-�o���&3N�nR�j�K�5����4��2�T��|O��$~sԞ�0Gٱ��?x�A+�j���,�{х@�
D<+�}�׮ݠ���2�ftr��L]Q�mG H���h�T��l��Ŗ=`7����s��7_����wBTMq-�BIoq!�U���o7Y��ĕU>���'g��B�p��e�*WV����pMh�e.��5��Rd-z��aY-xA���KA��^�r�������M���.�26�/����]]�c�+���rW]9���_���@P>��
�LH!�.������.Eׂ��V���e����@FЅ@X(�X��d�#l�c�c ���������K����]���-,$����3��{lB����t�`      L   �  x��S�N�@}�~���-��-~���&��b�!��;IA������yf�T0>�;�s.sV{�J1��KiMI	q���2Jhk:�����	�0�<����j��[%���Z[��h�T�%�{42q��������y�WD[���y.p�f49���J*�h|�͠��]�1
�c����"!�2�Tͣ	�ZP5�Q&2J]F�
=�r+4_3����X��qf4���K����|2��)K8)C2�Չ!q%�p�\��ȃE�|���EbY(���A�3}kKz���$-��T�3ӵ�'���߿��ӿu3�����q��r��������:�t1�����Oiz0�Ä�/�>�`�.>����+��O�����O�{���lUA��x���et.)����b�/�pU~ﶤt��'�!\�N;ۍ��>��pbƜHi�ڣ����U�R?��G      N   r  x��T�nA��_1e"��<v�1��������v,�"	)R$0ƴ���&~�?��Y�ήב�BQ�q�����5S�g�R2���
�����
�[+�z��e���%~4���(p=��o���q=���owIa�h�`��1-������J:e�2䑴@���|"����|�G���J�Z�-Gk\��Qi�����Y-����5{J�c�A	�F*�"ޫ��g0]�o"A='1��G�������J�7��S
�ڦ���*��I����ɋ�p�u�9����űH�k"�[5S���V���u��ce9���a�o����X�lǹ:��.�����~���-Wp#�H���!�c��Q"5Y�'h�"O�0�y�&}�ԯ�@�ps�#���"��E����$�;u�_��n���M)#��t�6��E���aڰ����.�Ɵ"���sQVQ�sN��a����~�K4�a��7��0�}d(������2�<��Ô�,
�@d���wx-�҃���*Ac�.#-�JIc�R&Yڅ�]�D�D��F�dT���6�6�N�4��Z#�o6���Ur�ur��89���F��|Jd�n:�!�c��t� iZ�	      P     x��пK1�9�+nT�B���^6�N�Q�X�t���vu*Tqpuw)������/�QߝrtRB�o��(���J���s\�&���_��U��0M�	�
\a�]'G�H�ߎY�"�~�@����Mԩ��+'t';�����C�g
6T\�Y(ô�k�2�:�� �"�^��!�.hܺ8o�^�yO_0��ӳ�F(��~q��_H,iE��Q7=`��uoĝ��nD��J�4D��N5��,+��h8�߰bP��cJ��%�z�^gB;�>�x_p�w�-��      R      x��]ݎ�u��~���H��[�U=w�K�\-�ܕ��F��8@� �d�1dX�DE��$'΅�"�%����
y��S�3S5U5�=�K)E��p�����9��*�)�I�2I3���J�|v���͗����������a��dr�VE�y�M����ϭ��_4�7���h�7O����ٿ4�6����5O������������JHy�;�?1x<���<������o�E�<���Ap���>Z���|5�,���b�����т�	S.*U˿!r�(g[�=?��-]�� �� ـ�!'? QZ�Q�(�.Q*�d�V�����?��RI�(�
&���5�?���domE�t4ж�~P�����1���6�5w��%���GW�r� ���Ӑ:���j(N6'닓�$N+��P�|N��L�{+��P�bN��I�DI^��<������3�"�6ey*�p�<~��G-4=MZ8��ɚ��(�y��$c�Z����C�C��T�djE9��ln�H��yz�ۯ[v�y��p��k��)�9l�lj�-mr|8�c�*ϼ<ꥉH�4�(�l\M�ii���唏�	?-M��4Њr*��D��&�",1�g���q5�����IM�(�j\M�ii�'3QN������$5Nf���q51��	��Yx&�i=�&�ii"hR+ʙk�a���	�ƽ�ņ����mE9�,6_�]�t~�/�=�h��xz��%���j�η�_8�W�,�z�&/�t��(��ֺ^���������g���9Ol3����b4i�ZQ����'�O}�y �'��V���d��d�fe��PC�,��v>z���j���(�ϛ/2ƈ�άv����g�'6��Daf��H9)(�6��k�P���d�@ (A��ְ	Cle[����n��Y�6 ^د�p̮~d%�< t��U�@ɇ�SW+���Y�����^s������5���%{��{8#%L��|t���=d� S��TB!��1��E3�}i�!<j�Rf�P͹�F\��Q��%e%�rz@��N��p�^�G8R�B�� �Z��z,o>���E��]q�m����R�@���*���:P�(�Y�.H5w`�� ������{EsT4m��|3�-�;�P��vF� �|�Y�w;�\�v���Z���ACx��2L_0�J�� ��!�X_h:`�4�BcC�]��qI.$�Θ���􀶐�у�Y�Uk��hE�����/�e���z��$�]+\���rW��w���R���r�y�m^���A�w8:V`d4�ъ �t1��1�������E@ZtP�N���� �Z	5��QxZ�<��Dr�" �W��Jpn�m���*9:Z 3��B�h�> ��u���u��l>T�4q��u����٠&6i�a:�A�(�<�tV]wV}�vc�q�m�iI~��/iE��}���?��ہ�&�.��"�된�#�k���VÜ��^��5��2��]��lJ��2�X;�E@��n��:���W����w<A��γ����@��aQ���/K����\��?��<SJ�%�ْ�D���������r���}s�n5�3�C��������'��U�AS�������&*+��`T�Q�B-�y��Y�%'�V����U)D�YW�u�R>��x��V�Lz+�@��{��1�F��/`r$۰ և1�4Z��yN�ݕ\�D7�2*aB��2-f}���vw�&D�0�a�߆����/���Rpb��u�nG��i��r�R�xд�Am�)�R� �E9��V��.�	��w`����./f���!#�Kvq�[����� ����k���u��T�ZI!p�� �F*Bb�#�z4���i`.} 4�!Ԁ�����4G��J@���b�,���>D�m"
1�8��F��9@dC!�tW��\6�5B�C!�t_lskᣱ�3!�L�\ �<CoN�wx��`����NAw�v+a{~1�V����׊ �������rע��b�n��1J�Jt,f��S��[n��E]LG���*�6jr��n���C�a�_�Z�߹Z0A^��^)(�v�����P��D�b΁#|����P|�%bG�o�]��{�܃��eoQJ��� ?�\qf�s����-�/c�@�*M̓c�֭RzZH���?X����_3��R���4���nH��Έ����k6��㏻�w
�����p�t����
�1��a��q�D�i>�Vxd�à.B�p�����|%O:�����&K��=f7��5w�|?���W�ٔe��A)�D֕� �E�ҝ d:��Ks�X�6 �T�:k�U�r�nי:����݊m���%|p�����E�o�b�.!�f]<j��@�~�����$|T�1�]5LO�&�T��yE�6�����?�1�n���TYS��MgAa0T��PgW��z�&n	h�=l��3܆�����M�"G"���DUJ���ܐ!�`
�@
�xH�w��6�rC
��(�s��)uq�y��z$u��c�句��0G]Vw��M�.��k���@����tڀ�k3L@�=��FӃ�	��ɂ��r#=j�n7̜�+�$�m��.����.>Ц;}����|z�{��`۟�}�VѦ�ؗk?~0-jB���.[/��Ir#{�rBgF�ѩ�1(n&s�xDsG�3#7�KtM�e��^0��3���5mOIǓ��|`}Yp7t�ׅ�X��I�'|���i>����l9[X��Ϊ�������} �L.�A��M�����ZAC@�7w+�	���w�*x�{�+���Sy���J*�W��|��ۄ68�o{�[���NJ��6M��xS=af9�>4�`�rMtS���b��Z�z7"�~}(�%>�2���QǷBy�����_��z���hl{���Ga�"�Ψ�X�gΙ��_����.�>G8Z�y�I�
;�����vaq8�(�{k!$����n�~��;�s� 0U��.�r��v�J�`��yk�:X۰�k�+�˗�o�na��啓D�Lk���"��-��~p�8^v�j4:�F�h8�ͪU�&�Z3�1�^+2�J�X瘋 �M�U|%���E��o�F�E���~s��Q}фF��1�M��� ����&��3��}�¶�&��Va��6�?��943ZzK��5h�@0�����#��g� hr�lE9d���k��gɦmE �[�>y;eg����!4ؿ�픗��KD)�M����h�)3�� �!��4�p��Lw��=�-c�w��������Wq��R���y��4P&g�V �Y_�����4����k;E���%F��N����{�r�^�q#�~>�4�����{i[�"��"��Fp�J��4F3��s�H��qxJI\��«y���޹4�d'캠Z�9.�� 4�&s<��� �^��WYmR��57W�c�9�>�6}�(�J>�.}<9�"�W�O4I��I����E9�dm�vL]S�'ץO�[�=ňK�A�J&���/��2� :�~�#z@��%/Z�� ߤ��)x���� G�6����פOD���[�f�
��L��IO:���m`8����u�9"�����x�X^O��zs�[�p\�F��ץ/��.l��,s���I_Ү���\yfC�G'_|IK��/J"�R�Cx;S�B'ӑ��"7���P��v#����'ӑ��"7���o��f�㢞�������p@�bR��u>)����g�v�35��0n��/��.jS����ד�����}�Z��KR�v|Ģ�^��5��kjで%��$�NZ�V�c���*J�	0w�!P%R�碜i/G��n�ڍ#�mT9{R�����9d:-���6ٕ��W0ǻ�'�3a���脰�$�	�}Q������pi��rH�ܽ��ؓ�Xh�_	���1��Phc9�P� )P{N &�|c��-�w
�K�xq8�n�aj���oDv${����?~�| q  Z�	� ITj2p�g�љj*�Z=z9G,�j:T���ʨ9*֡��C����t���"@eV�rGH����'�'�U4��E��>�K�q�ո��P�i�(g����U�a�հ���D��r�tW��Պ��N� Kb��3
|�b�akC��$��L�Uy_��A"}Sz6L�I%��mr��%�g���09�ba�/�Vqmm�J�|��f������k�����/~����b���bzp��h�����������b�2���"@�FCDK"b�[D$���	Dē�8���aU�/Df,D� "�D��x3���"@�ZZ��LsF�MN�� ;��*q6c�	C5�^]�+�A�!S�X�tLv"*&.���՞�H�ia݄?,���yּ�!��P�j�Ul"�MB�� ]F����8�JX�P�~M��$�D�57���i0�/�%
EM�9������a�IP����$Ɗ#��|�mH�<��� 6�x�5�a����Ӭ#�%�	����7_��>�u�Rp�*Ǟ�r2�\��5�2�/�Ԑ��-�r�m9�)x&�}(���k�k����
=�f����re��,�,%Y:�2v�a4�t��+�Dr��0KG��\��N������}�S?)F�i�PmXp<�/ʵ[!�]�3v����5o��;�Tcκ���P�kޓ��*PK�?]��7T�="�S�BQ�EP�T��E��Fh`AD�\��r-�Ufm���"��U[t�>h�	W�<R��r�N�NO�`�a�~�_%���-���J��(7
X7׮8�z6���kv����?��hDca
��*��eIn�F��i�X\�u��HrS;��i��U
�=�U�y~ja��$�M��&�(�I�ʓ�΢�%��F8t>������~���Q�Z]����:j&(5�_����5G���Z���E?O�oG�#`ެ�rEy�����ډy��[����ז,�Ơ5�DA���z�E�LD����/p����7�/���t�|�=�r�ҡ�r�YL������Ǖk�G��G�,�����O���b�����u���͛H�0�$������4����ޟ�ԈP���9�v��)�֣��"n<t�V��bqR6���7�-1����d?͵���v�'���A%��qY�(��Ӣl�]���s�)G��g<�/ʙju��_ui�MY�.�uw��D��E�R9���E��Fg�k��K��y�(�cP]���rx���9�$�u&��C�����:��جt�M��8,�T�??+���S�.�z;,�8�آi7h������#T��
��"��~Q��� �n�*�?p\�6�,�"`�8,��x$��$fJ{W���}�����&�-醙"���Q`�GK�f��hY�턗��K����.�ᾅ��m=�nw����Srn���R��p��I!z��L���Rz�<[���l�i�?[ڒd.0Q��R3!�!�lwj�S5�m�����F_��nUh�֠�.�n9��29</"��~���=�D,S�O�6ʖ���]O_��i�}5F�5�6���`�YD��B/O���Y�9, ���ͳ��P&�W>C�������x�T]�0����s(����	�/�'��}Hz�@`�j�܃�_��9y����,+/-��:�B�4UA;��] �
]O�2���Q&��`�4��&J>���!Mh� \�7�IG�񿵯��?�K���� aR	�J|Q�7���q��&�1�%��t��������{Dt�J�^	�"�܊ ��VO�O��I�L(;7H�'R���j�^FO�wD�o�j+h��^%�$s�[��r��8��]-������"����Vl�T�.�Ɗ����hW�=�0=���3��)1������.}^�Ѹ��b�X%V.5K�|+����&S��m�8{y.�f$:�4#mmL�2���¬�.KoR��ۢ���d&Nd��rn<C#O&sɴg1��阤{ۼD,V�E-�te�[�b���nP��Y[eC�o���ggWj6��9>dF|��>��/�rD�o-���BkEߗ.�5]���P�V�X=V/����9"��A=� m1e_�Ak��� #��$P�T������Ea�P��UVf�����=��'��y�t�1� �^��������s��W����(g������EI.�؃g��цGc�"@�v"���JF������p�{~��ZJ0w���u���ף]���+�.�@ig�;��ףݰ���A� �0����.X�p���A�� ��Me�(��x���mD��WA�%޾��@(�"L\,1B9B�FGE�>]��](� ��A�5􇻦�&�]�:ҙ]��6�<���5��UUm�{�Ut�IE��I �k<ǾJs�<y���F2r�(��R���,
<����`P��)C��g닀.�8ʓ���P\,�U=���z�˟�tL�苀��m�1�r�J�wA�Om$Lb���aW^�̶{�,O�oR4̬�������E��Aw�E@�<}�b�1��>:�1[R?�V�F��_拀7��uu����fL�JR^���2`�:����o�ﺓ�����]`tzY��6�*�۟�$/^��L6�2�9'���K�r�}�m6c;��~
l���[/�&��-�E�m2�(��/��1ڇ�eZuC΢��Q2��!�^�^<-�0J ����!n����.QO-��H�m<���գ�&�M�u�A(_"�
<����/��PG��YgN��K�x�~� �}�i�A�6�t6<b���d+�s���a\0gN�9��%�䌸XQ�i��d5o��#5�x��o+�.5�M='�V�]��������(���)������13��	��sW�y���̐�S�p��y�y��:��yǫ�yt5y5@�0��E@{�6�!O��<�w|>�4y������,�%�7۪�<���������{K�[�ۏ�^Z� ��K���ADۇ�]+#��|�5&K�5��3�V�y |��_-V�,X�/��RP��X�Tx�,Vh.`��I�a��b��̺Fo5�n�`"?85�Y��ӒP�@'1�N��gL����S�	?��%+���B�>���Ѣ��#��p��Js�wE ����^�ŝ��M�� <�߲�q6{g����C��{OD6�
��a��Ӊ�@>�
t�5V&K7'>&�b�����s�v��ñV��^��@�{���D>���vWUc" /7�m@�,)������+tㅅVk�GD+<�M�M�C�\h��.����^V�?@P=?ڣG�⣵���h`|�G�a�v`��d4�tp�rw����>G����2h��k_6!��_��@����a�b��1�b���E����l��jwz	���ƃ=�	�W��L�"@O7E�||�'��J&E�̞]�����`���qݱ~ `%:GO-��w�v�AC�����P��@�o�:�c ��m�(�7S*haxS�	}?_z��^C��Vl̦؉�g�4�/���m7�ko�|�����6ݥ�iu�6�Y	X?jպd��#�l?�$�@/�6�f��`�+D��c���t�{'���z��c����w�e��<%��I��"�ɱ�L�}K9��8\K1��"�,jd��/̩h�5�_b���u�j�˵&[_����Ń�v`Kbt��\(�C��N��C_�\+u/|��`\�ab���/��v[�;`e�IBN��]Ѩ�p��^��3X�;���:w�pO�w��o�o���46�]_Z��h�p�Z�):IeW� ����/-�����6DYv�\I���K�_����?��<�?"���      T   �
  x��[]r�~N1�vE$�O�b���=C� Q��)e�ޟZ�%������"EkL��0Wؓl�`8 ��
�S�6��!�5�����{ꓚ5�N-�=|���
>���5Q�f�n��G�a�����c�����lќ��HM���^�͡���cu��x�x��S���9L�&���q��/�!���W����؋c����IғqO&�L^��Y�Ϫ�Oq��H$;�4�< �7S�fC�qx�Ɨ K���"/���`�Hͥ����Ԁ�e	�֠-��5x j�Ze^�$%l�9���c�}���'����ͺ��G������5(��N�X��"�50E��վ$�Y�"� ��%ճ�^<%����?��'0��L���"�S��cL���=���m9�7�Jz� � 5.>ģ�ě�WG��@X9��l���!9����\n.� @ki�hw�Ճ��8�z��=)��� ��.�N��8I�*�H���Ng}7����M��"�f@�£��M�DH��_\��/�t�՘����70�܃V�,(ټA=��Lv1&�9p��u��U�p?���	�[��68���#�x� �OڶH`d�
��HH0�7,{�!��ѵ�k�d�r�/�{�@W�6Y�ܯkκ���=̌���'�Q�(��\���Yzp��Cd����s���!�	9�S?ѼB��DP䀏=|.��fC�fI��4c�H�=���A ������D�Z� $}#�~�����h�)	��a�� & #ʴ��@sfuJ�'�Dix�c��.�
��;��6R�	��m��X�3�����N�b%�H$���S$�i�����긂���-��@�O�'/wav�J�#[�nr����;P�C1��o�%[:P�_�ug��Y��b7���n�{XGRU^�$I���nN���? F[H�^��"���øqQ�,�=^~%	P����43�}V�p��,u"���]l��0 ����D"%°$z���o�b��Ǳ���D"M<����Cb�`�@W<C����`�D���n��z�NS��Zb�sM�LA-JbYem��җ���u��+�H�߿��Ō9�FՀ�����dgW��{ �.W��2�jE"O�u6J�?��yDՀ�[vFTI�8'�9�mV�XZn[Z�*����!y�#�7��R�t��+�dS�H�򩥳�b�( �}~��/"���&�`��� ���rvj��Je����]��`�` u�u@2!Lu��U �6�b�CW1D"
�oZ^��~H�F��@is��UR�s��5D"���^�ˌ��p��M�؏ԏ�qN�FM�(��#L���AK��ͧH�R���!9��eBKG�Co��߆ÉZ���k��ވ���ew0��]x���"!�6���� ���A��í��|�}�"�;�\�B}zi��9'�`�l�ț�
�D\Qj����O���Qyp��ƛ�P�c\�����]N�݂�~����8YI'Q0D��{�`E@�>���nל4>W�h�D��2T�����E�@���pE�N"�l�C��X���ݑf���Ŏ�����H��� ���v��ͮl��:#e�Q& �n��4�aw[�v��/Iж�! �v0�^�~�M"��~���c~�i�Ck��[�����%�ϺDcBJ��`����D�Y��ыo��� �5uA@[w��������.t�Ty
�3*�}G�Ko����Ի�s
���m��sԗ���n[.a�6����X�y����t����� �����{�=vN7:���B0�L���S�``�� wA<�g �!�]6�f���m�H���?�פ�m��y�望HT��xP��9k��^y�b\�??�mH�>yl�S��d���yU��=�𱂥��"!��o�%�j6��<�w�|2�]tx=�$��{�X$
�m7�fo>:�J4.a=@1T��I����w�=�;�r����'��U2DB�[�`�-*
\�z��Z鹈YJWM���z
�B.��[�Fڮ^�p5��-rm� Kj�a-@�,uve�*U��s��g������Po\21kv6j@���-�Hd�=�С;����N��4�<-)�� �D�l﫽����ela %<�v�xc�D�GǕ9�����J�хD���U:�{>�� �3�T�e�-��HdYHM��L��o���	��-�'���e���,]4��,ߨ���j�>k�Of�u��@O!�}�����c��q/	�fиS͉XY.#}�h��R��d?���t9���RG]t�k<���2	�Kx:�Y�b^�����؋�'�d�����|!��~4��4�[9cr��c�Qɳ�~C��ߪD�0���}�X��Z";:s;����$"�9c֜P�s
�b5$[�)T!�?4��[\-���/��� �x�e��ɲ'�[����_��H�(챎�7�����q¶�;���k�J��`�P���z��x?J��fT_��^7G�z�>���h��i���⭛|�ud=�����p�B���"�[��e�m��+�1D"�F��4�H|k��]� w�v����d��E"QT��v�u;�b\�4�Ӣ�bo�E�nk�,�6r�ҧ�WWI?`����[i�|�k_�ʅ)%�.�����c�,��m�_���S�賊����}=˴5x�eS$��!~u��      U      x���ݎ#I�x�D^XV$��;KW�43��n�����I��Ҵ0?{��?�U�U�ݭ�Ъ���vX`F+��L`���Fkv�������̝t2���#�n�̎��}�':�N�7�*�ɯ���)���|��w�X�߯_���I>�����+�i�O�����|>���������=�?���%�����;�� _�߹d_~�~�߮?c�^��ؿ�g?��9�4����r����G��W���O���벧�!�'�~`��e���~���'��l�6��s������"��?�3x���ć�c������/㌔Xp
����Kq��*z�~���!�E�`��v�B�������-���B\���°���9�������j�%���]�m��A�{��;��=��	��=��.{�O�"��k���=]D'�(�?�F�D� �?e�/�.&I���&C��{�[��+���|c.֖�ς?o ���q!�o/�\�������)^�z����̓��MͿ�ĕ�M���~�>�����ŀ�_���-�E�T���A�v���L�ؑ�g�?g��|�򓄂d��Z�B��@���H���ve��W�
"P�^�}�5��!΍}	�"��!���/��ȟ����%�?�uýxO�͏Rd�İ�g{��z�����������/���_�ֺ�m�K��<�-E�pȞ�g>'����OJ<�W1/�K2@�7���;?�t��Y�=��d+��
OH}�zG�0�����q|+����f����c�>�7l:�;;sw��.��rS�w�]	�s'TZ��`�K�*����n�9��2�y'�{�R��x�t3�����a�p>�qt��|�����W����o��[r�2%���N����ٹ�2���p��pܝ24�銩��a���~UQpU�ȿ�&�c�? �<!�1AY$޶�G��^;�ĆXR2lޏ�h�">�%6Z�\��q{������M
�o`��x�oP�F�dx�+��W�����曛�%[b�-�{|���N:[W6y窵+od�V�C�u׍s�|ށ.��?�Ǟ��t������Q~�"&cZ|cߴm}٠4���w #���6���(���NO�_���X�;iҨ��ɝ0��t��l�7W�_iGNW!=���w����+n�`���*=��vM��7�H�#3;�Զ����䂲9.��/r� �$���_0g�W~���-]n�2���uj�O��Mq~3���!��|����n:�f
Ò[np��ϳ��%S����)�v �%�v�t`��0�(4�:#�hiL�}���]]��}���R�u|�����h�ׯ��������oK����af���K����|����v�]j'
t�7�����������q5��/
�޾i=��Ь9y�E����9&6,��N���N�g�.�K����s����%<�e�ͨ����pH>�o_rwW�������o�-̘���{Xu�R�O��o�⵸�ـ�M)AG���/²�^Y�qK l�_F��OOracuGԝ���˄�b�}
޲���z�&�l�ó����ù����~�u��N��'���U5����QOZE�b�y����g =�#�������CF�B��F�F��Li���8�Q� ~��Li��¦�������c�?ӄ�x"&n	�����'�r,�N*�qkK�D�6�Z�&TL��u�a�Y0�������a�pD�^9e   �4�����6�MLɊ�Ya��1r�YiK�y]l��)���-\[�IF>z��a[�I�A��k{,�M;�I;��l�NI�F�`�~�;��e�q���?��7��F�:P =� ��9	�?�Ґn* ]v
�0��m*w�����`�g�, � �6����sގl� (�@`�g��hL��8ƣ@��P��O�;^
 k�N2!?���?`3qK(�(��v�a�K%9�hz~rz�]�@�ɥUs�Z�ou��<�K��)^z�w�TZ��f��*����C\|�1��3:c��O�d�7��le�Q`^87-jU`%K��MZ!$�l^î�ڗ�QN���^�5wE\<o�i���_�c�ã.�X?J����h��ʍ������̨����?�S����q�RX�(R	��w�0t�H��������!�b����weM�M�ֻ�MU1�ґ��,|��!a���
ɑH� !^����w�t�01�b��bĦ5����ggr}W����}n��Μv���"�����S{Hʔ���i�+B�J�?�G u�x���\�$����Tj�ŕ�ɕ&t�6�b^�J��@���6��ٕ;���B2�jC�q���BxB;�	bk��fmw]P
!@!(J���>4����������y=�G!<�����H�&'�P#X�-�N#��¡��I��� ��<���fp��� ��N�i�8tg'�ɑ��8���bfd��!���>|MX�5��joKW ��B(duQ�6l�������P��36U�qp4�(�j .��8{=��Fո�	�:�B43���b5�����%��N` g�i^�W0�#�@�@�K�c�D�����X,��q"a[��X@J���i,�ܞ��z+�B23vq��iJ�\��Ȋ��5 ��l*JH4E�%JH�\�zp���-�b���\���_�iM9`��g�x��؂6cFiӞظ]f��'b�9���i<9G�0~@{ګm-�KÌ-�u�R�-�!� ���[@��Bv��o�6��'���!����c��6�K�]O���;��M`�$�K�� ��zf��<�5n����8j�7�q����x�z��~�� mO�g�!�u�]���D��G����l�6�30��$5�G��3��έ	�E�,�)��LT@Q���i+�Վ�3j@P��~ ���0<�t<"a6B�t��+u<"�3¥���~#�����Ad��*���G���I�<�H�P.�0^��i��R�� � ��	��l�3&xT �xD�8��J�]dOB����:�;ݰ��9.��S,��`qe����è�N���dj���{�ܐ�z�)�׏�h���J���WE��)	��x��w�.e&�2VW@��k��rLnѿ+%'7N� �q���`
b�5�*�ͷD�w[��m
�k�(���N�?væ���d6WոV�3�t�]�ƫJB��!Z���� 0=`�J3�1SC�����`��4�j��؃N����G�{�� !V�L�!����wy�*��+yw5Vlv���8 ��X�
�IF��
H��GRe�$���c�<%^sޙBɻVO�T��;�oZZ�zd|D�M��b��!Q�Q�vI�E�E%j�!(+��{́�	T����$��]���0?���`���̷Ӈ�Y܇����
Ļ�W �w�g�]��ֻ!Q �{�{�I�%��
 �;QG�O�+=��AS* 4�[t(�8�B��m��b=�y(2Q�K�v{�#����1a���P���g���ހ0���	
8��f�҇���
�
 b�@���
�
��r���N���P�>����� ���;��qʖ ��~&U]���Oj�b	?}��CP�Ơn���C᮳�>ʠnk!96�<���K�P�C��n)��k���|���վUj��5@fx��m�t��$��4�`E��s��[UM�������u��é~����>�;+�<3o$*�E��vl2�#e�]p>\1���!���q>!w�5w��	"�N�vq��{ܹ6��������P�Zr(�`ץ��a`kX��*����!Sz4z)m�aK�^q�|��(�_{2p������h$��v�a7p������}BzG��Ѩ0��-Q����|�4�C(K$3p�    �C�m8D�]������:(1�Q�H�D�#�8�&1"���޵�G�w��[~'���(��9�}o��Sz�@��Y9��
�=(r#�af:Mf'��1u�vs�����؄�hC���P4� ђ�6N�D-�ѵڳ�����9�/��8V�z}�/P|��;~��N>�^|�4��@V/]�<���%��6Ŕ]�eC�V�gH�F+!�mnUb{��� �*sj#�4�O�F����9)4^�J ���*�蠐��F�bD�&���fC��>}�1��������ӑ'�Cw_z����|5��#|<��yϻ]-��<�1���'J �0:@�hL�+�Z��FV�	5A�S�j�
(�d�*W� 6�'��5<��9 E��a��٤1��+CH�;T*^��a _08��D=_��f4��ǅs(8��s�#8z0��u.��
E���|1�j���E�����C	go �~��|.��qD�ؘ���)�9�P���k��D?����|T�d��<.����G�2�V��`|o��M�5�V��4� �H��I�g��{��L���u�bt[�ˊ��������x�Q��?~ ��W�	��I�$ &0�?`QU��a���[o��-��7�=~�n��j�KƵ�1g2��Pݥ�v��r=ƫ�,�aa��WP� �\{�X�mp+������+N�úE��Pz� ��/��l���eSWwy�'v��Ӛ\Lj�؄��C�?;�7뗧~-��T{&ǺU+1[AT�;��y�k:w_;�L1G����Nɻ���l�m�n�]�	��B,�(\V`K0zsgUà������]�8j��uaV�em	V���]�ُ$�gҸ\@��T��YNPn��EJ]�&�J�ma	�~�ג��`�q��9W6��V+���q������������5n�=+=߰>�V6L�e@���ݫ]��x�S V�DiC�QrM[/�"R���A=�!�u��g���p-��7C�H�bs`X�0̈́�B��M�F�
����!Hw]�7��M��Wh����m�(|v��5SC���MF}��LU�:	�J�D��=S���1n�D-�Q֗K��d���V}9ӡ�G4T�'���B%�%t,Y�*v�U�'�-�ë�L��c=3nN��@K#��l ^��w�=�~u10�EkY�r���-o1�@����r�����;��p��ʊ[�N7��6���G���i�o����Cw:t')���Cw�����K�6�����+�Qw�n �$8��A_�.'�.�KXM��3u�X?�Bh���T`$�J?��#�÷7�^�D�G��#QM��W�y(���A�L(���;*R�RU�O6/焮�<�JDӓ$�.�_�t��):�D�œD�_�#���^����u���`�� �P棼h�g2Uʫ/XG	ǧQ;'��6��LR%�����j��#E˥���Eu�P��A��,@9I��a�9�*�/�5"vl��|V�g�3�;���vQ(�N�=�I������t�h�݊uH[�b��"�aULd��"n��c�|�?�n�̶*?�_Yo�]	�\[��b�y��7{��������B0��>�d��8�"�{��m� �=�����s�6��ھ��3�G�S\�Z��ʉ��R�n�����ZvG!�w���~� �;Y%SUy[��=·�Ҿ���]�'��3��Ͼ�A�K�P�
2x2��w�O�蔮�7�ռ-+um��5�(}(G�FM�2zӱ�O<j��v�z�]��4�1U�G�I��L��$��S��$\~+ƴn�礸�FR�b�p� $�X����-d�6	�I��؝8�hn>q՜*8�Q��P�oز~=8�7��O�`�?��L_��:_J�-�1�{�|O�j3�&��\b�fd-�ysn輁����єDޘ_��$K�V<P��h�Tb[� �hF_33u�Ď���I�{&������(}�!��ǡ����+��P:%� _V,K.��T���c�O��6�C���'�Y�� �DZ�C�5;�$�!��n�)�3`'���Ԃ�� �W��`$
A`��3 ����Wb�5�v�R��$��s�/��Qᚕ���6xZ��bvn��Bk�h��ü�1���pXD�A��h}�Ո��g.uLu�����TA���Y��
y��Vl�w��\��kN��Lȁp��b��1;�j�/��.9��dX�,D�\�UK݋t�2f�y�kɤKI�Z�mY�+��:�u^o� ��ӊA�G��[I����)"��I�X:D�|i�4��Τ�b�x���M�CJ�ji��ob��b�bzP��Jw����(�!�a�4V�`˽B����[~��??��)�h�c����BxD[�v+�a������M���o��Ox���-ӥB���$R�N��Dzͼ��ɔN�L�4U�5���#7̻�:��&^��KR�Ҁ�S΅d�̶ߔn_E���]��� ����1_��������=���Z�L�rA��M8|��ԇ�N��"E�i�oW%U;�+AدkPmR`s�̕bVCx�,���'pz����d|baݫ�>w��rc��f=h%� �Y��`Q,�J�{cX�������a%�������iAr�}3�n#H��^oف-%��޶�;�n�T���9��ſk9��q�b�2�x���"�%"�XIW��K��"9��sDr�dc1hmuWo���v��m��d�P��o���J�o�@���[��=���ܹ�%��WfS���_�(p�mq���e�Z�k��;�6Dv�̱���k��9���L��6�(�qY��9���l���2�逈ҍ�r�gO5rMUR��"c�.�KЇ�^ECWxuA�_�����fk�A��ޒ��v*Djn``��0O����推��5H�^���J#\�V�R�&O{3�M�+�n�z{&�q��hx�z��m�̹֯�iח짘0�6��3AMG�x�L��� ��X�2�z������Ã��:(�QD����?���G�m�����S)3po�so3���j�:j������)�+po�{����Fg��]�֖��f'�H�@�E�����Z�c_�@⸳($�)ٵ^@��ż[G��{A�}�n�s��v���dn��I�ԴR�����G�a�o�5^F�ŧb����s	�}Đȴ�+{������l��!�}�7�f�F$N�C�*����[�3�����.���_N�W�@d�.��B������NбL��N����5\W
o�[�tSx@~ш�p�t��L3o�o���f1d���E�Ԥ6t�c�e�lٺNWa}:�.Ʀf-������Jb`HE3K�0�
�I-�y�(k=s�|�%�4��@/�m�33�/W�&z�DO�n�P�ZH�/�+I���"���e��4
<�
1��#2>�pe,	t����¬H��ކ�d[�F�Qˢ5�Ҙ��"�gu+���x�u������(P{��7�f)O�d�mL�F�n�����Z�mcjW�៑hv¥�M��akk���sΥ�m������?z��X�ؕ��b�u6�{eI�D�q�i��mE{h����d�[�@3d�H����
�Gt�m4R�gf���)":-)D2s��7�`h5�������j��,����#�Ɉ-d�5�BLE;1QD�q0���!/b*�Sb*BL���(Q��;��pb*,%⍷����b*��FaW�Ӝ��������?|�����N˒���v��Vő�/!]�D4�C8�.�=�/�8���$���lOL�PµuLp�8�{��h	�p��d`��c:�)V��%��xci:��5�i�2VH�̑C-�=a��=��!�q`S�ʦ�4 K v2�dS}ҁ��{��F�(a���t�i�9�(QZS�]�������!\��� �k�.y̖20��cP�OGӯ�\��j`P�Ծ0�BA��@mu��`P��H`P����e1����X��
P�5���    ]�55�L��DuiC(��Vu�W4Y���=j-IoS�-��k�S��D�hC(���=v�ϼ,y]]a���F-�:�oM�D���r��/Q���X��"Y��ǋ�Z
jXFrK��k��+��/<)b�O)�����O�g���`�
��V�R,8��R���ʟ^�#j��AV5����Ȏp9ѫB�"�wW�΃�v��~��uLK�l�jK��?Z��>�ZdW��5�fM�-��j.n?8��6��\�r�����JZ�����4>�&��i-w�c������ݧ�� s�C�}8�~���������i��o �ZZ-_")�IA.�):L:M�l)[���w����m�H4�����d2v�r�`Y\sWQ��:��.E�o�A��4�ʮ*Ќ������V��+X���q �K`��� �gi�r�7h3k�7���~	'���]5)-\�����_d��N�]�}}�!�I��ϗb
��kMm�/���[�#��j�����������~*�I����jo��/���3/�E	�h��1�d�j�c�U�X�{}[~�
o��J�'��?�ٙ�@oy�7o��"%.!;�Yrd.iSn�տd����(	0E�X�S{O���v����/Ƶ0X!Q��ƾ� l� �+6*��7̲��d�bQ��Ay��dV�����x:R��s�7���RC��r�g�YI�ϫ�|G?V��h���m�kL�W� ǖ� ������[($u�y��%y���b���f�?���b�+���l\��n�=Laq:��ٓh}Ʌl�`�	l�6e��]#�#�
U'O�����wK!1�`l�[�M0�k�+�a���޽�C��R��7���bZK���$ξ�[=&Z`��Vq������@�ؖx2:����d�|P�`�0'�p�2'����i�6_�%
���#�Q��/��X�ѵ� �ؘ[��N���ˠЮ�+�0D��W<[ۑ��a,��h�@c�ad������R �zi��+3�u�(`k��e�f�d�E4��Ɉ��Q<�?O�����+�d2k�!`;8k�[�1�^�Xk�r^���K��%T\C��ҵJiH���	yMq�@R�W�nn�^j�d��+��i�SPR������ʩ���&�V�=yk�F�ϔC��O�E�#	�}���u"�H����{|d	�3���������k��P�lb����]P�GKN��Jwu�!��k���b�f��{s�9�Q����Ͽg�%�iՂ�%�3n�}�\��P鼙=7�'(̤/-7���/��U�C]T8�o'ϽZ��6n��,�d��7)+�����!���f�\c�����ܢ�����*����a���gjCx���kt_=bcJm��3����|&f� W�����)����VǤ�B�܁�X\����� _	ct�4.�_Z�j|���t�[r�<��-��hgxi��s�-�@-��zĭ���[g���ܽӝi�n��n��ɉ}��@��Ȇ�î(��k�jtZ*a�ҙ�=%�l4�T�b���d�[����V&�-+�<�:�u��f���V%_�o!�����{͓�R	��o���%�l��Xc�h>���!������t!L��2L���[��Ē\J�o��P����71Ј��� Y�[J��g�)׆P�μ?hx��o�I
�����]ɔZ�)paVW��v��GY��=���w�p�:Ų:��LS��6t���b�^�&`I�X�H-KW�>�7�6&��G,� � �!����e�'!&"mm�4�T�RI-a���!T ��q�TRB��SB���ڀTt�R�\u	�~�c�	,\�]ˋ�1n�>t�6v�������0e��C�1��H�hN�PK
)@��3��ۏ��γq�����|���5��%�'��~Z�V�[�� �Qy������v�ѳVS�l�t� i5L��@��C(ǞMe�R����3SV)��Z �d��:��gê|�j*��\��0�+s��=|�������?��l�.�;��]�C(l��q;4�}��6+�*=�>�,+�>~�|��7�H$#0]BW��Vk:s�4 �y�ӆ��k�ݮ��s���[<��^�*�*2Dr�L �A4���l�����+��\ d�K�/mc؁/�LWF3ƺp?P_H��G�|}��t�.U���k,�-�W]�F	�/9�B@�G2Q�s��e��� ��9�|S��D�)����k�I�C����0�<�H�e���l���~�l���q���{��Eͻ��K��e�8)_�JwFss��&������<�������Ξ�Ʌj�N���>��k=�#0n-1n��d���7J_��qk`���~n0�$Jx��8h������!��6��������'ZS�0}�4�0�6ݘ6�½��_G�)�`�`��mc�@���p|׳�N\Ϧf#��N�F�(���I�V��,M�c�.��kAb��������e*���h���z�{�c��aJ�W|�@ǃ\O�lE%Mq���ɡa�u�ԙ�)��u���*�ōB�]�"~B�CmGx�Z`�Z�c&K�;��tGJ��i���߾:H�!}U�����~���<?��w�4F��)ii���O���v�{F۾�J�QX̫�����t8�8n;s�1��k�+7���8c�+ig�ꠇ�i^$�(I{t�Q�xW	-�H���؛�zӄҶ�cJ~bݓz���j��z*�6�1�t���X��7!�&qzDY���`n��o�cn�㥌���ve��?�짪Q��8�/������c�Ęarnw�����*rCR0JS���;[}�y�[�.b:c��0��l�����42��)Y�&�_��_�J�zd��,�ݠ!�!��$˜O���˷�+50��Դ^���R��vM��D�r��L��W���th�P���������V��6uWӇ`�S�l�  v �J��C��]�no4�s��?� �zo���<��j�fe'ә���]^m.��o`��d�=�M9��
��0�XJ)_��rJ�TCOn��ιX�:�jC���I2j�Ne�U�e�'�&���T�E��뮲e'ؓ�{��u���1��}S�[-���-�ɳmEV���M�wE/Sw,�M�ԓ֘j�P��D#:���D{�-�;����$=$է�h�6�V�;�G�����Nl���s�ߪu_��p�O��re�l|jJ�Շ`��re�,�`K["���%��#�v����4������m#�ᨔ1.4"�&�R:�E�F �1����wS���؞#p�!�BNt�qe�P�����N�Gs�3}�e\WF�(z˟���Ξ�X�Z�p�z�ls��k	���X�Z�v�um�;�s�1?S�m�>�Ci�Wk�U��͞��Ƞί���6��u�tH�潆^�I+{a #�\`�jƤ]��ʣ����l���Ձ�w|�a�X�!\��X�[�
5}[m6�~�[�����4��'~)սq���F	hE_�
S��>t:IN��ڙ��A�Lذ6t:��L��5��A7E��C���$�yt��W%LCn�&����L��ڊ�v��/�l話�`459��\AI \� � ���
�n��|@��)!_B���	p�1k�j���A���(t�qB�63?�Ք��l-��ԃ��e�}�k����5�v�Æ��sg������ds�Zי�zY���h�3�aڮ��gng6eR�C�R~z��)oZB�2�O}��L����_���7�4|�����	>�:4K�
�Y�+��g�9��f��5�%�-m��b���z���4T�Δ@�+!w$����k;��Za����|��F!�H����	�2�W������	��1e��C(��:$�ֲ��ry�sP%�#}��z��*�A���������8dWm��_��<��i�zZ�@= O+k�$3%��im�2���fJ���걧U-���v��H��I��86�̱)[�#K>x|D�Ќ>���\��    ϡ��`b���;a��uѡ4��A-���+�>�k�&
��J���!�7�B�:W���JU>����D�qҝ_xhn����m|�Z�
֕`�P��[��	��N+xw=���F�xD��Q����5�d�=J�s���7��9�$ǀC8u�Jy����*����}
�C��\��(ט6t�5�ke���g�Ht��勚��P�|Nv=c��^��7Ǵ��KRA/��&m/ʭ"@��a~ (
�	�����f�#�E�'�U���M���bTun҄f2����t �U�.t!�mE�~I�����V��_���/J����ơ�dt�d��_{�(�j�Qd��!,n�� �΢F`;���y�gu�{�P�@2��Т(��iC����~��G�T����M�E��4��݄ ��)by��c �����9��e��j��;x K��'����Aod�j�l%�c]i��_����Z������&eb �!�T������x��0���
;)i�p�:q;�p�b��ey?#���Q ��0�D�hC�gi/=؇��-��P�%�z��6f��t����຅����Ͷ�!%�փhPc��pQ?����.:�`ش�JD��&f�.r�{q�?���J�x#�26��io}�Ȕ2�!^�N�߸$6����c4S�uT�G��|�W0��u��?=o���^ �(H�w�"��R��]%F�5� ��=��/��%��O� x�~��L��R���+:E�;�z���	�H	�K�dܰE�=bY۰������.���
Տ?<���o<xY�>��hᣦP�R�tp��ov���/��WE{t�`
#ӆpn��6�<ڝ��5c����R���	Df!�(��f�;���������m�6�R���]�?|'�N��Js-dy⛥��7�������x<Q2�e�zdC[��3�&x;���'�w��M $@c$�T	ǹwr�dy�I��l���F�u�Z�#�SU��ҩU��J��q�f����봱�
�f��#����_���	l����[�����ӗ����OB��_��������R,j�x��X2�4�U��]���Ȯ��.B�.�V_�o�����_T����c��^لj����m�g�[pƶ`�%����@[lc�z���S�.ӶV $ۆ����cIGJCy��me�R��L����c%��a�2= B�N�����2oA��~d̸�FWWz�a���d� �5���1��1N�4��)iis@y}���\E���"�uV�N�cO�,�tx|����)Ӏ�x�u،9A�+<z����hv�{k�	�+�l%�Z9F!:De�)q�V  0��@ �c:�c<SrrO���`�\��æ\�
a#��K��ﱧʑZ����:�sWn\��̝�ŏ/�W[D�70�g��߂�d���1X� @�?9nFђ��	� �4:a�w�:�b`�%�¿W������do%�Hٶ	X��# �x�6�J�B�C��n���L����YCjW\EX�lЃ}�ڕX��/	�n	�+�%Q�՞
c������	�`Bە�®to�W��B	���������5��\T/�X���n�1�#i\���$�C���2L	������v�S�<	�'y�PBC��Xi���:q�k^����T�4\��=�؂�[��0ե
�3m�����Vk�	~ЈeB�0��qoMW�ܩx�vG����;�F�D�M�� 4R焆�a����U�����$a��>�{оϰ��:.;1X	�>΃�q�X�'�Q}���{�5�Ca��;��܀����?�6�~BC��X	�;q}(�0v����0
�G���Kׯ�"��7\��+��׹�	��G��
/+�� �'�z8�߂���W��6�/�r�-��ƍ&������C<��o-$QIGvpS�XX���j#���b`B	��l��0��B��ܨ�z���5�B��J�p�N)�V��(�L%뙝��c�Du�� 4d!�E<�]G*x�v~�Ee�~�-��>��BL�r��k�:�AT�!��?�	�5��儎��s��m���E������N��@��b�tņ߯���)*@^���7�/��߈��[��_���,�Z����W�1�a�,��zj��ja�N,F,�k�77�ٯ�P|�s`?޵XB����k��i�Em9�(4,�}�=��}	�_$��euҟ������/��/����c�&�B�9}�WL���,�}���jX�R�fB팙M��0�����Pњ'�#�u�Cb�ֿ�,���b��A�0���<+^i
*�l�
�h?��#����Ɉ����}��4 4����t���	!]?���b�)��d��������4;��@��� �Δ���c%��ϟ�x�4���<��|;iN~>5�ޝN�4,A����滮���L��{XޔFB�S�����è��vsOz�7�<ZsJ#y�T��2����!Q�b�t�7�4ՍRp���N���K�(S�LZΑ?�hJ;N1�zr2���.�YEb����ƎC�)�X��ꨂ 
�:� �z�����$M]Oj��g�%�%j�=�P��?���mn�γ�%����r�C��CL�o�oM�o|�NC��މ�ޢ�/Q҅�����/�����{����ڏ�������y�|}��
�MZz_��-�����!YL��s�
��X {�:y{*�B
�.�|R|�,.v#!x��y(��}?J�r���Ó�S?�p�k������h;Q���k*��-n�������_��+l�Ǻt;��w���˅�%��*�f�w>�T��K ���^�!ڤ<�f�Uy��\u���/�}�~�|�mw��ەt_�������vq�udt=�:���$��DC��H?�+�Q��N�[[�Kz�E�p����z
a|�bh��-i�!�JHc���_/��h�<���yG��x��������G��p��P��2K���ҙ"��k���}؎H{+.Y�y��DH�媩��
���?���ۙEJ ��0�%�~�������m^�e��̔�Mt 3�e[	z��;jC�-��PҾ�h����>�6�ό��T�{p�`kl{ة-L�-g�Z���b7w�n*���p6V�q�<A�Q(�xТv��fP�Q�^�a����(�P�X��K=%MR�Ե��\R�we�cd%�� ��*	�j���qG��:e�k��AW���H ��xX�E�KC���:������f�\�����ކ!��AW�'����0�j��t�p !Z"!2��fj�����q�-�n�� :ș�e�R�Bj�BZ��*�DGqH��-Nnw�.�'��bJz���h8r)1�B�T�"�]��Z)�:��dh�f�y�g�; ���]���u*oV��宪S�J�j��qͦ'�,ĩ�ո2��iC���$��R=]�lD:�8�T�k����.
.c eQh�ʃ}u���^ެ���ֻ3���!�_��ѳ �#��1�YM\7�nb/fnb���IO�V,�g���O��1M,2��}$n�)���kT��
owy����X+	��4�1�Y��]��z��L� v����ktO�6�Ed����Y��;��*�^D�������e��]ס�kq8��'��eT�7�8�@!��(�ݝV�e3�F�a%��j��U9)�2ʄ�W=?&t����C�xs�:x�ǀ��4�%5V���V��9\�S\�XP܃jv�3�^���l0�eww��^�Y"5GǶ�N����(+1u�CE����Z��-���!�F�L<��b�����:�ж�شC�J�C�������$��C���7� ����F`�~uo���nq\�I|2��#g���83yO�fv����jkC���d��U��+�WEE���VTO�^}	����k�s4�wԆ0�mw��[C*6�\q���bZ&�S"��n�:ot��c	He�ϫ-0W�&�簇?��N�]�5��s))	��ۮ�	7�4�.�c(��f'�(u���T��,��    ������%��_<n�,����������)M�����6t�v_�R}��h�8�t]�MӇN��I��7'��U��t�&|J�b
Q8�7�T:�|;ފ���BU��}�m�����쉰<�!n����g�̏�D]��Cm�k�Ý����dt�K��fGi2�܏6@
�m��|XW�D��('l�k4@�bښ7�����ik&�����@2x�be"��$�Z��}Ԅ)tO���
�h$�@�0�'nI��P��U���9�L1����5[� }TU�r`�-�"j�o���$�:�^�Qa�\_�1�!�A\���BR{Yfg�^ (N��(�y�i�h�M�Qx��zu��F$T+~j�h���ſ q|���-M�8Z���W|.x�_�?�������\�5��RS`���ɿ5��Ueؗ�i|߳���d�����3t�}^Aݝ�u�L10���Ιٍ��@E�
�|Y������D}߾�8_��q㫱�Bz����{Xu�R�#��oh���vl��q�T�	�Ն����?��(;��JޚX�tsZ�EPW8��#��=��`N�q8�s���Y6Mxr�~��������;���L��u*s�@i/x�&r�+5�J�8K
��b�R�E ���V�O/�"c7VL�M0��\���9`�kXs;X��6<�n��RL�#��G�!��5�k���X�vbmz���i�d��KL���R�8��vAJ��'?��'�����DSq���1p3���W@7 �FXf��`����=����/~�_Q�W+�)V�'�F��Sq8&+���l==n��*Ӑ.q��,"pP٘�V�Z{������ACe�)�Y:�NZȱ{.�bc5�j�q������9k������G�t��,`����	�$�w�y��-,�VU̙����w���K��Nh�%I���3���1�	
�L����XLh�(���[b�G��'��#:s��Տ�&(����c�.�޼���!��C �mi�,u�;4�B�4<7�����f|�m�58�!.��1Q'��a�� ��Ν4�p0��CL����鈤`q���>��u@�b��.:�ٺJ�G�M��|P�	���@=k�D3�ܽ�k�Զ�����(h��N��I4���Q����x��ZF[D�,n�wd����b� uM&��`h���
��b4�0�@��g̍3��60qqt�p��� �e�����:��7A��ֱ�>4��b)���c�nKݱ�CUc��2�c��i��҉l�-�;� ��M�0��G0�n�Cΰ�?�/ٗ�w�m�د!�ln��h�Z2Yĺ�A0Knٝ䈂A���X��� ��S:�5�5t&yoLR:�!���0Y��u-��t�$���WA��]7�ڱ��}�*nA~�w�K	XՍ�u�[+�SU�݊���kЖl��]<�]hd�xZ�(䏆��6�?RډMe��QHj�x � ^ݕ�ղn`*3�P����6��r�[��w���V�k��mv�mf��	C��)]G�mf�;�Iw.r��Z3oM�N��}����p�Rx ��j��l����Y��r#�#�J[�(��bߔ��XUoA��S0�þ�Q�&������iFg��H޲�QF��*��*j�K�~쾝�Q@��A�3:n
�@�Q@����g4��I 5v�\�8�xw��3‡�h��z��@_<h�bF��0���1F��#2v�����쁺	�M�n��2P7�7����������h�	�P ����73���!\�}6|����`'����>����DM��|�.�?n��q������^�����2vm�ދ̆���25E˜���h�>�$��������&ˎ9�tD"~8�ⷯԒ��s�$�EWF�*1��);+��-� C�����Ȯ�#ҧ�!�u�\R��(�����%AB5�p
&m.[��n�CBA�H"���q�@��T,�<��4jd!I�J,G�D�F��)'=q����҈��qE��5*�||�iiD��8����t��5Fn'~��Sy�Ȼ��#l�&�P{w�B\UWqUiL[�0t�l�I�El:$m"�u6�# �_V0�O��:5�Ca£@�|�Q\�_�g$�&�C��xu7�|Sn�\�*`�S���љM?e�	A,F@��^iA��v�j� ��� T��ٞ��n�	��]������;ľ@7�}���'u�w7��g�\���f���`�L�!�&�Fg�P���� Քx�k����iŧ��s]�Xa�)!>����3\wDR3��xEm�4���rހ���ZE�5Mu����b�\}T�;�>�]�Є�iC8��ju�KJ�}�#��+i<Ë܀���	��T�&��O��2cX�\�X��6?�5�L�]Mm`��:⯴�/e�C?����3�,st��F͠�������-�j��]D5Tp)[��_4�Es/UJO!I+n����Q�O��uä�B`�L|�����,��ي_%����$�s��?���'�ah����0���mdLmdS(�6�"v�8�d�T��26Z@��l���5�=5�p>�0?� 2���ƅ��q?��fS��'
���_U8^׎,ϱȡ�JU7�R��R'V$��Ŀ��cV��T��]_Ԡ�mv��OF��JHDɕ��(f0�ׄR�]�#R���׎�L��)OI�*�F����;�C�q2b�I�$��ɸ�{=>� ^\$S�x1���c��@�7��1M�Ċ�I���vpB��>c�#�,P4S��Z�!f�������/>�d�E���ã�g���P�i�^(%��N�w�S9CrCa�;�!��{�ZsK|���b:P1N�\,k�?�;I:� h�,)���!�Z+
Q�!�~�Q�1�7O�~��_}�e�e�Y��Ɠ�Z/�/x���0��7�@�OVe O`%� O������P'ш��MH�6t:�N2�ު��gӑ��3$�E���=W�W�i�]dƚ��j$�nyH<�>�d��Es/hF�� �ʏ�NY(�]j��� ��K8>�ڼ���V�,u��՗b$�&����Ԝ��Ԝ	[hl���.mJz�@���1#0�ԟ��vOoC����s?��b&�U�)Z�0 +���֝-�P^�_��uAW�dP�5!�����|����*�vo������+�Zd��D&TW��e_����o�ՠ��l�M��up2���L8�6tM���;j�@�<
��eË�S�Y�Y�({��	�І�uXn��#�B�S�u�}��,�B�%=U{��ᡶ���i�m)%��I�=¨�!FBL��7��wېh[���8����=���.΄�'c%�������&��DM}_m��B������d�����LMD�6��B��	��	��B0��Yn�:���+ʪZL&�S��N�HB�rF�R�XIõTr/ȑ���D���:=  8f�>d;�ݐ���L��A�@����i�Z�`<Д�;��Z��@��J��w�MiSq:V�:�v�b~�	9-LȀ.n�@6R��0#�}_cJ#_ӂh��5�y VLɠ�~(0���
�XG�5��x���,�Y�	�a��aJk�t�v]�#�Q� �(�D����ݻD�FER�!K���d���Ȱ!���Q�E�~�㕺H��`*̀�	��.Ox�l�<o��"rv�G�/)��q�R�s���
K�x���x����%J&ϯ8����M��
��'�%!iV�y��y���;3�p!��V�-Gssj���~�!��Ѩr��?��b�4$��J.�}i�у39{� I�,�M(_��{�o��UaB���Bd4��P���}/�G������~+.�B.3y̦J|΍h�K�T�A�z����E�
�h�C�����}zõ��]l6(�Z�+�(�[���<ؕ�/"�,S\%�m'�?�n���K�.�eE�\q�J������1Մ
�� �_�SpB��x��U�D�ϧDsF��Y���sK���Sy��R�~h�(�Ҿ{E͂ȷ�=VG��J�=�l    >��垽Fs�.�߱Q[Ig�Nol�������MG���Nf'qt|-%^�O�~FG+��j�y���x}��^�{��Nv���_a�3�מ%J �U�Fgƌ�f�������9ͦj��7x�!�1���Y���������,Sri�ρ)�U?z��o��/=IV$�C�T[����(<���4m�����t��	I4�P
���������I�Z$�l.�ӓ$��>��޲vf�!���84jY�_,~b�j�l��wi���Ȩ(B�9W�o��������p.u��� �mkH#���2�)�[G����9�xDb�8����{~���8�u�9�xD.8�����q���nv����ccsIm�����V9��I|T]|�`����?[���ۭ��x�0�1�nEj�Ł��/���rq�^�r�/�jV5/����+�<��� �j�0��
�#�*���`��
�X}��J��y+v���4��j���)<�>�h�)Rx�ز,���]� �����J������N۳�]��*[��6�.��hc�E���i���%o��@P�+<Ǒ�U��y��NRۉ�=G7�ԁ��!�v���U�9 ��@)��Tj�C�p���|�v�^Ǐ�������>@��aT���?�|W���,|	\X���/V|	C�־DJi"���9vNv?�X��T,
P1&��B��&$�iM�[�֋��X�kӰL�"�'�a[_��3�ң/-ξ0�������v� �?rh����Qנ"���+�5��F8e��^}��SJ3��!�"PDlY���X��%語�8L\������@"��d�kC���QfUx�Pi�`�
5��V0Q}����e5���IF�����z�Ҫ�]���/�u�0A�.x?�j���!�V:L��D!�(�`���4�C���_N0QL,0��jD&�,��ni���=��0T@��j��tR�+Qk�>^ T��}�..ԭ�.[Gf/����Gj�s�?���o���/�����43C�����!�(�I©[�8�`";�XCx�D
?*+��.b� �����Ys����fT�LLR�ib�8A2�M�Lډe�e�1ȝ
��!�0��w��BdB�̎Cd�4 C������=D�N|�9ܺ�BdB���Bd<�7��Ja�LB��a'@�n9!xc{�{L#mcD��i�x��VTl�x��c:d�N��d��6�3�A�1�Z���L����JVq�X�����T�H06s���m�w�t���h�@{��N{�i�t<S�л����޴���iw�����Иl������I�.}.�~(�-�F�X�"���9�?�n7u�L�#�ؓ�+��3,��Ş��4���,�����g�G_���U����u��ħ'tS2U���������G�����t���\/�ع􄎅KR%>�$���.݊K�h���M��=�:��?םаe�`�Խ�Lື��i��cv��#�f���4���#0t�LO&���"�*���t'�x�2:L�\|�����p���$Jzg\?����T	��<���w��Ohg������պF]�PU��K�����U��h���_�uk��lSjihpb���i=f����&35u�li�os�J38I.p^a�{{�"�,��L=���ځ��̆�����|n�	������I�Go`!�l�������S�p0F۲�����o?���3�`J�}M#%/�$h������ju��Ӫ�t&����*�{�S�#q-�j���Ǡ��a^+�F7�c�ٵg�א�v�/�/��ݶ8��$r&���tD�T(�s{�cg�ķ���5Wj�\�����rKV�L`zP<S���eEҤ����`W��mi;>-���7$�&n�׸P�Y��a a 	;	�	�hfR����:ɬ�j�&�PB�t��}��b;oV��,�EgZ���X�[T1m�������n$lq���oa��M^8W��^8��1�[�v�������Z_9]"��\ |a�y��ֽ-�6a8Р�������W�U�z�+Eq��l�_;�#�r�n���q��l֯
���r���ԫ��ֽ���N���O�V(#�qa�J�j���,ǔx���o�Ж��ʪ�l ポ�0��@�;&�L��6�Z�C��?�ð������]��b��0�Q���;r�-�*E�����,l�BوV�%��>��~'�BK�h�.a<"�aB�X��}#r}	f$f����KٹV��~f�����r`l���-\G;ɻ��o�\_b9&���$g�3���[�17l�0��<����~��*��R���"�C�	�s�1�S����"х]�ο�Ga�^�{���"U��8���7�jCx�S�|[�6^�M_I�����$�O�<Q�b�h؏ J��A&͔��kA��r�VHH��j�!��m2B���i:��@���e��ώ%�+��(R��a%��� �   �' ��>L��7����҈�A�!\�#+�������9��W|<w:еc���VT""𞩊Gy)��{�D��G��_D�Q�����c{c�����E��x�] ��x��Ș:MfL��ה�h<��2�~^��6#	��k_#���苯A���LiD/�e�F��h#��_]��5�֑FCűZZ/�Z,mEQ�U����OFl�Wi�TbͰp�^Wd�y�R����٪V�E�6�[j��68�*m�EL��ƶ8�n�^ǈ�j��y\J=��U�fGw0��a6we-�cu����=-$�Zc��/4Uc��ˏ�5�"3y�V��,t��EjA��#?eUTl��b���"��q�3�֘�]X
���b�.���!��2��炛�oA�}��gXM�㥔�8�`$��Z��	�K9q/ݮ 9u��ʯiC�P��,;�����ݟ��~�݄eG��?b�4�
C(oK���ky�����c�kf��Ƥ!�b�(5o5�6
��oQV���������_��G�oӀ�l3Ua�~�#t���P����%e����Su;k�O�YZ�]gx��������[����ȳ�`�R��]���5h bA\����i���_��GZ@��G�K�k�¨���NUNY9#��t�D�$�@��1plUf��*G���5��;X���{\ *xY��=�����(q�w��j��:�l����V��o<����Is�<�[lV�1y�f%��Zz����D��ߙ#��E�*��j�,l<H�W�j�������?cU���k�t��*:�f�Y���q��8��-��(�����V��	�q<6�#�w���{�j�0"]�1�/��<�,������z;����� 8~ѽE��>[�ř	��M�=�E�Hl�w�V�:�1���5 ���^B9j��w��Bf��:��-�j�O��g�Þa� '��Td�#-k�:�.X�%7�(�!��O�i9�\@9���+��FDy�c�K�z:r��ke�n���n�	��qP�m����	�Z��n�˱��J^ |��YM�nQyM��6�T���&@�Z��͍�����������ִ
.W�m��I�^ظM\���DU.�9pz��;k��¶ǟ����D��f_�����x�d�kL�򻖸�ԙ��"��'L?�Z�#���.�������r	��/��?����}y6�����ݲ9���RO��+x���$٤��1�E՟C�_|/,8�e�H'��2�sW)�k[bL�kc:��p]\K��=l�2�*fR�����ԍj���
��nC�uc���3��� �!z�U���������]�5bS�1���,�k��Y��*Q�R��p����^U|�`%l�����H����Ӄ��ۡv�7�1�\�dQ�*A�vFBi��I�\���;��~����hj0�m@?+ʟ������;/�[黠Iu���;�����_����b� +  ����?��_��������������q������8U;ҵ"õ|%=z� +����Ƭz�Ұ4�?��d]����l�k����)[�6�7�L0��z��3Z��#��ק�.����뻺����N�8\����w�~e<T|	y$����"W7	���LX�yx_��+��F6Q�qWс½D�]���!ne��d���O?.,��[�L�|�L"�(�N]��Sp�$��؂�q��X0N�3�}��{�����[.�P�$�6��G�C�Gh�k�_��\�âb����#��,��}��2Y��r�&J�4<�H��e�d��`I�ڶX��bL(ǄFV�X������X4��Xk��z�h��H`FpvH��uZ�ʸ-[���������_�m���R��{h�����%d� � ��b]*S��F���H�!��e�#Lj*�pn���9���+zoL/�
J�L���X-��9U��W �*�\_a!A�Ӭe�qAV$�{�׏�+z��|�x�;�����)w�ڳ�"�8��[�v:6��v��Zu�p�,�!�Pg�g�bx	��jۢ�e��J��*z22�5n%^���w�U^%������}�Q�4ذ��e���07�LMBJ�A�m<Ru)��Q$��n�"���Nq�l0�֯�N��������5ӻT~[����^��\���!�6/'
��2����Q\Y��P��dۊ"�EZ,���n�mhr���@g�M�O��&(�-���h���m1����bn-U���+�3L��KQ�Oe{x�>�nRNNN�N�q�Q١0EK�)�Jfj��#�i�ƿ,I�@�� p�:�*��*�,�B�-8.��d�͝2��ɂC�	(���"ph	pd�@�B8��YR��Ʉ�r�+��u��w�?�e�s�D�o%�;�>d����Z��0k���@�i��ALht)�$���v<� �ʦ��<�
�#}B����#�WV�C�F˹w�o�#�'4�1I�$��))Ғ�����@$�7�voh%�&	l�#�Wɉy�p��H���+���I�zc�жY.t3�.�JD��� �40��üs�A��/B���[l�ѧ��b��[}5�w x�Ra8�e,�)�6&���>7H��`�C8=���f���ka����}�:_�0ƕ����=��J��߂��/a���^�1X��f��{����|��*�W_�ʃ�٠�O��gf{��^ԛ�����+ۗ���@ЇP��L��x�xB`� ��FL�z�p����̞���&�W����?�Ԭ      X      x��}Io$W��:�W$�J«��N1x��a�{aýj�+/��n�4�`�[�A-�f���k��J��5�����_�3�q#2N�MV&Y��K%�d��g�g�*S*se�2]�=�5w���Y�f�7����ŧ�I�9���ܜ�/>k^�g��?�'>��6K 7��w�w��?�o-��N.�Z4//��1O��C�is�|�4���������s�y���\��V��������ni�2�g�d:��=�5�ܼ���׌��y#�	޹�>p���j����ysV%ê<�"��py������9[��,a9Op�	����׸yќ�-�Ӛ���(T-���Z����|�9�U��������9�m���� �dN�>��
���4�Z���ĻWe.SU�DX��vܼ��r^����q%i	i���/q'�9~o(��[���9�o���4�5S��v�\����x]�c���aP��S�N��pb� �~-�9��t`Ov38l�4�7	3��T~Π�?��Z�p�,����J��ҏOx����$�+	� M�Y�c|1�௯���BglM���`xt"������1���:�8k�5H<�Z�h��ŗ���h�|��]�g޶������7��38x���xI�C8�fT�3*�_�N�'���� ��B��N�;n=���9?��yQH�J�����rN�j��R�I��V����c}y��d��Ѵe"�X��FS���9	��I|0���約/Gd�]Z�i馕(ݘ�
��l�fG�3��0��i�%=���s�x��~g��_�����S�O���< 3�n��Z��.VN��/C�����i�yC�q�����w��<�'o�����=d^���x�?O���
窆�@�k����(�"؁�?{�B�H{�5%.�)-GľG��57��?(}ˁ�@�� �,^ukG�d�T���Z}����O�L�^�"8"��hȶ{K�rk�gR�ox�n�5O�ɇJ�����+&�;]G�j�E�o�%n͛��I��@e��C�H���cd-nTG�~w��pL�x]@[�o�Adq�Ս?�&a0Yfi�A�j�_�_�Ӗ(�Q�-��DE��G����ik[��	�f��0	�
�HX����	�c�o[������Bc��_�5A��Dif���G,��:���*�?t��|�;=���-�f� ��K]��5t���e)�f���m�mN���"X����l������)a�!&̂���I��D����w��OP�2g;�`���0,��޼����H ��حm�����V��&"Fu��x�\���>' D"��I�.+#�6�S��`�ω�ߵ�/�[� ���i'��'���`wM>"/�d!��p��g�Sx���<MZ�B�Qx�Q���λ_3ڧ3���餡g���4���$�1��� �3 Zp��aO=��h1�$�V0�y�C呬S4�ϙ,��4+P��$k�뗝��;D��SN����:��D��C�efL)��?�!<'n}�?���w��E�l�Sa��m�(d" E;�|J��Kr�����L�`�Q���cf��C!�����(Sq�eF��̱e���G��z���aˊ���Ҝ�C�j��H��jjk��\�t'�.e��Ha��#�MF�U/��T<��d��iV��g�͑_��D�9(���ɯw�%�z�V�_������d ~|�>3k����dO$��P�l}9+��:+q�$�-bN�D[�яb�"ܴ�h\�U;��B֏w�����l�?CW`V���4��<�o�/W�e��%zw��*�RV�r�H84�QV�e�� �8p�w�)c$<����u�u�l�p,�F1f���iR-[��;��C
8&��Z�5{Y�\n�k��ʬZ�%��*Qo:�K�K��i�S��puv��s\�"<����)ɵ��9��z�;�/�!�̪e��K�͠Tu$׿k�+Ιc�4S��9��=KAw]��ȱD&��UY]dn�t��Z��V� � �Z՚�&��I�PK�P�g��t8>�?�c����mu����O	��"�0�����Rx@�;ka<H!nL"#A�~xLKtɣ����W1�=N���\�i�D�He��eo�w��+uYAz�I]u��}�����b��s8��%~�Yӱ<#G���?+H'<�)!K�:/F���iG�Q�}�$?*�����(��i�4�N���]1r�����5&+,�T᫏(]ꔁ�3�]�o-oH��M���a"Q�1	���pY�Kخ�a�̑Z�@����;��Ѧ�"�Qf��+��ޑ��0#���>p~�R�M^#G���@*wH�L]� a�z��= Y=�; *sT��|5�;C%�-`Q�Wu�@��M��wS�9
�$բ�,Ar�ն#�D�2��_��Ơ���QwK훙A�2��9+��m�2���a�[Y�[ݢ+tXV׃q�B�F�/}m+)$[�(�:+A��kC)K)[�PV�R_J'�a�z��;%����2a�\*x�j��_J�c'R��U��m�Xd��xN0*��2��3��nKo��rz�	���-�O�}�7'n��׈{�Oh�3:M]��������Vo/jgޛ�Kw����H"�Z-�ɔ�r��<�R�K��'�ݨ>�?y?��j�8"�h�4��*��  d���l�9Z��A~�0����_����H����Ip�(e���Т	��|S���ҷp��F\�kP�]͕�w0`����z�� B�����֡5\/��%�V)�����{k��-�@�r��I8)�߭s�����*GG�Ĉ����÷��lq�����F}Ɍ��mZ;LR'É�	�O�2	�ѕ��S����ﲴ�xyA,u�Q{��f�^W�~��r��Iu�՘��K_������ޒZ\R{)px�Z������Gx��*�:��/��=�P>�U8����5e�Dbe8Z����9Ec�%�@��_����o���:�Y�}�Z��U��`�%J��������	@�K��L�r���B����V/�+X����d�H�O��<oR
Z�25>dj(�/�k��GUM�,�&���w	Hdk���6�#�.Z�]yj丢�qE�\�c��槞��O̘cB��ƔOR]��Ԙ���{�����s}knR��V�+�\u�����c
�^�Y��C�x��szq�L�f��Wcb� ,�{,h(s�~B���aF&��4�'ȵ��]I`�uu�<��ie�_	�y��'�~N)d����Q�Q��AwY9N�$o6"�Sj`2�sd;�W��&ج\�i�/�JFZ����r	5��t��j>�b��~�m�0�ѥx!�\�i���#K\��R��[4!C���t5��,���V�,94�Ew�1d7�L��� ������h� Y-��P�c�H�U�n&
���5G��q��Y{�jN'�6����{nX]�l�K#��𓄫���V��\�ڗ}�[�j=�,
T1@�~4�,~�e�Su���E�F#'{��׺��ڥU�>q�S���|�'^[�Z�1�`�]�NB,��䭲r �ꈃ+��%�X��y!R�rm<�v>Ŗ���Y9\k��|n�j�
e΋�E�2T�0ӟ�4���.�c:���q^�[��ԯ+��6�����l��6�A���f�	�yX�/�J��RD���`W��G�7�6XI�&�s�� ļ�+e�G]8t1�&���rq��Ahh�̄�.��H���L���q��EN{�Fu���49s��v�R��t�I	�V��[ؗsN��`��dqQ�V�SP��$�$%�Z9�nM�/�$V�W8�A�(6�Ʋ�������R�����s�aF�\��$ �Ԧ4h�=4�&s�������ik���Le.���s����n���"4�}��>�������x��<���	e�����|\�+G(+*k#�ZA��~����1��.ue=d���+�LEP�"��V�&[��'�|]�F��'!r6�C�zd�ĩ��{'K5��F1br��۱    ��7�z��K�'�\�Iw�: ���g�8�hC��`Vɷ��UH�m7�E�n�)�.�$Xgh5��0#��e�h��n7���X���|2�2�w�#=bE|�*"��:���:��Ȯed�qT����5���Ł��y`3�6�se���1y2����z�S��LE����'SEq��)7����s2u�B��ֈ�K���}gm���HL�@$�m![�E�a��iu�z���YǡE~�]�o8B��0�UY�UYa�/�0+��&xe�+ͻ�;��w[�v����i��Y^��	��� �"x��g�-����wOy������엜�b}~JbO���+���p�lu�lurs-`�Am�HAnZ��39���\m���1�<�\s���nN�'[�R����(�Bqm�f�#gX���y�p��VN�>�t�N-�*��A�U��.,�
|i���In�%K��r�����z��t�2�T�w8v��[��b&���[�}�j'P�d�rwl[V�K
�����w>�m��|��u�	C�&�����
�;7/s��e�!�Lc�k6���6�n]S`U�����(
�a�]_�e�L��`��P�ݒf�� ���A[�WΤ�E���u��&O�<�b�����#��+�룳$��9FL�Q���g�N�{c�`�w@��O�Ea���ez�Ku@����Ͽ��Z���~-Nβa�&�������&���C�R7gRJ�>����m����-T�:9��I8&�U\��(t���8''�0	1��J#����9�� �p����i�Q'g�0if��X���nsޝ2�h�r �D����M/������LB$��Q�[ÜыQ@p�W��V��bm�|�%�N�S���I�NN�a���s�*H7��t��T�;ޝD�A6	~Ͻ�'�:v��q�w�����D\)b��i�M�fV�Yݜ��NN�a��G�K��V=NΜaR�%�4��e���4LB���k���|&!��Ce��v9���p }��r��]�h�$DB1�������~5�p�����d��P��k�Km�#��eG�-)�Шx?ηe&[��ں7$i���J���1�f!KA%��󘈻+}]ܽ�*�f��^�2���_�)5'w�g������N�y��[��,�����͉9�=���>��"q������/��g�īY�{��M?Hr�f����vշ�ɉL���D,�d���q�D�,U��v�<ar��f�	��A�� &Ͱ���]T��&Ͱ���t�trZ�fαmT�x�&�I��nҺ�89�����}5�t;�@r���WC�3��YU�,�P�����4s�ǰ;�$�-�$�@���ޭ�I�g`��aZZ��U���2V�4�4���7�����ݿ�7�����&�A�Σ�Nx�ܶ���|y������^��FN�`�����X�zcĹ�����+����w��
LBv筺A�)�u
�f�KhO��Er��,L�ي�:/���ES�sl����e�4�!M�y�)�^a���̔3���s^�w>J��(rQ@1	�b*|d����=��W9Ox�/pr��ptq�j�·��B!gt0	A�Ij���r&�f�_��9��BN�`Ί|B�R���ed�;w��F�M�\�D�ۋ�<�y�����	P�¤g�x������r�	�p%-�%2��9H�$aҌJ�ѨT�o%��Lb���u�A9��I�ԋڙ[����0i��	���#;��rr������T���I������A*DN�`�������T>ʉL�i|�
����/�4&!ƒl1�S!.�]0	q���Z�̃U��[0if>�3V!w�gb��ͯ�_楨���8�l�r��XǛK�nmp<d��3J��_�����s}[��]�3[>��|A����b�{7�{Q!�>�$ !9��i�P��ʰ�{�0	]�ğ<�����B�ma#�6[����9|���_&��9�+�m�/��r��L#wSa"!yfv'S�[���qF��M�}��oַ��jZ'�B�ia�L׾�����i�|8����f.Ԟ�5W{�;ߚۏӚ�rZ�[M�l��^y��pU86>9���(� �=m�7O�|�1.�$ך�u\$��Zz+ǖ�_��T�BN<aR@o@�����D L�X���K�[�x��
�v7t*dY8�vK��CQ�W�U��=m2'���L��dc�;zjo<�W�y^��Ӎ���L{�G��"�[=L� �ԨA���ښ��S��h������g�V�Xc�CSn�N����o���� �WRE#�%}7����`靹9��I���i��?�E�*�_m��{
9ۇI�]��SW��Y�y;LB|�����+��!Ӓh�+:����e-����4,;C�����wpflF�B8�%�J>EvW7Pl�{Z-l�@�j�R�\7�]��qFkI���/6����)v��ג"D�0����}oA���Ź�l�,��$�x{N��;�#�|� Qh�H�G�z�]��H�k���<��#�,����^��\w��p���W���Y���z�R�M!�l��)q̋4�'s��sWa?'Q�w|Z9Jd�\�/[\$�o��?NB%w�PΣ�w�tqC2���%�����P����^�zɇ,���=��ㅿ��]aGG�mH{(���|��>H`��G�]?`��D���mu��R�%���ka��
��ro��v�D:q)�Υ�>���5���P�M��82�kׇ0(����oE2���)z��<8�Q��	� ,�.��)8S^�$�#s��4��y�^�鏕`��Gbp"J3z������q�-�F������6���qq�����~ �v���'�8b�⴫�w�Sv�9�������N`�<e\��2��G5�7$��/z�y��鱨�҉�T�'X��2��2�<� {?jG��l��A/aL�OF5�@+�)Zr��m�*��$���"PO��7����2|�� P�/�W��*�i�W��5��Z��J�oK3wn��x�
&�n�d�[�-��Y�1��d['�{�E�Ͷ�͎��a�|���"8Y+�׫<�'*ԭf$
�Iʷ!�Z�׃��x/��9H�
ߵ
_3(�<�֫�{�7����Im!�ْhM(�U�m[߯:�����M�dђ��=gi�5;��������a�����j�� 	+�U+NVҮl����ն�B}#Ąl1B#�<Y�1��mW�æ�]��kI�؝V�ÉW�<Ʀ��➶�����&�"���_���/����-)Z���a�M'0�b|�,�,3
�-Fja���/�H����dR���
ܿ��6�K��Q�V�>M�ՠ!e�Ô_�Ŏ��<j?���+L ����/���������1�~-e~(M��B����/�'�a��[�A}Z}�6�^�C�29�lKrm=��TJ]�X�L<�N_(�@~:��ƪBd:�A�S�w���6:A˺��8ô�nU�e��I����T���ym&����L�#9�D^c#��lw�4��j�h0��U�ؑh�}3��w�N��gZR��\�N�R��Z�X@)l����K�z=}<��~<�����K@'��ڴ�,i�WOѵ�-^!� ��| �B^��K� ���\��^nM���P$�*�6�-��\+P�'v��7\d��7�^M�l�r^FoN{�k9I�I~l��-�J�S����4�z-?���0.�W>ok\�L2)�e�t��s��.�@K����L
[��C-ݫ�45��E�0�R�+���P-�L�$������L�),&�;N�L� ��V쇥r]R���g�]1W��l�X	�"��$B[!�r��{9:S������$���;b���g;l��8
������d���9_��j4zBנ�ކ���Nj9=�I3�)
֍��F�z��'ӯ��X�,���w�uœ���z���ڜ�g����%F���L�i,�2�@%��/M�����w)���2�����?�d��#S�x�	���ʷ��$��7�    8�K�v��Q�p�!&y% �5�os���G�\\D�q�:�z�Z�;L���r�E����2�Ʃ�q8�|x��ᆯ�+��0;�0Ȫط��Y�!����:A�B�����+9�W������%�e�&0$��-�����R-�[�&(:�"��R�L�e��W_cc�ls	?I�[��+j�Z ոN�J���PDݒ\���-_�S/ڵ�Qۖ�����[xS��\�H�q-n]��qeec�h� �zK��Ӎf�,�Z����"/)��S�m\F�j~���WCh`�x:-J��G��\��ƖU����62���J
U8�e����L��S�|�3�i�_9�IL%��������ô����9"E����r �QA�� �Ţ��R69�P��<@�y�ѸCW(��
��|��S�-�����#�⵬����]��Q�Q/��^L#�w��PGx��~^�y�����äM���:���+�}����$��[��A2�f��p��W�{7;�&;{"Y�qs��#.�;bA�Ф�_�Lu ]yE�2De_I��Z�3i�s�I�,lwZG_�2џ��Wf^_��C�	e�p�v߿!��!{�ky{�b����f��Â7M*ٟ�b�]"%a�B�oK�T�vQ�/xЄ{��8�$��`8�h�yz�\iLKh�KYϕ���dN�'.��k͡(��l��{�2�d�)�>.�9���l2.V���B(�VD�I�8�wI��\0VW��8����c�j�\"5��#�9�U`5�Z��Q��?-����m�S\�����\r�C]vStmu��n\yJ��
�ظ/��&�����&L.��_ރ��F�j_���y �#���'�:0i�o�c��7��$)�^���Ʒ#4�P8��ʌT�4Q�*�+~DὠT��i~�5�˺=���}:y`:D��T�3�^�|�z� ����I��@oռ�*\Q�? }�.��yB5��Յ~w����9�u�BC�/?�������L��U{���!��S���V�hC�(3��#����x���H��3�����N� )��@��Whk\	~��_�݁�Q�_	~��_�hR���Ѧ��6��������S�����	iT(���8"Э�?�)b��<����&D�q���4����bث�@�<�2qh/��6}�քxd�S-�q4��G���E���H�\o%��� .�؞��'D���/�?Z-��|���� �Y�s �;o�����t�Sd��p{�\69��*�TZ�����v=$5"ћ"I����䳯�I��,d��IG"k�j�:��1U?_�kn_����~���!����AL�@[vk�1�gꆇ c2�<>�q+M��r����c�K���� �'`�R��V�*R��/]6�)/�����,d��� �̃�tp08���fΛ�|Ӡ	��@�i�?#/�O뷝�pL@ev���+bꍩnȫb�\�D�I�����mNmD�� ������!�����G��Ï�s�*,�?GB�mXV���PX�iUI�HS�m�g�a׬RX&|�)3�ȫ.����:�w�<�IY�	��w:�!�w'�СU�Bk����m�>�1��V��he#�y�dY�f˙2�d�Cʗ$�,TRې]�<��2�+�}j�a�mҳ4ƚr�����VL��io~��Y�v��-��Ɂ'Ȼp^�IpҜr��D��R������h�[i��!ʄ;��L�%�
~[���=cH����W��O���!��&�[�o�N�C�*����������9`@1��Jy9����2����P,W����A蘎֟�����P�W�6����{]�Gr/.6Y�F��w�v���iE�>�]��k��0!_s����g�r1�fЮ'�$Ue�m����Zi�&b�RJ�s���R�"�H������y�qȒ�	^��H5~D�]K�ul�t���M�.�_���=��y ���I�j~��ozԙ�\��Z,]|��i��d�@�����rQ�O�#P7���Q���|�}��Ƿ;P�}�������_�_��?��B��������`�~�IZ8��9�k�����ރ=��·"C��{b�v��J?���_S|�R;���VTL�*��i��A��d#�#E���uQ]�U;��¡d�R�W������븻_^Y
�����3LR=���f�܇�eBY�RxJ�n�lz��6�d���L�2<P�u���`@o+9���-*l���}��r���o�AͻD�����+��n��ugbIɮ(&��_�q���M%��
b� ���u�ݿ�1u2
c���9Uy��R����n��jT�¶�o��ZQv�jha�.PrYu1�A�S�����Hf�Ej��`�T��eU]��Y�%�T��m��$�Sf���7*��U�C�8zZY�t}NR����W�l}��ݷ��hļ�P*kk]�@[�H��PD����X�W�~K'l��>"E8$�����g�_&;\	5����
NW��Ǥ0�����SL��<�1��f^|����(K����sD����4_�Q��U�^y��g4�x��U
C�8���O��"��y����Nj4$"!�8솮ڄ��~�1I�f؞�^���\�L�9<[�їxSk��C/������]�#
����¿�5'FH����UTL� ����G��`p)���ئ�V�՟R����Q<�kZ�6����6I��큪Pʌ��xS�y+�n;�̏.�6&y`�[,��Z��W�M�����a��E��lX��S
Ԯ���O��R��z8�:���Ϋ哛 �)�x�'0�`0�"��H��J=��*-�8���p���Y�fPF�0�(���P��[R|��@�H~��\�s����ղ���Ca1h������"Ҭ��� �&���L�t�ɜ�	��c���i�0"���35���2Y>�~�w�d�.Jg w�l<�A����U��+ ˂9u�{kVд)��:����C���Ɯ�HP�9VVӅ_���mnB��`�����1Ꭹ�̹��X��L)��bYe��]����Gyy��^E���Yf��D��d��M�H�B��a='�H�ư��H3��"���h��q�N���dI��s�WIY�{�G�8s����z���_�-��$�x�Hp�*t�d�خC�l'3�c�h<��渤�h�`D�f5��I�ѽ��;�fa4�S�,�G�(�4��RD"D��U��r�T��F���>��r��"�i�	b4�1"E�\[~zx}dj���8eA�������z����)Ϋ$�Z�(�"u{C�}]���V���$���Վ��`pS��|�Zue�I������VKP�{�֒'��R�G�e2�]��P������(Hk��y��G�)����� ޜ>�]%����|������I�._�5�(�	(��+��j�|���ܦ�h8�۷�H����oe�e��A{�Η&�5̼�M�c�):5�K�ocfÁخz%����"z�l8j���=�jJ�I- �^�ц�牰���1����ǆ9��>����Z\o6x��+V-�>	�F9aB�TKi	y�W��-��Y`�:��ݔ�}8�n��J��O9*kY��>4��Œ��4�J��J䷿f|*_h��r8����r�GI����t^�o0����Y���V��ce@7W N5*�ؘ�H�~�I��Z�V��S�PV,����)���2�'}���Z����|A�4f{�W~oj����<�[Ε��;+����
	�*t�8Nxo����;t���'W �jߨ^s�Q�U�?T������~���ѿ�_l�K��8Jj��L�N�p��ْf��|���������:}�]������Jk�_�'a,})*Qb_m4�HkHE�h��y� o�}~,pK9��w��2&���U��(���Q��Y��:��=m^�_��S4r��s�;��aV��ۅ�?[ߘO��O����"7A�q�^�(dH���-����:L�m���*9��;KN@X���R��W��`�Ծr���$F��*�Q��� &  'h{ob� �g����r݀�?i��j��("�;zo��C]�zd��ChQ�f�#Ҍd�cX�!��_�jr�E�Q�;�seF�jV\�៫7�ջ��C��/��¼V}�S[W��n�r�G��a�3 �׋��G$�9M�
�k�����BWoy�*��3E�  +V���<<���bt�""�����MG�R�3݅\�B9����y���/o �P���Ǥ{��������A˙^��(�î:��D
�Q3x|@�Z�,3�������ڽʎ,sL��vo6���      Z     x���]s�fǯ�O�E.�ix��!�ʋ��-�az#�H�x��L�N��f����e��ڛ;��$��� }���M3��:������9���Ճ�	���<4��y
���|oN�'�9��3�����zG��)���yd��_���������_�����06�gp����y�{粞�γ�u�-��<��.M:����j��t���H3,�d7�uS��̹y�\<)��x�KH��\*0����
���p9n�UQ"CU�6�����|'��H�;:��6�?�C;�D4�N�ӻ�G[���d��n:�9�I���xE�0�9D��OH��f�"C�?�#�`�3�p}�/`�����3\����3O�'Wg]�l��)p̦ nNp{�3���m�&�v�B�(��F�_��4{�x�ψ�bFx���Ұ;�{��5 b �X�^p!��bF�����H�	y �l�־��>���Ck��{?uhM�o]�.������=a����S{<Ol�B2�/d'���oз�va�p���E���=�T�����z'g��g2{�ư��c��	%�z���H[{�Gd���Zg1b���m׌pN��J�1<�4u;?����@z^��.E������e���� lL���T�P�Z"h�;�!��� �GX�`�*���$�g+Az�gc�D�O���D
n��h<X,�9���%���]ݠ٩����ϗ��-�/l�O[Wo��z�DS�R��N��&ɒn�9n�Ԥ�1I�Q�I6��ۈ����r7=�������xTIHzZ;�5���a/�ba�,��^C����?t`ڭ�dF��;�
~D�&�߬v�ĮM@�^\��������eW8|����)m@
�<�v�9�<��
b���S����K��k e��z)��bP	�H��yq�9C^�:8��o3Ƹ3H0��f���b���lW32E���0�y\�PE�1I�U���|������� ������S���������G��]�VP����`����|���Jj"^�%�%�l2ѧWb�����Rg�mf�;�2�c�-����]ѱ>�t�{o�[mP�je�ԉ-��7�
o�j}�ޚ�.�J���g�a;����>�z�CG����W�1��7ַ�g�/�נ����_m�T�͋��.�_�O;�=�}����owNb��[�ϤާcI���f�H��I�egy��#���"�l6��``��#'���M�x]��.��M�� L���y�|�(�ėCK��:��T�$��)�w�{�掤VՖ�z��~m��|H��a�W�t���aa����PR3�#%���I��� �v�R��^45���L���x���
k^-A�l��9�t N��gə�Q�|����3e� "��h�6�9i ��Iћ��^�M�%I5��Kf+ن\L�c�v�P�
��VOմ��V�����U��Sw3�4:��`$xW�\-��ޠi��e-���R���Z�	An����&Ñn�rs�喷)�B���I�E��׏�Q��L]I�2�����Z�b"W��z���j����(�(n���8�ў���?�N����G	�~�o�j�U�$���/������������Ɇ�v���F�ڭ�\ӃS:�8*��Q�=�C�����(;���-�fk�d�WӜE�&{�r�~U�����[�`�ף�/�p�9(��8�#ϗ� j�rCVU��$���[*�sq6��dkTC��ʣ0%���9�M�)Λi*��'����I��q���ck��}X@4�W�\-�	���Z�*Ob�l������t�V�^߾r�Kܕ�*��46�k�f�&Zg��v0`��X����H��HW.W�"�L.0L��)�T�%Sa2*y*k�(M�(�}�}���llô��������潽<�lM��{��Ww���;���̵ �0�ݘԖ�㪮HP���v��0rm���YrB�L>��2�����I:SgԪ�"m��#6��bLFPbi�K�{�h-x��`΅1�|���b�C������w|     