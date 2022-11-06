PGDMP     1    -            
    z            ots_test    14.5    14.5    Z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            [           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            \           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ]           1262    176615    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false                       1259    177152    building-comments    TABLE     �  CREATE TABLE public."building-comments" (
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
       public         heap    postgres    false                       1259    177151    building-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."building-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."building-comments_id_seq";
       public          postgres    false    258            ^           0    0    building-comments_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."building-comments_id_seq" OWNED BY public."building-comments".id;
          public          postgres    false    257            �            1259    176810 	   cable-log    TABLE     f  CREATE TABLE public."cable-log" (
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
       public         heap    postgres    false            �            1259    176809    cable-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cable-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."cable-log_id_seq";
       public          postgres    false    232            _           0    0    cable-log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."cable-log_id_seq" OWNED BY public."cable-log".id;
          public          postgres    false    231            �            1259    176699    counterparties    TABLE       CREATE TABLE public.counterparties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.counterparties;
       public         heap    postgres    false            �            1259    176698    counterparties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.counterparties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counterparties_id_seq;
       public          postgres    false    222            `           0    0    counterparties_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counterparties_id_seq OWNED BY public.counterparties.id;
          public          postgres    false    221            �            1259    176898    criticalities    TABLE     m  CREATE TABLE public.criticalities (
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
       public         heap    postgres    false            �            1259    176897    criticalities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.criticalities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.criticalities_id_seq;
       public          postgres    false    244            a           0    0    criticalities_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.criticalities_id_seq OWNED BY public.criticalities.id;
          public          postgres    false    243                       1259    177839    design-documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public."design-documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."design-documents_id_seq";
       public          postgres    false                       1259    177840    design-documents    TABLE     b  CREATE TABLE public."design-documents" (
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
       public         heap    postgres    false    263            �            1259    176655    designs    TABLE     
  CREATE TABLE public.designs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    176654    designs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.designs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    216            b           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    215            �            1259    176887 
   directions    TABLE       CREATE TABLE public.directions (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.directions;
       public         heap    postgres    false            �            1259    176886    directions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.directions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.directions_id_seq;
       public          postgres    false    242            c           0    0    directions_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.directions_id_seq OWNED BY public.directions.id;
          public          postgres    false    241                       1259    177750    documentation-comments    TABLE     �  CREATE TABLE public."documentation-comments" (
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
       public         heap    postgres    false                       1259    177749    documentation-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."documentation-comments_id_seq";
       public          postgres    false    260            d           0    0    documentation-comments_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."documentation-comments_id_seq" OWNED BY public."documentation-comments".id;
          public          postgres    false    259                       1259    177799    documentation-solutions    TABLE     p  CREATE TABLE public."documentation-solutions" (
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
       public         heap    postgres    false                       1259    177798    documentation-solutions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."documentation-solutions_id_seq";
       public          postgres    false    262            e           0    0    documentation-solutions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."documentation-solutions_id_seq" OWNED BY public."documentation-solutions".id;
          public          postgres    false    261            �            1259    176688 
   equipments    TABLE       CREATE TABLE public.equipments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.equipments;
       public         heap    postgres    false            �            1259    176687    equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.equipments_id_seq;
       public          postgres    false    220            f           0    0    equipments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.equipments_id_seq OWNED BY public.equipments.id;
          public          postgres    false    219            �            1259    176617 
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
       public         heap    postgres    false            �            1259    176616    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    210            g           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    209            �            1259    176639    fields    TABLE     %  CREATE TABLE public.fields (
    "subsidiaryId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.fields;
       public         heap    postgres    false            �            1259    176638    fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.fields_id_seq;
       public          postgres    false    214            h           0    0    fields_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.fields_id_seq OWNED BY public.fields.id;
          public          postgres    false    213            �            1259    176825    impulse-line-log    TABLE       CREATE TABLE public."impulse-line-log" (
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
       public         heap    postgres    false            �            1259    176824    impulse-line-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impulse-line-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impulse-line-log_id_seq";
       public          postgres    false    234            i           0    0    impulse-line-log_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impulse-line-log_id_seq" OWNED BY public."impulse-line-log".id;
          public          postgres    false    233            �            1259    176977    logos    TABLE     �  CREATE TABLE public.logos (
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
       public         heap    postgres    false            �            1259    176976    logos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.logos_id_seq;
       public          postgres    false    254            j           0    0    logos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.logos_id_seq OWNED BY public.logos.id;
          public          postgres    false    253            �            1259    176854    metrologies    TABLE     g  CREATE TABLE public.metrologies (
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
       public         heap    postgres    false            �            1259    176853    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    238            k           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    237            �            1259    176873    monitorings    TABLE     c  CREATE TABLE public.monitorings (
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
       public         heap    postgres    false            �            1259    176872    monitorings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.monitorings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monitorings_id_seq;
       public          postgres    false    240            l           0    0    monitorings_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monitorings_id_seq OWNED BY public.monitorings.id;
          public          postgres    false    239                        1259    177073 
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
       public         heap    postgres    false            �            1259    177072    normatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normatives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.normatives_id_seq;
       public          postgres    false    256            m           0    0    normatives_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.normatives_id_seq OWNED BY public.normatives.id;
          public          postgres    false    255            �            1259    176666    projects    TABLE     {  CREATE TABLE public.projects (
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
       public         heap    postgres    false            �            1259    176665    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    218            n           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    217            �            1259    176952    sections    TABLE       CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    176951    sections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sections_id_seq;
       public          postgres    false    250            o           0    0    sections_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;
          public          postgres    false    249            �            1259    176840    signals    TABLE     �  CREATE TABLE public.signals (
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
       public         heap    postgres    false            �            1259    176839    signals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.signals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.signals_id_seq;
       public          postgres    false    236            p           0    0    signals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.signals_id_seq OWNED BY public.signals.id;
          public          postgres    false    235            �            1259    176941    stages    TABLE     	  CREATE TABLE public.stages (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.stages;
       public         heap    postgres    false            �            1259    176940    stages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.stages_id_seq;
       public          postgres    false    248            q           0    0    stages_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.stages_id_seq OWNED BY public.stages.id;
          public          postgres    false    247            �            1259    176736 	   sub-units    TABLE     �  CREATE TABLE public."sub-units" (
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
       public         heap    postgres    false            �            1259    176735    sub-units_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sub-units_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sub-units_id_seq";
       public          postgres    false    226            r           0    0    sub-units_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sub-units_id_seq" OWNED BY public."sub-units".id;
          public          postgres    false    225            �            1259    176628    subsidiaries    TABLE       CREATE TABLE public.subsidiaries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.subsidiaries;
       public         heap    postgres    false            �            1259    176627    subsidiaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subsidiaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.subsidiaries_id_seq;
       public          postgres    false    212            s           0    0    subsidiaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.subsidiaries_id_seq OWNED BY public.subsidiaries.id;
          public          postgres    false    211            �            1259    176773    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
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
       public         heap    postgres    false            �            1259    176772 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    230            t           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    229            �            1259    176762    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false            �            1259    176963    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
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
       public         heap    postgres    false            �            1259    176962    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    252            u           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    251            �            1259    176761    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    228            v           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    227            �            1259    176710    units    TABLE     �  CREATE TABLE public.units (
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
       public         heap    postgres    false            �            1259    176709    units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.units_id_seq;
       public          postgres    false    224            w           0    0    units_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.units_id_seq OWNED BY public.units.id;
          public          postgres    false    223            �            1259    176909    users    TABLE     �  CREATE TABLE public.users (
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
       public         heap    postgres    false            �            1259    176908    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    246            x           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    245            	           2604    177155    building-comments id    DEFAULT     �   ALTER TABLE ONLY public."building-comments" ALTER COLUMN id SET DEFAULT nextval('public."building-comments_id_seq"'::regclass);
 E   ALTER TABLE public."building-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    258    257    258            �           2604    176813    cable-log id    DEFAULT     p   ALTER TABLE ONLY public."cable-log" ALTER COLUMN id SET DEFAULT nextval('public."cable-log_id_seq"'::regclass);
 =   ALTER TABLE public."cable-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231    232            �           2604    176702    counterparties id    DEFAULT     v   ALTER TABLE ONLY public.counterparties ALTER COLUMN id SET DEFAULT nextval('public.counterparties_id_seq'::regclass);
 @   ALTER TABLE public.counterparties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222                        2604    176901    criticalities id    DEFAULT     t   ALTER TABLE ONLY public.criticalities ALTER COLUMN id SET DEFAULT nextval('public.criticalities_id_seq'::regclass);
 ?   ALTER TABLE public.criticalities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    244    244            �           2604    176658 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    176890    directions id    DEFAULT     n   ALTER TABLE ONLY public.directions ALTER COLUMN id SET DEFAULT nextval('public.directions_id_seq'::regclass);
 <   ALTER TABLE public.directions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            
           2604    177753    documentation-comments id    DEFAULT     �   ALTER TABLE ONLY public."documentation-comments" ALTER COLUMN id SET DEFAULT nextval('public."documentation-comments_id_seq"'::regclass);
 J   ALTER TABLE public."documentation-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    260    260                       2604    177802    documentation-solutions id    DEFAULT     �   ALTER TABLE ONLY public."documentation-solutions" ALTER COLUMN id SET DEFAULT nextval('public."documentation-solutions_id_seq"'::regclass);
 K   ALTER TABLE public."documentation-solutions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261    262            �           2604    176691    equipments id    DEFAULT     n   ALTER TABLE ONLY public.equipments ALTER COLUMN id SET DEFAULT nextval('public.equipments_id_seq'::regclass);
 <   ALTER TABLE public.equipments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    176620    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �           2604    176642 	   fields id    DEFAULT     f   ALTER TABLE ONLY public.fields ALTER COLUMN id SET DEFAULT nextval('public.fields_id_seq'::regclass);
 8   ALTER TABLE public.fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    176828    impulse-line-log id    DEFAULT     ~   ALTER TABLE ONLY public."impulse-line-log" ALTER COLUMN id SET DEFAULT nextval('public."impulse-line-log_id_seq"'::regclass);
 D   ALTER TABLE public."impulse-line-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234                       2604    176980    logos id    DEFAULT     d   ALTER TABLE ONLY public.logos ALTER COLUMN id SET DEFAULT nextval('public.logos_id_seq'::regclass);
 7   ALTER TABLE public.logos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    253    254    254            �           2604    176857    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    238    238            �           2604    176876    monitorings id    DEFAULT     p   ALTER TABLE ONLY public.monitorings ALTER COLUMN id SET DEFAULT nextval('public.monitorings_id_seq'::regclass);
 =   ALTER TABLE public.monitorings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    240    240                       2604    177076    normatives id    DEFAULT     n   ALTER TABLE ONLY public.normatives ALTER COLUMN id SET DEFAULT nextval('public.normatives_id_seq'::regclass);
 <   ALTER TABLE public.normatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    256    255    256            �           2604    176670    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218                       2604    176955    sections id    DEFAULT     j   ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);
 :   ALTER TABLE public.sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    249    250    250            �           2604    176843 
   signals id    DEFAULT     h   ALTER TABLE ONLY public.signals ALTER COLUMN id SET DEFAULT nextval('public.signals_id_seq'::regclass);
 9   ALTER TABLE public.signals ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    236    236                       2604    176944 	   stages id    DEFAULT     f   ALTER TABLE ONLY public.stages ALTER COLUMN id SET DEFAULT nextval('public.stages_id_seq'::regclass);
 8   ALTER TABLE public.stages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247    248            �           2604    176741    sub-units id    DEFAULT     p   ALTER TABLE ONLY public."sub-units" ALTER COLUMN id SET DEFAULT nextval('public."sub-units_id_seq"'::regclass);
 =   ALTER TABLE public."sub-units" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    176631    subsidiaries id    DEFAULT     r   ALTER TABLE ONLY public.subsidiaries ALTER COLUMN id SET DEFAULT nextval('public.subsidiaries_id_seq'::regclass);
 >   ALTER TABLE public.subsidiaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �           2604    176776    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    176765    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228                       2604    176966    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251    252            �           2604    176715    units id    DEFAULT     d   ALTER TABLE ONLY public.units ALTER COLUMN id SET DEFAULT nextval('public.units_id_seq'::regclass);
 7   ALTER TABLE public.units ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224                       2604    176912    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    246    246            Q          0    177152    building-comments 
   TABLE DATA           �   COPY public."building-comments" (id, "projectId", "unitId", "subUnitId", "monitoringId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    258   �w      7          0    176810 	   cable-log 
   TABLE DATA           �   COPY public."cable-log" (id, "sloeId", "numberOfTrace", "cableMark", "cableSection", "fromUnit", "fromPlace", "toUnit", "toPlace", "cableLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    232   �w      -          0    176699    counterparties 
   TABLE DATA           `   COPY public.counterparties (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �      C          0    176898    criticalities 
   TABLE DATA           }   COPY public.criticalities (id, title, code, description, threshold, goal, "tenseGoal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    244   ��      W          0    177840    design-documents 
   TABLE DATA             COPY public."design-documents" (id, code, "projectId", "unitId", "uqstId", "subUnitId", "suqstId", "supplierId", "stageId", "sectionId", "sloeId", "cableLogId", "monitoringId", title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    264   ��      '          0    176655    designs 
   TABLE DATA           Y   COPY public.designs (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �      A          0    176887 
   directions 
   TABLE DATA           \   COPY public.directions (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    242   P�      S          0    177750    documentation-comments 
   TABLE DATA           �   COPY public."documentation-comments" (id, "pdcId", "udcId", "sudcId", "sdcId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    260   L�      U          0    177799    documentation-solutions 
   TABLE DATA           �   COPY public."documentation-solutions" (id, "commentId", "statusId", answer, "designContacts", "solutionId", "userId", solution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    262   n      +          0    176688 
   equipments 
   TABLE DATA           \   COPY public.equipments (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   %V      !          0    176617 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   OY      %          0    176639    fields 
   TABLE DATA           h   COPY public.fields ("subsidiaryId", id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   �k      9          0    176825    impulse-line-log 
   TABLE DATA           �   COPY public."impulse-line-log" (id, "sloeId", "numberOfTrace", "impulseLineType", "fromPlace", "toPlace", "impulseLineLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    234   �m      M          0    176977    logos 
   TABLE DATA           �   COPY public.logos ("subsidiaryId", "counterpartyId", "designId", "userId", id, "filePath", "fileType", "fileName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    254   �m      =          0    176854    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    238   Yo      ?          0    176873    monitorings 
   TABLE DATA           �   COPY public.monitorings (id, "sloeId", "mountDate", "mountDocument", "connectDate", "connectDocument", "testDate", "testDocument", "awpDate", "awpDocument", "commisionDate", "commisionDocument", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    240   �w      O          0    177073 
   normatives 
   TABLE DATA           �   COPY public.normatives (id, code, title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    256   X~      )          0    176666    projects 
   TABLE DATA           {   COPY public.projects ("fieldId", "designId", id, title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   j�      I          0    176952    sections 
   TABLE DATA           Z   COPY public.sections (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    250   Z�      ;          0    176840    signals 
   TABLE DATA           �   COPY public.signals (id, "sloeId", "signalType", "signalProtocol", "signalParameter", "signalTag", ll, l, h, hh, "emergencyProtocol", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    236   B�      G          0    176941    stages 
   TABLE DATA           X   COPY public.stages (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    248   Ҫ      1          0    176736 	   sub-units 
   TABLE DATA           �   COPY public."sub-units" ("unitId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   ��      #          0    176628    subsidiaries 
   TABLE DATA           ^   COPY public.subsidiaries (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    212   ��      5          0    176773    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   ү      3          0    176762    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   ��      K          0    176963    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    252   ��      /          0    176710    units 
   TABLE DATA           �   COPY public.units ("projectId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   �;      E          0    176909    users 
   TABLE DATA           �   COPY public.users ("subsidiaryId", "fieldId", "designId", "counterpartyId", id, "firstName", "secondName", "lastName", subdivision, "position", email, phone, password, roles, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    246   	k      y           0    0    building-comments_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."building-comments_id_seq"', 1, false);
          public          postgres    false    257            z           0    0    cable-log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."cable-log_id_seq"', 115, true);
          public          postgres    false    231            {           0    0    counterparties_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.counterparties_id_seq', 196, true);
          public          postgres    false    221            |           0    0    criticalities_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.criticalities_id_seq', 116, true);
          public          postgres    false    243            }           0    0    design-documents_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."design-documents_id_seq"', 407, true);
          public          postgres    false    263            ~           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 17, true);
          public          postgres    false    215                       0    0    directions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.directions_id_seq', 5, true);
          public          postgres    false    241            �           0    0    documentation-comments_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."documentation-comments_id_seq"', 935, true);
          public          postgres    false    259            �           0    0    documentation-solutions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."documentation-solutions_id_seq"', 494, true);
          public          postgres    false    261            �           0    0    equipments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.equipments_id_seq', 37, true);
          public          postgres    false    219            �           0    0    facilities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.facilities_id_seq', 160, true);
          public          postgres    false    209            �           0    0    fields_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.fields_id_seq', 16, true);
          public          postgres    false    213            �           0    0    impulse-line-log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."impulse-line-log_id_seq"', 3, true);
          public          postgres    false    233            �           0    0    logos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.logos_id_seq', 10, true);
          public          postgres    false    253            �           0    0    metrologies_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.metrologies_id_seq', 48, true);
          public          postgres    false    237            �           0    0    monitorings_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.monitorings_id_seq', 107, true);
          public          postgres    false    239            �           0    0    normatives_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.normatives_id_seq', 31, true);
          public          postgres    false    255            �           0    0    projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.projects_id_seq', 230, true);
          public          postgres    false    217            �           0    0    sections_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.sections_id_seq', 400, true);
          public          postgres    false    249            �           0    0    signals_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.signals_id_seq', 147, true);
          public          postgres    false    235            �           0    0    stages_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.stages_id_seq', 12, true);
          public          postgres    false    247            �           0    0    sub-units_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."sub-units_id_seq"', 73, true);
          public          postgres    false    225            �           0    0    subsidiaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subsidiaries_id_seq', 15, true);
          public          postgres    false    211            �           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 436, true);
          public          postgres    false    229            �           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 920, true);
          public          postgres    false    251            �           0    0    technical-card_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."technical-card_id_seq"', 4800, true);
          public          postgres    false    227            �           0    0    units_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.units_id_seq', 554, true);
          public          postgres    false    223            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    245            X           2606    177159 (   building-comments building-comments_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_pkey";
       public            postgres    false    258            4           2606    176818    cable-log cable-log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_pkey";
       public            postgres    false    232            (           2606    176706 "   counterparties counterparties_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_pkey;
       public            postgres    false    222            *           2606    176708 '   counterparties counterparties_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_title_key UNIQUE (title);
 Q   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_title_key;
       public            postgres    false    222            B           2606    176905     criticalities criticalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_pkey;
       public            postgres    false    244            D           2606    176907 %   criticalities criticalities_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_title_key;
       public            postgres    false    244            ^           2606    177850 &   design-documents design-documents_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_pkey";
       public            postgres    false    264                       2606    176662    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    216                       2606    176664    designs designs_title_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_title_key UNIQUE (title);
 C   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_title_key;
       public            postgres    false    216            >           2606    176894    directions directions_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_pkey;
       public            postgres    false    242            @           2606    176896    directions directions_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_title_key;
       public            postgres    false    242            Z           2606    177757 2   documentation-comments documentation-comments_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pkey";
       public            postgres    false    260            \           2606    177807 4   documentation-solutions documentation-solutions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_pkey";
       public            postgres    false    262            $           2606    176695    equipments equipments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_pkey;
       public            postgres    false    220            &           2606    176697    equipments equipments_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_title_key;
       public            postgres    false    220                       2606    176626    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    210                       2606    176646    fields fields_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_pkey;
       public            postgres    false    214                       2606    176648    fields fields_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_title_key;
       public            postgres    false    214            6           2606    176833 &   impulse-line-log impulse-line-log_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_pkey";
       public            postgres    false    234            T           2606    176984    logos logos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT logos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.logos DROP CONSTRAINT logos_pkey;
       public            postgres    false    254            :           2606    176861    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    238            <           2606    176880    monitorings monitorings_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT monitorings_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT monitorings_pkey;
       public            postgres    false    240            V           2606    177081    normatives normatives_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.normatives
    ADD CONSTRAINT normatives_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.normatives DROP CONSTRAINT normatives_pkey;
       public            postgres    false    256                        2606    176674    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    218            "           2606    176676    projects projects_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_title_key;
       public            postgres    false    218            N           2606    176959    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    250            P           2606    176961    sections sections_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_title_key;
       public            postgres    false    250            8           2606    176847    signals signals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT signals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.signals DROP CONSTRAINT signals_pkey;
       public            postgres    false    236            J           2606    176948    stages stages_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_pkey;
       public            postgres    false    248            L           2606    176950    stages stages_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_title_key;
       public            postgres    false    248            .           2606    176745    sub-units sub-units_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_pkey";
       public            postgres    false    226                       2606    176635    subsidiaries subsidiaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_pkey;
       public            postgres    false    212                       2606    176637 #   subsidiaries subsidiaries_title_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_title_key UNIQUE (title);
 M   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_title_key;
       public            postgres    false    212            2           2606    176783 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    230            R           2606    176970 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    252            0           2606    176769 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    228            ,           2606    176719    units units_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.units DROP CONSTRAINT units_pkey;
       public            postgres    false    224            F           2606    176919    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    246            H           2606    176917    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    246            �           2606    177185 6   building-comments building-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_criticalityId_fkey";
       public          postgres    false    3394    258    244            �           2606    177180 4   building-comments building-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_directionId_fkey";
       public          postgres    false    258    3390    242                       2606    177175 5   building-comments building-comments_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_monitoringId_fkey";
       public          postgres    false    3388    258    240            �           2606    177190 4   building-comments building-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_normativeId_fkey";
       public          postgres    false    256    3414    258            |           2606    177160 2   building-comments building-comments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_projectId_fkey";
       public          postgres    false    218    258    3360            ~           2606    177170 2   building-comments building-comments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_subUnitId_fkey";
       public          postgres    false    258    3374    226            }           2606    177165 /   building-comments building-comments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_unitId_fkey";
       public          postgres    false    224    3372    258            �           2606    177195 /   building-comments building-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_userId_fkey";
       public          postgres    false    246    3400    258            m           2606    176819    cable-log cable-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_sloeId_fkey";
       public          postgres    false    3378    232    230            �           2606    177896 1   design-documents design-documents_cableLogId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_cableLogId_fkey" FOREIGN KEY ("cableLogId") REFERENCES public."cable-log"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_cableLogId_fkey";
       public          postgres    false    232    3380    264            �           2606    177901 3   design-documents design-documents_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_monitoringId_fkey";
       public          postgres    false    3388    264    240            �           2606    177851 0   design-documents design-documents_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_projectId_fkey";
       public          postgres    false    264    3360    218            �           2606    177886 0   design-documents design-documents_sectionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.sections(id) ON UPDATE CASCADE;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sectionId_fkey";
       public          postgres    false    264    3406    250            �           2606    177891 -   design-documents design-documents_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sloeId_fkey";
       public          postgres    false    264    3378    230            �           2606    177881 .   design-documents design-documents_stageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES public.stages(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_stageId_fkey";
       public          postgres    false    264    248    3402            �           2606    177866 0   design-documents design-documents_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_subUnitId_fkey";
       public          postgres    false    3374    264    226            �           2606    177876 1   design-documents design-documents_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_supplierId_fkey";
       public          postgres    false    3368    264    222            �           2606    177871 .   design-documents design-documents_suqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_suqstId_fkey" FOREIGN KEY ("suqstId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_suqstId_fkey";
       public          postgres    false    3374    264    226            �           2606    177856 -   design-documents design-documents_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_unitId_fkey";
       public          postgres    false    224    264    3372            �           2606    177861 -   design-documents design-documents_uqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_uqstId_fkey" FOREIGN KEY ("uqstId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_uqstId_fkey";
       public          postgres    false    224    264    3372            �           2606    177783 @   documentation-comments documentation-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_criticalityId_fkey";
       public          postgres    false    244    3394    260            �           2606    177778 >   documentation-comments documentation-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_directionId_fkey";
       public          postgres    false    242    3390    260            �           2606    177788 >   documentation-comments documentation-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_normativeId_fkey";
       public          postgres    false    260    256    3414            �           2606    177793 9   documentation-comments documentation-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_userId_fkey";
       public          postgres    false    246    260    3400            �           2606    177808 >   documentation-solutions documentation-solutions_commentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."documentation-comments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_commentId_fkey";
       public          postgres    false    3418    260    262            �           2606    177813 ;   documentation-solutions documentation-solutions_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 i   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_userId_fkey";
       public          postgres    false    3400    262    246            _           2606    176649    fields fields_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT "fields_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.fields DROP CONSTRAINT "fields_subsidiaryId_fkey";
       public          postgres    false    212    3348    214            n           2606    176834 -   impulse-line-log impulse-line-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_sloeId_fkey";
       public          postgres    false    3378    230    234            y           2606    176990    logos logos_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_counterpartyId_fkey";
       public          postgres    false    254    222    3368            z           2606    176995    logos logos_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_designId_fkey";
       public          postgres    false    3356    254    216            x           2606    176985    logos logos_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_subsidiaryId_fkey";
       public          postgres    false    254    3348    212            {           2606    177000    logos logos_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_userId_fkey";
       public          postgres    false    3400    246    254            q           2606    176867 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    222    3368    238            p           2606    176862 #   metrologies metrologies_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_sloeId_fkey";
       public          postgres    false    3378    238    230            r           2606    176881 #   monitorings monitorings_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT "monitorings_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT "monitorings_sloeId_fkey";
       public          postgres    false    230    240    3378            a           2606    176682    projects projects_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_designId_fkey";
       public          postgres    false    3356    216    218            `           2606    176677    projects projects_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_fieldId_fkey";
       public          postgres    false    218    214    3352            o           2606    176848    signals signals_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT "signals_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.signals DROP CONSTRAINT "signals_sloeId_fkey";
       public          postgres    false    230    236    3378            f           2606    176751 $   sub-units sub-units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_equipmentId_fkey";
       public          postgres    false    226    3364    220            g           2606    176756 #   sub-units sub-units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_supplierId_fkey";
       public          postgres    false    226    3368    222            e           2606    176746    sub-units sub-units_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_unitId_fkey";
       public          postgres    false    226    224    3372            k           2606    176799 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    3346    210    230            h           2606    176784 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    218    230    3360            j           2606    176794 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    226    3374    230            l           2606    176804 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    3376    228    230            i           2606    176789 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    224    3372    230            w           2606    176971 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    252    228    3376            c           2606    176725    units units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_equipmentId_fkey";
       public          postgres    false    220    3364    224            b           2606    176720    units units_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_projectId_fkey";
       public          postgres    false    3360    224    218            d           2606    176730    units units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_supplierId_fkey";
       public          postgres    false    224    3368    222            v           2606    176935    users users_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_counterpartyId_fkey";
       public          postgres    false    222    3368    246            u           2606    176930    users users_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_designId_fkey";
       public          postgres    false    216    3356    246            t           2606    176925    users users_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_fieldId_fkey";
       public          postgres    false    214    246    3352            s           2606    176920    users users_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_subsidiaryId_fkey";
       public          postgres    false    3348    212    246            Q      x������ � �      7   �  x��͎����S�QB<���7Ɏeَ�xCX�K��GY��	;r�`���F�\�k�R���8o�b�|�I�j{zf������3��U�E6َFg���{���L��8�����;��?\�\���/L?�_�F�=��?����m��?����N�ք�k~�a��N�����ݪ��S���!�&x����+s����<|�g�q:���[x������ӻ�G��1
?��ӿ��b��O0�l��a�Q��~��ŋ�z��&<�b�߾��Ŕ�R�*`J�Q58�c��@����ü��3H��e��4|�?��/��/����q��\&�����?��_^�S����@K�bT��݃��D�?oY���C�V|~��y��
�6��}*S1�0h��e*U(���Iab9���6�k���59U,Q��1��%�Xj,�.a�F�Z2U��$�51���#�dK��V������J�\�D�!�u\f$��s��\�e\.�0�O������gGr�>��s��(qa�s5�Y��K�����LX�2=..Fs���C�MP�L�W"Qb3z\��62~���E ր���9],Q���ѽ�~��ys%��uZ�I�^`�8,7Ҍ�H��vc5�/f�Ά-U[��AŇ�Rd�چ�c:��� ֑ö�8o�~��U�>ܛ;m����F|�12���N���k��aW���V��հ�5�f&Q�ıSnSn��0�IM&Q�m��������>�Z�'gu1�u�p�F�Z%�?�(h��2�4B�d��H�`�������5�#�ek~��Cl}���o��<!�O���׮b0���B�����7�5ʠ�p�K,qrn�7�'��̶v����f��Kqjnc�����0���_cF}�=A�ðÂC��%*$�ɍ���O�4��A��ƿ���&h����Å��}!:���W�
�w�� �`��F�gh��1x1 �g�1:w	��.��؉�>��~B�}�.�W�
����?D��$��b��|v��7l[��� jHj�L�B���k�f[�y���!0��� ���dz�+N��C~)x�0Bb��'������Ug	W:m�����:���G�j������_������ͫ!��T��t�p��j�TꤾD�F'Yr� �$�$u!��ָ-�/zP�љ�,��=�H��"gq1�ī�*L�7���c��I8
V1:����\�KT�ԙ0ș�ē�*Ov.����'K��/����a���yhP��p�:��jC��$���ښ����.�b�D�}��|�{u���7��s�n�s��9݀����"�J@�A���/�B��"A���.G���A����[g[Ü7/m�S1�
�j�_�"��ٌ����&��!>��&[w~�/�rd�v&�!�!�%*�!K���(��>��]G��`ԗ������=�J,������`>�zpxVW3����D��7d[�ɑD�K�/$�����*�V����+�[��P�E��b���:�
�\4\� �lKT��!�BKT��B{�ȦЕc�*�oȮЗc��Py�|�=6pn�\8��m�׶��)�ʗ\x!�
�f,Q��9���%�LyH\���j5����!�ƨ�BU����J�n����Ro�R�h@6�^i�KT�]�1���D5Ox�F�Vy׫x:�j�)���\�:�;�^.��ζ��KT���5j��IT��"�P���*!s[&�%�X�Z��ZM�:�Pk,���@����M	�p��*d�X��&D���X"8����X��y�.V��X����Q'� ��%j�^�la�KT�MIN�(V�]�5� ���@p&P�<�/Q#v
ȕV�b���\���Y�V�\'Q���]��z<P��F�T���"5�(�h�@�Cn,��BT��P$Q�A��-��X�X́������!.W�+��KiC�F"Wi��%���!��Y������u�-�j�n��{l
�q�P*�m8^{C����.�E�c5�t�O$jC�";#�)�:7coo-/�/npr���%��TQ�7��o�?�WUdj��:�,/޸G��G&̋sV[�/�7g�x.Whc�yk8O����=�H$jC��v�H鶆#�V��IԆ�� ����|( �p�ùt1+����EV��2=�8ҍ��4���
��&r�y��_���X�X�	���؞�|<���y��pG�~՝�:�O���?o��ܭJ1 �jez\7��u�g��A��R�%�ذ�1;��7c��Jd"Q���-f�[t���%�^s����!��y�r�d:��p����ct��m�m�[��ۜ۝��O�%�����l��E�#�u�:չ��5Pv����QK#���}�X5�k��iL$��t�ٳ��Q#M{�9[�M$�#pBz�&�Þ�Vq]�Mx�D�����S�-�������?Wݕ���I���sG�F�pRY7\�6�H�H�E0��e�ӗM�e����_^������m�����o_���n}���2̨qv|���1ޠg�.�h�վx���g�]�:�.�E��4�\4`�I0���)�Z�0Y�ߗ(g�%�z�7������^���j��%�@`���e� ��%H r㵃�ڛO�K:���t��p��	��x_��eDx��{N��oܬ.~?bx�k��]���Ô9�^��׍���j|}ժq���0�`�ؗh$��0񟌿�n��Z��xaW�-X�y] Z
��Gϯ/6�S/n�zۓJE�ݢQaY%+m�Bi�2s䆠`�����Ѥj>ZdEi_B(�Pvn��v�y{k1���	�hx��ї�	k'XD���"��{8�J]pz���*;�HȄŎX�u�1��3b�y�0Y=/@.�0����m�%�)nv�y��� �~�r��g<�u�H�����g>�m<�#/��!d^1�\�u��8���jJ����      -      x��\[oɕ~f���^$���&�� vv Y /���1�@��ț,{�Il�eI�Y%z�����1G
��ſ�_�s�����paXb�i�w���;�:Ũ���i���j��N�	�?����v�����5�~��/��r��Q�?�I�(�j]�?���V]BS?`���PQ�g�5@�����ƍ[����t�~tgp����[jWEI��6��/�x�B�%\,�(Hj�!䡚��֠����<{(�B5	�{5V~<o�S{jS���p(
��oA��:G�ٗ�5Eh��M5�=��@��SO�s1 �T�*��BQ�͵�!Pߩ3����_Jmgr�(
z� ��c�]��?��?���h�]��9��7���0T�ԁ�>��ܑ�I�Ԣ�շ4كV�	�7����#���o��RIyI�(���H����z�g���F�p�ܙ�cu��8Y@���Sx������0L����*E�J�M�ai�]��;�=��!� ���2~����0<�A����a�aJ��� ����pG��y������T�G�"��ǎ�4i��L�}�����]�A�fF/��#B�t�z	��ۺ�a_�j횿0u ��K7I$�ʄK� *(pH3�v��*��+݇a�Kd�)̏~��iX�Cj�/f$i��&�aA�#�������qX��̸'�lHD6?�8���dLPL�i\"V�o�a�����=���Ɣz�K�>�[R�x�C�*��"Q�-Uv��}G��zn����|Dh��8r�b.i�L�$�U��$�7 �z����)��1�Ph�FJ�lIđ3���!�؃��a���C"�]D���񠿹]��e[H� ��g�vB���J�߳��xѲcY��y��7ܱz�/���	O�}����u/̍����΢�5^O6g$
��eC�Z����+�H�qn;s-��+�����ΩD���*��Z؛�3�<�Rj\�F$
�^e��!�^�g��񘤗l�H��F�>��AmR`5a�-d閄%�I�|X�=�����DAR8y��,�5fV7|��!��Bi���[9��[��2��e�A� IJ���ByB��'������$
��m�aF� �$S�{oa��2*H���p�o�="_����let4������
$@� �����H��	0-t��p�~�mW���D"��)\ޕ�#=����&�QP'*M_pvˡ�_��Ej��Q�)B�u�������`)�pՙԸ�-
:�j�"N��>a�6�H�5��mowB:Q�kJA��Ԩ�ޗ�H؈�N����k��&�>(]E�d?{����=e��H�hӈ�N�?л�A=6(��DM�$F��빍.(��?��.�O�V\лb�6��ě���g,[�s#
:ݪe�49}�Z�ӈ�N�?7���B$?��\��|��d��+�j0�gɸ�=+)&P���8�du�׈%x���(H#�Q��Ǖ����#X�vT<)	�:ǝ�!����bDAj���^�B���b�y���ل4w_ȁ���J}��b����X쫿;.9��"��k�ߍ�N�iZ��0\����؝3��������l#�~�6�	!�S����l�H���CCś��":Bj��������v��ߩɷ䰖��x��$��5z���)o��� z��߇SY�]6�����J���_�������+?�M���ל�=�!ź��9G�˚4JZ&��DA;�R�d$��:��������W
[�fŅ'�9Y�g����lR�S��[�i�B�E�@�њ��2�"�㜖�1�THp�Y,Nj��"U�sZ�[䙊#&&��}`��F��W��253f��$fZ�t(�A�}G�I�DAf�{[`��`���7<X�����ѡg����(Gtё�kƏ��.���h��^�4�MF��Bg�	��z[a���-��1��
I�QmARNf~��a��c��E��-Od�ڟc���r�S�22��(��ԶO��X���3\y�0~_��JJ�����٣�4�&��	I	نļ���?�+�q�j����!����>8�=Ro%Ed�'Q�u)e� M{�1��$h"/K];Gd��7hxRT�>$�"���WA�r�_�ѻ�e�ߌ��KZ�s�DA��g%����C�)pO�yG��9@n�U̽֎�<��>���d�RA$�����^�ql��g"�zPRHv1H�:N<��}�_�5$�.bH�{@��gh�b�*�2_B� !�S���?9sA~�c���}Ʌ!�����"�8S��v�:�<A�_P7UL�\w��G$%d*#Qг���J���/�C�ku7_v��iLi���qI�� Q�+�W���7T,3��`�1�[�̝$
����d&X;���Sq%aԼez�������
RĈ#�B�}m=
k����W+'5��AӬ�`*����ۘ�{>�Sޑ9�DA?iж���;2�'E��z'5.�5��~ǿ�qٜqPSD;B�/�Wb`�6�m���Y�e��Q*�ˆ��5��c���
�9�F@�^�T����~�)��T�3���y��!
|�4�p���|&�}; {�5_&��	N���M�_�M9��MwLW^��//Z=Q�m��VL��߲nl��G*�����ڶ�u�I0]L��II�c�e��.޻�ڶ�u�/b\�'���KJ=	S6)���aJ>� Z�f�m�T9�Gq�oKx�H�:�m����g��4ɳ�f��y�9�����*,����;;5�Uf_Rי����Y'X���:��d��׸.匜q�DU�'kF@6$��w�:��cw���������N(��t�ě�7��"5Nl��yP�J��`=.3�~h������ӄg�S0�
P�B,�+�e��h�k���*��ٗ�-�(	S� �g�9�؜D��F�]�R|Z�@��CD�lO2�'Q��U<+�W�H��m�p\���V�4ϟ=8�{<(�tV=��+ݞ`bج-��e<��i�i�qG�dc���*�ι��P�m��ע��l�2�OQ߅��o�����t�����'��͓Nm��;�=#i"[ӌ�i�f���k���8�n��ל�d���#�a���W�P�凿pMb�L�%ے8qVg���ek~$��L��3}����r�J��c�Ot�*0�N�>�ΌB&z�['/9�K��|tQ����9���):gY|H�f��f"vyqJ�2���m��`�ۂ֥Ժ��|4�m�k�K�O1垟4
��]�!	U��.ӱS���_�{��ʁېϠ�������|xS9���FNa�6�e�K�<vIIb�j�b	]�A>v%nM��N��~��Ԑ�G$���GR#�"���p���G�\���F?�)����<*�P�Fy�:��ڏ��ih"(o�7�����Ijm��f�䖭�#d�O�sj7��Z�9\M����|����t_Ө,4���{fg�^�[ޢj띓��=��E��;� �X�)���̯�$��E�l�m�<� 8���)�ݨ�âF�؞�ullJ8;��Z�f"+�G|�}�ww/���Tp&e]��F؉�s�����F�AO#���D�����)���/=���a���9�pr��~^8��	C6:|�4ª��p/���X��sݺްIݕN2�	]�X�)��>�>�E���X�/Gt�YR#�~u�6ƍ6��|$V1��n�i�-p��,���\����%䓨Q����gꒊҹP#
��s�.�0_#�},;Q��R$5"@uO�l�k�e����S�2VR�ȃ�~6��5���\��5�m�@b�)�X7n��}!5,���f��LÊO_|tw����{�7�FGy���=Z���k�T:LjD�m�4�p��M���x��J=҅��Ċ��ږ��M�R{�_�p,������=�	^�|E/�*ǭ
%l� �ը(�6E�#<����Yw����*��ӎ�)ۙJ��+����!�����o�G0�#6����>�󇻿�|6X�Pd� �  'Rm��]k��n\P�ϺNaJ��N�0T#ړ�_�2�����Li�����D��O=��-"�w������7l�ߑ�uJ^湘c�eCK���u^~3��J���/����|x�O��Cv�@���+���~{V�W)���eGyn}�XZt���q3Q���(]�t��Y��W�UY�˵��@�4�[e�l9�/�{���l�"@�-$�${��C�-ǝ�N��{E�r�����O���ŝ;����V~�����i>[n'N]�WD��������K�!&�d�Q|�bt��D��E�5n������B��w���V�Uޯ+���(i�\v��Ü=յQ���2�4�A˞Wm� 4�W�h���Z�m�!��b���(i�=_�-h�~��%��a*�p�0�>���}��Z%��(n���q�E�U��IG��8��԰���'q+J��� �k&+��F�`����Kr�(>f����*�r'n��� �TI�)��[K��i3Yng�w;zE�f�x8Xy�?�V�f;BZ���k%�.�WlѮ|���E~Q�SX�`]�ne!�"h=nP]	�&��T��4���#h!�4n��q�ĕq�s�|� �D'-�����𬾄ް�{E�g�������T�I���յ���"h�׸���?�����}���D�X�q�W�����P�o�]_�,,⸘�n-�\�q����H��5��ȧ�%򵥋���KʻM]L�{���R�V�U$�Z=�Z"P$��J&�EF�xbj��\j��{�{˝�յN]zE �͡�j�F�T�^.5�+�I�U|��D@8��U�U����}��K�xX��E�"h�(�^����`������n?���E�˕����>������FY�A����Ѩ%�꿉��Я�e��8<ڥF�����èG���ʬ�o��������d���*gG	z=ۜ�D�o[A���q�      C   �  x��[�n��>SO�K ���d�grL�A�`/s
$� ��m�O�{�8�`wf�� ��d�hˢ�}����n�IvS�cc��&��������u�A��8;Qqv��U��s���L�0;U�P������!}?��P%�y;�������}�戮��~��NBQ􏗩���k�r�?�^���u���N��nw���텝��������kjE;�����<TsZ{�nIژ�%Po�}�f�ivLґ s��w�H���P]�#P2���k&��I\}9�]�'�B���)lG�!����]���R���O0 R�lK��ɳ�PM�Z�+�5X<���Y��z�d@���vjD���mF�A����-D��E9æѶ�42��?���RJ7�*�rE~\*�ǜ����3��YuH2�Tr��,W�[�N} ���?׃��P���[A7� ���"C�h7P'E�}������q�����a>�6�:��Yc�	��4ǘ�BbE�7;��xI2i>�&�6i�uD���-�eY4,/�Ǭ$HY"� ��ly}���G�v�\/K�o��?�ꓺb?}����w7����7^wj{1�6��g�H��@����ꭺ� �&�8�;���է6�o��pK����Ϯ�rav��q�b�qd��>Bp����c�l٪������P�c�.S���VJ ���&��;{|��-��)�G\l�!�C-��-�k������#̌ eb�X���\:�������`�t�gKۺG�6�Կ���r����d�Q]r�p�fF�D�{E�&a��S��M�`�Ӆ�+O��S�F/���{j�1|F0Ƅ`���C�%`�%Eoh�0i
����A��o zu����qֲcY�**���l����:���G�6�^]��l
In� P��� ò����L��i�qW�*-���$|G*\X�\�Oa��v;~�܁GF�(��A	=dQ�pRP�	�2���.��c�kW���A�K!×gv�"�B�.�`��K�f�E�J�r��e�?N'����HŖ߳��^�q¾�VdMF�k�������b���
�b�T������J^C?��5�I�k>zK�e�����F'���lv��T�搂÷��C��V YoH�3˚$�f`�	pG�	ޢ�.��$aհfd9F�O�k��@6��DLO�ҩ��v�wr�"��{�kv�B�j�Q%�l�Lߵ�`�i�3�
E.�"�����S\�)*��f�ۡ�F?ǈ?��� �}>����������R]Ը`���j'��]X���>1����r"3�RSŹ��A�G������'Kl�N��C]��`�;�Rr�<�E��l���d�1��2:w$�������E��b"?d"`���+�m���T)���5�y�@P���I�1AP�i#K��7�e�+�ќ��)��4�E!z�6.��N*�{q5z~_
[�DL$��|V��:��UO���!����d*�1\���?���᯿���~��z����a���(z�"	�e}���-���;S�6Y�f��F�&��A�K�ؓco&&���p��� ���Gt��1fKѷ�����9
�O��X���k6�������~��S��b��C7��ܺU����Q�7�!���<6�M	�%SAהm���tCt�5�4���&r���c��#ݮG���x#�XM\���^+l�
�T����Y��1��89��=1�!�K����T"|�B�Ac[�U���b����)m��y��܅�ŋ�&=��_����+�+,���dO��y�O(�rp�ʗ·��BS3�)Ʀ����t��������t��c����9xo���)s^S�h��6Bp �bj)�V� Y�2���>����3J��
�lxÐ�Ai%�!����_\��J}e?���=��j�.;ܗ���_b�>5���W<?M>y`�v�ݖ�A7(�e�-���c*�4�.Ѐ��l.:^(� �z�%ݐ7�<��y���]Q��j۫�?�b�Շ7y[�v�&��J�ךy�&���hf���B�8�G�(
����C�m���8TǍ�OW���I^q�����w�W921
5�zU=U��m"rd*{���c8�nn��QX�kT}���%�~Z��j�ݗ�v��֎���a~lV?p)qHte��˴�Mq�ySX��F�[/�f����k�;�x/2�DVY���]\�`١���'8��화��>��5j�5*���r�<��'�� �.n>�UNMn1g�䵷��d}�7�[�R�ʋ����#�o�y��MYl)�J���t���4Zc:���0/���Z���i�}�cwk,��
�3RR�#��*��wxv<%���t�̾j�E�ڷ�#	��������e�_�R��w~t%���CY��g�:�t���r�o�1�)�(�+��y�l�_X�Z�)�8���z��t[]���7?$,j`L�ЁT�`�:a�T�h���э�g�ꅀ7N���nb;�7��y����,��]��wQ��<���f&W���y�iCp�ՎP��u�^3��v2,=)9UC�����I��-��p2�oI����.�걞����=�n��^��90��0��~�ɰׂu_4�ć��0�eF��q�{	j�\��������Y8�CI9��h ̍ߧ�@��-�_4�os�v_��ˌjIM�)C�h���%O���+-�l��a�U�������__�Io��~{�-�}��)�=Fh����\�L�H��f���M��L�3����՜YNqM��V��eZ���f��
﯐�JWB��:��r�	n��nh-T�$ǒ���0��E�G�y��9' n�1�Z�-�ڐ�CAs�9_Gc��Oә����}Bk ��ᓼ;4�ۼi����Ћ�_9���"<T���[/�VD�� x]�pl�>6yTof6q����S�Ŕ��e�nb�T��[փ���{�pD�&���ǭG�O_n�Z��B��|      W   E	  x�՚ˎ���ל��*H�U�w�"YI0mxSE� � �et�(�ر�(`�f�Y%��q�#i�
�Wȓ�/�h���na$ef4�M���Ω��SlIe��W��J�J_a�NE�����0ݭUU�"��Y��8⛊2�������WF/Q�����o���<=.������������'���l<��`_z��该������e�L��v�G_�����LG������gLaWz���U��~�v��*��_]>]����m~�fؘ��fUb�˴�c>����Y���EC]��S���D
|�V�H�j�g^?��s�(����rN����-IU!�9A9ɿ[�g/�Z�G�w�^-����d`����2=����:��������<���d�������%�X��B"v�C|\ %�yؽ�*F�U�"q�R"�jI�ZO:�)��m�Ƭ��d�V��2֞��
���� ű[��`	d�8���F���^�r��uP��cr��A��4����p�e.�\q8�����,����&4>�K�źs�k�4��hQw���H&$o#��+,UIu�P\�2N�X���Ҭc�s{&�^�3��p��M#� ���H���Di�l�*�N�455ӕ�j�8�%+�ъB@v��y�Gd�ί+�u��{0�ݲ.Ԃ��f��o�8c��>���]�g��9�AW_#Y(��TPP=W���hػ���>��o��̿��}�0������pS�!�Xa�F(K�s�6�xq7����(&4����Z�Jk���K!��`KvJ֒���C2�jnb R��W2�`խi�,�Q�Z�J[3�z!ԢH3�}��a�~>�@�{�o%=����ý����C?kǈ�|��7����Pv�5�k,�wDFI0����Sg��_�*K誃Q�,B[��<iϲRͨ�j�)�zi����V��ܛ��Tu��=���σ)8�� ��'�%k�5��C���I�_�B�-m)\O���:��-t�Q�F΢S��*[[+]�w��˨�!�ņ{9��0]U���l�^;���x���Y�b��.:0d��d�����R��͵$��w�`dq�������z�<2q�ɒ����+x�.�m��\����C}l'0��ܷ0�Rʥ|IS3Y��E�H�Ɖd#a�K�����Q��<j�y��w�	۲�pf1K�F� �!!�`�
�&gi�G��G/w6K!��mNZ�*�=[PS���4���j�D��ۥ���`J�Rp8�w���Y�G���m�5��<;�w���VSg�:@((��腄-�7�P�$4�$��.:�5vMJ(��
gL�d!���S�DT�a�&)9���B���O��<r�΢�^��4�^��q��C�sm޲��{k�����?���2�H��ȇ��ga�0.�w�����|WsY�UG0m	c��+t��{��0��G}�R�?�	�(���f����m�Ȏ�,ed�7�����bF��m[LM�A�h�i�d~)���Z��u���4C�jS[��i{0��6-:[�ᰄ�hx�(��ʑ�7�	J��'K��r}N��8�z#lC+qZ����8M���DPn`i�'�GKxodû8�q�ҭT�8�fpn�)q��6���l�`ˮA���?(����t�
�*[)�&a�0Qn�}f+gڪM��(b�����6@�lb��ȵ5���d��j������^�F!V�vVY��.�M�D���\dwx���[��Q�m"Z3=/oOe$���Ny��e\�)-Y��ƙr�j婙_����)�<%0{�(e�U,#�PQh�ݦ����M�^A���
���c�z�V�_���0���C�r��y��ѾQ;
��AO_=<�/�B��J 4	.7�1/�t�%Է�J)��j�B�5S����Ж���F��Q���M�k%��Z�l �(�h��Z׵��(m�<���ˋ�K!p�g�8,νf���5��m��T�fܵm"��Ʉ�����D+��8����kI^���/�a���A��gh�����έ�_��Pl;e#o��It&2X
�����`�cm�]OQ�J�i��!�-�8��0��1����{8�1ӡ#�$*��t���cf�c8�˗+���\�� ɹ�vZ7���4!��J� N�R�n�Mf�V�kbN[��@�������rO���"�&�SF\Цs�U�f�C�aɈ����!H�F��#�g�H_�7�.:pҞG��!V�TX4#m���n�r����&7N"`�QI�P�/�چ� E������G;��LPދ ��<���jEH�8��3䙭l�{M7�u<����l��yA��1�$d�=���f��[
m}\mmm��^!      '   1  x����n�@�ϻO�;��Y�K|Qu#5p�R���$�H�T�iU��T�4�K�6��'�}#f6u�YP�YK���fv�5��'��9���s�\�uFoS�a���L�����T�ByJռz@��Sw�z���+$�V��x���F8��� BϬ^9#�hi�ٲ�b�n�-%�<�󾰷�S/s�I��mZ�M��N�&����:�R^4ӊR�RX����3:���\w��<�ٶ�`�5�K���g�k��5���'��k�Wv�dTXa<��	2��vT���NaI�Š�X��SO�ʬZ��;��Ł5{KI����R���i�k��k�M;/��X��US�	���?(xo9�w��E�'�O�vŴ";�%	PJ���T�Wi��6�U�W���6�K:�5�3����S��-�ܡ�X��xeF0��J�z���+�'չ=�Ǵ�� �����-1��@t;����U� �<p L|/�"��>m�$�b�́Y= 	�Kـ%IB$:]zx�`��\?�7ؔ$	1���,��%�O��Uq�nt_�{���S@M�      A   �   x�}�AN�0E��)�G��I$g�04R)���D�j'H���r�?7�;H�,�=������;�CD�}5�E2������Є*�ř/���l�G|�Roq�����ʡ�^�$�m���z]���&�/��?�-ֈڎ��-����.:���~�.�@}���)f5�L�-h�6�E�3�)�<����8�Q�x��b��yt�Q�A��tz��t��S��3�](��j�2�BR���Z����|      S      x���{�\�y/�7�)���oi��}뛨S.��M%qxmN�+�8|���Uة��7�$",	I� I#�㪼��ZӨ�3�S�O��+���빬�������AiV������{n�s?��sE~W�������V=_\Z�����bs�~;��O�Փzo��,6�Q}�0I���q����>�~�تg�G����>�_�����;� ��SY{��?��*�?V/���3�g���M���z�Y��z������E�-��Z=Nԟ��8}��D}g���$~���e��+��L�*-�"O��#�H�M��Gj6wp���w�܋�9����:�0ɫ3Yq&+�bX|++���G����R3W�v��A��o�����'�}�VY�}�V�K��#�s��/��������j�f�ض[C�R�v5mx�v�N}'O�Kg���J�jڎz��pR,�/6Մ?q7������$�Ui��_j�WK<����>\�B=�S= ;�v�&���Gj�\O�Iz��_��D�2/��1�P��y�������oQ":��֮�w��Ɯcf��hw
۠�$ݓ{j/GD��3���n.. �#�����>����,����{jk>T�o�y2��Ypd;�G�1�L	F�����S������SS�U��/Q�y}5��H7��f��������fw��]m�osY��m��V/`Z2-X���g2�߼WR]m�M�+�є��������_��N�M3�+W�:�wa	yu0��,��<��+a��p@@>t"�T{[�_�Wgr��%:Y�x���",6�E}���gI_����(�z<i��sQ=�_6]��h��cG���-�_��}D�C�68����F
�}��{�?��ƨ��Փ�Z�:�yt�+;SG�oT/�Q����L8�"�Hk�A�?�3P<������{���+�+�),eϞ��YT=6����}F���y5�	+0[H�wI����lW���e��\�%�-S:�0))��_Ћ�O�h������>]:�KۡC����*������E�����t}������qI��?�Pk��/늗��c�ΣL[���Y����.�6\��4/�A�q��淅�T�2a��g>Eg�^(���滩�Z&�$	���&Ϋ��^Z �o��,e�C-u���i5Wl��_O�����h�{�����Nr�.�hr�兑-joԝ~�������+��D	o��uɆMK�&�B���\�� {ih ���>�նZ&���h�������n�/�ف���U�[�bY@�P+�m5ML�H�A����F��pI���%��	o5�޻���d"'�m���$>ǻ���;2��V��gf5gY�~���GB^�M�Km�P3��9)I��]`VpM��������@�D��R����P+'��0�Q�v��7P5�D�G-�̍��En�T�lM�&��;cTV�P�A�	&�U�4��-'��ὄ�ژ�jg�`8�:�S����»�3��S���X(�k~����Z;�ũ����O���/��tJ^���,��P�D�5�g~
��Y�H}���5�4e]�Zy�;膷���y])\��� �o���nXk♝����8��,.�t4=Y��Qh��1]��.����}M"뮼�.���5�s�G��{~8N��Z�5�����U� >�+JS4�͗ n�+>ZI{��^o������Fv���sͭ����(��~�/
&��cAc�C��{��G����^S�}���/��?��ϫ0;���B7�4<P�	�غ@��b|#8��j�@9"k�Y���w�C͚� FzK�m� n(��<�A��0�o�Ĭ8e?�_������G�}�L\���V�Q��2����;f�f����xO���~�ע.l�~`Nz4�ڜ�����.Υ��I62 &���F6���2�ʁ|߁��K&?2ܙ��K�m뀈hn�W�m����q3$�`9z�n�zm� ��FZ�3��Пh�94�7R!�k�.�y��\֮*ҮK�ȣX4�B}u�_�"����x��k^P���)�����:l��z��������Գ;�(��
u@}32���u���Ӵ(b�Lo�u�=c@��̂��U;	�6������Z�C���Q�ْ� ���f�u�pKՌ�3�Yነ��w׵ ��y�	/����/ vo-;����ޡ]��f����Nt߆+�g��d�U7��q�OJ��sH6�3f�q=h7���5�7�[���;�q#x $�l|<s�/h>�SO'�w������N��������Y�������Y���&�h���4���pѸ90AJ�&�8<K�����VĎ���	Lя��X*���vsym9zRȬ*}+�Q����+!�݀`��Kb��1EM1��k�B��~f���m�»�W�g�W� &6��O6��g�"͇�-��ZE�(�B��9{.�a˂�2 �\&;+^SB�&Z�E��=���V)	R�tI��u$��'��3g�(�4BL�����W?�Y�\ڍ�$*9�i��X�Hg��o�,U�z�b��4�#�f�4��w-+߱�J��t��C�e �+��8�*�B������80F3���I#�bw���5Z�V�#$��>�{,>�D�"��hE���Cр&�fZ� v�Ā�.a�ȷi��{�l����"D
n��,I,�m�wI���l.9��Ĝ6P��8eg�%�KF���/�֤���8��}"���6{��?F#
}'iBL���i!M��G�䈁������`�
���y1�&��#:�0(5�6H\FX�8gDҞ�d9�Y#�e�]XlT�ZC�"��H�ַq������9 k�:�:�f�)T3��aʘ2��{�4Vz	�u,�G���F�><bn��n�)2�㩓m2��+j�d����r� ����1A��n]RkX#@CNo���󽡝�7�"G��&�9�εұg	�Zb�5�*|�0~5���In"�ş�5�AGi������N�60��jb!��/.�@d;!a���ïK�qvk�Uġ���G.�
�ih���4��2��;�0x���#Ҕݼ܀<�����3
���?\nO���q��q��Ɛ?k�U�!�`{q���OhX_U�����侅'�5�����V�:E��a{>hw�8����X�VWԁ^U�~;�H��Kb���M>|��>q�1��:��>y�#4Aq�Kξ��y���$c^�f�U݌	\���àU6�7��>��C#�B�$a;�Қ	n�1��ܶ's�E��U���L�-���h���ӎ7ל%������f:�Kp�q(M)	=�\�^�����������t�Yy"'rFK�j!����a4��Kz5�W:똗�j����k d���ܼH��a���en�w�"�gy�Ȳ�:�ϳ�oO���_I��'m�8��L�.ز�3����F�DO��v��5��u�I��F?;a˙�;@�_�����s�����P��Dz��~T�9zhyԎv�ޭd܄!q"��ϊ�WVp�U�v�� �t�	�bst<�N�&��~�r�8cL��:O �K=+ʳ�0�J���[������x��j��Pgy�q�r��5n+�KX�,q�Uv�[�bgI��sI�ڔ(���=�va��l�������Zu����|�%����eN �E�\��H1��*�����N��-P��.��a]|��&��q�v���H��>�f��`�_�DEx;���8��[C�r���T�g.�:�z�#?��p�+�S����z$��rXW�>�Ŗ0?YA꓆ԏ�In�QT�����mI��wۍ�(!\H��#].`��]m���� ��h[cB���D�HKq�qz5����a!~P��V̜��]���f0��������Y�i�`lE�5���6{��]�t�F��91)�~�Xp�~��"D�O��g��8 �mĈ����p�:������H.���%|\�u�H��;�ƹ�Q?���G'�r�ç�^1���G�M�5��=j�ᢟ�ܗ�V���0~�]!k���1����$�@�    ��5"Z��dt<j���)��*��<"�@�/8(�]w"S)��U:��v�ޝ6u ��r?fG��wkT�>���M{-M@V�q�U�Y~�G�kj�����+D}��h�5H��-�jU�r�S`�%�n�_zÿD�r�]4�P���g�]2Y�"��"��(� X���.M�bpI��� k�V�YCJ�J�r%핬b([�<*��5F4�V�P��{/Is��ʀ0"�?)����wD���r�6��S�Rb�����`��3y�Ơ3Ъ|U�8��.i�x#��3Pr!�oJԴ&�T�1v�L]$k���]H#��	:;'�_j09d�$${��'��*�1V/-�ځ����OM��K�p����jU��]<W���x  L��V�
;^��49U߉=s�̞���kc������HR�̸�ĸ}��+~e��u$A�
�4Ҟ��D�}3�ۻF�E}n���(q��3zӁ����T�p���p�@<ֲ�ꣅ؆�W|�d�d��b-��|����G�f$g����q}�׮��~|}[RE��d��gǅ���2��e��V�����z��}aI��(ju}M�@a�f�y������=L�ښ�FDA�� ����:�FQ�Q��%N�B{�>:�)�� �����N�XqR�Ѓ��s��Q���Q���s��a�{~��(�,1����6`vQw]�������*��P�������_�����
��ўGGV�f'��B�ٟ���G��(y��g�_�A��	v�$͈'��gM?�V7B��h�hl�w��{�������� �9�����n0Ìc:�^%��P��<�LwO?��ҩ1(=����������w�;�%�|�/�&�p2�j�El'./�}~Õ#�w��VJ?;�MކL��F�<�Cn�((���]���=��S~���"7߁��7_<��77�\'��*)�fď� pEiN�F�Kx�W�0)qG�J3������7X*�-�&���E)=��F;;���?��+$��mF3�
��܅��+܆�3����1t^]Zl��%��O|�y ����s�+���-)�A�I��`>�иQߩ�i�� T`�@m�)`�_;�kJ��=ڃ+O��Ł�V^�\�z�ys�!�s�3�<��!/uL{U-۪hI؎i�DW^4�:���	n��e�$�^41���=ȼ�c�Q_	�R�n��e��p��3��uI1��6�3m�� '	N`�4|�W���<Ծ���]���"Eɖ)J�{����PL��#*Dm[�z��n�;ve�Cd��9��͐"�h����~�{ �Ǎ���&���j�g�Oؼ����%�R:ΛI���g���~I_)f��r	�+�����z7�`�L!��V�w���Ķo}�Xe+|&�*����������)l�o%Y��,+�2��`��`�yֶ<�肇�8�JRۭ�0�0��I�6cpB�8�����D�J����#?��'q&8:j���������Pps��!��@_����1_�&u��Lju�Ηu|-�Ct��P�뻛�:H�i	�_�Y�ɚN����uT��T��ó"��yMVɻuS�d����	I �O&��I	Z\P���g���!��rc��ǚ���� MM�����1��n�H��>gju�躃4�V�%�豢�V�������{�H���Ka��Vt��m*�EL�]c�[�U����VS���az5D�"�����5o+.�!&�D�p����aLٞ�9���K��S�(��s��u5.��_��[PQA��F����o� ��up*pe�N=�,#4�,@�a��Ԗgp�G8.�yK���ZC3F��AW�cG������B�0�W�����8=?ũ�qSH���}��d
���~��kkv�a�ą��z WP%ʔ��%�t�D��t�Ӿ��������3�ߋ�c]Jft��/�O��`5��B�B���-ju{�441(nE�:^�"�D
�@�S��H�{X�Љ�H�;Cuz](�헣�M8-e��4H�i��i���+m�胦�V�����zP/��M2��̀fI�сj�ˣ9E�
r滹0��#3�"J�.5�Զ�dDɱ�Wѕ��Z�A|�o�Q�(E�Q����Sd���܎mmmV�RpV=����W�:ec*��O�~(,c�K�����WD��H�<��jc�4)����˙�(�:L�\��<��(��B�}|4y��y�����,
� ��Ni�w�����_I)*�5��a(�P�LG�p����vG�'E��3�eJ��̚��Y1�ZL��`^�D����Wl"�,kuOIg�.�3��2����������j�O�y��\���ԡ_V?�]�Q����ެ��o|#�h>B�]�K=�#ʕ'�1�,ק�C0y�e�6閡>2��D=xEu�"�;�� [��4�n��)k��<j�R[S�X'��^|@Sɉ�X���P�È�P8�S_A�9�M� 5[@�.��D���,,�J�̳s�پ���7�)]Wo�^���7(��n�R��(�7>��IK|���i��K��֓ٗ��AŚmu?eS��AA��@������t?����؂۬a�x��=D��GQq�h����w��Q0s,�ֻ5�5!]n��]�0��M��;1&�ɩ����Л}�T
�����a/.6�ɽ�U���Q�[���7P\̥�c��N��7����ςS�%봐�dj���v�_��}e���"(��'sg���dj�r��:��DW�u��_BP��X�;�f�!�\e��Z�"��<��%�D,��`�NY�P�Wz;Q�Nܮ���PCD&�K��OY��.��Ԙ� u)����5��I%j\����V=�r�sq�	�ѭ��u1�������' 5n���
��z��c����?�'��M��+�18 ��]a[e텺w����c�4~����^~��cm�(��&%�3�k�2��-� 9K��%�N�i�g!�`p� NՍL�����7���{���?'/���Ao@ʌ��}o���~`j�|7VW��a���I�ŻX4*0��CE��HZІ��[�߉�؏_�+�:�hyi]PY*\�ͲD��5��4ߖU�#�?��w8��-�즞u=	�
���t|\:��z�H��۱�J�$eۋ�%���1�n��;�*(ȣ��}�[6�W��_���&y�̲�-�!�Q�?��w~��v�O��[X�;��O��D%�4Z��j�4:`r��"4l���� ��{�Bx�֛�H�웚�6&�S4=/�0O���z[X����V�7ׂV`�vR@n��8��(4ՠ���F��}�<�8�m��K=9����uA-��Ҳ�Z}�f1���ηA����J�v��|;!�.�U3S�|I�Rk���~�2����Ζ��I�A�a��v+�A�� ��*�PɈrS�L�>����2_��V}�&�Z�!9������S�V�m�bE*��5�)M�T׵��sܼ����H�]ԣ<�cN�@����C��Չ]�P(���|Z��T��5����S�)���Lk����S�������Z}�\�*:�J#E�^P�B��T98�0e�z�%c���S'��Rq�"��j�}�K��?���]������O8s�*B���g�O+�qm������x^ZY������F����,���,a���U;X�߸nb��^�/j$x��T ̭@k9d���n���j|�huG�������j����2^�p�@�DV�|�M��)*>�U�g����i�5����\U��+��ql�,w���@��V�|�m��*0����ǱͲ���`��6k�e�'(D7?^.cNC����yD$h8�J�(��r��cW��c "�Dlr(�M>�&�R�ZC��a�k��nJ��L���b�F���Z=��7�~�_��1�;j�tj����N���r�%�n��i�y�$��yPsR<�o3����cI�'c���S���P�Fۤ֦$�g�'�BEvg.� ��    u�qkHȮ�5��"�"�lZ%s�c�MX�|��9a�A��V{��B'x�k�^�p�8��M�����Z �)L�Q�)��=�S8?*>���M��+E�.?����,x:�-�OD�{��Wx��"\+�^8�y�������.*Ӧ�UP��=^�	ϔi�}�~O�7G�or�Ɛ��mW�.��mh����&*��`/���)H/��5A^]C�v���,�q�*�!�G�W~��vr�z�^3^��zI^>��ߪo����5p�RwܜL��k��M��S���}B�p.\�ͫ ��>ER�u1%���iGFS��$l�kEJs�M��<�ء)�{ś��Kc��w�>KE6�I�=�*N�:�y�����9�W�K�8���C ׇ!���� a��b�m�\�j'��N����s�ga�2�%l���w�+�#�"�So�۞{��>�Eϴ<b;u�d�1��>rv��"��� C)�p�����V�ҊVZ�J+ZiE_w�h	"G��T�։D�+SC@�6������W�Z*O(w�W��
p�0�@@�d��p[rmT����$�����:}��¤d�"��,���*��3�Cn2k�S�Cz�O����*�Ӥ̡��4����$͙��+�vGM(k�Qdi��?���I�����_ډp�yk�~O���$�r7�&��R�K۫�L�Gj��(W�l��ʢ�Կ�o���-�lX�u ��~� Z��c��ځݤ�<M�v}-�*��B�9�y�U�4���d����Y��+�iV�'*{Ps1�Ŧ�NL�S�]9�Q��5'1h)bu&�b,N�⦡��S�Ab�T\���X���nO���]:O��.XR�Zx���N�T�������Oz'v����;,��KJ��u߲y"�L��R��<+�Es�E�,.�����_y�'�Bhk�y�����t&�	M���O�:��df�,�n1VB�Mh[�f[���f���)v���[Psigi�"a��}zgR�m�hHM�L�~��rs~�J2�����^8|F���^���I��|���T)�,�6����\���dY��;=-�HW���={�h0UO7 �`���W���J��]��}��p�QV��_�"�@�ь����\(4�/R�#�OTP����,_3֦��LxM���-7`l���0cUݗ[^�����=ԩ�������ԣ�l=5�����6�������f��Z������]�����(+��x�e�^�:�9��}z��T��)�EC,R]�߫#�:ױf����'��~�O������B��d?y!��滍�/-J�c4��[:鑧oQ>���b�1���e܀�(�ڙy���9�߯ ��������Y�;���J`������u,���qU��d�B�փO���i��Wy����/a�^�N��~�>rGm�e.G�ｅ����ߛ�mz���R=�*;�K?)3��/ed�b�"����O
�q�t�`�?~��_x���Y�&V|��	���s����g��WS�yY$�|���N��phF7�?V��I���7�K����ܷ�����fX7qIi�3;l��v�J]��q�\ʔ��j3�6$B���u�i_�'0Cj|��x���n��:�w~�e�����/��W/��ŗ����#/&���/_���'���y�-���R����o������a�.�_���J@
�#�	~x(�����Z���i�\w4�8�$2�k���|%����zyWKW��z�����	ĭ!3�&�k��'�X�h�1x�5�����_��z��x�-iBqo�Ԅ|�X�и9;1��-����v�"�]�ڽ�4�8�e�Լ|ux9Y�ذ�Bv��*s��َT�z(#�h[*�RS��'��ND���!�X_����zE����V�!��2!D�-o��5]d��[�{��5��v3o��*Ob��֫��/r<K�[
��[�1\76�h�!�羾���֦���t����Ly�(z��_����Q� >P��v}���c��{��hJzP9|��	kU�+�P��Ϙ�9����N^#���A�{�z���rژ���H��jH���h<˸Zn��1�lx�����\-�f�b�Z��7W�|O�����V����b�]r�dy��<)|-�d�3�6e%�K/�U�P��ݬ�);�o�5����>�'#K��$Z!�>��O�QT����n��{�N��x�P������P?��R��������{����i�o��m�9����3���?U�_{r�!�	5Cj2�� �a�CJ�3uq<������<�i�4�:�F��:���R+�U�'wBA3�&��'8���tAK_��Z��i��j�D�Ow�k�556.�&o�L+G�������$U�q+�w�n�.Y���9�v&���[��­Q��N�,���ښ��7׈,ƱW=2��5�F�i��z���Q}�R;�N�Sc�p{O:��M-�=rMR�B���w����?{#y�v^fk��J_<'U+mj����G�m��֑�&T����'�o`�,U�����K�="����%���&��_c���>���dY^J��P���^�a~�p�iGk��ȃ�=�c� ���D{)A�3��������doݶ=QN�X���1U�E�����Xձ0�ՙ'Mw^>M
��~�ȕ�ȳ��[�s.���C�C
*sk�r��|'t���ҫ��69� g΁ng���v�MRt��[�z�� �/Y���y���+�A�Rfj%s5ߊ�\m�<; N)��%�Υo��@�G q*���(}{����B�c3�&����lTl���q���fH��7آfɳ
��m͐Z��g#
�g�P+���a���tEL����V�bн�WŞI�+3�.1��W���!��ͫ/c���!5_�� ��v�.�.�x*�5/��H�g#ZQ:��6w�Ѽ����`veA�%AR�b�i��}��5P�{u ~��eKz�5���PA��.6�D�Z[ױw ��H3�+�aF4�^6�2�Aۭ!Ԅhm��WT�6�fH�*4}x��H�w{Y����TRJ8CQ�?��6c���9�� ���UF�����u�o_���++��[q��}�,���䞚�_��圦��]Ҟؼ�%oew������(�Y�3�h�
.R�m7�Ҧ�J�,�n��}��W��ƓD�\~�$�1�n�sUq�muO˲�Tsu��E4�*Q��Y���8�LU{�*�d�#ڍ��kQ���[���ǫ�yp4�����"�Lb��@�%�b*�v}�Y��>q���Ϡ ~�����JX���s�!��'G��
�|�G��E�dL}rO��s�k ���ۂ�����]���7�s���Ŝw���C��p�����aځQKbA��K8��n���2Jr��(L���w�ȵQ?��: ��mrr,�	w�)z���C<�^��HU!X��9����':�� r鯪��N��j����&Ev6IG"�=�?��w$ZSvϤ�o�]�;�-G})��)�j�=��_� &�o�q�Tb/.�J DO��=���n���0#��(syԔZ�Dr0������Ww�UD�N�CӇ����n�֥b�y�'��,�2=J�� .�R�y���i�!,E(�l��R��me�v�r�}p�qSG����:�͇�uɖ0UXΩ}��9��>	N��E_2���=J+|�����k�
@;�H�v�cG��	"��N_�+Y:�Y:�甿e��se�I^3��N#W�0��Q�a��E<�K��eaF5��^�.���oV$�q�t͐�� ����k�V��
����,Şf�عDu�f�%���9t�Z�ӄ�;��l�(�2�fHm���h�ۧ�ۗ<�����>=B�.����fD\ 9�����<gӦ��I'�6��P���K�]Z񇔮:F�'�N��FHI@8���H}O�pdN1 N����e���3K�2�tO�bUy���у�~��+�$e���Cϗ���zOd�5�0    yr�:%OԺ�O���K�;>Ѓ�UR�ꛤD�%p�U���J9�{�q��)��?����7��p��(�` ��C��`�����z��B����O���`^m�h��^���9H$����c���ؠ}�>-+@�Q�|��yǼ�wLQ-��
�
�*��V�?����L]l���&�$�GvL���GݭšM����!���Hk�%���#n3\;���}���zZ녵|�m8b!v+FDԺ��Dͽa�)Dt����*��fjR@n�i����h���[lI;(�N.��?�r�`�skqv!!�j���|��~��Q�)N�=`V�
Y�py���@e+Jd�Ł�D�p��l�)Ugb�tFq 	o�wb��Q*�S�.?����8�n���$�1>^_kg2���!�1}_�<d_?�Ik]��౻8`<"(?n�42nU�-��V�OG��.�b�!�X}�<��������h�h�C�=�R�� h��O�>/P5�g���)���j��-4�u���@@֢ A�$��T��*�e�GEO��
CgU������7���[o$�Q���I�+�6��1U�G�s�M�1�sC;�B���� �i���c�6��'�(��\�́��P��Zt]�ů3:&��+s������o$�����7�|���|������q=�a+D[���T���K ��F��Ț��o�����ΔJ�X��̿Iwbg��G	�8C��Ðk=�Ǘ���C������pj'�x���D9�xY"X�r�U���� ��$���	�<m���\H�UbQ�'-QT_�\3cpL]�q,�vʄҝ�i9��KCj9q�4�c>��sQ��K��_o���7~�꺽�2;7�����e{�m�u8C����l�R�<��
S����d�`�z�\�$G`��\�帵:�m~��)�NN~�(�����<��LfH�n\�^;�QC�8̐���z�V�YE=|9Q2^�p�@С=$��N��OiO��� ����}���nZ�y�[9k����#sY��I����T>ʡ8����e�+{#U$s3����N؁��c�;t]�}���1�y��s�
��U�M��S-����)��N�a�;Y_����!�DC��C���}J����f}U
�.gQ��]S�@#k��0�����~	\)�)v_���3%>�_?��y�3�SS�# b�3�gpӄ�!0��_$ `��Ɵ}�p���jkNj+�&���H�7��2I^}���|����+�"�s-����}'Z��F!���� d_QR�9�C��� �%�PC�%�V�w�8�ȸ�N�^8�)b*�ֺ	�����`�I�������4Zɶ��:�$�@�H�2p6����M�ҧM�� �}��2: m��!�n�v75�LӒ0+�(�r=�!�#�&�y��!��[ >,6
^�d��,~��{���I�鷱���5*I|xO*=�(ѹ�&Vy�[�L)��7���S��E�$�ϡ���ۍ���ֺ�u�ɐ��@=��~���}���RZC���x(}�f�D�{��gmD����\x���BԍKe��K�uS���]��9�x�E7��
�ҙ,�l�.+Z1��}��K����1�9ڔ��J�wꇄ+�[��%4���&�q��L,�?�eegX���i�}�H�7��r׹8(����X��I��q�nTBT�/c𒟄?R�{�
�u���~M2���:,q.���zaԙۺc#�!�7�0�X�3�_�|G� 3�9�q<_�1$=�0Aܚֺ9�oc�#���Y7�I�<ijt����X�{ǂ߬ܧ�j�m�u3�q�F��\���kx��e��Yo0��fX����6�px�}Í��|�t(���C�,�p��5p�nb��n��};��<z�&�D�Nl�~A���3ԑ<`�k�@w�2Q/7��D{	l93b��ʧ�I�v����tK;Wu�*����5ћk�r�7�/|{��"W�r<��c�1�Ӊ�{�Pɐv#9E�SP����-�.�hy8���gސ��:�%���ހ���b��0�U?Iv0�'����y�e��	a�䛂j �ra=�Zn�D��0ըpPw�_�3�� ��X�-�����u��\��Z��s7y�fv�!w�u�L䳍�H�(E	 #4���vy������ũP�MW�)�y���¦ȶCA��b�+ �u�%�
;-�Թ��kS�B��^d���R�7k�]C�v�T;�v��oշs�O��+�������/&�2��54]ut�A�w�����Z��E �1�
�Qu�!A6.8�0l=�廜g���J�rN���{d�E_����M����ʣ��Q`���w%:�k��;��h!�*�J��C/ hL�b_�B�1O(�8qp ��3�ڊ���g�ـ0�c!i3K�ڌ���=�8�v�{�I"A��j;7��TCºX��֛N�-Gc"��� ʀ$�B�h�ZuYЁ:��p��	w�)�l�ܞ��o
^�+|.��N�l1~�S��P��0u�5��:iH�V����\����k0��Iї^&k�8����&U�Ķs�A�)�Jg�e�K�%ot����Ioƃ!�_�_��h��5��/Z�E���}��$����0CY Su�"�ك4��<	�Ǩ��:Rs�(b��4�b���T�vg(U"H�4{Y���E櫌:���1-?�N�jl��~�jh�>� %��$����!ޑ��fKf���2XeS=�RM=�K#GV�&�=DJ��������s�5���;p��pF_�y���@Z� �I���(�ZBB$�eD�[X��\L.�ۣ�g���b�?un���H����A�d��>��Tߡ�i[�єq@�i:�֞8��!koȏ��bu��X�f..�9���{ &Y�%̛�Qu*6x!�k��?���3ͺG�)���yui6#���1RZ��R��>cj��`"_J*�$oIFS�#֫���;�s�mBۯ����<�m���{;�-�C��!ZP�j��Kޢ��E�/�.� dW�q�z��}l���mv���n#&�D�R��}����һ�%�O�I;�7GTS�<^q��?�B[$������+
O�x��.o��M��	��tM�S暏�#+_�K�qDq�
r7����TQ(��b�Yq�P��B����!?�����T�p�nd��0��i���t;~Eg�tSm�����L��9S/ǧ����+]��y�	�kҸ8FH>��&�)UD�oxva�0�ln�LR�hۄ�&wXC��j�K�Q�]s"R]0��}ͭ�(�mOj��喡/�/���"�H��/�r���X�\�c=9r;�Y��M�N#�Eԃ�K��l��� �_9��������������c�_���:S����j��G����/�Ev&�]+#<:�$H� 7돎�?�u�/� �����~@�oԷ,����<�$���"���/�D��������;� ��t��2G0�s�����ܚ�K��\�YhH����yU������:�gj�mVA\w����-X��JZ� �*Nx�M��&���#Y�O<tW]U�l�l6؀I�0,� W�|�K �"8A�$i1�R���a!һ��û����ʔ:Ĕ����[�d�$/%�;�CB9��w�q�,+�x��Z6��}���Kl�/ZZ�R4Yz4����ؠ��,�3���\��ࠄ���K�2��s���|]�%ѽ?l��9f}����zX�B���h;��KzѨ���;�Z�h��Y�5t�Bw	EE��M%�-ee):��ґG�F�U���&���y �i]6��m���vȚ���n�p�4B�����Ui۬�zv�@��O�.��� � �z�N�&Y$��̅l��N���H�3��`VE�5n�}�{mO��Mg�~l:ְi�\�h����f�+�,���z��VZM�!� ��� "����㽎�3Ȋ�8��ܜ�S���9���X��l'6�];YT��-XM��7Tl���̲��N�[�����\��T��s{�X�g�bE&C�!�ĺQ&�    ������`9��6���6J�'Q��l��8���k*�1��5��ދ/]L�r����SK����&ŗ9�n�S��#��}j��|_�:BH�x	���_���#�Њf��0 	=�4�4��Q�F��L�K54Z���ӚUZȱ��\���dJI'�soL#~C������Ŗӄ�=r�)
���/�����X�X=����	�%�
�B� �����X͡E��y�U�M�u`�=�����Z��z>���fZ��h���6p�m�a�&.ۤ��S�#�ڇ��[�&ښ��eU�\?b���&�ҥ����gd?���V{M^��S�R�g�F�<�Ƀa�)笀s6m�!̫$��EoI˓]�T�����D�	f�
�f`XYU��Ԏ���E���y��)��l�^�5R�5�yI�@�#�hx�75Fn	�A	��4T9Ets&HA`ilp`�Z���Zn^n3�*s�h�����r;x:���R��h�@���(�Tr�(�pCL{��m�<'y��>����IC�<aIˡ���	�g�**�$,������Xq9�vc�r�^�bq�Z��_��S�l��Ă,�?����Uw��95|���,�bSjN��sY5��4#���BŜ�B)��#�T��ߗ[�sTw�(|S"��u�AS�r��ո����d��-��l
��h�6ØP�O�vp".��g&+��Gj	�O����{"���st�9�nj�M4���[/J�-J?*���#.Կ�̲�$�ʨms#�LKT�:��4	�g�ҳ���_B:��YY���$�H�#+CV���Ƈ>L��h��%a�a���g��Y
-��bT@�6�F�v��	�_w�r�*Mbq#�P;���ơ
�L!�f0	.�@]g��J���߲�����\�A�F|�&Ѓ��Z�Q�%b\0����f+gQ���wڔ��0���o�|�,�,�"�F�yrd��$,�&�r'�_s�a**Gv�H�=Ð�KfwP���☪$�r� *K� ��dJ�������a��b�1���G��"����~�S�p�h�CkHN��@G�C��A50E��
��؇v�h�`�>J��A7�ԡ6����J>�"p��j��.C��05�W)�/R@�$3[����S�bÍ7���ފ�r�A�/t��*�BRs��s5S5���	L��P�W����qM�E�О5�����^�e&����[{���n�}�؝N/��g$� 4�&;8�--4��><�s��
�|�˜4'N�=�O��e&H%�
n�|.��_p?�E>�-sp*�Up�8w��!5�@R����҇JGՉ���M֐�;I�|�n�l�n�tTsA���{�װ�EG=^��c=b��2�Fg�v�G'��ej�2:��#=���4�*eCd���c\7��w%o�+h�,�x�8�:{�:_Dk�XC��Z�t��J҆�"�ʂɅ]4NQ��S������ǹ.�IҔr	8�c�8(�8�"��
G���m��W����J��%dHtH�O�-��+�|)�1o�QF�Y�J��ڕ�[$Ǽ	��o�X6lk���}��(��5*.m֖�}L�K c,$�x���&�TD��v��	��NWo�kXej�i&���{��]�95�]Q�|� *^]=��� ��k��lӫ�cm+��8��@�6���f�B%���|�zӄ2.ZֺnG6fq�E�Ɯ�>&��v��a6ۉh[A&�����c�?�pҲ�U��E�" ���9|7-b��Ūt����;t�>������܀Z�A�:�R���**����=�����}������.�;���J�#�r�눋-��Xق�.�MYX�UeZ�b�����v��ƒes���n\;+X*ǜR܀-�pq�L�Vw����|��>���g�o/5ƺ�1ƀ
N�~<�_g��l?￯<����`���c��E��G�1���de��/jvܔjf�9G������/�R�5W}ũ�ĝ�{�#��v��,��X^�D`���25�<Xǀ�6��/�b�0eP�`#����6�BI0�����Ɛe��iVok�N\��H�9+=lh��ݔ�^���h�w$|�3r�WSPܭ���p�g<!8Swm��������5Ƀ�Zc�(���5Z�XԖ�r�?z���/��C�(�To��\��K�D��+Q�+��y�ˑRM���RM���mlBw��S.��*������N���N��Sj���[a�]^�,�*C�k�>Z�r��A�b������p�R�7�h�%O!)�yiQzY�@Q�b�"�D혃+���eS7/f��yF�f��@�09�L��6�h��vFdu�I4r]�"���!��W�BM�g+�kM����4$���EY��[WW܇ȈhZq�<Ƨ����@}A)�Ucn�1ä�K�;����K�l�dS��6M�ސ-ѫ����4A������0�j�:�m=��M��\γj\����o�]n��R&6�ꚢ*Qy�J�Bsr�_c�j7���I��M��L>j�],�A}�t:��,m�kU�6]_c���(��J@���,t�E9\�vo�[�A�:=�v�Y��}��M*렄푥w��{(��I� +|�|�V��R1W>[b��sEذ��o]��)�l,Wd,������d��o�'&�~����&6+n�Q-g7�������dˀ�m7k�,��a�"��VL�]�|1�����d��� bT��!�8 ���Щ��oh��?ƣ��.9���_��ٝ0��-��c�R��V��ѫ��a����ŏ��'j�$!4�Wt_�H��F���R7��� %����.)�Բ�H�ymi���I{GV$?̯,y��.=�&��A�#��]��a��e��V���H�z�a����>kcS(�>������>ʖ\�L9�^tj
�ZT�E�$�'��y�eI����1S���d�� c*o�!��������e{�YEEWV6��l�{��Ǌ!G�r=`ugY �)J�'�^��F�_���nG��j�H蒀��;�z�$߇	U���[P�a_]|�����RO$n��Kp�Jvy �dE�ˊ\?J[�}|J>l�������YQ?��mM}�����n�X�_@ ~�ʟS�)2���S�(fo�9�V�t5镉.Z��;Y�w�ٰT
@���"�D���ES�zUkU����N֟z�?=�tr֎^
K���*���� (�����N�U���#�*+�\�z��ǳ)��`_��`���e���A���V��V��]|UlU��Q��?�'�=22E��=���
�|}���e|��@q�B.�[pY�A�(�[���Ӑ\a��
�����h��05n�fR��©m��=%]���&�7�I�U�u�O}�S�e��<B����ňV�X�_�;O�,�9�\l��b�����2`E_���l'�WqOn!�B.�Ypq́ؘ#�2]���Y��W���~j�+�o&�q+�d�\ز���_U]z֪.r�ς�|}��t�2e�nz�_~��܍�ح<#섬�q�ʡo������x���up.:���0�:�5�i�C��ZA�_C�U��Y��UC��]a�+�u�����/{��l[s� �<�Ы\�����C(y�W�t�堇h��^W��R�,R��#��D���a�0k�e�Ԋ���h�W7�P�̄`���1�����i�+����De�3��P�
>[�gO>��"3�h�1!E�|�+�f�UG:;��R>t>�B�L���%Y�Pk�u�+�:��M56�&č��<�9<�PVC7Z	��!u��]+����"{��fHQ����LW��
2]A�_�
l*��!����FLq}�1>`c��0ŧ���d�s�֧ j��bz(b:��!��xR1S�M�j������n��2���3��b��xi%3��-��+����L��C3��ǧV��
3}R�� 6�(��cB���t t�3CjS��+�l�)R��]j;X�Ṃ�V��
:[AgO5���h1Ґba���cg��R    K$t�bg�U�R�;z*�
;[ag��3��B^;���@h�k�Ԋ�^�a�ќh�f �p5C�}�x�Ѭ0�'���m͐"��I<C8����MYja�p��N#P��F�!EDG�V��iV0�
�Y�4O�z`�!���♇i���fH-�������G�P�,;zӬ`�Ca��R�%�˜L�FhLm�Ԋ��9�!N�B6y
2yJ�z��.B�h3��}�¢+��d�g�������>V���V�ٓLM�͐���=C���X��MY
}��~&�{Y��6�e��uyV��d�vY�&���3�<��s�d���Ž�������\��o�^�b����Yj����Km�4��
@=J���:�>��i�4l�X<�o����Hg�PF���-j����ZX�zͷ����uc*�G�wX��j��z��6حm���[v{�S#��Ҳ%�c��	ˑ%R�%�����W`�
��`|)&�ѐba"�̃��UR�W�Hp���Kz+	z��^�lƯ�x��d��$����L0���֊��ji)��W��[��[	��S�+و��P�K�2؟9���er�2�GgV`�
������HU�H=&����+Y�W,��"+,~�ŧ���z��:BY�~���V��
?{*�YW����@�g?��ޏ.y?���0=]��+[�]����
?[�gɸ{�p��y2񳮌�t��~�vu'?���D���� D=U��+ۯ]�_���}ǈ#�$�ڻ+�Oj��ߐ��չ$9�ef�#f���A��Y`E&���.]�}��6DeԄ=G=<�?69�~�u�����rP�%�g�g���d�N2R�2��U�b)�����H�~��|ci�����	29܀[���b;*��Q�-m�k�0e��t��ŏ�jE���D���~S}[�������ieFFݨʞ {Ҽ��Yt���ul��<�-#	0v �v��Mi�2����	2�=�a��a��k���Pd�L1�
���&PP4Q744@��JA;5Z���fE"��qۭ��g���0�i5�Pb�6��`��v�څ{�]ᘳZtϓ.:#�~�I�&�7�I�U�u�O}�S�e�T�s�%h�:j��S<�MD����nV��@͆���TR�{��.�eZ�o���Y���
;*_�Bp�AZ���5�q�T��E�������k��v�V/�������pۗ���be��O�[O���^��>4�h�sGYN�m$�F5�� �=Ϗ`!j���9��b�.\�0f���=1i�As������2�x�J���S6�|4�#k+��9���G�����8PL� �/"�ݹ�a_�(9��EY\�^�,��d��u�<�� ��a\]x�Q}ۥ�M����,MGV{����E��J�4?�9.1
ӒU�>��}�5׊Y|͙��J��$��X�p�i*���#w��ʞ&E�Ts�z�Ȳ��V�X!�P��^f�_����������i=�=C���֗��>i�}_��y��ܲ��x�J�^�e���۶��l�c���n�8�G������
�P�@�����g��ՠ�w���^d��]����=��k�]�����W�M��}E�U3-<+�����EJ�n�N���%m��������ȇ�CAJ�?�`������Ⱝf.��N��A���nj����侁}A�Z�Bn�8�F���:��숋��Gc�kk�O��H|������u%n��?j�+
+	��B`��Vg�a�?a�x.��f[�(�C8KY���g}4)��)�1��Q�=f�����=C1���Ia�K��1�ݏ��]Uz�爮}�.Э��0K�����_ ��m'�P.�B����|��|�C��&�gI0'!����yKŉ9�azz�a	d� �-8O�i�Q�?@�aǦ��dCv�`�189Ⱥ�V;,�U)�&�ƱڠPF>vԛ�t�2+�8n �oV�.Cea9���e��a�w\���E���ޜ�U�Δ�p{�j���;�G��q!Cwc<H��f��z���u֦�~;p��iC��=�|��'�4���1��r������8z��y�(gq5t1��l�w/9��]��sa�ވ�,��������d��j�����G����֮����7�v�DGx;���h���7C&Z��xB
�����BA�~ˎ�.�1P���L��/�'p�3D��?�1 ��#G��Y0(�i��}��E���t"���?����IR1+ώv`�
�*D���+�S���?���X��	+�gG_�z����}ϥ��^#�1D��8aI>�tMY�nٺD~�9E����ݍ�]| ���H:���Ғ�N4t�ţ�Y6Q��O��:�3���Z<r (�j����%o���Ȼ`+�?���ۗ<<�֒{�4L�����:ڽ�!��u��S3��L_ת+_8�QS^a���ߜ>U�x���낪�"h��6+(C1�:s!G�g�T�|�k�2i�:N�e��0�Ч�ؗ�Nu��o��m��������F��p?w�$�]���Ş6+���,����V��<���+NL�$��VF�v}���~Z��֍TbL�u��i}��9R�Kd�U�
�z�5�F�'H�(�r�������S����������RDSF��&�|�e�{3�I�$�Tm��"��
� -�E#k�����l$�f(Um��ǳ�D�Mx���Nn�-��M�E!^�iv�PC~���V��NV��D|�8�X���%�:��>)���[�p���:\���7��ϑ&Λ@:\O��o���7���%Z�У�=�/$�&��C��U�Z~Y�����(���ѻJ�4ktҰ�D�ٝ�-�ݯ�&�p��A��%-s]75�0�Z�UG�qr�N�X�e"!��� �\��=i����//C��Cm�������$"�hn�>�?y�p�e+�2=d��<;������{���
�mv&/C2^�Yt�+���w���|+���w���|+����w *��B�+�_i�8�7��Ӑڸ��Ly��ѐZt_�
�^!�+�����?K�%�Gԥ��.rI:�78���dfHmW�����]fH���5��_s�I!�=3C�J�_�B�e�޸��Jc�Բ^0Īb�b��t�R�!E�� >�Ѳ=³+\-��Hĵ+��8}�]��7j�1��Y#��xft�	
#��i���;��P��2ot��-��dm/���������e4em�*B-4;&�ȅ�ԟF�vĔƹŽhfHM;��P��D����Z{G��Ѥt�ڂ�զ�5sk$��ԙ!�K�c	@;Nș�S�ǚ�t^+o�"Ϭ�6)�LV�*��|��}��Ī�b��JMǬZ�H�P=R��M�1w�Ȋ4W����a�&�^:h���m!5�r��ªd!�Cj��@����`�.�2,$Vաf��Y�,3~+,�w*�Н\e������>�<wxĈk&n �S"�}\����Co&떂hrI��c�ϱ+��B-��?ñ���%���,|#'�Ҡ"@5�A|����,�̬�Zz���K�-GI_�X�<]���K]%k���(��d��Cj�}��9\ ��ǵW�Rdt�A[� :U>ۖNNo�7_Y�."�ߞ|��y��.-U�Q˨P	å~��{�4 ����h�n�B^����Ѧ<|���k/�9C{���������ȴI����/��7kS/��Z&�r#����y��͐�d�Y1�Q���ƃg�n��>�u<��*�2��-�����o�r?�^��8��vs-�'�!����i���밙��� �6:,��\�n�����ru��sۢ�5^�Х�:#�Z����骗DJ��|�JBWy\�[�
�����}9�`P���y	��?o\��J܉�rG_�)I3�������Si�dC��W��K�-"��X�a],F�C�6
J��|��^�d�@�+Z���`���ĉ�b�*�V���u��g��;�OF�qH-]�mVe����˞�%sf��E���n�q��*NZjO �  �EE���P,)]5-!hKf��l#���N��4��z����Km�%��ɍ>@�0�w����u��h�R�&��y���<�Ʈi"lL�j���x*$Ŷ�KD��Q���� � +�c�P@�W;��n�����\���J>�?�S�R��}b�85����xt��֍��);�[m�*�Յ�\�	���.��Prl�4��G�ռ��f��&d���Z�=j��7~3�
_p����츐�maH��%�|,p?a��Ʉ�GF��u�r���LQn�ܧ0���4oT�߳�`��cLO��.��|���GdIqI<EQ���Z~��|��B+����쉅J�H���lc���jU�`E�Ի��>�� Qtq�  {�XizA�j�Vs�\�2�a��mf�(V�LQ��H!��zp�5Qss8O�B`�)	��䫚޺��]j�����a؞5E�D����� ��l�P����mI-F=cd�Oy�XyB�)�G�6	_����o,Lg*iֲ�N��·7,��vz��Y�	�v;��F@����V�xyZ���'��4�vL p>tl�/6j����l^P�����H}|א-��~5ta3
ތ~l3����#��_q��X�������|N|L�80Q�)��;3Sw	��W�w$��m��nYS���I�l�c;�������k����`���8
�~��Vo��@E[��h ��K��+�����T�=$C���+m��̴����M�I��k̺�L��1� ���Q#F�s���[��[�c�o*�_�u�,��h'�nȚ�~�
��P;��=��(����Y�`�c�����p��#�U��}���AS}V���2$�'L��]�*���'�7C�Hr�H��dSIe�
l�������c[P� �Aa�iT:�hʰ���,/T�-�_Kd�$�O(o��z��*^,_��L����j���P� I�;yWh
��w��s�aYlSt�b�������D����a�*&����<����f�ιc]Ͽ�����~������N���7~��w����䕷~�����x^i��ͼy78`������X�����f�[����͌1�K�,֟�3i�D��~a�]����d���|�S5��R�y���ص1^[���6��l�:�f_Q��=�C4�J:��<w�fZXݩ�Qm�b��������;�{���ɑ���s������q~ABā�R-Č�+a�	q�ck�����N;͆�g���G$�s^��;:��5'ѰψG9�b���3�}��F(im�{�O��JıEs <`����qB`OcN�$R����M�Fh՜�����'Vѹ߈�n��XO�cr=�Ã��	�i��w]��B�lrO�\kr�Ȅ�fH-�]�� 8��uL,�m<;	���4`+���'�o������B� �� ��}^�����w���Z}�츛j�Wq!�<��m�i��+U���ܨ�tzJ���lUȪ({1��+��+-�{ܧF'U�?�"Z�/�GU��BZ1bWB�ii8��$U��镔^I镔>���i��^U�ɕ���y�����B�x3���>V2���h��j3�ԯ�Vv��o��?�_^%��{��;�ͣC����C�~����? $7< ���the�E�Z�2�G�Ͻ��o��~�����go��=JUiV����!��"��7��u�3� ��&Ҍ�y��y����̯��U��� �`3��\=�I����~��V��K3K��w������Gv�3�0-��2�!�����������(��RT�� O �����{g��LQ��n�w�5,����[=��w#���������4��u�8?�RQ���hH=�>�X����z/���s�ԓ;$��u�=��4��<8������n�C�a���J��=�;8�l��*TR/��`�<���h<�{
�)eg�Y:���R/���������7��滽$�)�B�Z���P�i����<*�8      U      x��}[��u�s֯HX���Ky��PXc�X���O~�ڣ����Ў��˂��3�hȡ(���ב�^,.6���fw5�_���K��"22+NV���2�n��Q�q"�/N�8�4J�O��vޞ���u���=jq{��?��n����i�ށ���e�08Z�ч��G�p4��k����!��<eI��&�n��iq9�.'�4����#M�,��9�'@�I{ZVWW��+�}y�nv���i6�P�4M�(?'uڧ��}�s��>y�B]�S�M�"*�I�c$~����1�z����S��1P?�'���h�'�~�?��O�g�2����h!��s-�} ��u��j�[��:�ށ7CO{�j1Pq
�{<qH��{E�5�.�czH=Z��X��OW7V�b�q}^`�H�K������s����Ŵ7�0�|M��H�i2�f�V�w�"��"�4)���B����f{ٞ�����7U�ϥ@&�B�M�t���s*o�0�7 �,x$�O��Q{��C��R�@�A�0a^�����S�F��<-ڗ0�����.�j/&6:�W\��;&�i�N�<�8o�k��uZ�c��ZL�~d'�V:�[�#2>Y}�͑�_G�r����6� Ϸs�'h��탹9�W�K��LM>}�����)c���(2�1M�!Mۅ0� ������
�Շ����4����ُ�}8�!<�ּ���C��+��o~ڗ<����;�����s�	�5	 �!.��z��+��5��;V���\X�Ļd�kg�V7�����a�Ϧ�)��m,s�~b�����)~�V�����M�p�^�Yw�8�է���@�y~�g���G�y��&��M������i����9.��b�L�tz�X�r���$q����A����S��9cN+��<SLp�>XG��?�������?�ؔX;�ʪ���G�靈i_)|�&)������ ��H�0��(ȶ�`���Gf*{ۋ�%	�1��-�lT�vS�$��9S��9�_Ó,�G��S ����#�6Qp�	�Gp��{��<��G~o�W��VyB*c�$8���ىQ�-9���8l-�B�b�1�??lo]�h��ua�M�đ2ȠM�Ft����Ǝ�N��^$����bz��#.��w`�5S�,�����ݜ1�\_���N/�fWA/�E$�2�0�n���#�۲xW������9�+�;i-�
b���T��u|�te���]^|�5c����R�ӫ�q�
��������l�>��������PD�$�&F���ۣ5�ƹUtjw�PP>�c�a�?�y(^��Թ����K^ "$mk��}����npsA�q�����Wg��'��cz�	�7N��FD��vk�/�ڬ��$pI3�PoN�u�!lMN��-P�-�p�F_��R��%�C��xƇ�32����|;�*/���qDG#/[
��u��K9<�cޓ�}�g�{����&^�gA�T�n�w�v\�y�я��4��
��H�)M!�%bq�y���J�iVzT������FC�&�C�o�V�2���z'���.����1����m ldk|��0�w���^�"l���*�wP��L�D�%�-'1ug������bA��	�;P�ȑ(~�-ç���� �x���{4;��,8��Z��!�Hf? !�'S���
T����G�di��i�|��Yg�M�:�I����˱��	�L&%^�c��L����fIh��ȗ�.�B�����w������O��}d[�dR�xм1Ud�rp
�Gd�r֞Ԧ��j�~�Ą�oe��_@�>�ķ��/P����p�)��X��5�t�-�Q���_��^c���p�Cƾ�~&�`_�=qC-�n����n���	j?�w�,^}�=0Y��7#�F�S's��؝n�g'2�]e��|��\F� ;�U��;��p�J���3N#�ʣ7�>����>��!�iR~�0@�}>'=��g�G5�^t��cR\F�W=8Gb���.��rF��3�{G�_�ܗ*��?G���\����7�Y�<��T�}�(6Z5e�u<HӆbǺdI_�ы���>c�ZvD`�A�x�bb*BS��3b6���x�=��y����T�
�3[�8K��(l�m!^�#�f��m�ȳv��A��J`K$K'��AFq�\iN������?|�?���^��&q$�*��O�K9E������b:!���踳'�1���#���k}�����@��6	Om9�t%�|�qR�z��j�u�<�o�N�A�No%�9�a�1�����Hsd�fNn'@���|ܙ\N���BY|�ˏ�&A���6=��8ٙ���:������;���F �\N;���(bVU�wd�{#�:nN��3�дX��=Ij��\�乮�`Ӥ�RF�N�w>��!�;��%}@�󑱌tHG�L؎��;S�,_�M�.���F�G�<�dd���0Ԣ\}H���S͎��v=,�����}'�4���HdG�@~�i��y�Çt���W-XQU:�A3c�A�ra���v��o��I�_Li����i�����P����ڊ���N�|���^f�a�9YpE�Ρ����4I�ٔm��+�ۭ��e�sW�� 98
Ǩo~�~�e1�����Ǳ�i�ܢ�M��XC+��p���+1a����d�C# ��.�([����i�8��7�G}C!�#먵�����=C�Q�s�G�2G���k�K����;k���G7DQ��$%\��Pc��l:�j)��=�t/v�Uʑ��Hy� 	��̩}	",D�.��W������;�A���|m,�.���vݢBM���\�I;}OQ�7K{���i��Q�38u��:�v�s>O��Glx[<g�e��P���;���i�{F�����:!���� ��npI>���>�>e��s�$J�iG4J����E�Ŭ}ϒY�N�iQ�fIڜc�u%��&i��g7�ݕ/G��08���.D�4IgQ:I@�Pe�_�Xsk�7M�*J���b_���~#@�HX!5�	�}����Of�!	�e��&YeiHt��I�EY����,���O�s�&��!	�ɀ�4Ɋ(���˺cp�i�͢,J/>&t�&YeapPz�1��4ɪ(��ҋ���IVGY�^t&�16Q	��RgBj��I��AB�ŧ�8M�<��0H(���"�i�gQή?�A��,l	�{�ʧHGu�%��M�$�-�L�K��<��h!N�ë�δKw�x�yJF�{��+����Ʌ{��s���E��d�f.9������]p�?\o�sv¦�͝d�.w��2�;�1�D�NRW��켳���:}��&R�n�~��}�zҩ�u����fx�/��;�{z��S)�����7�Q,G)�4���yތG@�K�eX'|O����1���c�NXV(y�����8�b��l2j<��(j��y����3F������툚&y夒�W��2�%���$N7v��_�~�(������Pu�F9d8�j�w���0���Y=�ܺg�".:���H~qݽq8�?w�y�+}�x,���Ӂ�.����9�Jˁ)h��Q����5�][������[;��Or1�+�n�h>����R�E�%��u��Kvʼ�u��,>�~�x=������r��G��kh`��;�ݠ�U��fC�@2iu�|�s�jbm����[1�w>r?�v;�M{}�ڙ������]A�}��Q�x��i�=��CO��\��ﵴ�����+�CL�SGy�8ӻ➚(o<=���|�����N}G{�iR$QA
�?�twW#�K�G؜�i�2k�����������e�ZЃ6���4)Ҩ��� p����:CY$�<X�*׊=��>���Cc�$S*_������m�|��(cӡ��&E����63���,8x�gY��ތ���r|i���t흨��:f^�I^������������o�~Ȥ3fQDE�{�h��,*X�a�3{�5��;����8�,y<��    <���#��x��j��A�ڻ��^��\ȋ�wüfj��|zEpx���r���r�!u��M�m����p��b��4�1��&EeVi
b�Qϖ��6���wP?f�
��">َ�ʾ�~��S��� �J��r�Z�>���H��!���{�|F����X:�5�`UT����U�Z�.d7��us=�'�ϏN�N�:a�P|�/�n`��F�������h�;�/n�MT����K�^n�̒h�ʕ%�)��&�4��re���q�d�E����,UOX�4���,��?Ku~��ɬ�f��Y��۹iR|a��#B�krn M8�f��ǻ����&�d��.\L\B�E��,]m=��m���a}��6��:���	|��l;#AQ����_������P��Ύ��j�cA���)�n#`��՚��T�V�ohLJ,џ�K}���5Vb�H��#��ʥ��^v���Șd�l��t��ݩPa��9���/W9� ���d߶.��L���(_4�����#m�~�4F�9s2:�L�N�kn���k��-��g�����7)*�?�$O�8I�t��'����6��)��g,��P]�9���ݳ���b����~���}$�AA�"�s<�����vK3�|�s��`Ò�o<��̢�lm�s#/�U�K=g��t$� ���	�v1)l�&74L��}���[r���f-��h݁q a G���"�.T|��3�K��i�7�n�eQ]l�7�����g`�����1,'�
���;N��������MRKݸ���[CGT�O��mY��ƳK#G6�!����ח4�x�x������H�U��x�^!y]0��*�bܨ�V_b|���r�n?o�� ��CJ�Yw����#��/�ڹq^������Y����h4�{���.�	'��5�uŭ�( `=�M\%9�[��{avwz�����[(i ~agci=_:QL}ƥ=�i%@��{#R�K� ��[�_�D������q3���xPQyT�7Mfe4�e�/�P�=�s|t^끗�v�KaAR
kqȫ �<~|�:']=-�lJK�:��ʬ�$�3�t�r;����C�0���	����̻�<��{jv�)���$����L��?!�?y���zq;c�oy���}I�bÛ8�ƈ�;�"rc�Ѽ�_e�֍��4�Uь��3����<{�2N0��j�m�7d����&�:���0\�i>t�O1��	'�\ʝ
�,�e���.���$���RF��F\l���6X�S�gd�Y
��@�}4u��ñ��4-_�0���S�8L�r���g�~WģZ�^�F�7Y���ǆ�v���уv� ���k�}9�04�����=m<�r�H��3ޢM:�&�����&�G�����#����|�v'��_���o_�I@Ї��7{�(R�C5�	:`���Y�r� �������{:�%�{�E�J������ƿޙ�X��w|u8�o���msR	Y�=��E׷��ؐfG:�~���Dș�x=N�cꅺ�sZ|q�z��=Ļ��?�t���`qF���'͗�������o���6����C��Vq�r�2�[��
r~`Ç�B���_6���/�
7G��_��Rt����f���|M4� FLiqWf�4�uQA!an�){��cP0[<bR.(*V���f����9ZA��h����/Ȣs��?8�ᓞ��њ;�:Wm!� �\���v�ޏ~����?�����G��m|�?�������я���������?��O~,�%#ۖ5v6�#)�,v���_�������'����x�1��j�.R�&+�cX���B�R���#�ݲ�N���T_�[�%����H2'��d2;>y �rH�e{��|�#�]N���3���q�᳍����x�3,�؆��H�e��ݍ�F���-�>ݽ��i��^o;O��O[?���]��Ov�4q漗��&&\}�K��;�piI�{�r
Q�Ob�bK�Rǳ�[�����9�p�D���#�Il�ˌz�L��Ϭ'�AK5�h{z:۪Յ����D�����	�w�b�$�8�鉻�)��#,{D']d�Y��w�� 䃂;���m�s�PKz�q���A(g.�X3�.8�d7�l�짔��:��c�CP����~ћp��4����B{.놄�y\�3�g]|�*�ӳ
|�$*���w���8��ml�	� Z 碫��4��G���s�Q�(����O����$gP߃�4={�dS&"�۳ʞ�AG�5����pǢ����/�tpPa�x�~�1w.&��>߫��M8w�3#��|���D�%9����ۍ��P���}M�7���&e�W�5����IL8 ����f3�7��4)��ެ{ո����9�����k���#6!������ùh��3.�:���]1���v`�:=�~6�,N�3��e*�f��8�"�W� �����yWYk�n�+�,*��� 7^�<�Q�k|�l���}
G����6�4�xۍ{8s�{F+=�-�vks:o��~�|22
Na�XS֌���)1j��8�5�B�c����;�5N9�[����_�c߶i[�4�,��y_Yt>C?y�av.J�'�\bk2�&9Z���W�nl>�Z���s��|Ç0:�ڭ��L7�5m���3c�Ǘ���jt�d��hl�}�/��麗K��m���aq�^����0^m���v<c�dh�9��X.��*c�N�{��G
��v}�fZ�"�
����v��v^Fe�{};�y;��2`�o��.y�4)���y3�8M���ʀ��Y�s 5M�$�BzEz3�8M�*���^���LPӤʢ*�W����&UU!�"�,�4���
��gA�I5���Y2o.�iR�Q0B6�}ĨiRUQ	g��X
�
��zn�TMT�DB=7M�$�C"�>4�:��8X�2@M�:��8�g��I�GuHԳ@pӤ.�:$���4�gQ���6����(�G`sӤ��:$
V:V̂uT�D�J׆�iR7Q+��i�$Q��dn�4iԄ��J׆�i�dQk]
�i��Q��in�4EԄ��Z�j�4��	���.5KA5!�PJ�ISEMH$�u)�Y
�	��z��}5!qP��I�`��33��O�ӱ�w�}�3:0fu	e%����\r!#7[Һ����q|��tPO�_]�<:}��H�4���I|]��������7�9����nF��;���������W+�����m�HS���w�C[���:�IS�m������y�ַ��z�EN �O|�}@�c��Y�݌-�� &{��^�x'N�0��.q��*=>���8<M<qL��=�tx?�����ƺ#^�{k6'���	l�[k=��X (�_5�\���k�9�_��l��֩�LVp��P�Ę��+Aq.o��E#	؁�${'r�Dn{"wl�z�~�&���e?v)�U�~�z`��h=�E��	"B���d�vk�!����6�-������m	�\@^�De�{"M#�=gO�t��+\�Y�ȝ��A�U{1��1!$���|�G���<Q����a4�Qچ��[f�	Ȟ$n#���(T�h�ǳ��G�wi�t��lu������!���7_���'��v$�栀�S�x����U��q�ð�^HDܹvN9��X�������`�g,܁�����m�A�8����øR��������������q(�/]��֍h�:TNt�a[���le� z������}"a�{ ����bl"�%������f�
�Gdn�(#�����jU�&������!��^Ŀ���[�� ��B/�^jm�I˾�X�`��m]�NDǺʬ?��q��;��|7��/i��{���x%�Gw���M����Y��{])�*Iup�T?��c�\'Y'��P���J2���y5��W&�5�W�ϮɧB摔�l_bݢ�Gl��7���tw��6�_���z=�E��Y��)tG�b��P �j�I�M���f��½�Δ'�7%^���2%�ٙ�J�=1�(��{�K��A���FǠ\O��M �uD��ЂU��ͦ�    |ͦ<�TD:o�:�y|�_>������'����)�(� 	��!|�?>H�!��_��M�|�e�t���y���D��s�kŅ�:����^U�57MR�0�&��k?��D��N���q��zZ5~�lЅ��R?]�E I.;���f�P0���h5yZl|N�/6�V�P�� }!U��Mn��ճM@���������l���{�J�_4m���t=!�(]�M�J������ꪄr:u<
��k�E����.��2ۭ�~�S�K�]��6�t��1�����+-���gp�N\6���ѵ�6�r��|6Iq���)3����|f��*٩�s̵_)�M0۠�ra��l�3E��I�R�R�@�arK��qh)���0é�&5Olg�=�\a�+���ɖ.���d��r�	kn�-���6�l���
����T*8�t�JhҏI\"�:h�j�I?~��m��@�и]pXn�Z�jh��B���Q?�fι
S���"��W�m� {c��hԏ.���V���a?�:�2 ���F��̘3*��F��L���b��hԏ�R����F����!*)VFV��Q�O�$ .�!��[��i�DpHl�U��(S�P�$ *�!��[7�i �Ȩ��& p1�����N� ����F%f�6	��yHl�0v�&)��)Bb����X:���J��m ��Ȩ�.�& P���JY�$ .!�Q	_�M@�b� &�$ .!�Q	a�M@�b�b��	H \,Bb�����EHdT"�l�$�`Ɗº�,�|ws�r��S���]�z�����ҋ�0$��i�y}0S��0��;c? qyA��)Zf0��n����7ʴ*8�>�w�ݻ
Q���x���ݣ_��a~����&k���;���ǆF4��oc���N.��w���\��n�x����\��U��V�˰f��,�4	i�2�H?>tv�&)ޙiy�̼�ѽc�����<�7��ĳ�8^'�r	����ߗ���l�c��70K)d�/��0f��@�̴�f⦹�>^��ۏ��ﷷv�ĵ�*cS�
?E�5u�͸�x��KzO�>���jWVl�	YNͽ�+ֽ���\��%_A���ʓiF����t�,i�N(I�0�����Ys���w�{���F��T9�8�R[\nkK�S�"�#�#��U.��Z��!����|�M�w�o�u��L)�%pj�8����w��j6�iYo�kG4kV��xp�*ak�I)�:��<k�q��鈿ݎx<�n�O9�ɇ���U��%#�<�'�ݝؙĞ��f�ൖS��ks�[I κc� OW��y�]l�}g�4)w�G�KvxP7bZ3&�H�r�&q�coyq_5*�zE���L���SvM��^P�����N�0���s�fu����OZ��N���Fj��|Y$7X��6L�]��������t=YRv���Zʝ�R��d�W�t�O�cK*��<45	ԭk%[װH 
���"��K>.ci0.�����n�݆.�q�<�J���2Jgb��\3zk���������;1�[����V��fX���v��m,�[γZ�����k��+�%lPZG����-T��=��i�P�:�w�Jv�&��V���cO@,�!0��K?y/���fk��}T�&b.*�8X&o.^�=��a%<Z��tSd�_-C(ekKr���2�%�Q%�q)[���94V0��h��l�1��MM���].D�JH���ߧ���ZJA��О�����7T����eX�/J�2�K�2(w�%�z�l�1�+�p�܌�{�e[�+%@rYn�']te�|��E��������uw���,=���n&-={�5�֭�0(����[��d�w�X�ZՕT�	���Hn2I���M2�VH�EH��o�47R<�G�Nķq�<YG��co �������t����Yzs�g���'�i�b�ϊ���V魭���4��`v�*}�Jou��X�{`
YN#�{@g��-��-��RB�Δd�T�tk�v���rƦ��5��K�+�����]J�*gpI����cE{2^��30��#�U��^
��i|���$4
��7����=�4 	�<'p�Ec�E��V7�����o���.�L��!�m�aH��b����[2��+���G�&sv,Q�\��$��\��c*�ՙ�+z�F"amR�މr�ne�׷N�����ڧ1��"�L���ǹܬ�{9N��$]0����?d�qѼ��?�;P�ܥ��	N3+��+u�Q��l{@�'\lm���ĕ��3ӜOMl�vKrw���It:�ӭ�B����R���I������Ƙ�Qݍ��,��9_]��W؆*Hue9�v4��q��9v�V�h�l�	����;{�S�F�s��6�����R�����	V	���ʿ�l4�4z,r#�ȘX��l�~cB��F�*`�yN3����H4������tBt���-f�r��lx~SBԛ���nL<_��U�IG:��fQZ���+���Шc�1c�z�={|Q걣�"�������^{C-e.���Z��:%ړ����&���N０SӜ��{�����9K��8��vc ��C?Ӎ�
�Apۉ�9q�������S�)�ko�C��f����EW��B����p��W\qjp}Ea����E�N����͌<r.���G9P��%!@9BJ�Jatt�)��9����i����s5[ґ������?�����,I�ݴ�޷v�H��gɿ�m��3'nR�%e	���wWK�g�D>x����}�m�S�ڛ�i�V	\�_{+F��i��W�܆i&e�8�5��j����r������3�����'�����+�H�<g��i�D�0g�AR"T�|d=�r�/��f���5���ڛq���id&��'�^��L���J4?�o��)�Mkr0�b1�yK9�[��Zt�y����ū��e�~�T�N��y�K�)ˡKey��9�lgR��m
j���/n�遇2�M<$`�qҎq��|��"4�kPp���n/^�˻��m�����b���Fu{����@��֒F�f�«d��#ީ~v�t�/c���+(B����d��r"�J�P?��]2[`A�`EE�}���)�	VV���w)I��EE��~t��a�VZ��ѱ5l�}:Xy�G�F�J�(K�N7��
�$�~$add2lI�~V��5��F=�7	E�%!�1�5Fjf~$AGN1�%e�%!�QO1�M@BeIHlԹQ����$2�5�7��i�(KB^by}I�6�!#f�e�& �11�O�� c����4	М�AF�G\fo�,dL� ����;�g) c����4	��id�~F�Q��1��ҏ��& �1P�F�B�/׉�D2P~@�F��l�e�(?��32	2 ���r?:#H>�@���˂�j�2Pv@�GGF9?d ���J?>]�i@ ��~tpf��,e%P~@�GGF���rPV��~t�d�,e%P~@�gD&Y(s��@��UYaU%��@���s��$ .�(����M@ c��ҏ*��$ 2�(��{$7	����J?*&p� �(;���b7	����r?�&�6� \�P��@H \�P��Q���p1Pv@�GG��Q���@����6+ e�~tT��٬ l�P��QA��`c��ҏ�
r�) e�~TM!�� l���A&M����J?:.�uX���f!��{�4	����蘩'n g!��{�4	�<���\�N� �8���9�	H t��DG��g!��{�4	������͸�4	������s����YHl�^�9M��l,Cb�7��$ 6rڐ�Z��q兺�ɽW	 �	@޴/}qymKh�oܓ.MKS	��96޸/;8%}Vzq��7�kd
e�8��}���z��Yk*�S��lֺ��7�fm@!xF]��%�;-�xL��@�K���wE��'I8�r37^���͕-��^�&������حV�gW�;H1�N]���D��D���) �  )�CJ���޴�������4`	8���v�Z��>���:
�B���V�J��B�p����jN� �_r����Ea����qN�M!�@��	;�v��$���5�g��P�YSST�j�w?z	M�؟���b�"����;���* zN�Z��ap�0XAsR����w��@�*�*;�yƌ�Y׫���7��$�Q�Tf�9��& Ы
�̖�P����UHP�f v�� �*�2[��B��BV�Tf�9[�& p�y��=z2����}ݣ'�����O��`cu��L<zj��:$6�=�x�Ԁ�uHl�t��D$�ب;e�TT6�!�Qw*�ĩ�l�Cb��T��SQ�؄�Fݩ(����	��:.1,5��MHd�s�p� ́�C��8�g� 6��~tT�T�Y�(:D��Q�sxf`c���GGq0k E����lZ)�m E�H?~`�M@`c���G�!l�$O�("����6	i���~t
��,�E�H7~`�M@B偢C���d���"�E�H?:3��("��"�Y���@�!��7
;VQ(:���k+���<Xtu��C#��Dy���ǿQۦI�2��~�-���@�`�!ԏ.�v������C��ndvL�Ň@?�@�8����bC��į9�& p1Xl��
$7	���bC�U �	H \B��7	���bC��	H d������}>��1X�I�G�n �U��~�O�$ 2ӡ~t���Gy�,L���%�].��1X���nQ�$ :ԡ~tvL���`?:>3<g����t�]2���`a:ԏz��& �1X����$���9`c�0�GI�_�s��`a:ԏ.�|�瀍��t�}�b�g�6��~tndf���P7�H��a�2ԡ~t\bW�<d�C����,`c�@�G�\D�1X�����j�瀍�u�8�G^ 6ա~�3o�`c�P�G�X�M@`c�P�GJj�u5�7f����ŏ��n��iy9��'��	w�6�` e��źl�]^ ���~t�.��g��P?�vW�vW ���~t�*D� g��`?:+' ���ntញp���~������l���GW�g�� e���P?#���0��C��;q�,��с���`c���G&vR�g���B~���I1�6��~'E�$ 6��~�M�dM|�8;GF�'_0� �z+*�Qii��6S�#W)��9�&6�Q�{Y�%`k�u�Q���U�K�^�(zK��~y	�,����:d�g^ps��זB�u�zzK�����`�c�����Cr	�GX��П����Z6.k�e:�n^¦áE�@��ׁ:؏8�-P�#}%H{�)��t���
�!Xz���.�y{P�� ����
��*��_
m�*�.�tX�uC���b����'�g��<��c��*������$��ʳP����#LL�a0����I�I�4��W�:kvA�e}{�
���-n�:���[��v��On�*�`��,��oI��I���]ڮt��֭��ڢ2����mS~���R}�vP�V��/�_�w�{q���$�&U�QU��#r�}gy�L��~ь�_�q�T�]���%I��!:�R�Fp'��L��G�;1-�1G�ƫ��K�K.
�k��r��\�!�[ѡ_8#�j	���+%,�좍���w�uX�Ct%2Vhmg'n}V�/����h��e��;��~��
R����5^j"Yj[��jG��hը�6�v]M�h*V��H�G�j�@��B#{5�6�}��kЃ8��/]I�
ɹ{��E�>ڱ%�Z["��ق^Py*�1~�6%hO6��5�5�H[����$��m!Rr� � ��m�t�-DJ���o��f\�6��X�t7���-�J����g��k��-�J�����͸�B��	:�4�% �[��!aD&E(,�+�����7��[��Ի�=��tn �'9B��	R�9o �)9B��sH��d�B���������m �)����� .n!Nr� ?3�& pqq�#$�L�����$GH�oP�	H \�B��	��6	��[��!���ڦI�$Q��8�t��nE�F��$GH���	HȢb��:	:7L@[��!��?�& ���-�I����cc�̢bq�#$���,D[��!A�BD���-�I���W[m�PG�"%GH�E��l�b��:	�ӓm�)`�"%GHЅ�s�)`�"%GHЅ�����q��#$��$;=)��"%GHЅ�����qђ#$��${)���%u�I�9 l�B���H�"���[��!A�RD�q��#$�"Y�H6n!Vr�}�d��"l�B��	:*�KP�6n!Vr���`�� �+9B��
�2Sd��[��!Aߪ�'�� �+����+��d��[��!@&��)2��-DJ���;�`�b%GH�Q�T l�B��	:*T�
��[��!AG�)r��-�J��0",9`�b%GHЁ�}Q��q��:	:B  �"%G�Q�S�9 �b%GH�Q��)������]T����Ҽ�N�i�����+ǘo��`����Vd��с���E��}0�� ]�>m%/;� �U=���5�W�1� X���;�{1����P����!����P����OJ��wj����'��K="],^�\���K�k|�[ ��6���V�~m��A��R+��	�l��_w�2��ig������˜��޲=�����Y�t�V��ߙ&�y�����i9M���&讎���>��A���b��� ���B�������|�!�����7�}�C�/B����	�x��D��b2���.�4u�Vy�&����Ӕ��ǻ�j��~�)�7��Bo*�����X�Kx憋@�`j�?�aЏ�����#�,���o`A���_�m@
��M�&X������uu9k���k����{2�����K^V��p���6����_��WW�e���O�'f��x,a�ܴ?�ۿ�����/�Ŕ��Y��]��=�voӤ��2���ט�f�e؍�j-���Katހ�W�gAFG�L�o�V��F�&�6�>���u4u��^fX:�.�M��&LC����`��`6�q�6�Z��0���>p������^�/߇'���O����>XLW�M0�2�x��������*PI�7��O�æ��+��,���6��������[�����F�eǁ�ɽ���k�D?�9|�3 xV_Ng��,n(�7z��,h�夞Μ:��&X*`���0:^��������7 ?�<Kz���&\��B�t��&6�L&���      +     x��VmRA��s���TJkgA�x��B�GŲJ	b~Z�.+^��Fy݃���qzf��~=��FtJ�R?��M]�5��s�(�%���(M�t#�m���ڝ��S�l&v�]R
�L�1�nϻ�R����O\Ю���}�w��'Þ1���}�9�����=,`�A#<�>�S����<��P�.��%`�4�1%����xx!����tS(gB)g��uu4��qȔ#���GnO�ԓ�=:�q_�g����?��9d**����L�#��h�̔�\��^��7(� =�)g�

�8
��H6>���p-��:��t2Օ���ˍ*i�ϼ(�|D?�7�с�:0�L-�6
;�[>��L�1 �.J�m.hm:���q�l���K)�=�L��T
=E�����ͥ�9�D)~#������O��\g�nr�l��Q4����ӫ���BϾ����`����ߞ=��\�[#��M�	Ǯ�EgT��5A-�G�?Z�?��ݯ��Fw��~��U'�[�����΋(��Kt���%;����BvP�N��t��|���'Mͦ�������ln~t�>ᐠ��7	[}q� 2@Q����ӓc������-�	�cU�B2^̃��o��g��
��<��>d$d,��'2��j�K���B��G��L
K=F��bB���P�Ku��SEB&]1��;�3��Ϝ;�|IY��B�Fk�ƮB��"	�t��^8W�L�x�oJ��N��W������6���y*�|z4@�p��>/u���-7{w������      !      x��ko����+��d�"����rv�udHʣ@���pl�q�EɎ�vcYq`�u$�N����Y��- ��ԙY�G�.��E[�����y�,Y4�<M��k��d�o&�:��qr�_Mz�����L��t�7 p�t�s�;��%��n�g����K�9 |��G ڟI��G3ｙ���f\�u-'�X�dA��ZN`��g�W1BO�-: ��g'��u	]8�פ/��	`����7���;(2�r=��-�m��8*AF���6=���M����|
�=���g�C(h��nz���h�2�����]�~��T��b�i�ܸ�:6��"2Ȉ5�x+vDփ�Y�˒<�U<$��P���L��울��>��M�O��f����$=	��������*�?!M���� ���A��c�+*�6+�N CW�_З}D[k������<�
B�����@s41��������\iQU���%�J�(�Fˆ'���B���`n�]Xq���
ME�p1i����E��(�.55p���i;p!(�l������@���Lb���$�zف&v��̂��o�k����9i�Lj�hYQ^�LN-��,_��r���P��"�4W����O�xJ�8�[e��> oItH�T�N�-��PB��HM,��,W�DOqz��� z�9��`..�ZJ���L�ݿm��}�׃������g��7�3y|�{P��5�~�K����9����LW�J �I���?��j�%���C�,�� 2��*����z��C�h�w��R�Q1����N�՘Mb&�1�I�����tn'�#����2;n2Ex[ ��z��"��7� �=�c��H�"`��T�������t�T
�A��o�-.�������W`3�L7�^'�y�sد��䫩36�ˍu�}4�@�УQ��A�y����=�B�ՍH�S���ᨙ�q��U�IU9.V�jv���>��ɝ���ݰ�>.M�n�Ȣ�#mG^}N���ܫ�;��uΝ}�� W$B��(��QR�6c�䏋$�p�'Gh�&Dt-�ewT�1�T�������]�(�K���#~�	E���#��=#�>5��{ ���4�':0���#s|�0uzN��
Q?�ӥC�#5e�LW��Li����\9��VfZ�ɪ^�4�DX�\j!��f�&��ۮ�OF�����|�/��r��0�tX�3�����Do�U�6n�r2��#[;r5�;u�uu���[-�u�����LE�q恮P1��q��U��2��N�$�!��
�Y���v�b9z-��@�ȰeE�U��O�A2]o���������P��AF8~*�q���k�k�$���j�<H%l�R�ȈtEk�3��⹶�l*P,�O7����yR����zLVs��MH��(��J:�g�j�9[��n��>�O{Xbqg�L���;�SJS"]S��GB(�M+��SBF7R}�ܡU�#>u1���R�R���;��c�j�-?��0R�fd�P�]3ʇy��������%k*�����l󵠲% PԻ�qȼ�	�\ƞNIS��F�*�(�l� l���\ ��;(�V�s��L���-ϷcO�+� ���5N��*�9��G8�k���S����B�zL����a}i��[=�֓�z�k�-a�ֻ
�e=(����cY��kBA;��z�n�7i�W�nպP@@I>�p=H����ɛ����|�?��C��^J�Q������_KC���K�ӣ���JK�O~��(�a�麼��R�J�S��O_��t��T=�2\T�J)[�S�VSs:�Mm&N�������~�B����^��v+��:=J����ؤ:�W���إ�}�~���mS�5�a�U��Z��nMN҂>Vź6¦�.H�a��Ɋ��-!�Ǯ	|�eU�
`�[�@F�?���H��Ev��C�M�����^Zx?�Ř�����uM�~c`�Dv�/.��h��<O֊�e+�n]²[������G�s���-%��ִ}W5�R qMa�5�Շ�m4�Q�q�8TIcd����%�
&yg����ǵ��EPM]��8)�����߮\��r]\!e�� 2��n�o�[�����L1���9[O���U���r;�L�ad2q̳=�� ��u}٣�l|^�r�aS�S�%g�Հ
K(��8��Ӽ5�ʺY�&!#a8|�%���ٻ5"=N�4K����jI�u#����R�ǤB=jB�Pb��ۡ�I�tM�@�RZ��*�^i���k�q�}힍J�
���wuzY��,Uz�3�hx���O�+Zd�ʸ
�J6����r�5�B��:��N���3��t��pJ�W��]��s+���&p=k��L�aB˳&��N?$?����9#]i���>��wUg�xa-�
ʆz���{�:i�eh��e�%�p��F=����Ti�y�N�I��&�ɦ�ÿ�QT��M�/�q�L̻O�gy6<�N$�od���p��G��>�`أ���o<�,-�.^h+f^R�3��㾏�A�_�%�����-�ț���[��8�z�r ����Q/�`1D���f�M <K�J�Xɗ���{����n�h�j�*� |���V��e(����U���xM���x}��ʵ�/��^����k����V.��C�W�?���Œ&��?�V�w;!���e�И��;ι���q�_����?�z�|m�]sni�׍2�1f�AlqS��2��ρ������$1	��<��>R��~�g{�G�D�@���P�7 �U�>�Ujh�m9DR��d�r��'a��X$v� �Z4>���٠:+�(���?�R��g���&�WH��0����	R���5J� �<���@����o;�-(3R�<fǾjI
  N��40[��g�{��,���j�tj����t� u��,�IT�
C��A��b�Q��uX���)Z(�f�l������d�s\��g|���y�?;�g>�sΰ���&��nx��l�q.n��W(wK&Ƌj-��w�
�@�<x��v�HF������ϒ-@n�|�����\�mye����mӋD�[�D�2���7oL �V=�%��/�-CbbU.�3i\�Ǟ�w�	u��r�ߌ8m���of�</3B�V؎˔ ɦ��B��C��[�$m����x����S�b���[̵@���)���3GG�yh�h��X�E*��E�Z�����Q;���G�S�{6��:b�D-��&��K��q.�m���I���[�ь�F�FQ]��b�c.��7D�V���ޝ+#F�)�� ��������if�1#2����rL��ɪqs|5�x����򎗞��������w	�Õ���/*�p
c���0����3rW�!Hb��c.�B�H �^�Y?�eƭ^�'W�呫��LQ���� 'S��mB��U�h�U�P�k��"x9D��/�F8 �Ł���>ƍ�\᲍�|����>�|y�9��ʵ߼��
l%�t򊗪��X^\2]�y��������b��/痭y::�6}8*Y�	9���� ݬ�`�W ��(��D�N�Ԑ�a���S�i��l��L�oH���)�)�`}ł��[��]�|�oU�H���T�<��q-7�/M8��!�y��zRf%��v����,���+�K+W>�z�O���$�*2'��(�V��,b��+S��cX5�� J�
J��PC[4��Xe�+��)bkH4�8�x��A@�N�nN��W-�2WGĢV���d�����a^��?x#��FR���|�m�Z���o�)��n+`v�<�%� ������^X�wy�[�����<W�0T���CE�s�e�y�rߘ��ܥ�kI$���
ҋ ���>�c�l\Z\0/�L�wށ_o�̙��X'XG��	 �Um�)��0���ʇ�����B71Tvڶ�#�9ǘ�lX~�n�7�̵Ϝo�=?2y�~*������̔]\xwN9������%Hf�9k�ZjK���r�S��=Y��&��~�5`���Ź���   ya��[�dWq:��BD4�%��wAh7�<A��������r�b�أ�C9���&Vp� ����&����s�]�?u~�d��I�Ϸͥes�P\<"��>R��  ,<u��#mI:η�9v0�R� ԕJ�-Xa
 /����������l���&��.P��pS�Ec��-��Cۗނ1w���KoJ|�^`l7��qE`�p�#����E�*�h��]˗��
Q�����mw���2��	�Fz�͕6�(������m�;�k�eP�&���Q�K!ң�Oڕ����LN{� �R=
� ǱA9����.w�!�0l�Ė�I^yVL��2]��h�)	*��.u�~8]�@�r|S��n�2;�by6*�;!&jV�$�R�bWm��͋�'�DT�-�HN��  �*�*k�[�F) �|�G�8H�
׎\)�+� 9uc�z��8P'b����_)	�SJᙛ�uؐ��Z̵]i�H 1�LygA�q�wdq\��X�$�X�نa����      %   �  x����NA��5O1G�ٶ�{{>�F�D$�pTbшcL`"�����~�B�Q=Y�]�b<tv6���목):����(t���/��5��S?�g:��lu�hcZ�h���.��*c�m�%�W��/���)���rF@�'���a/�O���6��y�=J���و�m��4l�YxM�iؼ�㎈7�2m'������!�R�?Z�6�;�ȯ#�g@龜����s-�~qC��Uʖ:Jr�#6�ЈE���%���+�VD�+�ՙ�#�� ���1�K��M<J�l�r�}��=���d���Z}�4�Jr�ҟ�d���>��(+�T��@'���gx�OG:G߸��q�ytR��b�}�
����*a[��H�r*�w�M�.�a�@��q �;�,6V�l��N'�^0Y��S�_��2�.�QD'>6�j2�����k��ƣUys��F	:��w^�>�m>w �-S�h������Q���$�¶�      9      x������ � �      M   �  x�}�=��0�z|���")�H����o��H�Ǐ���(�@p�g��e�����������/�nکYo1�sȐ�� b��L����3 ��r�;{������*M�#)�T��5k ���H�59��R��t�N�柪��ֱ4lj�� a6��=��ԾR�@�S\�S��S�I̾Gb�L��xZ��5sq�U�͖�g���rw��~�����\{2l �}��D�ȸ�i]��/����=�Cl�ʟ�2���f��9�1X�E�S/k!��d�қ�`��;����J�S�+�QQFci)�Ѓ��-�)�%�g-��������3�G_�	܊��F�sM.���h��x�p��n����	2�q�%t���ɨۑ�.*���}\���?��u߶��e��      =   I  x��͎�����S� �ܪ��/�@n���y�G�G'Q�� ���r��޵W���=��'I5gfE�0+Y�bgF��jvUw���MrH��ܾ�$	$h��y8
�	&��:_��ŝ���%�)���!���� ����@H�!� s@�3PW�R�w-!P�U!e�ؔ����
��si�DS��X���@'�1
] {��f#K�*���b v�s�p3��)EJ,���eMqw�VG�s5մ�)E�8�����c��+�r#�(�S�]��f��/�-�ͥ��!�M)��]���o�]��'�ʵӗ��dJ�%�-
���V��(��T����w��g�w�����4�g�4/9�s������U�h~��߄�</����/e\�8[�彯x���d][x���X�q��ы��Ń��e]�Q8�b�|�W.�����pλw����7~��'\����o�t��������w�tݔ���wk��
���x�%Wp7�]�q˲ş�3>���߇�v1,��7�)���гX�5'��שn��w��6^ꓬw<(|ʅE�,�+<9+�� <D cЁ�	�1��|(�r2�O�؋��'NO�<���~q�o���0|���'���s����l��@A���'�K.+y���.�5�͸1��g�O� u̝�?�����Ѫ�����Q��a8�)[>���̾�����ѯ�ݛ�t�ېQ+.h�Q�+�Z���TJ�$h�J�cz=Z'ؐ���%�1ݗG����H)�{���e�<<�fWg�2�0�r��u"��O�B��=��|���a��y���<]�D��k��"q��Y���j����1��}�-݇�e�=���"��ַ}���
Yk�Ӿ��<�Eo$	��B�I���Ĵ�5�w�����/�HH4�B��4�mߵ`ݫ���V���U�\��Ԃ�)U2Q`tz��ofַ(���q�����E�k�G̑{�r��ia��=����ụ�,����oC�����j娉k�d���|ݬs�F��MS�lBR�vڟQ�6Գ�`�h2�L�y=���ʏ�_ԍײ���*�����5�u��l�aF���u� d��I%�6��Xm��j��^��u>�����06�ʱ>���`ևkӇ���Ս��D ���6��)� �~Q6PM��KP%�=��ں����J�^[VYt-���&@�r��>YR�;�?/v��]���R�%���0�Uӑ,��{��&�K]
0�Eq$Qy�Ղ&�e[U��&ԁTA2Wfby04��nև�ӇYމRTC[�B7M����Xx��  �j�塮�I�i^@y�������#ۀ-����'�J�<L��,*Aggy�!y�.ʃ�� ��A��}���*"��_���>j�\	�v��bzhJ	�i?O�;9�_L{�Zp�M<�{�kx���t��ކ��vg�W���V�<�h:+��Z�ME����S���8����504�$R0��6H��!xӇ�N�<տ.>t�[@��5��jP���M�"XW��<�Jڒ0�Ѱ||Pڦ�����)y0�\��[CSJ��gy��aG��<��Ն/�Q*Q�����ںM#K���
�񺔠�DS�<����ԢVuYQ�K��[��_�����R"�9��,;ʇ�]��*ZY�����H��M�b�Ͽ;�]㴔� � �%_\4Rh^)�Uu��
P��hyYƦT�<H��Yn�W9�A}����wN&^8Z*=RA6���|eH%ۼK�y�ohx�WK&�_���/wD8��WC޲���D� Y(��o0:6���ǻ�j�t')%ՙ�mn��j�K"�z�ҡ)�:Q 3�3�ۘ�{O�-E7A���JÔ�L�L�6&�~S*�q3���-ƦTZ�TΔΔnc��=�� ����-M�tL��)�)���{JM|E�ۍ�ؔJϔ�|�wW)�Q݅�~̔NS��r�|�66�
�����ҭ��@��g1r>�5s:�i�&��a�i�MS��953�3�ۙ�{�i�X�h�Ӂ)U�9u����gmi�o�ױ޲W|�JaA.�fbB�Reb�_O�_O���[ί�R!u�nc����y�����S      ?   �  x�͛K�E����%�L*3"u$$X�
yÎ;�6�;a���}��Y=��r{��=)���|��O�Y�GFU�y�����W��p���$ك���u����'6�ώ�__��t|u������������_��w_�w�T�L_�9�=�:_*~u���ϗ��7�?��7��`<8�Z������Dyt׸:1de�Z pvI��?��NN��Z����I1�V-�a�Z���%�t�^-�!O�}���%������jq���wN���%���ɮ>F��K.-)�gWb�9������{�z2��%'K���%+Z�6��5�OU1O�ab���}� ��n.{��K9>	��o .��٣]1�d]o_"@����ޯN[m(��5O�VY���p���	`\x��⭤�6��z�!@^x�jϹ���R�����,<U�烳[����o�]d�Z�)j]��M�{��E����"��I����ҟug��bD�Lu.QE��>�4M�����_d����F@~�[�� �E�J��Pw��`Q\/_" -�q�w76ݐ�EW������?�‾���O����n���/�{�xCv�k���*��������1�M�0�����&�����+q���x��{�6J�����������Ņ㣓F�)hC��(;/��m|n)I"�w�k�Z�dG�k9;��Es��h}u[��׋?������q$Z �Z>��F�����%���iF�w	�������;%����6��OT���8�����!��V_��r�AК��~�����~� h%IW����ѯ�	��/�/�1�\���.qJ AY�;/W��'D��@�D����yy����id`_Zox��A>l�����#Zox�d�\?h����;�A�z�W���Xy����
��o�7<Yޞ�R.�mnM h�᫤�E��Ed�q� �Zqx���#����h�_ �Zsx��潣߈�AԚ�WI���cU'm�iD�|�ĽH?Cob��AԚ#WI��NJG܎R�)�&�GVr�Ľl�}Υ.�jy�%W������M��Ⱦ@��[2_�b�z7�O j���Җ�.���f�D�'_2_ޒ�V��UM ��d�������`��L�K[��&�Aږ��LΥ��Y�e�2��.[_�kyJ&�t?��]E�vŭF��B�\*��=tǳA
�t.��R��`S�T#HQ��%؎J��3>t�L� %U:�J;*��9#ܕ�AbU:�5;*Ɋl�'�:IT�\z�'��3��}3Q#`�J�2aG��9��o[���*�V�1�`.�fQF՟�T�����$�R�F��x7[s���6�o�{՟�9����S�yjT��X9?Ď��pT����=d�Ae�sa������ �� m��`�K̪?[ጹ��h�o�j,�?[�TG�>~"]��Ī�l㨔�FD��]�����'G=D?z�hQ�U���:�|��~�_#M]�-uS��|2�_"M]�-uS~?���_"M]�-uS�Yb0�����O����$���+=�Q��H�@4u�㩻��V�H�ՠ��~�@4uq��M�����ê��.~��}��Ѷґ:b�D��.���W�d�qVD�5ui��q�l���H�5vi���?�� �J����4[�r���{���� � UK�      O     x��W�n�6���B����|=�z�ɖ� ]�5A�ˤY�nٚ�n��k�p�u\����h)9Ql9KwQqJQ�!��}�;G*(����#{^nّ�ء��~���^?����ls�Q��E�)N9)�L�d�䲇WF�eL'~O�E�PCxѴ��ObL}A����w�0�?<������|
��q���ؓ�	�'v�~d?��Ɏ"{h��Woq���ȴ�%]Uh8��H�XN�T(���I��v�$	e�/�B��<༱��O�lyG���I�W��c�|��m;�W!C{����;��3��ϰ��'���^��L��jU�N2��$O
Υ�I����T-�o��|��r8G�s���A��r�ON*�K�W>������$qF�����?���|����&~���0P���ɡ�L?5Jd�NMS�g$c��D��o����w��1�>�Gm�G�v�㭆��<�.	8:��g@Zr�n\�T�
�%^"aP�x�,���k��L�����d`?������Y���U����Z�AF��L���/r��4',g���댚6=1ё*V4m�a
�RF�Ք>s�Y {^3�AN%�I���ϻ-`h� n�f�g}p��t	�����ݎ��=p���t��'BQ$�4�K�P�$(5LТ+u�JO�Ih̨n��a
u ѿ��{��W.�3ős��s�ŁA��N+Iyu�ttt���8��KF>!w}��
�lC2=3���_^*��we���OE>H���
���p~�(��Υ�nT��֦��<UNy�Ð�]�Y/���j�Vw3֖�Sh����=��ۈ��p�����8���w�^{+��8��޶/b��OZR�NZ1�\2���.�mT�>%�6�0C93"/��X��<���)�2�,66��z���6�6��#\�$����%��whG. � %� G�|x��~�6C;���{�n��m��qcѠ�4�}ߝ4v��z���1�'\���z����Ëg���^���i}� �S�p4Ϧg�Wlt�=�\[�_Q�\��0��qU�ZM!O���zy��*�\
Ʌ�34G��\�����D��ۛB�n)�kyݔ0�綯�'�����JU����誌�����m$ƹ{j��17M!׷��
ԗ��L�?!�R�[�4��ܕ�C����'�^�|����~�T�d	�)4������E���x� c�~=�s��1�Y[��0���"4�LL��P�˔	'i�����8� �²�      )   �  x��\͎��>�<��Cw7�&���� 9��⋃ ��Z�9���$@�j�?v�F?#�%������$U���.��;F �3�"�_u�W��D91���|0�{�0����|��]܀�/����޶>0K�\�'���\���{t�ym^��}
�_p97o�<0K;�%ܲ0���f��ߏ��>�>�Oo}�/=6G���>���B���8	E$�P�$���O�kd�HK�h��R3��TH�/žL�<ӿQi*a>�
1��U�u �f���O��7�:'NJ��]�E?΂��0���60Oa�����6��>��C�P��	(Y?2��Y�3���a����i4I�mz���:��2?�7D��M[�1����2��* ������%��9��#s��;��.�h?Qa�\���(�D"|O�%s;Ѱ"��O��W {�^Ƴ���I!�,/Q�|w_��+j�$5HS�҄�ԭfU�	\�7��y�_��5��t}0�{��5�S+�S+�H�}��L$&$�Z��D6�7
�τ���3���:r��H�6��i��=�Ū�05��Z� *�O�0�b�$�lb��|���B�]fsYK��sD����!h�J7I�.�����_qh;1��=���`�G`����������_v_���j��,�%�ꝑ_ql;%���*��^�����9r�JvZ���JP�� 5�׿&_�GV�ޏ ��/���؉9�0�1���%݄�$Yhj��-Q���\��m̥E���lI���� �e]�� �5�+>��b�ؒ,�x�������n	�t;�o�d��x�&������[���o������7i�6s�9ԮI��{񠨤��^�+s�sҜ��Q!/�Q-�)����f��@|�a^�-��o-+��̃�����֚$��!�v%ز/&"�C|Y9�G�t#@+�9�T�d�畛�,�{��ݠ�� fI�A�Je!Wd�]6���}�H��2��9%�M��z̋;��+%���c��]�S	�t6I+(���]��1�9�G��$T�,a^�䚤)��Jy��[v&N
9�@�z��/�qVA�K<���j[�#�w�y��T��)X�b w6�`B�%%���?ȕE���	�B��'�Y�,ݗ���%�*X>�̽�м�M2hx�E$t������i%��J
��'*ôvg��?(!�PU�ęj��x�O*��c5Rlxm�X@��#��#(H�9�?�U4����#E&N������V<H���Õ*��B�˙y���\8C�T��QW��I�r��9�5P�ïn鱄�'D6�$�[���E�V��H�,�D��.��^��}1��7���;�p[1PZ8���ֺ���<4�0�I�P���t���jD�&�l��xF��
ߎ���;���g�ܺ�C���.�>K�NIW2���Ho~��/��Nd�nP�k#ፅ�=����z.{B��D��d�T�(��q�Z3&;�r���u=�e𪆨2f*��*��*���m��*w�ڝj� ���>�<��$��h/����w�
�����e��%X/^a0N�4T�{d�R9�?�q�:�k�Y��y��W���6�0�ql.��<kE5���("M%nw��ȑ�#`��P���]��ឃ�A?FQ=Ҏ������H���سf��<$�=��ĝ�3�� y�V3��<�;�Ъ��k���ړ��{�4�b�O⼇���ޏ��O�.��G���i��O�pqI��܉i�86g2�	!T%x�!�B����hP�d����k�F��W1���Y�e"B���!�'ұ�8��+��
��}K�Ր��V�[O-XkdIi�TR׷F��5Hw���-�Bwy���H��[��\�����b�����%Gw����W��[��7d��N,jѢ�����
��a5 ����4U�L�n�I!s����Q�d�c��-�V�&k˶�K='U�Z�:E�i�����P��|Ob1'�r�O|�1�ߛS Z�X��pVK^�Dɿ����em�hۆ��O�A��f	��h��x��݄$3�n�=�X�el��R��0���|D�7/D"֑�٧St�ml�H1[�|y�VwQ�u�5�1�����D�nH�\5A�h�TR���x��g�u8Y֪g�U�&i����n�&�8�ɔ���L��۪��+�������뮙i��H�ME�'��J*�{�
�`��^.i���g��9�%Q��h�6wz[�[��x��IdI�c�^���(o�UE��8ю�p�H���R�b���T��؊�%Y��]��"юhX�|Dc{���n����-9'9����R�ޯu�=�ɨ�O�s�uiޢW�p:��(�79J�����ؑ�=lX�D��S��W�9%��V���QǼ��Ձ���S��(,J�����2�7(I����������>,�a��l����	�I�'}w���]q\�┶۰B������ ,<�ʀ�uq�|�׈H��ȒH���L��e;/�\^��>�HS<��y��cAh�|O��<�B\=�'����A���/cIS<��9�A��@��	���_��c�����bX�]��W�cY����u P����q]PI �jV��6 j~I��^c}[�l�@����[�> �G0�֣�S��Ƞ�.���,��"?St#	��1(yo���q�絇P�P="Tː��f �g�S/�~�^�uU��v������]���;���/��F���t��b@�
�V
��<@M��%n���ȶ�"�U��xd!.��_N�Ӓ{��k���\��	쭺9kn��Ox��T�dᩝo`�a�N)v��n+K�L����Fq�vc�kn�</5+�8Y���8�إ�c��0�F3beG�;�J��$�X�S����}����l���%�b��ن��˯�,�wQ�7��AF��%K�9H��j)�{�,�y`�o�=�G�|YĖ�s�:t�nD��o��2Xv���1J�m���Q���TY2>.�ҚC�N�ذT1�Dd-��w6�_:�l(���#(�[<�i2��N$_bn�������U4��!n�t�l���RZ�_��%���$8�{?�����f�9�=���5@�qoԊ�?1I2Ԧ��JSt���[�,�{�4ߥgIX�÷�sgB�,�!��E*��x�����x�+:�"�H�
�R��M�zU*�O�iGO8�r�r�m�pqPz�q��z~F�%��r��a����m|������ Q�;;=����s%._� Q�$E����P(��������}��C!?�h�#X֏d5_���3R�7iV�'K�i*�'>XO��l�iۢDUfcE֒(���t�y�j����y��A�&0TRĠnZ�)�����ʝjG ���7
�&���m�?u��8�;La=��QT$&��_��O��/�Q�����'���<�Ѿ���
ӆ�;I����t�?��a      I   �
  x��ZYr�H�f��V��  n�C�	�0ZZ^Z���
�l-��r�E�(.W(ܨ3_@�D(�3ݔ�@eVV./3+��O��ڙ��.��������4�c<��';����N�t�_\��U�oG�p��N�}9��)���u흝%oh��~��>�>����c@�R����X��irӇ�hJ�?�}��$���9}3���=��^���<���x�+�dR��Q�S��{AX����%j�Fq�z�!���N<�I�}QV%��,�B���M���/�n��@2q�~��� X������o(�)9MOj$�5�s�"�����ʷ��=��i��0�4j�s�N�i�ʇ������Y9ݳt�!��q���bW$��K-��,,d�Ie��rѷ�rm��f�r�_]�-}}&�V�OIS8}�1He35y��E����0ɴk�O���T�.}��'Gl|l��|::&�N�ެm)����ś��cr��ņ$�� ��%�d�Uv��o�If���;��II�<f;����gJ���T1|�7/�A�َ>D�����͜0��+"�C�d�rkC��uE1��U{����5{���*y������5{��3�k�����g�H�'$���������=G�����d9}��d�}�\vT.t��'Ć(],��Ϝ5���v**�ot���$�*�	q�{�'gay���u�1X6�ϒ�5%�p&X���	�=)�d¦*� �H��4��0kq�q4�-�(���e7��s=��d�6{���10��a��wp��j�x��@��x�.M���/]L=�dBJ?R��n�M��SC~A�^=�dB��_1Yj�j��<K0%,F�ȱ��9˨�9q��+e�8������<��1
��\X���K�����2?�8��E��R� $E}K8���c�z�l�_=���k��:����{�R��q�
��F��Ҝ����e�2i��fR�k@Oj ��B�ْi�DCY�F�v3=��NM�|{R��E�0�������Q��SH&j�pd��qy,;�Ĳj���qĎd������'�LDQ��KN���j�����I��Vf�[
����@��b�P�����Yϑ �8|�Pha�/zK.ƫyt��B�L��Ϝ_�Q.4��P�`~�K�r�y�XP3�Y�n�~[�����2�����㙅}\�|GO� ���-�c�S��a0{6��Br�n�7�V�<
�������t�����3���Yb�U�+�ϰǣ��|L�bK$��'�!��m��Rs�Ե�]ٴ��o�ةqQ,*�~��&t S��,�߾<E��ս�r��UWS��L��,<^%\��aW�.�mg&ʙGp�x+���h���#��-5
1��|^��g�b]�n�l�Tѫ��Y^H�����oB�r�x��`hC�(��4JVr����W�����n?�ծ+u�&-���V{����_�p"!��@n��|�]��$ӈ�È����A�'�79��LA�y�Ɩ��u$	�4��0+��Ӳy�'����3Q��*��i4ח|����n�|���A�BK�|I��^�x\4��e����3�4�!h< t=e	/߭LW\�Wv����,�
SA��L��]z�����K�
�4:�[t���@���>�1�2���G���Fqhxd��H8��HXH�Y�Jپ2mu��-�>�
���be!�f%�x�� ��WD��<��5�x)���C�R<��祩N����#�ȷ~��U�"��3��$�H�=_wGd��w�Pǭ ���i��Q.��V�&ǡ�@2��Ă-1{�*7Q��������DM/N�4���E�������K̯��@��H��ٱ����Ï<ޛ�`X:�T)%$�7
T����p�]�ۉ�a�(Bl �f�H�|�p�&�e͈�7�3���A7�����Ő��$e�v���:��CA�r-�r��������Q�q~`"}w֋�@��P�(w���(<�Ѓ�C��r���:�˛j�i0I[J%�(Z_�Ӹ5$y"��F�ie�r��b�\>"8�:C�#?.�x�d����̐��|���s�u�3T��,�2v�7�x�Š�tL(#��uK�bFd����PGB �V�JE<ьr��Ƣ�u�@�3 �V��i���-	�$�Q��%�h\^@İ�LI�8�c��KW��6�N��PA �V��X��R�py����O�28h�Cg.�t�p׫�J�(�^�ʂ~���B����]���̓�qW��P�ӳ<�|���laN:�}��+�\ˌ���4�t �iq'pWlԍU�V�ç�L)����4��C�8�q�|����/�".���&(Uun���f7yLEleo[A �#1>�ҍ�Asg+�%a�/�\.i01�-���$���ڼ]Y/E��A�$N_�S�u:'=3��~):���>D������,���4���}�M�&�{��g��>�r/�Ȕ������%�.P���s���G({	]�|aш9�S��)L���(����1��������\%�� A�?��r�o��8I�j ������!������ʕ��I[�[W���|�x$UJ�(�K���&
D�m�v�lE���c&FPr����Ϻ�z���0�e�3�GB�H�Z����3r��Ԩ�.��N�?yx����B������2Ut���9�Z�`����c����4~ڄ.�Jc-�b�u���<?��!9�;�e8����Ti�><��Q޹���=PI�ү�Ƙ���^       ;   �  x��\ݎ���z�LS�]Uq�^6��b��$	!�J"�'�ܳ6�8F11( Dl���e��zm�Jy��W�Ir��g���j���vl�;��̩��:u���!�V�f|Dq��J~fec+�������Q�7~��__6?��N�S�h^������^����a���|>p	�� .܃O�G߇w~���C�ּ�Aų�W�k��S:"xDINXEˊ�Bb�4f3 D3���g@d�P:���/Ğ�({!��ls=��q%���é������6;]x&oׇ�m`y8�޺f�i�އW��L���m�@�n}P����MxW�����^�y� ���.w�!��G��(��-��L=��g8�������L����C;u�r�q���V�Ո�g�m,���Y��wV�QN��x?4�������w�s`��i�0�F`�q��h�����v!�Ih��(*�T,�tF�<�
]�J4�Y�"$�OB��B �.�*x&'�,��a��r�"C�$��(0���B�g���u�i�u\� .��B#�2�)3��]x�_&"r�Et�I=���[.G�X��@��A\�%_&�x�rt�ŗ	�(�e]f1.B�Z�.�F�P˄b��*4�
u�@�$a'�
��.b�Etᑔn!Z�=>�oCj�̻9�uY��BƗr��&]݁<�^}h��]���ts/��a�����|")�*et~9Q�s��!p2Uw4�MY�g�R���6������+�6�To��f�Ӌ}�l��IgI�'�:����k[}芈�=�USl@���%�B�^�yv|��AX���B��R�!�� D	;1��@�9�0B�E瘃Ǚ4�]�����u��ٍc��?��ʜ�
�J�Bv��i&Yb;PC��`hk�o�!�2)�=0r���
Pg�I�cUaZaY�t� �y&˞I2�p��B,��E&eϠ��RS:`�!^fR�L�!��T��Ѿ�6��̤}��|�E��o�!�2�{&UФ��������M��xZYQ
��w܃�����]̞�i�Wf"邖̷Յ� ɶd�WB����e� $��u>���Q[��2����K��B�!!�m�2j�BH�ɶxH�����f��> ⶄ��@��0�E]ߕUN����(I��z:ӽ�m�i��&�݃P�3Mz!�8����5@i�y���ރPI2�Z#����S�Oa���>M*�+!!{�t!T�L�� c(`Q����*!#,U���~7�fw��� go4�f�xϤ���^x���K[#L����߮Yj�-x�~���g m����ٍ�k6��3��3)F�އ���{��~��g�{���7eh�w�G����L��_o��?����f�͖7�~N��ffH��\�*!-�7�۱�m&eS����^6͏?���z#��5qو�R�!V'R����	���fӅ���#R2
�D6a�	C����]|����_���f�cZ,� $!C�L,���	�@���R��qx��e�u�q�w.^x������a�,ѐ?	\(��hB������6�������>�F�X�g~%ג�����͋o��Gw�>�$O���g�9i0!ȭ���<y��(�_�2�OB��'ҙ�?S:qyL�/}AZo�,�?�O'���VU��-5�(H$�v���IDBS�!�)�C#���A��^F�t��z$�ά��zPӨ
xPB�8>C"�Jp �(�Q}�M�w��9
QU�AH�]u 2ׁ�Д�N� ��O�3ˁ�|r�ʐ<-)��q ��@���z1�*S��p��<���I�>��	�r���y�Cy�	���iCH�T:����u�(c��!��!�C��i�D�6�4N�3Áh�M�L�6����j���#�+FaQL�6�4M�3˃Xʘ�f�L�6�4s����;�\��	ւ��df8Kr���@�چ�6�Y0>ׁ��-Dh��!�K�g�p�w�hI�ӆ���|�%O��U�ami�:`�f����M�"��mi�*��,�s��cs���@@lC�`��y��|j�-ֆ�ٺKdw!��BM�20fm�]��A��C�<�4*�|��0T����D����:$PB��De��fU(�!`$Rŝ�Lr���@nֆ�DF(�:���DWҋ��oC�G���Dr�5�����! ��AN$��5KC�em�S�H?d�5����KJ&8�A��7�o�C&�����;������Qv�q�#�b�nʡ��gys;�\!#�ޙ''�3"��f��RX?Ry�gB9?Y�r{�뾻�"i�&�&���������io�Np;��c�d�y��Ȝ_�ͳ�1�Y#ҙ�WI�n��7 �7�;9���"�cΕ]:>b�2�uw@����PB��Ӄ@(Xu�v�҄�''��M�K�_�x˳N�v[�Pt��i%H��_nz��N�bZ�PK�(.��~�m��ÁݱgEm�6}���lr~d�~<�I�\X��ן{�«��]����m��ƞY3&��m+w�Sr���	b=��^���ݴe�P����*�n�ũ9|HD�z�Z��`0���=�k֮m�����r��x}�c�'cDE�Fx��/0D�$�T\�W^z��A���w�m/������z�-/��\�bD�D��j�~��B���$�D�=N6�����`nJ��;>�6"]meGI�:�"Q	f���s��u!Ѝd,���dr$���R�Q_3b�7G�j�ߜ$zeS>Z��8�Ql���z��7cg�=�������]�ӟ�9�Qm���z*�~�څ�9Ke�/��m���8�y�|�	�@?x�{� M���6�g/�VVW�67Gg���N��/���"��ڗX�8�;���m���p}�u��+[k�3k+[���o�B�����`�Ci��.å�i<��\Y�:���"L�D�e*�/m�o4.r� ��H�a!�36��Q�i�FM�f�"f�Ξ;��ޝ	�*�����p�M����]�SK����o������Y���ĕţJ�v�A�	��v�@;}��:�[��"�	���sک�����A����p�����}��w��09 ̕�.a���7+�!(mxz���H^s�q؞��4��!⨊�u�m�%���>@�2i��%;�)3�~jekkm���O�މ-�ɋm���i�c�C3_�������Z]�'/���m��s*���P_7G�m�dGb�������W���]�~�Pl$&^J���XB�QV�qX�v��n2�4�&ŭ�S��=�`���ʝ�{� W�����Qs��e�v7���I���7��X�����
D<+��V�]�A�c�eF���6k?����ێ@��|��ĩ���r<[��d;�5��gx^e��	�ŕP���e���d|��2d%]Y�c +��yr�"�"���/GY���++}�ee�"��e]d% k�)���Zx��aY%xAY/#�B ,a{���v�叾�MB�;\�A ,a��K�����xtUa ^/w�B�+];�K��壯� F<ѿх@W�q��¥�Z����1���*8dm��b��Mf9�z�a�yV���^[a�c)_�{"�v�.����̃�X��ylB���&��|      G   �  x��S�N�@}�~��t[����XjB/&����
H�_��#�������;�2g�G��
��֔���(7��QB[ӡ��^�O����~��fY�J�oתm]��F��/�T���Dh�S� ����_m-�&�	�0�5���<l��+�У�"H4�DgXvi�(؎̓�Ӌ�T�����M�Ԃ2���2�Q�2
�Tͣ)�B�5cl��ސ[��q1Ό�����!#qI����Of�;e	'�bH��:1$��.�K4\�`���2v�X
..F`�L�ڒ��8�7�EKf�%���t-~Ɖ�o��/�����ߺ�(�1v�e��¦ű=`k�a"��>]�y���o��S@�L�0a�˪O,؆�����*��j��r��q�`��Ɠ���<[UЇ,��9~.�k�KJ���t�*��B�*�w[R�?} ��cW�����vc��N�`̉���=������]E)����      1   �  x��S=o�0��_�1A+���QD�lE�n�Х��ͩ� (P�h� ��Z@-l��/��Q�r�DPH�Q����O����V�/y]�s�s��RWS�#�RK(y#؄�y��v!ۅ|��>Wg\�z.��l'���c5�&է.)��R�_߿�:9R�:��Mh;@����r�6�:������B�*���zҀ�0d� �z��@E g
�z�^G���`��V+�*ޫ?�k��אo#�z}8e�o��g�[�h1$7�q���d��yeՇћ���C�q�2�e.Yf|�cmDx����3J�����K -���|�獂s�fsMh�.����(�w)���:Ւ��|��A��Q�P���u�`r�:�A�N :���W��$�od�N�]���~�,K&��#�z�uQ��L괮~#�k�-ϼN�1����1ry @jT؅D
�R(R��p<��ɭB���L�no��Iv���$I���f      #     x���1K1�9�7*����B/�S'�(],]��pp;�:�8�������B�B?��7��Y���$��������q�K܄��
wa�?�`��0�V�ur�Ot���u/����Pi�S�Z��4��L�7��/l�pf��گ٫�V���{�ǰ���v��y�������?/Σ>X����m�a�%��E�wO��j�
��ڈ���݈FSIg �eނt��d���fP�����-+�p�>���,�ƃ�&�ƙ��h���s�`M��      5      x��][��u~��?�����U=o�Kj�Z^����F��8@� �e�E*�@Ӥ(ʉ����E��_���%9��g�����{��V$�Z��t��9U�*�(�H�I���jR}v���������ɻ����iV�fr�Y����:�����ZR=Ϊo��_U����7����O��գ_&Ջ��i��v�p��B	ɏ���O����z�x�z|����Y�%<�+��Ip�����3;_�?���1�XNI�hF����*��	����e�����.�t}_|�l�ן!'���1��(�m�TB�4D��(��⏩�TT�Z���
&���5�`�50��jE�li����1@y
�U��>xm�a������iNtū��/��8)c8�(Ucq�18�P��Eq֢T������Cq�h�[Qj��cp��8M&J�r��yH�֐_��)ݩ~�y��7�p=n�B��dg�4Y���R�N2�[��x�?�O%��'+J)m��u�I�T/O���W�k���U}�k��^݃�u���5��69y8�]�*���DDg+J)�VvV�訁����i5�g�I��(�bZMęh"�"�y!J��VyV�դ�TM��:+Mb�d!J��V}V����B�R3�&�4�42/D)-�դ<+M�jR�Rֶ�0���� �>�b��Ut�ZQ���{���Ư���=�;��/O~Uy��Z���3$�p�O�Y>����ý��@�S|�u��/Rp�_@Fl=���}�yb��4d9/F��͊Rƿ�<��x��<:G[Q�J� G�%�%��fB@�m����ѝ��w�UD^=�>O#��2��+�vz^E��h.��)Y"�$�t&،�B(��}Q��	> �E	�p��Z�&|k���2Z�6S-�zu �Y��g�r���HJX~H��.�]!Oɧ�˶V���&�Q����]�����%���9,�V)pFr�h���au{Ȋ�PM�f�ª�mFO�rpXV�h7�����6�g�L8��s��N£�-�fT̤,$�6�#�����
W�K�Gʗ��d�%ޢ���Q�h	.����n=چԧ&�3Aʕ�g[�r�@��f�zC��#�= �<��q���z�Uϲ꿫?VÌr>�s�����:@���@��N2�ۭ�-�:�b�8h/����tE ��¼���ƆB�����646��{�u>����Fҽ�i�l������_�>�%�b�E���b���2�����$ʝ.���Gr������\���b�z�l]���@�7�pt�`d4��F��(�ƈ#�Rj�f�"�7 i�@5 :*���+��j����<��Dt[�ӽm��ݾ@�F����+df�^�Vm;d����r�N�b�-�ʐ&.�����������jb����ObϣN�g�uc�{Í�ǵm{�\�p�X���T�'��$�;�<��ؼ�� jFiwG���]��|�9a_�X_[�s^��l)f�WZ�^v[���R��LG�+ �r��G]���Q�;���y�;^�_ހ�Y��{��d�"C��Q�_��Os����/������%ْ�|N~ s�A�M���N�zl���K��;��Ш���a������>c�a�Ĕ��~��n�ª���(π�"�t�P
;��6˰��kE��Mn^�B�|�u5\G��"@ʧ7o�1ފ�QoŊ �ج�����o�7ɸ" &'�+`C3Q�eE �q�����eNtu�P	��vWh��{��\O㭿	�l�0�������z�g�k\��\pb�(unC�A�e��\�j^4u�!�;c]J��]Q�K���Z�?�����s�gWV��|爑�9�4�����Z~���P�%�a|�vv�L��8E�#!���%�z2����g.] 4�!Ԁ����ܴ���!��� �w�\Q
_�
"̶ ���\ϴD)�&��s���B��X�RA�d,����h�}����'cg*FB��� �9�ޜ
���a�8���NFw�5;a�n1�zA�h�" &���se�(߫��w2�B��x�Ջ���}K��d�z*����:=E�ʱ����m�!ȩ��_�.�\˘ o�o72J����N�
����T�9h� _9!>6_p��%J���.��н�����ޢ�T�s~օ��|�܅��[�_��w q_���D��RzVH��;8�K|l�_3�Ԋ )o��id���� k��pF�N.�ߩϞ�b�y���A���Kܤ�=���� 'G��͋x�Dݯ>jvx`�C�.����+5��<}љU�/�6�8�Y�{X=��x���#�9K0�@)�L��� tE��=A��"�O�ݬ�=@D�eR�R����י2��%Ju;k���9|�����{���b�.!�κ8���@i��x�����$�,�S�]uF̌�7w#Ͼ(�f��M����[�����iTe5N�b2���Pj|�ۢT�k4�%��{�%�0_�v7�7F�I�����&�P�#�����kP`FR���@�Cݽa_��Q��hF�]�����ŀ�(u�4�bR��10n$�����eec��đo��=�/�/0� ��N��:�a���m2=�1螬�s;�Ԉ����f���Cf�6}gzp	M� X�;�k�����B�mq�ۓ�d6=�~����O&�E�0�	�l�eő�F$�Ό��S�]P���
��-Qʌh�yM�kd.{���aٝ����YW��4ky����j_�]��k�"��k�	_�,����Gu!a0[�.,Dr�m��E���!��L.��B� ����紀��F�DV¡	T���)�/�S��xKdF�r]p�(�֋�e�ӆ	7����M��pS9c��k� �#���A�c
��kM4S�.�<~](�$>���uc��P(���x���x���:R�Gi(>
3iEF���<w��To�T�-���`�<���̃/�T��|U�&
�ñ^�}[�AX� ������~�A�Ϫv�e�J ��v{(?�Zx;(�(���{��u�,j������-蛤٘x��sY=��W�K�q6��08�-8Nv_?G�-N6F�W��҄wk�"@C7F3hG^I#�K�a��낯���������ȡhxx�o)4bc4j(��"@#7F����>\�Q�1C�D�=KQ��ܧol��w��*�����G�<�"�fFB�����" ��h'�"�WN�oT�A��tiE)d������h�Z@sv�O����a���,�&;�e��&Q�$s�穋�Zb�̅}X��v��{� f{��6�k�������߀'.�	��v�R���E��<PFg6+��Y_�_�9�gK����,�qp�Q&�d�M~�
����7a�Hn^�#�mp�����[��b�O#�k��v��L�������axJIܩ�+y��ޅ8�h'l��Z�9.�� 4�&s<���<�6so���୘�n��c�9Њ �Y��K� �X�>������M@"��'�)KQ�%Y��S���u�S�ֵ�qI7�}R����U@���{D�C�Ժ�kZ"��7�{e�0�D�2�%|�����k�'��G-�[�f�����H�:�V�60L���u��D o��� �0���ER��"����č���\����M4�6����2�0���E�M���1b8:�ƛZ]��$�������3�1t2�r���M�o7�"�n��r�d|�&���bk�O1���u�@���5�m`8`�bb�u>)��͊R����L	�zZn�/�j�ͪMmb:d�@�۾���Ujm/K%���:_��f��61x:P�@˨u�����&PQj'�кc�*�
��L;9zֺݵ��:lT�bRW����9d>ϱ��4��������n�e"L'�F�a3I
�e�vD)���b=�pk��rH��ޗ�ؕ�Xh���¡K~L?
�"`,w;TG�T�=' _��C�O��Y%|�:��05��w'�"��Xa]�� �  O�O��P	�DA��&��]��ª�3��9b�TӾj-����Z�b*�!TL�Lw=��P�~T��%���)��g�b`�*O�ņ��K\��3�6�#J�!����=���%,�K<�Hx�Q��n/�A�����)�$f�h/��#X�ָ6���$��e���wD)$24�g�T�XrOi�{�w.�'�8�GwSx����îZ�m����x���L�![{�5!ٛ����o��g���������5т%?<�i�������/�C;G���QDĢ��u��+Dz2D�("����_U� ��
�$�HD)<�L�es��--c�`�y��6'�SqN����8�0
ӄ��jX^���k��C�2�M�"0�͈(�����RV:�#r`f�6��q��ի�V�hL�@�E�W���6�SK\��k���[�PagYI�-lXa%	6�b�m<D�6��f�U������#(|#(Bs��kb�%J�|�Vې0�eNm�����wp=�K<�:�Pr!L��y(�?���vr�vM�T�Z���QN��+����ۦtE���tVˠ�˶���),����vE���r�*g����
=�f������x'Y�YJ�9�2t�a0�t��+�Lr��0��=Q��a�w�����P���I�E���y�s��T�+��kx���8ػN��|v�J�Y��P�����d���
��O�i�U����-_�j���|��g#40�`EܭP�D���*�6�y�Hml����Չ�͈..�E�Vg\�'FR��0�S�gN�b+=9�Uh��-J͊�̵=�^/f�2��eq	��wS4��abV!��Օ��l�����K�.��<Ij��f��O�vO�j�4�Ϫ!l����h��%�Uy��Y�ٲ�i�C�!_���٣�����l�Ē]�Έ�DiI[jF�
(��_���Um�c��D�.�~^V_O���9x��׫-JK�ҫ)am��Xֱ�����z�c�6�q'
���-QZ������5�)�s�6�����/�|��4�	��{,�­�v�af1�ۻ����޽�g��cxv�����/�M�Ք�������7�#�+�X�0�[H�ݯFi�r������R�&�N��=C������g]+���l�&!lE��5S����Oa�|�R��nƦ���~P����esɃ	8�O�l�V!��.�kNY��*�x��t3�|Q����a��ln;��$�u&��#20�	�����lQl�N��v������S�"PY;*���N �g�V�h���m�?�b��,m���c�#0li1U
�U��k�,�"`ѴX����b4���a^_2C_�	=�L�n��傂z�7rr3h���%��Nx������m��-������h���"%����������?��n�ϥ����9�p�`��\u�|^W�r�y0D�	�ѹ��⛺��6����JR�l����݃����T&GE@߬�O�O>�OD����֋X���*vD)�;TcԍQ�K��֘4����9�9[�0[2�<�_�}~8j�dwc�lM>�_��ea���(嫳"������o��2|H|;����0�{�� ���a��C&��Yz���/��(�*�|�m w�HO/����Q&�{`�4��$J>������\����e'�b_���wtC�3|0g�x�W���^�'�����t�a��*^��20�~B�>M�w��iP>��&�Z�۠���A�|	�qeC��Dj��*fD`����mR���7(�_�hʼ>'%=R���w��f�`�ƅ�-R�yvx�h���%�e4T�� �%D�SV���׎Ю��.N�|�،��7��ZM�%5u�:�R�h�[�ݤB�0�7lh����K 4ѹ���'�§AtF랚�'�I��5�!tɌx���8�F�N��Yu|a�a��o�f�P����%d�{�V �A	�f��'�n��W�.n�2l�K|��ǋ�B%PC��[�����݇f��D5M%��PeeY��iU���Z"��A�� �V1�oؠ5��Ls>�Qk�P��=ƀ�
�Q?3hqS�٨�ɖ����0>/�fb6f�ý+󣽝�� 3_w�]y���#����Lri�3x�7`�-r��S��r3��?y�Zǌ�S�^�p�3"��?�I��{�))�sw����\�AW��r�LX}����{-Fܙi���d����xs��%�O�tE�p��K`9p���KF�"��(�%�!^�3����ߑ� ����r,�ȽK ��!�[j�X������}N�ϸ[ނ@�r� �yaD�t��l7�<����-+��U	Uv�{�Mt�IA<��H �;��mk�[�ڟ���`�$d}�\N���>�*	��~��\ l[�����\�9�^$�g����W�
�Y��`�e�.���3��C�uʐ*��z�"��m�����P(��-�I��4��b�1�,�+V�J(�rS��z���@�O�B��"�����4m���+,/��3R4̢��vK)��̤(����+�������d�\h��,���ൿ�?0�oΩ��,xkw�:c�
s*Iv�+�e��6����ߢ�5'Yw����2:�"�r�^���ߔ���\���*�Ή+��ْ�-����l���πm�bz�~�h��"l��4@�g�]�����>X��UA�q4�E����y��a� D�_p �z�|�d���O;�>��K�^��:^F	F��V�]R�����z�"૽�z�E���)VPc)�7x\ �_~�f��� ]��-gbY�t.�Ma��-���3���!N.�E��,N�y3����wE�[�x��Ԃ7��x�w�`��p�WۢT��3�}8NC[y^�,�g�N�]�W�abf�!5#�`���+��� ��um��|]��~�J,� ��y�u��ۈyR4�aB��!���g0����0ްuE鏊4M�Od�      3   �
  x��[]r�~N1�vE$�O�"U��!g�(�ڔ�k'�Z�%������"EkL��0Wؓl�`8 ��
�S[^J�C�k���u7$��g5kսZ�����5|��-�4Q�f�D�Q����������lќ��HM�����͑���cu��y�Sx��S���9L�6��C�q�K�/�1���g�·�ڋc����IғqO&��dr�U��*~���D�SM#�u��35oF0���o|��{)�b�[
��\�{�i���.K��m6��� PS�*�B%�(a�. Μ����}�>	0��>n�-<^���W��Ai-v"b�O�����V����fe�� ��T�Zz�'�S� ���l6m~���>#0�1Y4�^��"��P6h�X+�U�DԸ|��Zo~X�Ca�Z
����D�h��r��� �E�բݑTނ�@��{�$>>��p;�G�$��L"Q��c�Z;���XS�G�:x4�{�x�Q �
�n^7E!����N~�p���>�(t��1��eA��-걿`j��1�͡c�篃��:��q��.�H������9�-X ���9}ҶE#3W4DB�1^�a�K����Z�'K�c|���X� �ڶ�
�~]sֵd]`f4<!��G��悎�,�҃�t"C$d�t�;pt Ǎv���H���ͻ �-ME�����j6tk�ĹO3�$�S�T  n�޽!�H$�������@�7���Q�No��֙"� Q���*b2�L�
4gV7�z2O���p=�:���@o#����Q����1,�����.Vb�D��EҚf�)i���+hɉ�R[�+�����}�z�agP�D�?�Y�&W��q��<#)��^���� �t6țE�P]#v��n� ��u$U�N"���(��`���d�e,I�4����������W"� ���K3��5k@`�R�!��a��F�"���J$R"K�ǫ|���.v��~�O�J$�ēɭ�<$f��4p�3���
�H���f���4�ɞ�%f;7��Ԣ$�U�&(}I]�Q�� ����;Z�H��lT�h	~IvvM�|��@�r�-�x�V$��]g�d��I�GT�[�% `�D���sқ��f%:��嶥�q�����ӝ�a����
��ͦX1'�2D"��O-�u{�E� ���ø�|��<�6�;cF �}t��Sc�D^P*C��Z=c��[��	a����: �)����!9P���ZU�#z4jM? J�#UI�ϝ�����z�.3���R��+��m��~��J��!hԄ��
<�������|��(��"��j[&�İqL8�V��m8��e꫽�퍨�i_v���Ձ�?(*�o�z�"���1�j�n������8 �c�U/����x�s��ɦ�����ID�%�V�ӑ�;�����'��m��	% <����z����-���_،��tC$
��V��n] �v�I�s���H�^(C���^���MqXW$�$��6<���寮!�iFn_��؜����"��m�����ʦX�3R�e �zOcv�ej��!n��m��0oW�u�g�$i���=�7��8����S��
�	]��K4&���9.NH�=�Uj��������"h뮓�Q ;��܅�� OapFŲ�)t��7?�z�|N�{:�m�t��r�7�m�%��cK=��b�ߟ���۾�x�9�>C~�]����F�>�_�&�Iw�yj�W�.�� >�������m��u��嚴�m��:��]u�j���\7�ߠ�+�U�k}��Gݢ�	�'�mr��]��L���j��b>V�tsC$d�U�m�$�@m�����������d{��D�ܡ�����GGW���(�J�6��\#��n��}'X�R����еJ�H�t�L�EE�K_O2�}�C+=1K�i"�V�aU�%urK�H���f�@�E��dI->�����ήP��_}���lV\��?ꍫC�"b��F(3��E�,ޢ':t������ݙf���#�7`�Ȓ�}�W�����-����.�o�����2���^V�S������?�JG�b�'u�uf�
�,��Q�,��V�ɗ�m��9!#���!�d����S����f"����5�S��gm��L��s`���)���"���rl;�%���w�95�+�e����!YJݜ�G\�Ú.����UꨋNx���Q&at	O�8�B��֖0��{�����̗����#��Џ�=�Ft+gLnv�"t�2� yV�oH|�#�[�hF�a`��/�"�#��@KdGgn��zݝDdCC5g̚�N���C���o1��!���&8pˀ��W0��@�P��Y���,{r������i�@�������iY�'l��s��ƨT��H���)����lF�u�Ms���z׏���&O�!޺���\G�ӘZm����-�k9)R�S�_�ݦ��RC$ri��H#��w��_��p�l�N[J�?[$E��j�Y0!��,�H#=-�*��X$����h#�+}zzu��&�(�,�e������\�"Q����x��:F�2ۿ����k;Չ�>�뺞a��׳L[�w]P6E⻾�WE��      K      x���ݎ#I�x�D^XV$��;KW�43��n�����I��Ҵ0?{��?�U�U�ݭ�Ъ���vX`F+��L`���Fkv�������̝t2��+�H��1�c�|���N���M��o��|�~���*_��]��_���W�b�~���|x��}���j���6��{6��}�%�����|��d�w�~�~g>�K�;���O�����g��K���`��7��62�����u�_������(��
^�?�)�Qx]��?������q��3�!ԯ<��$��M|�f����=�Y�7���|��;���0{��S��e��N���})���V�O/��݀x�"��H�?ޮ_�߿�?߰��e���Q��bP[BX6��0����wC��5[-�D��5�˿�7���~_��_<a��g���e���X�9{͗|�'���$��'��(D�O���$��$��27����n9z��K\�7���X[�>����Ǧǅ��`r}�~68��æz���q�7N65��W7�K��{�0�wl2��|!@|�O���S�~X:L�������3a_`G ����m���}�O
���k���: �^�s ���ەM
_v(�@�x�+���pX�87�%|�8/��_�����#�����;���=A6?J���~��]�����?�{��F��W[[��=[�9,���H��G>�!{�T��k�w>)��"\ż0.� 5�\\�����nС�g���c���8�+�9<= �9���l
L.����*��������lް�`���݉����_�M���w%��-�Puh��~�i.���ߊ��e��ˌ�P:�IJ����l
���W����\��]�C��;7�_�R��k���oɅ˔@�#;Op��g�>�pF+�*�qw��(�+�"��=���UE�U�"������Xc41OyB
c��H�m��0~%��vP��$�dؼ��BE|�Kl(��!� �������a]������>ߠ ��Z���W�ͯ؛�3w�77{K��V[<#��$��5�u�t��l��UkW�Ȩ�̇��2��`��]����=�U�(Uɯ1l���CELƴ��(�i�&��Ai�)7ݝ�@FLM�m3�Q�睞�fW�S�.wҤQ�;afO�X��o���Ҏ0��Bz|c��r	'YW ���+�Uz���<�3oP�BGfvB�m�+�`�es\��_��hIf��`�ʯ�2��)Z��Xe����f�����f��C
3,�t�9�%��t`��%������g��K�0��S�� K��9�'����a3Ph*uF��ҘH����������6ݥ��������x�_C��a�-��*�]W���.m���g��3��y�I�~��N��o�oM!Uq1��O�j�9�_F5�}�zT��Ys�&x��=��-6sLlX�ѝG7�(��\ ��۹��@'��Kx�˺�QS{0��|߾��p-q㫱�Z�1�����|�&�f1,�0�kq[�;�R��\M_�e?轲�� �@�����!쟞���ꎨ;%�ŗ	�����e͋��M�-�̇g�� �s?/J{u�����.:�O"o��jR��A����JŎ��m�@� z�sG��_��_���>�h�	��
��qq��<��9���(�M�I�	�e��	=�DL�
;"�3��O:�X��T���> �̉�mP�fM�����~��`�Q��'?��'��r�   �i���_�m����\4�
C\��#�J[�(��bӔM�Xfo���ZH�M2��;�����MB��^ۓ`�mڑN�x�9e#wjk�hq��wGq�l;x� ����Uو^
��@ӎݰ��@�S )��ewa� ��ަr�N�� �h��N٠�S�@ h��\`��9oG6P �@� ��ш��Cd4&CL�Q� ��h(	����'�/�5x'���w�X}�����%vD@F��0ĥ�r4=?9�ɮC���Ҫ�K-ʍ��:Vq�X�/�y߻�P*-�I�_3~�� �RP錎ԁ!.�����1��Y�śHw���(0/����*��%��&��G6�a�H���(���nu����".���4����/�1w��Q�xS��%Nv��c4�s�F����P�f�ap���)��|鸍}),|��R�;�^:P���������_1��ͻ���&l�]�&����H���P���0iym��H�� c ���ІP�;�P:a��c1˩Mk���!������Ls[���.j7=�9����E臟�����)�����W���.�`�@��_��II&w5@=�y����+��+M�m
ż�������m���+w���!�d
�ՆN��/�'���v���2a����B�BP8� }hB��!ԇ"<gM��z�Bx�A�'�壑"�MN&�F�6[��F$�C����%F�?@x�y|�1������6&�hq�4�NƓ#OqD#������iCx�}����k��Մߖ� ���P��x5l�.�;��ǡ��gl����h\Q0"(��@\2�Ip�zX���q5`#t�hf4���j����%K���� 0�`Ӽ �`Gz�ā����4OC��X*���D¶�����0�%�Xй=���V��df��
FӔع4{���k ��T��h�"K���!����;�[���!�`o1�bӚr��!����;
.�m��.RJ�Ym�Y���c��6tONƑ?��ހ�j[���0cv�7�bBlA�-�����І���[d��8�	h#���A�,�*���i���v��/pG;推}@�2	��.<@���Y)&Oc͂[�rq���D��hu�8jz2�d�ߪ"H��jw�k�#)1p��g408��M��0I�G��(�L���sk£GQ7�o���PԀ���Eڊc��:��Ԁ����.�?�H��P ��lA�
A�H��pi��$����>�o�3�
�G+�Q��-A����#��!��#��c>���eo� � � �xD�8�z�	�:�  ��� �RwY���}����N7l+;f����ˀ+?X\�o���0���dz2�Z�q�^37�a�����:�d����UQ��AJ�5�mt��K��	��U��j�Zp��[��J�	6�r���"����%GM���B�-�]���f���$
������ݰi��8��U5�-a��(���W�6�:�C�,0�9�A`z���f�c��Pz����eif�
�;�9����K���/�AB���>PC�,���~Uj	5V��j���	��h�2U(O2z��T@�=�*{$���h��)�ǜw��P��C)�����ᛖV$�*�ظ}�EHTsTC�]��`eQ�ڇj��&�^s�jU�m-3I��p�y;��`~ ���î�����w���D}75������݃�Y�����nH��ހ��`�z	�}���h�N��S��J0lД
 �8�J*�8f���8`[�;�Xy E��L��RC�������>���fLX����A��D�5���C�7��(`@{���8�Y��a�����6��X .��v�6��3�����p�!�D�F�6@���m��%�u���ID#��B�X�O߅��Խ1��o-�C��,���2��ZH�MD$OFus�5�f�[���h�0�!�g�o��nw��&�G:�'�m1��!Xф"�ܠ�VU�{9��_����C��p��?�߲���
"���Jl�Cx��߆́��HEY}F�W��fj�szD�O�p��{����C�]�{�w��#&?x.���5Զ��!�u�7rX���0���c�%kȔ��FJvؒ�W�!�t�<
��מ��n9C�~4	C��u��a?2������Q�l~4*C8uKT� )Dc� �<������b�    s�n�9�=np��C�h�(R(Q�H���C�� k9��wm������߉h�2J�~�z�ۣ��."vV��Bk�܈h��N���$s�Fݹ�\�!0�"6�%���8f�$M>@�$���8QK{t���~|�g���i�'����^��_�����Ӈ���5��c%���K&Ocm�Dɥ{�M1eWx��;���z�R��J�;o�[�؞*�<@�ʜ��v��S�Qf}��|N
��ũ�.0��>:($*������I����f�O|Lc(�D����7F�t��НƗ^��0�#p%_���k�_�;x���nW> �{L;?�H ��0���x������pBmk�S�j�
(�d�*W� 6�'��5<��9 E��a��٤1�L�+CH�;T*^��a _08��D=_��f4��ǅs(8��s�#8z0��u.��
E���|1�j���E�����C	go �~��|.��qD�ؘ���)�9�P���k��D?����|T�d��<.����G�2�V��`|o��M�5�V��4� �H��I�g��{��L���u�bt[�ˊ��������x�Q��?~ ��W�	��I�$ &0�?`QU��a���[o��-��7�=~�n��j�KƵ�1g2��Pݥ�v��r=ƫ�,�aa��WP� �\{�X�mp+������+N�úE��Pz� ��/��l���eSWwy�'v��Ӛ\Lj�؄��C�?;�7뗧~-��T{&ǺU+1[AT�;��y�k:w_;�L1G����Nɻ���l�m�n�]�	��B,�(\V`K0zsgUà������]�8j��uaV�em	V���]�ُ$�gҸ\@��T��YNPn��EJ��ɷ҆p[X���嵤�%�{��}�ߕ�`�Պ��~�@-a�c���?c�DGu�s���r�J�7��A���{��$o�j66޴���5�@��i��D��0�����F�D�EDP�jw��|�Y!�1\c�͐6����C+L3���Paz����6��j�]W���`s�~����{�<
��cf���)�u�Q_�<S��N��B)Qb9,D���B%t�[2QK|���:,����U_�th�U�ɭ*�PIx	K��J�]u���lK��$So�Xό��z4��H�g[�ת�]i�_]h�Z�\�5�w�[�0�������(`&��#�����֪Ӎ�*{�t<�l�qZ�[��+�Н��I
#d��=��38�RF�M�~u��Je��á 6	� x�׺ˉj�K�V#�L;�ϡڭ�*�E����b�H����ͼ�GC�'Q���HTS+�Uy
p��&�a7���T�T������9��6O���$����W/ݽc�ǀ��"�v�$Q���H+u�WFG�k�*�<�- e��(/��L����Q��i��Ή!�	��LR%�����j��#E˥���Eu�P��A��,@9I��a�9�*�/�5"vl��|V�g�3�;���vQ(�N�=�I������t�h�݊uH[�b��"�aULd��"n��c�|�?�n�̶*?�_Yo�]	�\[��b�y��7{��������B0��>�d��8�"�{��m� �=�����s�6��ھ��3�G�S\�Z��ʉ��R�n�����ZvG!�w���~� �;Y%SUy[��=·�Ҿ���]�'��3��Ͼ�A�K�P�
2x2��w�O�蔮�7�ռ-+um��5�(}(G�FM�2zӱ�O<j��v�z�]��4�1U�G�I��L��$��S��$\~+ƴn�礸�FR�b�p� $�X����-d�R'u�!�;qN��|�9Tp.�B��|߰e�zp�o�ş�5�T~HK����u8��B[�cx���*�f�/L����~��Z`����ya)���*�1�<;I&�
ԭx�0����6*��E[) b���kf���رU�!�\�#�s��ᘃ���Š�?�z�8t��x�VJ�d�ˊe`���
rߔ`l��pަt(�t��֡���!+���HKvȲf���3$�c��m4E�46
*�5�`'!@���9ɟ�BX�� $-v���f���ݧ�x}�`�\�K>�_T�fe��C���r����~��Z76��0�w�s}+hP� Z�n5��ٟK��AS]��4t9U�e<u��B޳����<W<��S!3r ��X e̎���K$�K�7?V0Q,�n�R�"��}��ZA2�R�y���wBV�ʄ����i���7 xn��"CD��Ѿ�V� ҈���$I,�c�4SYLgRP�<r�y�&�!�q�4R�71y�y1
�1=�lk�����v��0N+�xG��^!�d�yU�-?�˟�?����f4ұZC�^	!<������@���Hi�&M��7[�'<�n��R!@bo)�^�XZ"=�fގ��dJ�t�t������߈����Zxo���%)Mi��)�B�}f�oJ��"�`�.UG{ ��{֘�/|T��Q��V���~-H��E��W�&�s��CE�?SY����Է����� �W�5�6)�9T�J1��!<T�Q��8�OQ�Q2>�0��UC��Fe��W�3��z��,JZ�(�Q%���1�EY�J����j����g|�ypﴠ9��y��u_�����oeo�?͝7V�ֆp��P��ߵ���o�x[��ST���l�������H���d�"�D���6���7���d;�x��DrQ2](P�7T�A��7V���ĭ{���z�\�ֆ�+��Jv�@�㶸�FʲT�X�5���o"�O��n���5��gXI��n�X�測�v�gtw6S�h��t@D��y�׎�����*��Y���q��%�CP���+���ׯue�Yva���njo�bz;"�700�fX�'Z[sqUsGTH�$t���E�.q�o��lF{3�M�+�n�z{&�q��hx�z��m�̹֯�iח짘0�6��3AMG�x�L��� ��X�2�z������Ã��:(�QD����?���G�m�����S)3po�so3���j�:j������)�+po�{����Fg��]�֖��f'�H�@�E�����Z�c_�@⸳($�)ٵ^@��ż[G��{A�}�n�s��v���dn��I�ԴR�����G�a�o�5^F�ŧb����s	�}Đȴ�+{������l��!�}�7�F��ĩpWű���[`k|f�Z�RP�%�������J������y](V8"�/�	:�i�؉���ҽ���J�M|˗n
�/���Nғi�m��U��,���8�H#��ԆN�a̺���"[��*��OG���ԬE2v�ֽQI��hfc��X�:�%3o�e�g��/�D�Fb]��Ų�xf�!����Doz���jV���y�#Iۼ�[�Z9���ՀF�'Y!��uD�G���%�nZ��\�	q�ې�l���7jY�F�_�^��n� ���.��O��� j�bW� �,�隬��i��mQޟS�mL�J2�3�N���v~#lm-��}ι�����8�]�G���2�V��Άz�,i��?�<-�ϻ�h�-Q�@|��t�hb���)��aZ�N��F
�̬C p4ED�E#�Hf�t����\�{�{]C�r�S�C�EU]�b�4��l��\��h'�"�h<�p�:�%CLEb*BLE��p�]4�%JwyGNL��D���S�VLEш �u���1V�����8� �1�iY2�!�`�N|�ݪ8��%d�����ƞ`g��%��'8���Q��IjC���	��p�#�Nك�̱#sL�1�j]ܳ�ol#MG�����1T�
��9r�eZ�'���'�6�3l�^�Ԙ`c	�NF�l�O:����o�b߈%�@�Z�N1�8�%Jk������A0�����Oc�c��%��R�j��(c��t�kC�~�Aj`P��U((����z�6	jT�,&SX��7�ZJ�fP�W�+B    ;����	љ�.m��ߪ�n��b�&�\��G�%�m�e��t��ٛ�m�y~��n���%�k�+�u_ۨEZG~�i��4b�]�u�}�%�Ua�#�!\$K��xq_KaA���Hna)�x-���'e@L�)E_Z��"�	��S���J#T�����B����U�Ӌ�@vD�p3Ȫ�p���.'zU�V�����y0�ΰ�o���iI�m^m�Т�G��ч�A�쪹���ì�%SU����g�؆B��Y���Bnz<??^TIkw�0t��'٤�>���pLu�;Ù����!�`N}���#�B8 4�7U�_4��� ]K��KC$E")ȥ4E�iC�ɘ-e�5V����-��a�]W��LƮU�,�k�*��[gq֥��� Ȓ��8B�Ue �Q<�V~܊�q|A`��p>" t	����,�;BN�mf��F��ý4�/��r����&���ӵ�߼�⋬��	�����6�;�5��RLa�~��M=��� y~���Z��X���r��?�O%"���[�M���`��b慰h"�r9&�LX�x,�*k�o��o[��X>1Ui#����=;s!�-���]�Mr�(2K���%m�-����,qC^0%"���jc�i<���؟�Ÿ+$J��ؗ�m��u�F���Y�ߖ��@,J99(�t]��*��yOG��N�fӶ\j^.�,0+���y�s����J7�-���z�)�J��ľU�1?{��.6��$���WlW��lb����W[�{����� �ҭ��),NgV4{�/��-,� ��զL�k� �S����v����n)$��v˷) Fy�r�=�u�Ի�u��[*���s�\Lki{ۜ��ٷ��`��D���*�r�1�Q"lblK��NF'�����Jl�d��\�$1�=�����˻D�T}y�<j8 �e��a9+7�V{�sK���iv�u�u@{�������Gba;��7����h�@cb1��X�XB��]S
 P/M�e��n�l�8�����,���Q41U>�GC�����ҟ��c��Lf�6�lg-scK#7�c�Kkm].�k��a��q���k�wZ�V)i�B�7!�)�H*�
��-ث�@���|E��>�p
J
��>u1]9UW�d�jC�g"o��H�c�r���a��	�p�/A�oU׼N���^?0�s��,a�~�>5����#^�~��
��M̶����h��v�@�N8�v-4uYl �l�z�!`�<�4�߰����{v[���V-�]:�ޗ��h
�Λ9�s�{�q��L��r��9��]�q\�9�E�C��v���%�>Za�f����zA�@�z��b�hkk��`��e1���,�-���*+=��Z�`.�+~0^��p�6��|^�A��#6֡ԆPx;��:�gb�
r�N�?	������lqL��!�����L���0F'H��������^�J׽%��#��B�n�v���XP;��b4,�-�^_�n��b�6�s�Nw�ɻ-��M�$'��{Yj#J4����}��iY� d��Jg����@R���C���n�K�NZA���������9���B|[�|�����ރ:�5O~K%�#��:���0~��a���珆�/��?�҅0���0I��o�CKr)����G@YWPt���\�E@#��dynU(��)�\B�:����u?���&)��J�"\.Z�w%Sj�� ��Y]�O�]6Ed%j�D������� ZQS��6t���b�^�&`I�X�H-KW�>�7�6&��G,� � �!����e�'!&"mm�4�T�RI-a���!T ��q�TRB��SB���ڀTt�R�\u	�~�c�	,\�]ˋ�1n�>t�6v�������0e��C�1��H�hN�PK
)@��3��ۏ��γq�����|���5��%�'��~Z�V�[�� �Qy������v�ѳVS�l�t� i5L��@��C(ǞMe�R����3SV)��Z �d��:��gê|�j*��\��0�+s��=|�������?��l�.�;��]�C(l��q;4�}��6+�*=�>�,+�>~�|��7�H$#0]BW��Vk:s�4 �y�ӆ��k�ݮ��s���[<��^�*�*2Dr�L �A4���l�����+��\ d�K�/mc؁/�LWF3ƺp?P_H��G�|}��t�.U���k,�-�W]�F	�/9�B@�G2Q�s��e��� ��9�|S��D�)����k�I�C����0�<�H�e���l���~�l���q���{��Eͻ��K��e�8)_�JwFss��&������<�������Ξ�Ʌj�N���>��k=�#0n-1n��d���7J_��qk`���~n0�$Jx��8h������!��6��������'ZS�0}�4�0�6ݘ6�½��_G�)�`�`��mc�@���p|׳�N\Ϧf#��N�F�(���I�V��,M�c�.��kAb��������e*���h���z�{�c��aJ�W|�@ǃ\O�lE%Mq���ɡa�u�ԙ�)��u���*�ōB�]�"~B�CmGx�Z`�Z�c&K�;��tGJ��i���߾:H�!}U�����~���<?��w�4F��)ii���O���v�{F۾�J�QX̫�����t8�l���ci�^WnNE�q�?V��T�AIӼH:Q���Σ:�Z��:a�SJ�fBi[�1%?��I=�EH�UZ=~��D:USr�}қ�j�8=���Jsu07�ٷ�17��RƋ���a�2�i��P�SըFJ�������Oұ�"f�09�;�Nyly��!)��������>���V1���W�o��B΅r�x��ה�S�g��a�_=2^v�nАX��Xr�e�'J��������yWjZ��YI�)�N����W�f9\e�_�+�
Ղ�C:�(z�����|�r+�J����C�ҩ�l  � M���!���_�7�9E�ߟE@�7^�	Rvy5M������s�.�6�\���XW2����s�?�{ZU,��/A�|9��P��'��k�\,�M_�����$�^�2�*�2�O��bd����uWم���
�=A˂:Ya
��ヾ�ʭ������ٶ"�C���򻢗��;���&s�IkL5Y��_���Tl���ڝ�s[�vg����T4QB+���p��]~'6��Źڃoպ/�j��'�P����	6>5���C�~�[���H�%�-l���BבM�q�`�^�QTWLKȶ��pTʀ�c)��"l#�Ɋ@^n�����Bl�8�[!'�۸2�Z(�I��P'ˣ�˙��2.�+#S����gsgOc�F-r�I�o�9�u͵{KvP�tE��mZ�ֹ�=���3��цp�;���y��^5��쩻������hC8[�J��j�k�5\���� 0��;�fL�UX�<�>�\p���@.X�z��&�Uʎ��e�Pӷ�f�짿U/�[�K��>x�i74n�1�(��+ZaʒӇN'��t�\;3�c9�	ֆN'���4��}=�}�4��D3��W���i�m}���V��S[�ю����=5V��&�Z�+(	�k \� ��X�͖W�p5%��C(� �6�4f�]�r=<ȕV��8N��f������!��eםz��,�Ou��\��ю�vذ�q�l�W��l�]�:�<�A/k���3c�6L�5?7����̦Lj}W*�O~2�M�C�S����)P���s����/2�sZ?���S�f)]6�w���l>��Ҭ�Z�����%�-}C[��Y��B�і��
ҙHw%�q�cwm����B+�B_��!���(D��[�;�\��ʼ^c��!a`xA2�L{}�aW�d�Z�\�"{��dt�O6V/�CPe0���"���a2v������k𴂧<-[Okc����ie�d�<��VF{Z�L�1xZ=�����Zٮ�)�9)4��f�96e}d������'u6���9t    WLL�6}'����.:�漃9���:#u��'p��D�_���<��W(�B��
� �X�ʇ�;��2�@����c;��o@[�^��� *^�W^�"av�i����|��ЛI[��A�ޣ�:���C��8A��Ir8�Sw��W�Ϋ�rjl�ާ :<�EO�r�iC�NQ�V6��{֊DW~^���O	���d��3�._�u�ysLk/�$�b��k����*B1T��������ޮJoְ8�X�z�\��0_��ī;,FU�&Mh&ÿيLB^��B��VD�4qk�  lux����]=�2���Ɉh:MF'I�:����FE&�O�������,Z�`���Y��}&P�W
��$S�N-�қ��6t:I�q�'�yH%J�xڴ!X���Js����MЪ�"�
;Po8���j1]f�������Lq"�����@�Y�v?�V�>֕6}��Jy���ހ^���kR&P�I�n_8��wp�S���б���'���	�.Fp�XƐ�0�� �� #q@Md�6�z��҃}���b�h��[����ocF@-L�l�.A �[��*�l�R2h=��16J����\���M�q�D4� lb&��"��w�C{>Q��7��!�a#{���7�L)����TO��Kb��>F35�]GE}d?�g{���K�Qg�������⏂zwq/��Y ���Ub�_�
�ۓ|��)[�i����qp��g�t� /�{+.��St�㭇�h� �����!qM�[��#��k*�H@Y	�
����_?��P���CJI�ƃg���áZ��>j
+�I���fw{���xU�G�Q�02m��\Q o�ȣݩ�\�1&��[!�Mݝ�A�a����`ּ��+��!<@��|���jS,Eh@.j~��%��w��*H�4�B֐w �Y�XPy|{�|́�%��Qƨ�A6���>S�h��#�(��}�y�B4FO�p�{'�J������F;o]g��j0�<U�`,/�Z5�K�j�{;�N+��k��q?��h����������ؼ�;�?}	�����!�k�%�~/{���K,Ţ�Q�G�a�%��A]�ޕy?��j�x)���B!4�n��6�
�*��Ee�ox=�N�ՐM�ιk\��߸gl�^R+�
-�
��6V���8��2m�`B�m���)�0���q�4�7k�V�-����[��p�8V��6+�"d��NL�!��x�Gƌntu�G��oO���Q�o���i�DIÛ���6�����g�{�U$��`+"^g���1�1��D�2�M��7٭l`��1茧JP��8�J������$�d'����nB�J%[I�V�QȄQgJ\��� z@3���ϔ�ܓ��*X?d�)W�B�Ȁ���Ң�{��r�V;��E����ܕ��1s�`��K������l� 7=�xV. �O��Q���k�#�7�N��ݩ���~I����/�'�~*�[I1�D�m��� =��͵ҭ���8g"S���3v֐�W��`���}�v� ֪*��K�[B��nI�o���23�m�z;��v夰+�[����P�����m@-i��&�%�%(&��vLط�.�tt�ơ�`_��F�`��`;Y�)d��̓�K(�!�d�4��
l�8�5��zH��O���ElA�aj��R��6�֋M�|��v�?h�2��lBѸ���a�T�j��cӔ6��H#\��p{ �sB��0�N�Ϫs��a�DC�0��\��=h�g�Yt���������8x����>WX����!�0��۝{Xn@���z�v�W?���I�ҝ��>�h;A�ge�#�[���W^�����ŕP������#|q��wt��o=�o�\O�+߃��f9��KH�F�����l
~�!�F�����#;���T,,A�BqE���ǈ�s10��D��{��U�DtnTs���f�]�_�t%n�{��g��Fɚ�j&����N�?�1|���U��p�"���#<�;�\���2y��E��F!&S9��5o�� ��}���ln�rB��
Թ�׶�|��"��΀��x'��w �e�^�b����O�� /Up����o�����ю\c
o�|���+Ș��0�r�wU�5�u�0@'#��5ϛ��W�(>�9��Z,!~�w�5��
�T��M�ľ�Oپ�/��ײ:�����?������yٱVi!����+&�Uq��������5�c)`3�v�̦�s\��X��^�h͓��:��T�_mo|A�N� VB�v��4��Y6G}�}t��T���x2bv2B�~_�)M#�~!]��tBH�,�q�v
�7��v��},�)�Nc%�}�� �3�a��X	����4�6M�&%?�N���OM��w�5�K�7�1|����s09����7����T��"~�0�E~��ܓ�M;�֜�H�4U��L�7DknH�X0��S�J
�}���	��qie�@�I�9�@M�`�)�_ON���ѥ=�HL�����q7�T\U@!]�]�Pϴ^B������I�Y�򌶤�DM�U �����-�y������_�|H��I�I�I�O�iș�;�C�[4�%J���;��y��8�q/�^�12S��4ϐ��?�Sa�IK������9$��pA}[A�k `oX'�/oOEUH!٥�O�/����n$��1e�����GI[n�P�zxrv���t`-4��ނ�m'��5\z�@�6��-|�4�����rb���X�n�����0y���Q��L��g�jY	��^�k1D���c��̷*O���.�0���������y�������=Z�6��.�ܡ��Ρg�R�7��d��h�>�g|�:J�)=q+c�{IO�������B�2^�O!��Z핼�%�;�S	iL�Ý����P����Z?�h��VX��в��܀�ֱ
�Wf	�t^:S�B;b-�R���ao�%�5ϲ�)�\5�уQ��~5���>�c;�H	�����$�o������k�,���r���`F�l+Ao�|Gm�EwJ���24����q9�J"s�l�m;�O��,V�z��T����M����2��J6��'�>
�Z�n���:*׋8�wҡ>J���u��MC�����K*���#u���`�X%��@���9#���Z��t��=�*�[>	���� �@���pi�3SPg����,�������0R9�j�dґT�RM؞n�$DK$DF�X�L��7��?�ٍ`�D9�T
QH�QHK�\���(�>�����څ�$�SLIoq�G�"%�VH��A�˳V+ eU���'���b5O�lq �r��P��N��ͪC���Uu
Z�OV-u�7���$��8��Wƴ7m�t��d�PP��뗍H����r͐�p�E�e�,
-Zy�o��������˛��zwf��6����4z�td�=�5���F�M���-@L1���;�	݊���^{!���>��A�s}��č><uc��\B��.o��>"vk%!�0B�f4�;K�@��wX�6��#�NR�!�{��ކ��̡4<�8�Ԃx��WEҋȜY8Ss�,q��:Ty-�A��v���j��� ��(d�eC����J��b���2��Zm���*'eZF�������c���yݒ{�oNQO��0[�沤�J�Ъ=�}�+{�{Pͮ��a��k���F��.㮶��� K���ض���I``�AQe%�N�b�Ȃ����3xC�3��}<����'�"[L2p�S���v�v�pC	th8\~��V�D�qW��&���U�,֯�����-�k4�O��}�w�g&�"����!pWcYmm�t�L�ݹ��p����P~�؊�	ܫ/� ~��m�p��������0vkHŦ�+����XL�d"tJĳٍ=B��ٽv,�� �y��J�����~�i���F`�.%%!�}�5�ǟ&��tlE����$��7�
W��y!���C    �SU��$������]>�@� _���5���5V�цN���Z�Ϻ�G�����ib��ir2��������*֘.bb߄O�^La#
'���JG�o�[�q5V�J����-�v�=�G5��@Y�P�,p��1r���#�q�qm�a�sx��.{i}��(MfC�����Ca�����j�T儍�u�hRL[�&6�<��9m�D���wHoS��@$��P+v���0��iC\~�A������hw ���-���3��:y8�)F@bR��f�����X�l�SD��M��DQ��K6*���c2�6�7�k#x�@QHj/���� ��7e8�>-ͻ�4
o\�.W߈�j�O��^�� ���^V����Gkx�@������K�糽�|����fQ\j
��7��&Ӄ���2?��{�b_��}#T^y����+���.ԃ)F�;�93�����\�/뾝!]�V����ۗ��<�a|5�[HO���>p��Wjar$��S�ڎ�9.��6����;�Ge��R��[K ���aN���
�5t$5��̩>�~N�^6˦	ON�o7��ܓ[�Z�r��W��_xR�Ne�(���DN�|E�FZ	g�Aa��C�]
��Y�ު���Qd��Ɗi�	����s��5�9`�knk�ц���Y�i{$���?���c�4�<��N�Mϐ�1͝�c�b�	Rj#�^�.H���g?�Dܛ4�W��h�#�T��5��nf�T���
���lQL�!pӿ�9�����+j�*`e=��2��(�x*�$`e�X����Ǎ�y@ec҅!.��E�*���CkO���� �=h�,1�;kC��I9�aυ=Wl�W}5���3g�V�R�{����t��,�{X:�!���N2����*��9ӗb2��Qp����	M�$�X�}�4�=�1�C�����Q�	�%S1qK�������aDg�}����e2tl��Ûw�8��rD�-���Nv�f�P���&�tv��O����6��7;&
a�ӓ#����}¹��� .�ܢq��:<�5�,qu������u@�7 �E��3[W��ȼ�?�J<�A�(�g�h&R���z��V��Yb_�����i4>�&=#jR�Â/R�h��|�ŭ���5R�����ķ����Z!4�6@�F�������q�S��!.�N�� �t`���u�=�ZGS���!��:�݇���0R�#�3�}��m�;�j�rS&u��w8- �X:�M��Ł��	�f_�ۭz�����%���`���m�5�͍��TK&�XW:( �`�-��Q0��X˵�#�VrJǹ汆�n!�$�m�IJG>����&K�����N������*��#��R;6ҷO]�-�o���x)��q`���tk�a�ʳ[�pڒ�S��G��L�O������f�GJ;����;
Im�x ī�2 �Z��Le��J�3��ӆ@![� Aq�������r���͌�5a��2�눰͌v�2��E�}_k�	��ɜ�/���n_
 �Z-�s��SE7���L�IAT�
F�^��lƮ��zʿ�������27���M}O3:;�@򖝎�`0:�T9t(UP�^��M{v�v�G�����)�G��j�� j&�ؽs�_����5��h��N�D�>}���{��&�E�����Z��&P7�����@���04�C�f�׻w3��&B��v�H��h��pi���=�wN�� ������.f5���a�`�����O�0�>~x��f42Sh�ص�{/2f4�?��-sZBrC�I�H����Zj�?��,;�H�����߾RKH��I�tD]Ū�`H���tD^�8�����"���H��pׅrI�bC���2P�j�Qp���)���l1����	Y�"�t�zZ�q<�)VR����sҨA��$]+�EA�Nz���ı7S�"h�"H#�S�!�kר�F���Ƀ����aj������N�#�#�h�-��B���JqU]�U�1m}��)��'���鐴���ٔ� �Y��>���`��a�=� Fq�~��P<���R|�l�9ܼW�M�r-����L5��Fg6�t�]D&��{�mR��a�������PQf{��'dv$w�~,~�M�C�������f��A���T�is����e"���2цp�x�M�C��үTS�a��+�Qx�r���?�uc�Ŧ�@L��6����p-�I�\b������2�]x��Ck�F�+)x�
�R��� w>�}����	�ӆp�-�:ꜗ�<�*G>�W�x��y_��%�fMX�~�eư�����m~�k�6��:�&�D�uu�_i�G]_���~�
�g::Y���78f��A�3t����-Z$��69���D�Q�֨�� �q��K���SHҊ[�bjsTA�Sh}�0i�0�����",���{��WI.��:I��=�(�b�	c��:��k}S�J����;�7Y9U�����u�'�-}�qO� �0̏/�3��q!qs܏������"0}���@��ŵ#�s,r���BÍ���ԉ�+ ��`�U�|;U�yW�5hr�]5�Ǔ�`�Qr�b2
��5�Tn�T����#?*m�SA�ʯo����Pl\��X�G=��d2n����C�?��9^� ��X�.��M�~L:�"t�������Ϙ��.�ԁ��x��7+��~)�K��/Yu�%�_��h�7FD� ���x��JIㆭS��Tΐ�P�Nn����x���_>��T�%���:��N��- ,�CJp�rȧ�ŊB�}���s�}L��S�����W_;D�7F��t�j���d��K���0?��� �'<��U�X�.�e�n,�u �I4"�u��N��̿����!��t$����q�~fe�լ���8�Ȍ5ɵ!�H���x�}��F=��^ЌhaAʕy��Ph��0U�A��p|>��yWs��YJt��I��I����!5'o?5g�"�6�6�Kۅ��#��3y��L<��������P.�����:���	`Նp��5��G�/�ug�+�W:�W�m]�+Ԃ��DMH�6�2�,��f��
�ݛ��9����
�%6�	�Նpٗ"=|��Ga5��B'�{ӻv�p1?���F6u��!P(�Bjk���b�m�h��2��mj)�!<n��;���b�z�1K�A`IO�)�mx�-*G�`��DJI�wr�0�o����Mb%��6$��h+Φc)f�#���3����Xɲ���=l�I��9QS�W�l�&����6�*C�!���8!SѢ�0��D<x­z´C8A���>e�����󊲪����T�h�F=���ѷT6V�p-��r$���,Qj&�N@@ ���Nv7$m�*7{-�Ťipf)���4��i����-Я�Rq�ClS�T������ݹ�mBN2��6��g;��i�ט��״ Z-c�z�S2h�
�l��C ֑bM� �i* �hhl�&l�Қ=��]�Hh)�D$
 ѱ�Dv�p�.Q@E�Q��f�҂!�.Yh#*2lH'��/h�pѬ_��x�.�j%�J3�9l<��ǂ��!� 0�[�������F�y�p�����q��'��u@ ^��w{�����+��3q��s�(AIH���whz^m<���+\H{��dK���ܜ�i���{)e4��Ej����<�f���c_Zw��L�^!HR-�z�>�i�~cU�P⥧���1T�o�i�����c���;��ߊK���ˌF���s#Z��)�s�!�wyѨB9��ma j��F��p���F�ʵփ�+���pƯ5v����H8�W��F�	�g��#��R��aY�.�Wܴ�>f���eL5��5�<�W����$�%^||�.Q�G���)�Ŝ��f��-��҃�{�T��*���,�¤��^Q� �b��Ǒ����q�/�O�    {�g����\���wl�V�Y�����p����c���$���I_K��������
���uޮe��^�������Ӈ��~�WX���g�HwU����1����D-���@`cFcN���k�zHa�h�b���?�>b�41˔\Z�s`
kՏ������AO���6���np$
�b�%�9��o�DLH��*P(�֘�.��LgL��"�\`sٞ�$!V��?���3�ц�dơQ�:���b��UӬ�`3��K˞�xDFE��Ϲr�~�?0�0��o�.4�s���g�-�^h;0�[C�dp�yNq�:�������#[�!�u��c���8���{���#�p�!ԇ� ��÷Hwu�����KjC���嗶��oO���S�5 ����*��neǭ���1�it+R�,t<|y5����{�����|y�U˰�y�//8_	��)��p8V#�yV�Wi�/��xU8��ke W���[����(V�ݵO�q��qD�M�Ɩe���4�zvg|@�5(?>�W�?\ԀTtڞ]����V��غԵIw1�ES.������@7O�E�4.y�8�@P�z�5]�9��:vΓ>v��N|�9���$�I=��l�����} JqΧR�"�������˴+�:~d�t(����%M����x��w�i廊T�d��K������7~��K���%RJ��g��ϱs�������bQ��	0qoxb�5!�Mk�ؚ�^,�<�X���eb�>����n�I�}iq���%����l����1��Cc�揺���]���ul0�)�����C՞R����"b��e���/AW���a��:�3�<p�����&#^����2�:�k��JsCT��m����C�4�(���O2�l�,�כ�V]�Z�|!���	�hu��U5�J�^+&��`�L��B0QO��b�b�!ԇ��/'�(�	B�tW5"uLd������D*�Am�K\:����5g/�*MÊ>C
�V`���#3����r��#5����p�Ϸl�����Dc���!\��Ӌ�J�$��-�LQ0��\,�!<�`"���p1�T�LL�q�9Vkhp3*H&�)a�4�L�?� ڦU&��2�2���N�Ȍ�NBɻ�|!2!Df�!2c��!���Y��"c'>�n�\!2!Df!2��c��V&!x�
ް�{������=���1"m�4L�ST+*6o<���12C�Iv2I]��� �V��\���K�G��c%�8W,�\�PP��$�<3����H��@{�;�ށ�^���Ӡ�x���w]�á�i�M�k��z=һ3�;�1�$RK�G��
.]0�\��P�[�	��%��E�a��s���nꖙ�GD�'WFqgX&�?�=�-h�97��YC�a���v�$� ���L�>��OO�(�d�Doݵ�O/'�.=p�-s�v�ٹ^±s�	��J|�IށK\����!�	�$�{8uγ?~�;�a�D���{_��uo���1Z��:L[F��ti<��G`�4��L&��EUhg�!�N��Jet�r����.>p�=��'4
;I�>�θ>.~B#%��Hwyʁ���(�$UK�]/�u�����d�9�tsG_�0L� ���@9��pK٦�����$SK�z�r(�	+Lfj����
����fp�\������'D�-Xh#,�z`m�K,���o����f#�A��B�[&=Q���T�����O���m������/���|�)�5�����+�gP�����O��ҙ�+J�ª���Nyl�ĵp��6����5x��ݨ��gמ}^CvK�!����v��$�șDjo�YS�d�����I��ZS�\�]s1����-Y�2��A�Li<z:�I��;z��]�~������jj�ߐ���^�Bf�M8��$�$t'��I-hC�:L��$���)���jC(��Z����Yl��*x����L+[Z+p�*�m�"�����ڍd�-���-l|���J����0�p�����]�+�K�ߕ�/�2O����&����<��ʳ�^/>t�(nЀ�����`gt�U.�-R`:����Ua�Xn�|�z�ۺ�<U�2y�	2���
e�?.lxA�Vmx�����A�-��]Y��d|�����x����	7ֆP+v?t�gxv��v��K2^��7���v�An���A����2�|��� [(ъ÷�����DTh�m�%�G�;�C(K��oD��/��� ��l�^3�`);�J´A���\B�3R�ma������h'y�V�-��K,�τ�����w��|+6憍��|`�'�~�A�\[EB���X*s\dv(>�u`N1�{a
�Bx�<�C$��k������(��kp�_P�j_#'��8�p@m�x�oK��k���+)���/������I�'��Z�`�D�^�?Ȥ��Ps-�"T�B�
		ٙB�!�M�C�X#mCG���߿�[�ٱdrE4>Ej�:�$��� �  �@�҇iw�&^�^�1H8�K{dE ���#��52g�����N�vl��݊JD�3U�(/~p��(z����h�/J����zl�}Qs,�`���W�4��ϱ�`����d��&3&��k�q4��HD�Z?/OQ���S�5��|��k��נ��h�4���I#�N�I慯.�p�������X-��g-����(���*�~��'#6����I*�fX8Y�+��<Q��}��lU�͢R��-5�iA���"&�Pc[m�]�c�y5�g�<.���ժ}�#�;���0�����ֱ�}�y���_��z���1s��ǂ���j���	L��]���W�"�������**6�c���bo��Pk��.,�^�e1e�Y���RQ��nsL���s������3����R�OpS0��Z�_��樂��nW����M�״!X�YO��za�m��O�m?�n²�Z�1YF�!��7�%�����<��������5�RcҐV�U����Y���	P��(+�_�������/��#�7�i@�pR���0q�����P�X��{�����X������5���,-�3����\������ {~X�YC0x)uA�w��4 �� .�����4���/�y�[�#- d��%E��qaT�Iu�*�����x�Sb���X�Ve��r��^Ê���{o�� ���o�c��<�7}���k�hˡSʆ):zi�����[
�p��4�#��f%�lVr)���h�N� N��9�\�𱩒�Y����ƃdzE�v��x�Kʾ�)�3V5:��vL�9���ck6�U�^����`L����N��I9�a�����c�>bQ`��׮��
#҅���X�3��o��߯������j ���[�0�L��P������C!\��&y�m١3�\�P=]�%���|W<�(`�
�������tn|��0�6
rB���Y�H����i���6
Baȫ�rZN=�@N�@|���-�Q�F�������Z��,����ş�`�.A�ro��nAB���D���rl��� ��zV��[T^��M>�p �i�	P�V�Brs�*�g/5�E��aF}x�5���UmA�Fb�EB0�m�Z�&�r�́sЛ]�Y���=��?�h r�6���ݘF��%�\c��ߵ�}����YX�C?a�����01-�vi�w4(��ܐK�_~���6��/���˳���� ��1$�<�z
�\����� �&m��/�����{a��-D:��ុJa^ۚc_�a�0���ZZL�as�yU1��ghT�U�n4P�eǅ�Tȟ�p*w�[����ǀ$Aѓ@�
� l�5E���j��J����g�]��o�"nXU�2����x������3�+a�w����\@�����]��;�q�Aw��� ��V	��s0J��MZ�J����g����_]�ES��ql�YQ��%�(O���ya�J�M�+�Vށ}������� ,  ����8����?��?���O�Ͽ�?������;��Ƙ&7Ʃڑ���+���X	&]��4f��xG���q�q�&�=H&�f�^����L�*�Y�	e�Y�������
��}ؼ>�t��x�^��]� ���w"��R�Լ��s(���H�#��v �����H0-d�"����*��]э7��Bǈ���%g�
�q+\&�����pa�vߢf���Иd�Eqt��7p�ڀ�$�M������Ă�p�ﳌ�k��Fi��u��Hk���?���!�������E+1,*&	�_<���b �ٷ z)���/��i��KÓ��^�J�O	��m�u�/ƄrLhd5��:��i��EC�����K������fW`'��:�Q�լ�۲�*:�/,���Y�5�V�>/u����ik�\B`.֥2uh kd���T�[^�9����熨_�cy������B������4����M�sQ��z"������0�Z�dEr�gPy����-�G�w���(ɻ��r��=|!2�s�Uk�c�m皬U��A w���b	u|F)���]�v�-ZHQ��k��'#�^�V�%Y~}�]�U�I�ꟻ�w>I�[�]��*�	s#|��$��T��#UG��E����(�y�0���h���4�I���A��X3�K�,`���H��+�j���w���(�߼p������\��O��(2+P���͐���f�&!�	tf)�4��oph�"�ڢȠ(��v���s�ۊX(���R%y9�B_1��y�E�T����S�&������d��
S�T�"��d���;���n��R�D�W��S�b=/���",T~�Ђ�"��Af��)3�~�,84Q���	� �� GA� �,�c��q�%\�Lh+��)_+~��#_F:GNT!��VQ����C�[�����Vߪ����Ą�@'�KrXyi�S
��l��A��S۠ =��'4�1�=�ze�>4m��{����9B�qB��DMґ-Λ�� -	��kX�A�Az�o��V��v��p��JN̛�cGRǘ�^a�4MN���Ӈ���p��a�t�U� �V>�נ�I^�杋���U���b��3�>E�����C�Y�k ��
c��,c	�O��1�W����@rH���7|4��_�w������B�1���e�T����~	PU�����:ЇP6;��xf�_�/�s@�Vɿ�JW��5X}�L=�0�ˠ���j����Ͽ��Xپ��>�bp�f�dśd���6b*����WM�f����4���8==����      /      x��}Is$Ǖ�9�W��DZW�÷X`�����=66:������s��RKS�Z)q��9j�4ͲP �* !����[�#<"�ex�2��Q,��/o񷹚(5q�DMt�v̤~X�����q^]ܮw����>�����f��7���������z�������N�~�;�������y}p�P��x����`��}��A�W?�ԧ[�?u��<+纚e�ջY��2�7�YA����&
>2��5���>�������~#�	޹�>p�y����U��~<��a�V>)�	|&�&���0��ߓ�lN변�<�U&Tw���q��>�[��Ok�=���	�*T��
�=�؉�ܤއU�Kp�`�Nxi�x[�9��>���O�å�e�fQ�EDD��+'n�ʲ=�� Ǆ��~��0�!��1��J����'p'�9~o(��;���ַ��f����)[^9y.����v���*Z]��t�Z�mp:o�{H���h��� ܦx���~�����K�A)Ϡ�3(q�A��H�Sd�}'��K(�zJ?>��f<�ht�$4L4��8Ëy}㗥:3`kb����ãI,\�'��	(EF�A�h�Y!� �kax�]t�_�G���	7w�y�n��{fC��l`n|��l�q���MH���)x�0�B�Q���ryJiO7Y�G:�gt��r�qLm��1L͋B�W:�<�0�c�s�T�L�zLjN�b��W��+�g�D���(��r4�� �Fh�I �&��lp<����Ȇ�����M+Q�1��%\��z���7���|ZiI��?�� �������3�9~���p�8��Lx����VE����S���OH��� �;m9�/=�cWv t���ៗ�����147�y��� 3����骡¹�`8��v��&��v��^�#�xM�s�F�!��!�`���~�S�o9����$��ūn쨊̖�Z�/�]����)�C�8��l�w�-ǰ� �{�;��~T?O &*]D�J���,�t�<0	�����5�����ʋ��"}���>;��Zܨ���n��ᘆ	𺀶�߸���"��e�`��$�T�&������-Qb��y[T���1��� �ǭmm�3K$���v�$�+|#aM�7�;$$�H
�k,�?���U~�c��n�M������%؀�}k4�U�����Ǵ�%�ԢC�ԕ�YC�`�YY�iJڻ�������-�����	������0�f!b"�,�Z��D#K���������-s�cv��B��9��듋;�=�T ����f'��紂��ID�#��'�6�U'p�z�"��l �P'i��<�`0��l���׿o<^ �7�A��O�N��O��'���l@^��B�����{�Sx�N�W�'-T.��=�� �ZF�ݯ��m�k:i�Y�D��?�gt:�jL` '3�����谍�
�b�Q�܃�p��Py$�͋�s&�k"MsT{fb������\�"M�)���mJ�\�"Mѡ�&fH)u��������>�h~���}*����rr���H�� �9��0������l%#�>�}�l9`��Y9����.-&�8�T�A!sl����,�f�^8�wزb�߻4�㐭"!t����y>�*�	�پ&R�f�z�d�K�f�`�A>�D�l�Y}s�W!��`N9�dk:��w�7ޯ��~����8��ω��ez���'mz(I�����a����8|��R�1	�k���臱QnZ34.٪���$��;a�INy��_�+0��D��e��5�Kײ��}8�2�x)+e9J$����Ĳ�o�g8�;l�1��\x}0��:�E6r8�V�3�F�4�����㏭w�)DV%���,�m.7��HeV%���I�7�ڦ�%�����)\Y�:;R�9.�^��@���Z���?Z�ҝ�|�bfU2GT��fP�:��_5q�%�̀��U��WɜPU�����.�n�X"�P��I�Oܨ�,G�VǭzA�^,D��(�5.�M&2�H�0���$y�p|@�#�"����jy�4��D&a���%����s�V�x�B4ܘDF� ��y,�%�N�7�c��&!�k2Ѧa�#5q7'�+{뽳>�X���G�E��e���/�s���8��5{d}���5>8��IN:�O	Y �y1r���h�;��3&�Qq]�v�pF�g�HS��v��#��Gh5p�1�ܢO���ҥNx7#mކ���rBZ�n�dh�O�J�I���̹������ZF��UO^�	��!�m�-B�D;���;R��c��z��RJ¸�k�Ȱ�� �D@��ɜ�� �W��$�'�s@E�������ƴg� �,�*����o���0�*���L�Q-��$g�Ym[2O��+�x�%\j�I`}��Ԯ��)#���H��2��f!�*�;@q���5��J�B@ǁeu=W,��`��׶��@�y���&(sm(e)e��Q��A�d5�TGtU`����Z&�A�Umbq�KI|�dA�:���P�m�,^]��	FMJ�LG�`á���}L?�dK��s��͉�dA�5��� Z�VS��|����՛�ڙ�&��^៧h9�ȤF`2e��z2���o���f7��n�O>Np�9��$�3�.��M*�2L�p6��o� ?K}���P���H����Ip�(e���Т	��l]���ҟ�<?�G\�Pes]Δ�u0`����z�� B�����ơ�_/��%�V!�����{k��-�H�r��I8)�߭2�����*GG�Ĉ����÷��lq�����F]Ɍ��mZ;LR'É�	�O�2	�ѕ�ɓw�Άﲴ�xyE,u�Q{��f�^[�~��r��Iu9��S����P_����,��%�����Z,�Л}���@��2��0���(?`	�sY�s�(�ZQf|�@$V���X^�S4�_�1���㹚�[������^�ݧ��_6�f`U���8�9ilM� d1��:�(�A��)4��*i�⪱���YYN&���X9��:����!S�C����&UŸ�㠪��$��.�l�U6�F�aD�EK�-O�W4>�h���2~����q����cLH�k�I���sT7y��=�p�o�L���qE�������x�@A<
2��~(��H/��)�,��?$f���|Ă�2�'�[�fdR<AK�q�\;-ߕ�_U��3��FPF��0��lf;bJe��2�@Q� ��v/����d�7��)50�9��+��	ل��lV���Y�F	#�WV�y��� �,��O�؂>�_{�EFS*�et)^+yڬ���WY�9���M�Р�4]x.8�-�Q9�b��7�G&K�F@�H\�BTm�w�,�?K(��r��*ݎ7�Q�̚�P�k��p�\����n9�4Ϟ�B�*�҈��~�p��r|�*ۛ+V���s�S���#�E��{�яƞŏ��q�j��h��N���q�Q�K��}��]��i}��^[�Z�!�`�]�NB,�䭲r �ꈃK��%�X��y!R�rm<�v>Ŗ���Y9\k����;���qԇ(�9/>Z\��PA�L,���\���ڌ��+�y�nx[S��\�W�ވ�mP�F'�R�)'D�aݽ@*U�dH����._s�o:l���MV�5�s �y=$�ʔ�p�|�MB#-j��d���Њ�	�]v�����L��q��EN{�F����49s�7v�R��t��I	�V��[ؗsN��`��dqQ�V�}P��$��%%�Z9�nM�/V$Vท8�^�(6����������R�����s�qF�\��$ �Ԧ4h�4�Fs�f��ٟq�8�Vjk�27���K����n���"4�}��>����_��x�,����aM!��>W�PVT�F1��M�x)�cp]�&�z���%bW\���JE :$�-[(�uE�R9�O���|�dOB�l(���Ȁ�SK�N�j���b�d��    C��ku�ߗ:Or�6�*8�u ��~�2q�Іz�6��o#ש���n|� ��C�\NI����jD;�aFB��>���l8N���p���d�E*�;�zpFz�0��UDd'�(cu28��]��X㨌>��k��;�Y'�W���fVM������c�d�=ɻSɃ�J�bי�̫��N���J'S�3��s�d��:O�
�q�u�}gM���@Lq@�%�m.[�y�a��iU�z���YǡE~�]�'!LY٪�٪,��\�Wc����}��׻�Q����<��,�Sт�T���|<x�г���Y�p����`�ģ�O)�%�X��R�ؓ�:�
�~7\![�[��\��W�=P��V�k�L�39,W�*koL2�-V�Ģ;������(*?+ʾP\[�^��2=�_�]j����A�Oi ]��S�L$s�o�l���˥_��E��~�Ҫ|���b˼��� �2��;e���s��C����!{9aŖU��
�2���V�U�wz.=�OGM[�8��i]�]�в��kﭿ�pe������?*�o�4����M�캍��[�X X�;���!!�{h�xi=��<Xk&�g7�)�5ȿ�n�Ɩ��3ij�o¡�t�pr�����oN'gV0i�ww���9�R���I8)j���{u�NNR`�I]#�nG���WWP���t&!�
;��|@`~$�'��3	g��Ⱥ�6�tr���;D�ͦ�Ͷ\�*�V	��aN�����渚���3	��C6�o�qF}�0O�[0#��F5��
�ק�O�ʼ�������|?&��n�.�,��;�I@a�^� ~ϣ��
'w�u��m深ȶ������	\)b��i���IS�¬nNA''J0	g�c���\'�C0)�Ò^��m3���&!@K��5��rr��b�N�"�xU����l8��I�]�.�)`"!�uA��qE��?��k�p�����z�����������ʖ��iTL��6e&[��ڪ3$i��IF����15}��Jfo�1w����{�U��2��Ui.�`֥�rrOw&!0�5�׌�v���7ݪ�e�m��.o����]��o}���"q����岰ϹkcR����^s�=L?HrX�IS�M�#���mt�trܙIBcw<U� '��fҴ0aV7� �cg�;R�n�A��3i�ݽxV7�E����L�:�fI���tz�bHk���ȼ��0�t[�@ręIȫ�!��R�2pc(��AVD���c(��A�m�Y�C/b�����L�:��)1W�w�yFv³�K��? }^���������_�����*�`�?B���,Vm:ԛl���Ry~���f!G��4u� ,���q.Ƿ�4u�:�9Q'��g�;o���Ƚ(�4�]B{Bg7(�"w�`�Ԗ�R�YqM�/���`=����(e�>��p���>D�Z�q�����=����_'���(���X17
>���bݦ��3��<��'s���ptq�j�Vr��B.w�g��gh�6����$
&M��>hus.E��E�$��c���g�Ȏ��P�22��낹���w�<�Y�o�w��	PnX��)�8�x7��6��r��p-�%Rm�9HN�`ҔjaѨTŵo%��Lb���u�A9��I�ԋښ[/��P0i�����N[{�r^����i���T��2�I���>��A*DΓ`��������T>�9L�j|%�n��%��&!Ƃl1�U!.g<0	q�[�Zo̓���0ij>�5V.��fb����V_������5�l�r�	�XǛK�M�q<d��9��_���ےsWr���]�1[�ьz����M>��m�S��q>Lh�˩�O�@H��=N)4I���M-���z3M�ޕ�T�h.��0�P�"~U�Q���A���!d��i[����\Z2���)��HH����T���<Ev�/UX�("d�����i��s9��IS]�~��W�|g����$`n�'��7W;��L�hn�zkf?M�2��%L"la��Duzr�u��l���1�F���~\?Ct�9��N���\+���p�P����[2~�Ҳ$s9�I1 � �
@f0n�0i b5ޡ/|���K���DЩ�e�� �fE�F\�R�"�4y,�W��3����Y�詼����u89�|k��i�;q/�3�E��O��YI���^�*G�ǒ�Ѹ�n��M�x�c������<L�
s����2�)R�A&��,� rFXI�nH�ɭ��[�rR�u}�\��G�v?�_MO��Pr9ۇI�]��SW���y;LB|�l���೏�!Ӑh�K:���c%���,[C�T��'�wf_�E�B8�!�
>Ev[7Pl�{-l�@���R3L�K���aFkH\p]����j��*;|�kH����N	��Y��`���l�y��a�H�s�g��@~� Q�R$��ɣm)�6�����FC��x��&���m@���3�9lښ+�Ϋj�Oï@��.u^��M��ۭhJ�"�t���d.P].��$*�����F�̒+��E�����C��o�Pɭ���a2�ߐL �.j	&ᬨˎ�af�'���_CS3�E��W�+��舸�i//��U�	���v����hPp��3XJ�+��̊ �@׃W^y��Ȃ@A�/.y׹��G}ô���*��zMG�z��z���4�7�H&����C����>j8���e��ES7g̫��¢qd��e���]`�(�6��)��6�H�NDa���4��=J���2���N�Mi\�|2P׼���|]��@�X�fu�z���r_����$��SƵ0�n+bOT.��pC�*���:�?��ޕ9���b �%M)3�)"��b
�y��Nɚ��d�Ƥ�d��!lug��=h���,P�f�!y�%��vyd��?0ݧF�s\��2و�J���hM��?{�;���XRR�P�Ѱs�!œU0Yw�'+�jmޛ����]��O�q"|�\d�l�L�tiX7_�C�N�
��*�`O�u��B�����IG��V�m��-ދG�����w����F6� :�!��,�ɮo��K|�a0�Ǔ���0vb�6�W�T�*z+H���%����d�^V�3A4���]� �c��Mg�b�q��-Fhd�t�'�){��mW��~ݶ*V��5$bl���%�+yo`�NqO��ً��oB)2�.���\Ý,��7�hm3�ǹ6����8���]�8�����^�#qβ{�I��{(p���ʠ/e�W��<�V���m|SZ|�[@������o0��.,~��.>''/X~���c��-Z��P��r��e��Njl+��7$���ʻ�m��|�"~/�et(ٖ��z���>�Ry��P>�܋���*Cd:�A���w�w�6:A˺��8ô�lU�e��I����T���ym&����L�#9�D^a#��l7c4��j�h0�ؕ�ؑh�}=�M+�l
}�R��\�N�R��J5X@)l�����G��>�w�?~����%���tet�4J�+�'���v/R�B3{����e���R0Ȳ����W���[���+�ɷ
��yC"!�
�É]�ٮjG�ͪ��!���ѣl�^�JN�`��`rK��['�{�-ͻ^ɽ������M�+�I&E�̕��q.�¹hI�^9��Ia�q�b��}����Q��FY*]������"P;��؁	7���äs�)�	D�߈��T�M���,�!��ڙu+��1B$��DhK�].?� Gg�ײ��>��Q�xG,R��l�-�G�X��`�;�L��b2�+�bCcPFO���ջ0�x�I%�g0ij5E���Q�!��W�G����dY�	n��G#3��g59K/($3�:J�J%��P�e
��"JH3�[���3��iR�W	0e^�=����W{6��%s��,�If;l�qԷn��!�%n��$�D����5^����H9.V�o��X��~��ёJθ�t`A��]��8�:��O8;�k�p��f�Y���zRa�����l_NPŻP�+���   F�3�.�(t?Ez�y�	��&�E�)��IRL���-*y��M�S&�eꫯ��`6����$�-Qɉ�U�j\�|���J(�nH.M`솯ܩ�J΅�lÎ|����<gA_.s�u���.�串��e4_�\��q��F�uF-C�w������K����Z�o|S ��`,O���@ɴ�>����]�ز�u�|��AƵ�<^J��
���X���K>E��>�A��v�����T����Zn�0xq�O��:ٜ#R�K_��)�0	�Hz{Y,�)�-e����� I睓F�]���>BE�����[&Y}q�YGN�kY}q�� ��^�'�G$�h����8q��n�fA��ǭ���9t>=W�۔�'gI0)Z�<Ri�d�/�M�8��/w�n,v�v� D�n�"�vQ\�wĂ$��I)�"��� ���e�ʾ�⹕zg�Tg������5����PF�������k�qH0�����7d�:dO�c�"o�S,y����pX�IE"��^l#��$�Y��mHрjp�6��9�p����� �3O/���#�i	U!��uq��S�K��Zq(�..;q�q�t\2�e��8���l2.V���\(��WD�H�8�wI��\0V���8�����^.���ˑ��2�v���(�柖`J�@xX>�x �[�Mѵ�u;�q�U(9�J�q_�M�4E�˙-L"�\
7��aٍ�)Ծ,m�� bG��)JONu`�ᤔ������jE���_ߎ�p�B�p�+3P�SG�| g�����Re_���W�.���3�f������Sqϐ{	V�	��=`���Fq��Q�zR�¿ �ktI������.���Ԁ��͡��z�����|f�կ�ɤ��D��OJmy�6���1#=��ݍ�Q�_o@��i�y��x'u� H�R��D[�J��t�������J�t��E3�"�E�6Օ����H�F����GfNH�B1��!�n���!Os�D�QՃ&�&!�t�+0F X ��X�./���t��+׀v�:�a��nM�Gf9հGñ8y0�z\[��	Q�`�D`��V`/��q	�����)�~BT��������~��@�
 �8{@���f��u��zJ=E&z��e�C���J��hp8��k�AR!�.��Z/N>�����x�B����t$�Ѝ�&�7���s��+:?���y�6�b8ڲ[3�)<c7<!����[jʗ��N�>ˠ$7�rs��� �MJ1$[a�H9ԾtQ���Ԇk���g��%�ޓ82����$�/�q8'+3���A|ˁ4�tF^���o[{\����̙	pW��SސW��,���B�-���ڈ��A:au�b=C�����O�����fU�S����4��|9!!�>Ӫ�z����$<�NîX��L���T���Nכa��m�#e�&�R��>�$ߝ��B�Vm�IG+��-�h��WA�'���籒eQ�g�̒m)_"�H�PeHeCv9��ʄ���橍�����ݠ1V����bjO{�F���#�Vo�K|8Aލ��p@&�q}�-D�)fH�Σ^��J���o�e�(��B3�4��mi����i Yb�'BJ�@�Lʜ���	�FV�T��s	@�ܙm�_`x�,�Q6�X���U�!��4X#�R�p@Y�p��;+6�tfȏ�X��E6�����_ߔ�r	���-����z�u��M�*\�#���#u��}� �����N8c�HH�j�V|�}^�����8dF&>�{Τ�#R�E۵,�[��c��M����)�A)�HS����_*z��e�,ש5����3�>Oc�R6�4U%Wj[���������/Q��z	��_y��-P|	�w���_����~�����ޛ�߂X���/?K˓F2GpY;������G�g�_�n]�~dg%�w^�wӥ���)�M)z��8E�`��mې�Պ����:R�8����Y���#J��UxH�o�? ��啥PS�7{<�$�CWV�Gɭ**0��S�v�f����s�܈��ʁ�[�i���h��4h�S|xB���ɝ�f�������N4%ǂ�����r	��Ē��5L�*z@� (\�Q�,J0E�$�����G|)��x*��x�'r����44ۭ�<Qը,����k]�o>Q̲�}��QWr�U�a֒A�S�����@��EjB��zo��ՏeUm� Y�U�T����g$�Sf���*�d
�U�C�~x��X.}IR�w67���A�k����rK�l�ֺ؂�����45�_��\ҹ��G<�`�yD�pH��=r����t�pE$��;�V��\Jy���z{�3'�M0�i� �$jD��x�Q.h7�r�c��?���|9�&���:��o���A�cV*����F*�=�k��LD��T�W;=x��d���84�kz3����$]D�bcz��F8^<rQ�2i��l!G_�٩qc�#�3t�H�KgN���Ռ!t��X~TQ0�Ԕ����:����jѻ�M�9���?��!���x8���
��Ε��*��!�%��Y5!���V�#�t6�]�mL���X9��
M?�̛���%j[Ü�&��	�����ާ����72��'3�*��"pR�e��+�.jS&�O`\�?�E��GCՐGf��S\@@8_W��G�(#E�|:�`�@�)��\�m$?�C����J��jYGk롰��u����>iZ�ܢ��#�PL�|�I���dN�BĊal���tB�\1�Ɍ/SN�,�M�{; b��E�ID�kF{3x���D<����`N]�[�Ɗ4BJ��NhB��H��#�1��Tt���մ!�7$�|'���,�G+L���O�cj#s��41��l/S���XVY�l�#�A���Z��OD"hŤ��]�X�CDf�E��"��zN�"܎a9�0��tsEX]��:�<����ɒ��˔/$�ηG��Uf|!������]Y��H�o������� ���у9h)��@ND���~�&_�nޕeI�W���/�D$BD�H�@ԓ�7z��5�]J�:�++�%�����DHem���1�YJ��Y���)l�-��a(Sf;N�#��;/6"��T���]�w�RZU�Ģ	W�ܒd�n�]��KN�	q�ٙß�r=�y�,Y�Kq��h���k�ws��9������fW��G/���;o®
U��3�UrQ-n��ux}8�[����`7}=�	(���w�R.v���ܤ{�?�۵�r��.������A{�n�:<\˼��c#^��K�m�K��s�.��z���L� �?j����dt�H ������̉0���!������+K������Z\�7x��˗l�	3,9�@�TKi�Y���l�;#`�3���ݔ�M��`�(GΏ9��X��5�&���w�4�Rpm�^�J�W�`|*�k����ڱQ�� iZ�t����SuQ�
�Q�OT��U�>�T�{D,�fJ��r�NudR��q�`�V�տ�/��6��"�,B��]��<�V��;���.�6�yQ�ߚ
���<ˆ�����̮+v���	�*tN8���[F���ܑ�K�M�kT��� 	n����G��G������F͔�59~�ӝ�[&Qv�C���������|����]U�� ���"�;5���~gC�j��E@��_���~�,�-����v�d;�5��풰V��54񠯋zN4dQ�.��tp����!z�uK9<-�?�~eL��`Q5Qf� i����t��y��      E     x���]s�fǯ�O�E.�ix��sU^v����7�]�$����$��N:�n����[�٫��q�xK���
�7�l0����Б�����y��%�MXO��։uNXO�3�xeM����~`]@`j?"���_��7�ul����Y/������:�X�"�����uj�����։��?�����ro<���y�c�n��R���I��U�V���a��wi��۬�/�y��\X/��'Ewp���QJ&��;R�;����"�*�d�J��P�>��o�I|��w�&�@x/��J'�佝��N2}� ����$�^��R�������y��~Oh�Y��֏ �������u�9�'������3\�����N��g]�l��)r̶(�^N�
���g��`���ăF�4K�����}�^%��3R����<�N�!Cbn�@!��� \-��0#��`ǩ���
�<r/�����9��N�����Kg?siM�o=�.�����S�-a����Cg<O�B2�/�$��/V�;Y�t�^�_���G�u��Y*�}ECy3����2��Ac�W���\�e�T;�W�C�'1�F~\-��1EI��kf$'��J�3<�4�n~C����<u�]���� �&&s�A8���䩒���DȬw&S1ґꏰ4�(TU����|����q���{�6� &R�������g1�`�ֆ�d��ONu�f���~>_�@�F���<]��E��]�HU�:��$Kzi��BP�N�dUit$)&��h�o#�dw���p��P/P��}Ƨ�b��ڏn��H��'X-!��6�Μ~��tZ���3 w� �|MX�^�v�ԩM@�^^���������T8|����-m@
�<�v�1�:��
b���S����ˆ�k u��
��0������E�ޞ!�QP��ws�$�`[7K;d��ۍ�v�����ad���/d�"ߘ�>R���gD?) �+�]	r�8L ߻;u�g
�h_Yݫۨ�i��
��Aߢ�,����vRrIK�˾���$�M&��J�YBQV�Lq_R�R{���Y=�؂���V~9�Eݨ�Y�R�������+����	0{m��jTk��4�#��L��{� ��DO\���_]���^����y<�����
~����Ջ{��_�O���p}�������@���ɽOǲ*��j�H��I�egy��#��Ţ�l6�
�``��A3'Օ��M�x]���.��Mag�"Ln�<q~�A�*�В��nf����?s��݀���#kU����z��X33�heX��*�lkwX���~(����HiisR�iy9����Cmt����M�\ha<�i~�5/�� r���]M���ĳ����(u1kx��Н�~ �?��wDOV�q��<P�Ҥ�m��^���sIR�d�Dƒ�J����ظ/Tw��o��G5�o�Uz�=nhu-/����&���3��:��%��
M��8-k���Wʼ��LJحE'0�GzE��͗[BS��&_ÓB�Ώ)�3�2>,ߗ���ejE�9�H�$�&��h���|Ç�SQ�r7�%p��=��_|`��׍_�$\���a�QnT���9���v�w�hB#�W'�1�5��nE�>�2�0�Q1T�û:\�
���G�I�Uli�6ۈ&#"���,�4ٓW���J��~��z�{u3��瑋�]л�����t@}Pn(���􁌴�fK%~.�F��l�jH3Sy���a=�vI#�	���(|�����~��{G�F<�NޏED�xυ�P�`�뮕ܡ��%�f����n�7l5���k��]�jJ��Ac��lfn�u��l��AF�H�X@ﱪ?�v�re'�������z@UZ�0!cᒯ���Ҥ�"����7X-��L��͐���o�:˳�����g0�=p}�����+w�8��d氕Imy>��Ł*��rF�m'9�8KN8��ǳ]&���<Ig
�V�B�-L|R3�,���A5���t�7ܫ�>&9��`V~�C��]�wC[������O��     