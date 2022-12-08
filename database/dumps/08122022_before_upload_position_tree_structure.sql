PGDMP                         z            ots_test    14.5    14.5    ^           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            _           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            `           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            a           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    177912    building-comments    TABLE     �  CREATE TABLE public."building-comments" (
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
       public         heap    postgres    false            �            1259    177917    building-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."building-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."building-comments_id_seq";
       public          postgres    false    209            b           0    0    building-comments_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."building-comments_id_seq" OWNED BY public."building-comments".id;
          public          postgres    false    210            �            1259    177918 	   cable-log    TABLE     f  CREATE TABLE public."cable-log" (
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
       public         heap    postgres    false            �            1259    177924    cable-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cable-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."cable-log_id_seq";
       public          postgres    false    211            c           0    0    cable-log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."cable-log_id_seq" OWNED BY public."cable-log".id;
          public          postgres    false    212            �            1259    177925    counterparties    TABLE       CREATE TABLE public.counterparties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.counterparties;
       public         heap    postgres    false            �            1259    177930    counterparties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.counterparties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counterparties_id_seq;
       public          postgres    false    213            d           0    0    counterparties_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counterparties_id_seq OWNED BY public.counterparties.id;
          public          postgres    false    214            �            1259    177931    criticalities    TABLE     m  CREATE TABLE public.criticalities (
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
       public         heap    postgres    false            �            1259    177936    criticalities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.criticalities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.criticalities_id_seq;
       public          postgres    false    215            e           0    0    criticalities_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.criticalities_id_seq OWNED BY public.criticalities.id;
          public          postgres    false    216            �            1259    177937    design-documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public."design-documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."design-documents_id_seq";
       public          postgres    false            �            1259    177938    design-documents    TABLE     b  CREATE TABLE public."design-documents" (
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
       public         heap    postgres    false    217            �            1259    177947    designs    TABLE     
  CREATE TABLE public.designs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    177952    designs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.designs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    219            f           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    220            �            1259    177953 
   directions    TABLE       CREATE TABLE public.directions (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.directions;
       public         heap    postgres    false            �            1259    177958    directions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.directions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.directions_id_seq;
       public          postgres    false    221            g           0    0    directions_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.directions_id_seq OWNED BY public.directions.id;
          public          postgres    false    222            �            1259    177959    documentation-comments    TABLE     �  CREATE TABLE public."documentation-comments" (
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
       public         heap    postgres    false            �            1259    177964    documentation-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."documentation-comments_id_seq";
       public          postgres    false    223            h           0    0    documentation-comments_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."documentation-comments_id_seq" OWNED BY public."documentation-comments".id;
          public          postgres    false    224            �            1259    177965    documentation-solutions    TABLE     p  CREATE TABLE public."documentation-solutions" (
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
       public         heap    postgres    false            �            1259    177971    documentation-solutions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."documentation-solutions_id_seq";
       public          postgres    false    225            i           0    0    documentation-solutions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."documentation-solutions_id_seq" OWNED BY public."documentation-solutions".id;
          public          postgres    false    226            �            1259    177972 
   equipments    TABLE       CREATE TABLE public.equipments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.equipments;
       public         heap    postgres    false            �            1259    177977    equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.equipments_id_seq;
       public          postgres    false    227            j           0    0    equipments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.equipments_id_seq OWNED BY public.equipments.id;
          public          postgres    false    228            �            1259    177978 
   facilities    TABLE     �  CREATE TABLE public.facilities (
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
    "updatedAt" timestamp with time zone NOT NULL,
    "technicalCardId" integer
);
    DROP TABLE public.facilities;
       public         heap    postgres    false            �            1259    177985    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    229            k           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    230            �            1259    177986    fields    TABLE     %  CREATE TABLE public.fields (
    "subsidiaryId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.fields;
       public         heap    postgres    false            �            1259    177991    fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.fields_id_seq;
       public          postgres    false    231            l           0    0    fields_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.fields_id_seq OWNED BY public.fields.id;
          public          postgres    false    232            �            1259    177992    impulse-line-log    TABLE       CREATE TABLE public."impulse-line-log" (
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
       public         heap    postgres    false            �            1259    177998    impulse-line-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impulse-line-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impulse-line-log_id_seq";
       public          postgres    false    233            m           0    0    impulse-line-log_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impulse-line-log_id_seq" OWNED BY public."impulse-line-log".id;
          public          postgres    false    234            �            1259    177999    logos    TABLE     �  CREATE TABLE public.logos (
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
       public         heap    postgres    false            �            1259    178004    logos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.logos_id_seq;
       public          postgres    false    235            n           0    0    logos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.logos_id_seq OWNED BY public.logos.id;
          public          postgres    false    236            �            1259    178005    metrologies    TABLE     g  CREATE TABLE public.metrologies (
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
       public         heap    postgres    false            �            1259    178010    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    237            o           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    238            �            1259    178011    monitorings    TABLE     c  CREATE TABLE public.monitorings (
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
       public         heap    postgres    false            �            1259    178016    monitorings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.monitorings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monitorings_id_seq;
       public          postgres    false    239            p           0    0    monitorings_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monitorings_id_seq OWNED BY public.monitorings.id;
          public          postgres    false    240            �            1259    178017 
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
       public         heap    postgres    false            �            1259    178023    normatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normatives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.normatives_id_seq;
       public          postgres    false    241            q           0    0    normatives_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.normatives_id_seq OWNED BY public.normatives.id;
          public          postgres    false    242            �            1259    178024    projects    TABLE     {  CREATE TABLE public.projects (
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
       public         heap    postgres    false            �            1259    178030    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    243            r           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    244            �            1259    178031    sections    TABLE       CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    178036    sections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sections_id_seq;
       public          postgres    false    245            s           0    0    sections_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;
          public          postgres    false    246            �            1259    178037    signals    TABLE     �  CREATE TABLE public.signals (
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
       public         heap    postgres    false            �            1259    178042    signals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.signals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.signals_id_seq;
       public          postgres    false    247            t           0    0    signals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.signals_id_seq OWNED BY public.signals.id;
          public          postgres    false    248            �            1259    178043    stages    TABLE     	  CREATE TABLE public.stages (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.stages;
       public         heap    postgres    false            �            1259    178048    stages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.stages_id_seq;
       public          postgres    false    249            u           0    0    stages_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.stages_id_seq OWNED BY public.stages.id;
          public          postgres    false    250            �            1259    178049 	   sub-units    TABLE     �  CREATE TABLE public."sub-units" (
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
       public         heap    postgres    false            �            1259    178056    sub-units_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sub-units_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sub-units_id_seq";
       public          postgres    false    251            v           0    0    sub-units_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sub-units_id_seq" OWNED BY public."sub-units".id;
          public          postgres    false    252            �            1259    178057    subsidiaries    TABLE       CREATE TABLE public.subsidiaries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.subsidiaries;
       public         heap    postgres    false            �            1259    178062    subsidiaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subsidiaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.subsidiaries_id_seq;
       public          postgres    false    253            w           0    0    subsidiaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.subsidiaries_id_seq OWNED BY public.subsidiaries.id;
          public          postgres    false    254            �            1259    178063    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
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
       public         heap    postgres    false                        1259    178071 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    255            x           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    256                       1259    178072    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false                       1259    178077    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
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
       public         heap    postgres    false                       1259    178082    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    258            y           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    259                       1259    178083    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    257            z           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    260                       1259    178084    units    TABLE     �  CREATE TABLE public.units (
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
       public         heap    postgres    false                       1259    178091    units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.units_id_seq;
       public          postgres    false    261            {           0    0    units_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.units_id_seq OWNED BY public.units.id;
          public          postgres    false    262                       1259    178092    users    TABLE     �  CREATE TABLE public.users (
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
       public         heap    postgres    false                       1259    178098    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    263            |           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    264            �           2604    178099    building-comments id    DEFAULT     �   ALTER TABLE ONLY public."building-comments" ALTER COLUMN id SET DEFAULT nextval('public."building-comments_id_seq"'::regclass);
 E   ALTER TABLE public."building-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    178100    cable-log id    DEFAULT     p   ALTER TABLE ONLY public."cable-log" ALTER COLUMN id SET DEFAULT nextval('public."cable-log_id_seq"'::regclass);
 =   ALTER TABLE public."cable-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    178101    counterparties id    DEFAULT     v   ALTER TABLE ONLY public.counterparties ALTER COLUMN id SET DEFAULT nextval('public.counterparties_id_seq'::regclass);
 @   ALTER TABLE public.counterparties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    178102    criticalities id    DEFAULT     t   ALTER TABLE ONLY public.criticalities ALTER COLUMN id SET DEFAULT nextval('public.criticalities_id_seq'::regclass);
 ?   ALTER TABLE public.criticalities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    178103 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    178104    directions id    DEFAULT     n   ALTER TABLE ONLY public.directions ALTER COLUMN id SET DEFAULT nextval('public.directions_id_seq'::regclass);
 <   ALTER TABLE public.directions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    178105    documentation-comments id    DEFAULT     �   ALTER TABLE ONLY public."documentation-comments" ALTER COLUMN id SET DEFAULT nextval('public."documentation-comments_id_seq"'::regclass);
 J   ALTER TABLE public."documentation-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    178106    documentation-solutions id    DEFAULT     �   ALTER TABLE ONLY public."documentation-solutions" ALTER COLUMN id SET DEFAULT nextval('public."documentation-solutions_id_seq"'::regclass);
 K   ALTER TABLE public."documentation-solutions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    178107    equipments id    DEFAULT     n   ALTER TABLE ONLY public.equipments ALTER COLUMN id SET DEFAULT nextval('public.equipments_id_seq'::regclass);
 <   ALTER TABLE public.equipments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            �           2604    178108    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229            �           2604    178109 	   fields id    DEFAULT     f   ALTER TABLE ONLY public.fields ALTER COLUMN id SET DEFAULT nextval('public.fields_id_seq'::regclass);
 8   ALTER TABLE public.fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231            �           2604    178110    impulse-line-log id    DEFAULT     ~   ALTER TABLE ONLY public."impulse-line-log" ALTER COLUMN id SET DEFAULT nextval('public."impulse-line-log_id_seq"'::regclass);
 D   ALTER TABLE public."impulse-line-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            �           2604    178111    logos id    DEFAULT     d   ALTER TABLE ONLY public.logos ALTER COLUMN id SET DEFAULT nextval('public.logos_id_seq'::regclass);
 7   ALTER TABLE public.logos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235            �           2604    178112    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237            �           2604    178113    monitorings id    DEFAULT     p   ALTER TABLE ONLY public.monitorings ALTER COLUMN id SET DEFAULT nextval('public.monitorings_id_seq'::regclass);
 =   ALTER TABLE public.monitorings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239            �           2604    178114    normatives id    DEFAULT     n   ALTER TABLE ONLY public.normatives ALTER COLUMN id SET DEFAULT nextval('public.normatives_id_seq'::regclass);
 <   ALTER TABLE public.normatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    241            �           2604    178115    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    243            �           2604    178116    sections id    DEFAULT     j   ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);
 :   ALTER TABLE public.sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    245                        2604    178117 
   signals id    DEFAULT     h   ALTER TABLE ONLY public.signals ALTER COLUMN id SET DEFAULT nextval('public.signals_id_seq'::regclass);
 9   ALTER TABLE public.signals ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247                       2604    178118 	   stages id    DEFAULT     f   ALTER TABLE ONLY public.stages ALTER COLUMN id SET DEFAULT nextval('public.stages_id_seq'::regclass);
 8   ALTER TABLE public.stages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    249                       2604    178119    sub-units id    DEFAULT     p   ALTER TABLE ONLY public."sub-units" ALTER COLUMN id SET DEFAULT nextval('public."sub-units_id_seq"'::regclass);
 =   ALTER TABLE public."sub-units" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251                       2604    178120    subsidiaries id    DEFAULT     r   ALTER TABLE ONLY public.subsidiaries ALTER COLUMN id SET DEFAULT nextval('public.subsidiaries_id_seq'::regclass);
 >   ALTER TABLE public.subsidiaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    253            	           2604    178121    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    256    255            
           2604    178122    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    257                       2604    178123    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    258                       2604    178124    units id    DEFAULT     d   ALTER TABLE ONLY public.units ALTER COLUMN id SET DEFAULT nextval('public.units_id_seq'::regclass);
 7   ALTER TABLE public.units ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261                       2604    178125    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    264    263            $          0    177912    building-comments 
   TABLE DATA           �   COPY public."building-comments" (id, "projectId", "unitId", "subUnitId", "monitoringId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   V      &          0    177918 	   cable-log 
   TABLE DATA           �   COPY public."cable-log" (id, "sloeId", "numberOfTrace", "cableMark", "cableSection", "fromUnit", "fromPlace", "toUnit", "toPlace", "cableLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   s      (          0    177925    counterparties 
   TABLE DATA           `   COPY public.counterparties (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   ��      *          0    177931    criticalities 
   TABLE DATA           }   COPY public.criticalities (id, title, code, description, threshold, goal, "tenseGoal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �      -          0    177938    design-documents 
   TABLE DATA             COPY public."design-documents" (id, code, "projectId", "unitId", "uqstId", "subUnitId", "suqstId", "supplierId", "stageId", "sectionId", "sloeId", "cableLogId", "monitoringId", title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �      .          0    177947    designs 
   TABLE DATA           Y   COPY public.designs (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   F�      0          0    177953 
   directions 
   TABLE DATA           \   COPY public.directions (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   G�      2          0    177959    documentation-comments 
   TABLE DATA           �   COPY public."documentation-comments" (id, "pdcId", "udcId", "sudcId", "sdcId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   C�      4          0    177965    documentation-solutions 
   TABLE DATA           �   COPY public."documentation-solutions" (id, "commentId", "statusId", answer, "designContacts", "solutionId", "userId", solution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   `�      6          0    177972 
   equipments 
   TABLE DATA           \   COPY public.equipments (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   }�      8          0    177978 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt", "technicalCardId") FROM stdin;
    public          postgres    false    229   .�      :          0    177986    fields 
   TABLE DATA           h   COPY public.fields ("subsidiaryId", id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   L�      <          0    177992    impulse-line-log 
   TABLE DATA           �   COPY public."impulse-line-log" (id, "sloeId", "numberOfTrace", "impulseLineType", "fromPlace", "toPlace", "impulseLineLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   L�      >          0    177999    logos 
   TABLE DATA           �   COPY public.logos ("subsidiaryId", "counterpartyId", "designId", "userId", id, "filePath", "fileType", "fileName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   i�      @          0    178005    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   K�      B          0    178011    monitorings 
   TABLE DATA           �   COPY public.monitorings (id, "sloeId", "mountDate", "mountDocument", "connectDate", "connectDocument", "testDate", "testDocument", "awpDate", "awpDocument", "commisionDate", "commisionDocument", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    239   �      D          0    178017 
   normatives 
   TABLE DATA           �   COPY public.normatives (id, code, title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   "      F          0    178024    projects 
   TABLE DATA           {   COPY public.projects ("fieldId", "designId", id, title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    243   h      H          0    178031    sections 
   TABLE DATA           Z   COPY public.sections (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    245   �      J          0    178037    signals 
   TABLE DATA           �   COPY public.signals (id, "sloeId", "signalType", "signalProtocol", "signalParameter", "signalTag", ll, l, h, hh, "emergencyProtocol", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    247   �*      L          0    178043    stages 
   TABLE DATA           X   COPY public.stages (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    249   ?9      N          0    178049 	   sub-units 
   TABLE DATA           �   COPY public."sub-units" ("unitId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    251   ';      P          0    178057    subsidiaries 
   TABLE DATA           ^   COPY public.subsidiaries (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    253    >      R          0    178063    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    255   ?      T          0    178072    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    257   �^      U          0    178077    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    258   bi      X          0    178084    units 
   TABLE DATA           �   COPY public.units ("projectId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    261   ��      Z          0    178092    users 
   TABLE DATA           �   COPY public.users ("subsidiaryId", "fieldId", "designId", "counterpartyId", id, "firstName", "secondName", "lastName", subdivision, "position", email, phone, password, roles, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    263   N       }           0    0    building-comments_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."building-comments_id_seq"', 1, false);
          public          postgres    false    210            ~           0    0    cable-log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."cable-log_id_seq"', 148, true);
          public          postgres    false    212                       0    0    counterparties_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.counterparties_id_seq', 202, true);
          public          postgres    false    214            �           0    0    criticalities_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.criticalities_id_seq', 116, true);
          public          postgres    false    216            �           0    0    design-documents_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."design-documents_id_seq"', 419, true);
          public          postgres    false    217            �           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 15, true);
          public          postgres    false    220            �           0    0    directions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.directions_id_seq', 5, true);
          public          postgres    false    222            �           0    0    documentation-comments_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."documentation-comments_id_seq"', 937, true);
          public          postgres    false    224            �           0    0    documentation-solutions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."documentation-solutions_id_seq"', 489, true);
          public          postgres    false    226            �           0    0    equipments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.equipments_id_seq', 47, true);
          public          postgres    false    228            �           0    0    facilities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.facilities_id_seq', 164, true);
          public          postgres    false    230            �           0    0    fields_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.fields_id_seq', 38, true);
          public          postgres    false    232            �           0    0    impulse-line-log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."impulse-line-log_id_seq"', 3, true);
          public          postgres    false    234            �           0    0    logos_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logos_id_seq', 5, true);
          public          postgres    false    236            �           0    0    metrologies_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.metrologies_id_seq', 48, true);
          public          postgres    false    238            �           0    0    monitorings_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.monitorings_id_seq', 135, true);
          public          postgres    false    240            �           0    0    normatives_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.normatives_id_seq', 45, true);
          public          postgres    false    242            �           0    0    projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.projects_id_seq', 279, true);
          public          postgres    false    244            �           0    0    sections_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.sections_id_seq', 400, true);
          public          postgres    false    246            �           0    0    signals_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.signals_id_seq', 147, true);
          public          postgres    false    248            �           0    0    stages_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.stages_id_seq', 12, true);
          public          postgres    false    250            �           0    0    sub-units_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."sub-units_id_seq"', 144, true);
          public          postgres    false    252            �           0    0    subsidiaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subsidiaries_id_seq', 23, true);
          public          postgres    false    254            �           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 464, true);
          public          postgres    false    256            �           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 920, true);
          public          postgres    false    259            �           0    0    technical-card_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."technical-card_id_seq"', 4800, true);
          public          postgres    false    260            �           0    0    units_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.units_id_seq', 631, true);
          public          postgres    false    262            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 16, true);
          public          postgres    false    264                       2606    178127 (   building-comments building-comments_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_pkey";
       public            postgres    false    209                       2606    178129    cable-log cable-log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_pkey";
       public            postgres    false    211                       2606    178131 "   counterparties counterparties_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_pkey;
       public            postgres    false    213                       2606    178133 '   counterparties counterparties_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_title_key UNIQUE (title);
 Q   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_title_key;
       public            postgres    false    213                       2606    178135     criticalities criticalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_pkey;
       public            postgres    false    215                       2606    178137 %   criticalities criticalities_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_title_key;
       public            postgres    false    215                       2606    178139 &   design-documents design-documents_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_pkey";
       public            postgres    false    218                        2606    178141    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    219            "           2606    178143    designs designs_title_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_title_key UNIQUE (title);
 C   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_title_key;
       public            postgres    false    219            $           2606    178145    directions directions_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_pkey;
       public            postgres    false    221            &           2606    178147    directions directions_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_title_key;
       public            postgres    false    221            (           2606    178149 2   documentation-comments documentation-comments_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pkey";
       public            postgres    false    223            *           2606    178151 4   documentation-solutions documentation-solutions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_pkey";
       public            postgres    false    225            ,           2606    178153    equipments equipments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_pkey;
       public            postgres    false    227            .           2606    178155    equipments equipments_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_title_key;
       public            postgres    false    227            0           2606    178157    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    229            2           2606    178159    fields fields_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_pkey;
       public            postgres    false    231            4           2606    178161    fields fields_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_title_key;
       public            postgres    false    231            6           2606    178163 &   impulse-line-log impulse-line-log_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_pkey";
       public            postgres    false    233            8           2606    178165    logos logos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT logos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.logos DROP CONSTRAINT logos_pkey;
       public            postgres    false    235            :           2606    178167    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    237            <           2606    178169    monitorings monitorings_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT monitorings_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT monitorings_pkey;
       public            postgres    false    239            >           2606    178171    normatives normatives_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.normatives
    ADD CONSTRAINT normatives_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.normatives DROP CONSTRAINT normatives_pkey;
       public            postgres    false    241            @           2606    178173    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    243            B           2606    178175    projects projects_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_title_key;
       public            postgres    false    243            D           2606    178177    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    245            F           2606    178179    sections sections_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_title_key;
       public            postgres    false    245            H           2606    178181    signals signals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT signals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.signals DROP CONSTRAINT signals_pkey;
       public            postgres    false    247            J           2606    178183    stages stages_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_pkey;
       public            postgres    false    249            L           2606    178185    stages stages_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_title_key;
       public            postgres    false    249            N           2606    178187    sub-units sub-units_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_pkey";
       public            postgres    false    251            P           2606    178189    subsidiaries subsidiaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_pkey;
       public            postgres    false    253            R           2606    178191 #   subsidiaries subsidiaries_title_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_title_key UNIQUE (title);
 M   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_title_key;
       public            postgres    false    253            T           2606    178193 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    255            X           2606    178195 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    258            V           2606    178197 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    257            Z           2606    178199    units units_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.units DROP CONSTRAINT units_pkey;
       public            postgres    false    261            \           2606    178201    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    263            ^           2606    178203    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    263            _           2606    178204 6   building-comments building-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_criticalityId_fkey";
       public          postgres    false    209    215    3354            `           2606    178209 4   building-comments building-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_directionId_fkey";
       public          postgres    false    209    3364    221            a           2606    178214 5   building-comments building-comments_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_monitoringId_fkey";
       public          postgres    false    209    239    3388            b           2606    178219 4   building-comments building-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_normativeId_fkey";
       public          postgres    false    241    209    3390            c           2606    178224 2   building-comments building-comments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_projectId_fkey";
       public          postgres    false    243    3392    209            d           2606    178229 2   building-comments building-comments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_subUnitId_fkey";
       public          postgres    false    251    3406    209            e           2606    178234 /   building-comments building-comments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_unitId_fkey";
       public          postgres    false    261    3418    209            f           2606    178239 /   building-comments building-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_userId_fkey";
       public          postgres    false    3422    209    263            g           2606    178244    cable-log cable-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_sloeId_fkey";
       public          postgres    false    255    3412    211            h           2606    178249 1   design-documents design-documents_cableLogId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_cableLogId_fkey" FOREIGN KEY ("cableLogId") REFERENCES public."cable-log"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_cableLogId_fkey";
       public          postgres    false    218    3348    211            i           2606    178254 3   design-documents design-documents_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_monitoringId_fkey";
       public          postgres    false    239    218    3388            j           2606    178259 0   design-documents design-documents_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_projectId_fkey";
       public          postgres    false    243    218    3392            k           2606    178264 0   design-documents design-documents_sectionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.sections(id) ON UPDATE CASCADE;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sectionId_fkey";
       public          postgres    false    218    245    3396            l           2606    178269 -   design-documents design-documents_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sloeId_fkey";
       public          postgres    false    218    3412    255            m           2606    178274 .   design-documents design-documents_stageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES public.stages(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_stageId_fkey";
       public          postgres    false    3402    249    218            n           2606    178279 0   design-documents design-documents_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_subUnitId_fkey";
       public          postgres    false    251    218    3406            o           2606    178284 1   design-documents design-documents_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_supplierId_fkey";
       public          postgres    false    213    218    3350            p           2606    178289 .   design-documents design-documents_suqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_suqstId_fkey" FOREIGN KEY ("suqstId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_suqstId_fkey";
       public          postgres    false    251    3406    218            q           2606    178294 -   design-documents design-documents_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_unitId_fkey";
       public          postgres    false    261    3418    218            r           2606    178299 -   design-documents design-documents_uqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_uqstId_fkey" FOREIGN KEY ("uqstId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_uqstId_fkey";
       public          postgres    false    218    3418    261            s           2606    178304 @   documentation-comments documentation-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_criticalityId_fkey";
       public          postgres    false    3354    215    223            t           2606    178309 >   documentation-comments documentation-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_directionId_fkey";
       public          postgres    false    223    3364    221            u           2606    178314 >   documentation-comments documentation-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_normativeId_fkey";
       public          postgres    false    241    223    3390            v           2606    178319 8   documentation-comments documentation-comments_pdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pdcId_fkey" FOREIGN KEY ("pdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pdcId_fkey";
       public          postgres    false    3358    223    218            w           2606    178324 8   documentation-comments documentation-comments_sdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sdcId_fkey" FOREIGN KEY ("sdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sdcId_fkey";
       public          postgres    false    3358    223    218            x           2606    178329 9   documentation-comments documentation-comments_sudcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sudcId_fkey" FOREIGN KEY ("sudcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sudcId_fkey";
       public          postgres    false    3358    223    218            y           2606    178334 8   documentation-comments documentation-comments_udcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_udcId_fkey" FOREIGN KEY ("udcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_udcId_fkey";
       public          postgres    false    3358    223    218            z           2606    178339 9   documentation-comments documentation-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_userId_fkey";
       public          postgres    false    3422    223    263            {           2606    178344 >   documentation-solutions documentation-solutions_commentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."documentation-comments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_commentId_fkey";
       public          postgres    false    3368    225    223            |           2606    178349 ;   documentation-solutions documentation-solutions_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 i   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_userId_fkey";
       public          postgres    false    263    225    3422            }           2606    178354    fields fields_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT "fields_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.fields DROP CONSTRAINT "fields_subsidiaryId_fkey";
       public          postgres    false    231    3408    253            ~           2606    178359 -   impulse-line-log impulse-line-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_sloeId_fkey";
       public          postgres    false    255    233    3412                       2606    178364    logos logos_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_counterpartyId_fkey";
       public          postgres    false    3350    235    213            �           2606    178369    logos logos_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_designId_fkey";
       public          postgres    false    3360    235    219            �           2606    178374    logos logos_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_subsidiaryId_fkey";
       public          postgres    false    3408    235    253            �           2606    178379    logos logos_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_userId_fkey";
       public          postgres    false    235    263    3422            �           2606    178384 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    3350    237    213            �           2606    178389 #   metrologies metrologies_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_sloeId_fkey";
       public          postgres    false    3412    237    255            �           2606    178394 #   monitorings monitorings_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT "monitorings_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT "monitorings_sloeId_fkey";
       public          postgres    false    239    3412    255            �           2606    178399    projects projects_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_designId_fkey";
       public          postgres    false    219    243    3360            �           2606    178404    projects projects_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_fieldId_fkey";
       public          postgres    false    243    231    3378            �           2606    178409    signals signals_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT "signals_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.signals DROP CONSTRAINT "signals_sloeId_fkey";
       public          postgres    false    3412    247    255            �           2606    178414 $   sub-units sub-units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_equipmentId_fkey";
       public          postgres    false    227    251    3372            �           2606    178419 #   sub-units sub-units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_supplierId_fkey";
       public          postgres    false    3350    251    213            �           2606    178424    sub-units sub-units_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_unitId_fkey";
       public          postgres    false    261    251    3418            �           2606    178429 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    3376    255    229            �           2606    178434 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    3392    243    255            �           2606    178439 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    251    255    3406            �           2606    178444 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    3414    255    257            �           2606    178449 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    3418    255    261            �           2606    178454 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    258    257    3414            �           2606    178459    units units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_equipmentId_fkey";
       public          postgres    false    227    261    3372            �           2606    178464    units units_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_projectId_fkey";
       public          postgres    false    261    243    3392            �           2606    178469    units units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_supplierId_fkey";
       public          postgres    false    261    213    3350            �           2606    178474    users users_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_counterpartyId_fkey";
       public          postgres    false    213    263    3350            �           2606    178479    users users_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_designId_fkey";
       public          postgres    false    3360    263    219            �           2606    178484    users users_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_fieldId_fkey";
       public          postgres    false    263    3378    231            �           2606    178489    users users_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_subsidiaryId_fkey";
       public          postgres    false    253    3408    263            $      x������ � �      &   ]  x��\_���>�<B�;%����0�E8⢨<�%߀Gv%�$�8��ن��T�*|����o���ά4�����a�*�[�ͪ��ju�4�1��1�������~V������a��~Q�T{�����W��������H}�~R_���������iQ���-�̸�X�����Ћ�����^�<��~���p3{��u��I��?���[?㯗��O����l���������;|������yů0N�_`��t�U�d�Ti���5E�F4�4����C�����)��*�ٔfQ��EK���7!��$'�\�P�P�����������,�,��G������,;%*�J�3�B�rA�j�X\�ۼI�y�����;k��>{���9lmZ��1+S0[1��)eLj�P.��-'9�KIALJ)�*�KcM�*�(WĘ���HKĴ�TZ:GKW��� �\c[Zz"-��Si�𒼒��J��B�rC�ky���T��L��]��y���C^1D�%v���D^:�ey���� r�0⹒�$h�E��
0>*fx���y�!/7@	r8�E'��P ��_���S�WCX��R��B�bm`e��?����J�[��i'EHg=�WYqQ��rcQE��m���h��z��j��rT�!�鵶���f�DA�ȭ��ش���P��k���n�x/}~�3��f�u�/F~�ʝo��дgM5,J"��@$q��)���<�8�)� �$E���pkT}r;?���e}�n��s�TR�j���&^+�M%D)@f 
�8Ap��..�k��_6���>0��o]���yB�a�/��&����>�$�j�+�*e�t�;�K�씃���r6ѭI|8?�,�����S�n|�nez
:����~�� G���n����BTHZ�k7f8ş�#���у���Q\5C?�Տ��*��޹��&�����N������ԟ��w�D�E�|���w>kBъ�=vV��������9(�3��|�|q6��=}�ݽ�1�/DF߰�r���`�(aP['
�c��_c���Z�[�M�(Z�靶x9���������g�L�-Z�����	��4P�K��Sl��.~�q�/	�	L�.��>H�IW��tN�CTh4�%��'�8#�Wb!�j�;F7�Yj���H�,��0hAG�.aE��b:�ī��*L�7�^�����w�`�L�%j�\�BTء1a�1���%�U�l!*�В���̙+^(L!*�jy�ШY��u1�ՎL9�2P����Xb�f1�8&G�!��0ܛ��-��n��t���<n�٬�t�t�2� *-�r{���2N���8Nnp`�4����A���Ὓg[�ו6�T�¾Z��_d{g1�~Q��g���!>��[���~)e�&�.�P�!*�i�,�J�D1�ǔϟt�:IF1D�>m���!TbymdGx�ek���#j���wu%�I܏!*�i�ls�@T��W���H��U��*v���qQ�AՇ.�j�Z,C�݆2�e.*.K�L�!��QV�2$��ʯı������J�6�.3�C�*_yiO��{l��d�p�R�tlc���c�R�t�����!Sl�U��QN��1D��)���ד�ZMY���i���QK�*_y�^K���n���a)Z�96 +�A/7A
!��I�cd�!C�j>�3�#����z��N���O
Q���(��g�}k�2����*%��
 ���b$x�&!�Հ�d�;fF"�DBT��H�f�ZF��X�e���ek�d$Tš�*�B�j;`4���2���l��!��'�$F�e�.��a����5�җF1D���:���
4�KB��&�ef�!DMt��`-��}rQ#N!�[�
!j�k�r��n��Z�r-D�v��tBAc;%�*���!DqF��rS	�jBX��\�ĉ"d3a;�(s`�_C�_q�5��
��b��\�P���+��B�b�=i���,3
C�b��	��u�c$�	�[�-?U�M�>j}�"��[o�^|��n��gQx�X	j����x���#���ژc���g՗789�� j}���on��-O���_��EsHj��X�q����#&��9�'�-�gК�c<g�1�՟�a�t�I^X j}��+� �@r��d�R�� ���7��@57�?���p1k Q�K�\�	�*���t%�8Vy1B���\���#��6V�e�l�46�5��?l�<��p��â=���M�l4�G­���U� C��M!j]`���2h��d�%B�:6�c̉1K6�-���J� ���V���fѹZ&���z�Ir��-^�M�Q0Ɂ�0σ��!��&�6M��ڇM�m����h	��i�Y1W��@
!�u�5�6�@�4ί��xMQ�pڛN���
��P)^�dO� ��1�Lk�S�5��k�iN3'�������޸���7�EX�|��h�qp�?>���x�8����~��E+y�y�6��țzy�(�H�O*늫�&�Ew̶v��e�v񦦷�V�L� K�J�Ҙ$��u�H4�s�va&���C
g��A?,�R����1fJ�w@�94��&�U��d�{O��꺒¯%	�T�1D9c�]��7���=F�������j��%4��6��%� �%H r���l��'�2]9��6���T\��wB$>C�_�!A�+��s^bnH�v�x���mS�R�ti��!�Ӕٱ��ꆑ�Ɲ�Q�ƗW�{V��,Ɂ1D}���:`V<��]��V��xfW�-X�y�!���B:��/vC��;h��I��"^oQ)�����1��4�2�rG��op��¨RJ��IQCH� )��vB
�B��V�dny��$�*��u�r��	z�׻��;�v/�U�N�W\%r�bG�vw�h��X��g�����+fq���������7����(/%nC9S�#/��?�ɮ�����]D�#o�ٞ�R�([�s����)cT�W�� i�<h��O��7�V��o\�O���!<P��b�]
��X�j�A�FA�6P�64w*r��2����L�a�� � �,��[A.Uy0��+�(9����\�DF�� H��c�E�&#�(G7��1,�yHhv�g, �� .�8Z�Pܹ�W0.��s��f�:\�A(�|);ѰN��@K���Z�D��.�m� �C(�m���Ɏ�ދ�ȳ�x�o�K%��C(�ԝx��ۉe��|���<|N%�/���ZVJ�^����:���w�F{*rj�QP�Q�������~�9K���J^���P
�9�R6�ً^�t9����p| T Üj��lVv
<��{��_>w�?٘������Ysg!U#�Pt�o���6����]���{ Q�T�)�V)�٦��k�}�Y�u�M�N�� ���i��P��_�����~�Dh޲�҆�sj�wM6q��J3dTh�a�j�\����'7Ǔވ!���UG�F,p�@sm���q� ���O5��6�W��{ӣQ��H�ڙ�HU��!��"M�{x��{m���v.�0��$�����,��7�V��� ���l�d�N�����4z�lhyFv�l|ʡl/F���h�|����q��`x�-��/�ܺ��.�B(��n��C!����^]co��]�%R*;�(�R6��d�0x+@��:����\j��lSOC�7/���W��MFx�p��o�k��B�ǴX������ʖ�4	�'	���e,yC�GKHLC(㙖���l��n��9&S�F4�A���|9%��/%�����j��\��ݨ�[���)�MZ9-�O�J�h��1�MD'3�DWRJ�_ҡ=      (      x��\[oGv~���3��t��-X�x:H�Efv���
��Q��q"ɢHj�P$�Y�c��Ƽ�����%9��:��,��}��;u;�:5qC���PM��tM��S���Q��DIҌ�͸F�~����Ջ��5� i�u����;u�~D�ӵP���: ���Oac������be5�uo�ΣջwԎ�� -0m�	�_���k��S$�D�CR�5��C�#5�>������<}
(�C5�5R�h@�}�%��e8$yѿw �H] ��+�� 4��ǦN��p_"����� �*I��R!)�R����9Hq�}-%޹�IA��u�������#���˦ڃa��_����X��Z�!ʳ�%Ij����%�>p�6�g\���Ǹ��	�Խ���"RG�H��~]=����<��1��p��H]ÿ.��j��กu�R��iC�YX���aV��5,�����:�	$	�'���T3C�'0(W�ח!:,	�# ��pQ�'�Ñ��.qt�/`��pCX ��(�H�@����uY�t����9�O�0���uietc<&��A���W@:��m��� �����3P�0 ��!�$\Y�)�K8��v�5�*3�3݇a�G�X����YX΀Qj�3�$Le	S��T�C���=����9	�^@f�S	L6D
b[?�t��
�1F2�QE��{��jca�@c�1C���ĘP�q�����%u��76�D�-��$�D�%��=��3�Q��^,F�Fl�#G;抖Ȥ�d����40��o�
��_��� ��h��^ɶ�HA;���}`| {�>���C��4���K�l�$����nH ?�@b������U�Q��XV��#޳���V�`���<�1���v1~�K��M=�Y������HA�U��AH^�n���;Rfμs�B�<\�O�E�uN%����<Z�cao���G��l��$ݙasty�4��:G3I.�Z)Hz�r��ڢ�j�8[��+	K�;D
��|X�>�X˚�HAZ:y[�YBk̬n�(C&�a�՗�ߪ�����5��lO�D
Ҵ"�n����]8�PԐ%)d]O� m;�Ц4a�aO�аjp�-�YF�U��#0��[���76�D������J`y5��	P6 �ç�F�{IJ��	0-��q�:#� �۞W�I)�vHi���T�,��~0A�
jǕ�N�^54B�3/�H�(��!�2$�����@��K��C��%�RW4)hۻъ8���H
=�	Dz�A<l{�c��\���7j[��{I<A	R�ns�كx����#E�kh�P�O�����Ŧ��{�?���iHA��h�wQ�M�=�PTC����AA�[,,K�s��4W��M�>�f,�����!�άe�29}�8�Ӑ�v׿6����H~j��0R�Aa�Q�^��sE���7_[I0AeR��N��N�.��/(pC
��Ѩ��*��5���0���xR�}.�;�1P��l�!��ߒ�z�	����m+&�	YᾐE;��Vg�v(\��8P���<7e"���3�W�U� ��za��Q�cw���>nr@n?K8�5����ӘM�ٜ�� ��#R�u�*g�N{H�qRC^���vI�a��19lg����|Kk�_nċ7 �jڣ':ڟ��X5���}��%�e��I���ڤ4 �� �5��J�O I���#R��
r8����xF5�X��<�(Z�FI�$`�b)�'��A�Q��$�[�<��6]#���r�U�T��Ɠ�����g;���٤�"��"�P�B�E�@|Кg�6�&�ザ�9i쉐ളX���E������3GL6LD
r;��1�~Ӎ�9P�}/ ʪ�4cnJb�u[�4�o$ Y�)�mwo�>�����x\��z�7)�,�rD7��f�h ;Q5uuL��r&�i2Z��3��N)���
�-5h�g���ר��$�d�O��;ڄU�	@æ��2F�/0�`�rS+IY�)�ت퀖�K�k���a�����V�ۋ�7�ǳ�@�����I���M��)���b���!�{��9�}p�{��I����HA�U)ch�ˌ���"���$RбsD�:O��v�'Euc#Iy��z�S��T�-mK�aL]�B^�D
����8+����>��T^wD
���X��k��+,�ꓤ��u��R�!�$Xٻ R�M=����L�\%�d�HA���3������=�A��"�� �D
�v�F;�Bp(�-d^�:�e���3���?1I��W\r�.�)2��3�{j��s�c���⦠ʥZ�����DBVeD
�v�;S57�/>������/{X�4�������\�Ev7�t��U�|�-�)4�cL畄'�N"���7�*�1�ν`�T>I5�L��+�A�PA1$È�����������+��*��i�e03����ۘ�{1�Sޖu8��^ڠc�c��dOˮ�{�^b.kk"����9砦�v�������f!lE�C �f���J2D�.�6�(掽Bk�+XBԡ4�����l$��:Ni�:��-<*B�mQ�ӕ���f7�3ن)���[��2�NpZ/���.��;�:��Tp���K���C�'�"+�ǰb�������pc�pd��ȸ�/���#N��bʗMJ�#-S%t�(��e���q��q���A�.)�$L�0d\��f�T|>��8���v(S�l]�U}-��V ���VT��^E�X�$���e��m�l7󿧰dj����ԬWY�	�:�z=�ֶ�:89����еk��_纔sr��uDqZ֌�l��=��u
aG�vi#Ǒ���N)��t�ě�7��"5Nl��yP�Je�`=�j4��ؔ+����˄W�S0�P�C,�+�ez�(�u@�
.~�e|�%
eB�(�g�lNr6'q���rg��>Ж��/ۓ��I�{r�����R-FxW77��j�3Z�OI=8�{�(�l:{��W�=�İ�[vI�x=����_����*gcU֝s�ϑz����E+�%�>�l��q�g�����t���f˓��͓Nm�	,���H���4gk�����Z�&s�%���g�f2Aam���hV-���<e+.�����sٖ�lK����M�V|�U���h7sٳ��E"��*�+=rO0>��Y��)wR�1sVj��xt�c��~Φ�J�d��U_Nѹ��k I �����Ջrt���]zg\�QZ�wY��}�8���MP�X�|�)��Q��Z�$TYwX;��;z2>���\��*`���>����-��:����Na��e��K��vIIb�j�d	]փ|�4Nݚ�1�" �����Q���+k@��;�x�t�c�O=�⒀}�G��C!?����$B��Mꔃk?
�����������/t��u�ˇut��9[/G�-,�8��n� q�u���v���'�*�^�<�V�2]�@��zE��M�֜���=��ɢR��Q _�ƔHT	[֯�&���6�ݖs:�yBp�k�S�Y�_K�E	d�=�m��Ȕ(pv�y�8������>郟�ۿ�xz�����3)�*]75$�N�؞�O�7/em$]�4$AH��u݉.o�p�9��㙛�1*�C'�N���C꼐0d��7Ic�j/
���0o�չ�׭���]�$S� �ňu�����]�H ��K�5�rD'�%5$�W�1j#<h3���b�|��w�c�f��I�z��-!�D��nF^�<S�T��Rg��u���cى*D�B �*�!�{sg�/k���-�v���9��jPG<���~�IQ�h�����h��M1�Z��r���c� ��7�Z��0V|������/>X��E���h��v��S�2�!�]�8��9�ʿ15�����z����� ��M�3{��_�p"܂���G��oW~����qg��l���j\�W���!މ-��t߬7�C%ΈnW�Î�D����L��K����!_������G��'m�9�w~��������VV% �  ل��T[S�5�r`7.)�g=�0��ِ'f�!�I�/JP�S�vCs�!b+1���^���{:K{M^�[6����:#/�B�1$��%R��8Ӏ��f��R����d��|x�O��Cv�@���k����xV�W���e�En}��Z�����1�8j&�0���N?�Z��zI��Z��{\+�	d�ASyUE��q�u[k�zI�d[HI��l�>�rN��v��{I����Ǖ�_����{�VV�O<ZY���wV��y?J��H/)��ŭ�%*���WC���R����h�Z��Q� #n,�Ǘ�V����<\�<�2������3�뒀�%m�ˎ�~����6�9[��f]��j�����DG��q�Y�XjԒ=��q�ʺ�n[$���
�+���T\��e}���\g�J�~���ϸ�$��W��c�y���Zj�O^�iҊ3?���=���"���%Es�r4��uʟ��a�i�%Vf]�@��\X�������i?ʝ�v��`�G3�qɽ(f5!�3��igf�$��4�"�7���4�<�<��c��y��$`�^_�6&�>��c�Kp+�E��v���ϾIin,?�K9�Ƨ�����Y6Y?�Z���K6���g����[�(~�tc�!�1�H���X���/?�?}��^+��:g�`�%�t����v2ܦt�ɧ�^+�}X$�����w�8�|N��e�x��-5j�^AҸ����EA�/\�4�+d��&��˥�����o筎u_�K�N=P[4g�$�j�a?y�����?��'*��[���)�֓W�������I��,g^��ʃ�����O>������'�+�n?�"�գ/ZK�*ك���-�S�	P�(��A�6�ݡ�6�E��76R�q�Vc��[��^ e��o-.�ï��On�}óvccpW�0n���u`m[����
�D�tEn��N�[*s�J�$�֭pk��2���v�׫p�dn�,�$QT���l��Gnq�[G����7�EI�WW�Z_��%�mA��f�Ϥ      *   �  x��[�n��>SO�K ���d�grL�A�`/s
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
﯐�JWB��:��r�	n��nh-T�$ǒ���0��E�G�y��9' n�1�Z�-�ڐ�CAs�9_Gc��Oә����}Bk ��ᓼ;4�ۼi����Ћ�_9���"<T���[/�VD�� x]�pl�>6yTof6q����S�Ŕ��e�nb�T��[փ���{�pD�&���ǭG�O_n�Z��B��|      -      x��}[�#Ǖ�3�+���`'Rq���X�<�a��Š!"3r`�k{e��GI��3+/ܲ$KhK]�ny���v[V�ۺ����K��LVU��$٬��jJU�,���}'N�s��	>���n}c�d�y��f�\�V�[=�>�������<\T_��R}Y=�>=}�z\?���3��Y���ħ�l������u�~��o޺U�U�>�>bY�Au�_N2*��(S"[Tw�����;�=Oݭ�p����t�ƭ[\リ{կ���/P���nu�U��KWw����K�����x��Ƈ��������R9�qVi"�/�2'��%+M�=>1]��S�	���K���f���H��\�A*��`ʁ��wO_ŕ&о8}��
��$�w�S<z�����>:��t��_*���u�A�w��~�����������2�D,&�"q�q�+���Ml=��,S�����e�� �/��Ǔ��M�}Ā��3'��۪�4��RQR*a�����[E(c����V�Q��RX��N��:��Z�n����߬>Hjt�����Rs�GO��RIJ�2��"���\%� et�yf�"���Sx]!�Y��,�&hI-0��3�r%�Q��:�rM���/!G�l����
�,�Ik0?�����]�BD� (���硢,�p���(�|)UF��-��^@ɟ( �=�fT%��(I|I$�q�(bYa�&�\�B���f���.m��]@�LrfX��G�W���������Wv��ïaP���JR�K_�<�ND?
����#R[4g�[��`��m�K�$��`��q�8�P�K�fư�t)u������1ɟ�M���1�	.���?^��M����2=���7������/����}���/s[�@ъq"��i�T�"W^�R�ҸQ��8	���m�挏c��e�m������<h��|Vay#l�PJ���Bq�ckFf��h��V��x|T_�����-p�HW��E�y���-��\�9ɅN sC\�p/=�ׅ(Ʊ���j��-�^+n���q�8��m��)�?��~��ƕ��q#�g�?[��髈J5�����V��kS���Ssw��g�/X����B��x+����\:Z���\(�ڢ9S�ܭ�M�<�4�u��ø�O��,�C�N���A��tș%�4����Q�Ւ�k5�rK4gz���i����:��8�[ZZ�TV�q�wy�L m��s�8�2�Å�$��
L�^
A�5@+\�s:Z�93[��S�L��+M�����`#Q��tZ�`�%�	��e�F��)y�������y�6j�н80^v��֎�{x�[�cW�HK���5s �)V��a��ԣ�n�Rd��Mm-ќ����|�w��f4��xBt=�E裢�]������\���q��.�c�VK4�tݕװ�k�5<)�en�B��Rŉ7Ɠ $� ΰ���7C�7{K4�l�����k�*<!��k� ��|$�1D�9lm,=+�a^�qG�-%��H��%���@�]?KK�&�����V�v��^Ғ9)�*�����%��+����hG���UR1��-�s�v�����Ǹ��SPV�+�.>��2EH�}9�Ry�r�ZN	Fm(��|��n���_[4���k���@�?��cʸXSH��D
ψ^Ca�\z'G�O!Rbیy�mќ�/p���8�����?	�R2W��!6��*�"��2��Z?��*�R�̸15l��\_�g�3~�����/�*�b�7�B�O�0 ��y,�̏⧠g�����%��������i�����z�+�KBcr*\vD�ѹW���w5�T�:��jl"i�漵h%�7~�B��YŬ���B"fD��Ư&T*��!�Y��q�ۢ��HG��Z�9���z�/o���~ ���?X=�VFn�;%��C|��)���n��>��V���K/��J�zؿ��������{��Eu���_�4A�nr�Vo/�����B���f��������}w,�[=��#|���.��00R�&�0�Bu��5yY���!�D���Jѐ���Qќ7�	��7�+">B4��S�B�^�d��G�~ �?�~7I
j: }�v�5��t���?���`����z�Vu�0�����+��k��Wҍ��S3���E��:�����> -J͕�1v�0��킱�l�A�[�Ԩh�.r&cx��[�̀e�q��;�	�_�yv��W��w�_�m�#��?ߝ�4"OK�.�N�WU9�>wB�{�넫�ɶ8�;�Ds��F�����10�r¸S�Ԃ'>�^S�Z��������⌣�yW���~��	���7��#�0��X	���9���DR�b�T�|Ζ�Ź�3�y��s�څq�G$"`���W�'� .
Ɣ�\�Pg̎�vK�Ŵj�����0��w���6[�<FE9aU1nBj0s�pnD�Yn��� �U�ꝑ�U;
-K�INK�j�	�RJ�B뼴Z!WK*�
|�>�] W���3�V�q8���<2I�=�(���/��PB�� [��F����`��g��D��hH(|��b�,���o Z�Z5@��n�y��D^[�������*�	16;/"1�,�*?��*�B!o� ����T��l�SM�%Q���9q��-��eA�:�P�"���ͷ ��|	`��0�jO�*�b�s���� p� ������Wg�`��DIxՒ���2�����:�c(��}�$8z]P���5�|�Qf����J�J�-�!.��Ec�˲�m?l1j��/�ɤ�ΆP����Cu����R]Y��v�΅ĔȽ�1��:��TR���)��يu��9����sGc��-�����Ht]?�WC)�Ʃ!�mP6[�����줗�@��vC(�Ĕh��z
�^��zЍ@o�W7F�ƫ�pRۢ�p-���!XB�e�
FD�;U�P괻�?Ds�嬹���}�Eg���������7xtܭ�I{�o�E�Z�_S1qSQ�<���j��G��z���|��6���9b(�f*�_a3"x��1\nk%�,kCidwtDP��E������MK���;¥�1Y�]�R�#�(�\�4�{�m�rc��%�3�1Fnl��N�R[�`8աJ�JV�������ܸ~�VC)Y��E�1D�-�[����`9$!/��(���`:
�RE��VZ:nF4�姣" ݎ�7�H��gNϠ�u�W��_��K M��l'�9�!>�+J�K�o 0ؿ��O����&��q���
ʓϚ�� �U"�#>�[R�V����]p���j8����V�yg��3f�f�l��B��f&�z����Rq���jJ_fB�l�B�T��YYG�L�����z�H�9ˆ��E@l2hݾl�5�<G^f�#��%b)Q��L,`���F��WoĈ^�E@y���9Xl�9Lc��a���2'�
�P���d��j$�:CӲun� �d�jo�:�zs':�Pے8�K"\EQ@�y}��R�js�^~W��Z�s���Y��p�cڗ
O�w����f\�k4����ɠ�9X�D���U�h����DC�(�)8�\�W{L�d&U�p�G�'�[Di��|u�edZ�d8�.JM|	�!�0�����h
����b�B��|e�.:� ƹ�Ok���s�-��h@��%�����bO����8������,c�lCh	߃YΨ���4t-Ѝ@o\T�g-���lY���sY��h�F�������x�B�Uncѯ96�^��#����OW��B~�Eysm���(��0y��R%w$疖\)���8GR�~���-B.o��P95��5D̉9����-��	1Qn Z�C��@oU�z�쇱\�B��Õs#�J�tY2���s�ڴ�ɉ���򩸅��Z[���H������="�B��(�r�=P�
Z���
}^��XZä<��s�`TDX����A�|M��LuK�ݬ����F�Y3^���z��Ǎv8~�n�vG�U���+� �    Z�٪�̣���Wx�պ���i����EՇ�U;g}�5/��>��6��>��(�V7[�ou���q�1����͙���0�m�߆�$3�[xg�d�����&�+��[�d��n��w �{��_��u�iw^�s�..�& ��Xhx���T$b�FX�q<x��qȋp�
�}Fx����[�_6���^�l�#^���1�I��պ���KS��W�΍x�ߚ�$5IW{��$[���ؿ�]�\~oM5��)����uE`nc�c���T���b��{N�T��{�X���ωg�$�0ΙQ"�~�Y�*���);,] ߢ���~�B�{˥��)��МEb�,���f) ���;i�	�rЍ@�m++�z�$�����5"H�)̈���lI|T�U��D��V��B�%���#c�-��E��ʽ�Z�zou���w3ʆ{�{Z�4�Z�`��2�Ǉ
�����i���R���Y'��@Qլ���g�i�u߷�,��I�|T=�n�P�����ui�x\�.I���c�I����Oj�����3?������栌O���b5�=\9<��/6L��{>���T�'���/���OiN���l�<����*]���A�ϪG����i�>�u>vC^�'\����[�J
%H�a(���j7��/�ͬ�ñ�A6��۰|}'��|,s�]T��� *I�/y,���4�6�/��xo�y ��,��D�B�*�Q��ú�N+Ҟ�R�ȹu������Bt�+��\{����=H߰H�GT�҆,�#�ª0N},z>�w��z��T�D�|��ǡ6X\W��6� M��F���>0r܊�^3�T��У?�R��F4gfj�.}�Z��rcA����$"r���-�N
x�i�ϴ���;�]	`����mv��^�T�RZ(���L;Zr�T΂�:Ҳ���X`��o� �T�����B�������HaS��R� `�M�T��J���(5b��"��E_	q����*�*a7�w���i��ԊQZ=w\	3t�.д#��-Г롇�Ѣ�-�I�����TBh9��L�.�$B*&M�%W�F�󥔣V�%�[�����]W�W���Hy�"���!���FK��.M�&�[�`��)���M~��Z��:�TOS��#6�����9�;�o/�4�;��#&�-�[D�� �A��U���6��E��P����S&<^�w�Д��Dsf�p�Ŗ���Fx��;AnCnMZl��>�ˤ�Ar�1J�65$TK��C�ż1!���$Z�w��~MY�{�|�L�sX�>}1�a�2*�V<�F�����G�|�z�:�𧪓�T�x�7��y�۠����L3f�4���L!R�� ��TzS2�	n4U�BԽ��mt��NElSzz����z:l.��x��B��{��ZHE����<*���vU�
�R�����O:p�oV�-K�P���,mȅ)N���,�H��eQX3؅�U���wE�{gn�Ҷ�a�y^�RqF7��+��i$�(�2�d۸*�r��ٍn�۩�m[�r�=�,��+�Ή�,m���8�������)G2y<9��ej vE ��m��#7��XB^FAJh=���=��[-�tD��j=��8U���xoQ�&�,|���8��T�H;�S�2���Q.��tdI�WC~vW4�["7�z������ק2 ���嗹�oSK1eƖ�["p�M���E���f���~����7��o�{�������Y^�dm���mќ�-6�I���s؏��B�t��@���������}��xo���m���9ybNt�� i&z{�"p��R��뜎#'}�usخ�%���&鎜�v	�2��"ށh.6wn:{�9y���fUF)��; ]�b�q7~]�l*�v�uE���<6y��}�8e�Q�FV1#�/y���n��:D�ҁ�ba�1�kz�*��n{��Cl�����;�O�)V�7�}�z�9��;%;��]Ƙ+��LR����Д��-`�Y�-�7�_$��$�n_�cl��ѽ��g� �k0�੧F�vd��D`mj٪f��8����RI�����"�]S�i!�����5ә�v�q˸�ϸ���9хK�:��] ~��p/J��8��P���@�p*��H��J	��5DLyzB�8MHFFWB���98!�!�]B����V��L2V�e��'��lMUn
{d�j��m[���T�U�#[WĖZ;���v�EE�4GO��=��i�/4�OZW4��D�r�l����IK�� �A*�+iی��2�G�v%��%��`�e��h��#MS��O�[�~ڨ��\luh��u�)#�"_�z[��-,���-Opq��,sjd
k��|sC�a7���斂��)�@�6#l/�x$lZ2���-5͹�f��Ջ�H�.�I��>:3������\ (�c��Kw���~�{k��ZK�l��"��L��S{lrG��V�"g�z �����[	E�o��(�����v}���I��Z����E�n��&�|>��r]�`��[18��e=�-�p�^;g�s�Ns�����P�Es>ٽ(��!�U��h�t֍��mHۢVF��?���stIY�)��`��@��jf"�X
���%3��c��D�ǦF�ٿ�faׯz�.h��T̍d��"�5�6����ډ-�׺�lMC�!Α���IN�$s�p�q��Kȴ�b�� �+a[������'̥/���%]�\�-vI��إ&S�T��ɜOvײ�N^��^�w���v�
�iы���֮�M�v�J���'`�#$�W#&�-cSID�o5鑱}3#�r[Ʀ֜�������ذ�OG�c�V�Zg���订��C���WH�����t��`�ԃ��CijO��{��q(�1��B��!��q�/�1~�V%�2cM$����o�t��k��Y����~OR�z3d2l}::��E����Y�φ^2��a��h.&�'��>�
�|���ʬ�]��D-w����A<:UO)r�0�H@��bAq.:s0bL����`��@��\^
����^WE��v;�D�f�2F�vGjLM�����l��%kw$���4��0m���������Ԭq�jznf��P쭼�aF�+�׽1����焽+Z�-�٢��ߢ��c��a�y�ą�AIkO������A�6�M�gv��]ޢhر#�C��R�L�A���-jo ̎�T�� ,芀��K܍��zɩB .��db���+[�n�q�����t�l6�v$�kj݃59��~�ު�UV;���f���zּȽW��G�H���xoq����+Ox�T2�n2=ќo>������� I!�������0B��Zw#��Dsf6N5�,��?�����U��U��w��t�]��t�c��kr�]^��c�D��`�H�����i�$���.��Ìy��9�p펚P�oz2����Fi�Ҟ�Gjl�Rѷ��t%s���{nՑ��&�h�_�L���"P���J5�GjLǌ��a�OW4�vs��5GjM�H�|�D�fc�[{�����T�k���h�7�2���?;45�|m�o#�s�yԸ�phj���nD	�٘�J�#1�%F�-˅$Z��y�a����ppj�H&`(B�9�+����|x�_���X��N����ʮGƮ��F:���1�����b��iG��alP\�����3�oC�#c�0f�3fV�M�
�}�Bۇ��6^m�<�z��G�vb�>Ć6+�Ds.���ɽ{kۃ17X���|s�dn.e;�j���Ytl	��"B�F���A���w���4,�T����t$0��g��ݰ�hw7���5���M����۝1i���=�Jr����ۅ��<><�+cSIuL$^%c�ކ=�Jr�c"�*3�3+Ʀ��H�J�%�=�Jr��;˯;*����O�KU�����͹�Jp��;��ڍ-9�q�D`k*S�w�?��[z��lM�`�&�l��ְֹ+[��׾9�#[[���y�N�lI��T���n�ڑ+G;�    �"�5u�}3G�vek�t�	������9�#W�r%Fb��lM�Zz�|����IتO'�cK�mќ��XK��8��#[�����E`k*�҇?!���8%k��*��"-}���\�2���{"�5i���x�ΖPuߡA���lM�Z�g1�l�Ɩ��"�5k��8��[Ö	������Y�#W�q���2Nj*�2��0�\m{�+)��c'�Ds��"-����NlΎ�J��T�e��8r5��X�����H�>�qdk�5vn|K���W����+aL���[�l���c��~��b24	�ڢy�,2qN뱈�
3ld��-����m���8|&�#^x[2�-أ~�gF�c�h��N�m���T�����gK.Y�<�_�-����4��|�7�+��ڼr���-��o�Y�~��"< IF&��r�n�O���3�m�@�S��_�7�~[��H��5�BT�FnI�sO����JR�R[IiQփ�-�XJ|)�U7�3A٧c�wY9��u�#mG��
��ji��=ќ�I_l��G�vb�nvi��섮�M�
���)����X�ӍL*m�<m��8�{��Qǃ�w:���7ښ�-��>r��?�ہ����d#݁ۢy:�x����#c�0�4T#c�-���'$��N�۞1�TbIM���z"06U��nWqdl{�tt�L���g]�����jm(;I�u�b׎�;����ƈ]R5���B�Y��Μ��.�~u'���'8�P�g����{��N�����q��L\����Jr[c�v����,g�1�BD:]�UAt�b��~p��t��]��E�2
m�rD���Op_�W�&�J�t�H�JJ�����⽤A_z-LJeu.�E�n��P�Q,~Ո�2RaTIr]b 
���:'P(�GmsV�q�R����`�����!�hiוc�=�����0�Ѯ�;�I.�
qV�f���t V�5��~d�M������_~����/���B�W�z�xq5[�_>x�k���J/��߼��#������y�i��ջ���B������&T��.�?{�)J���(`��#RYN<����H
�a�YV��j�Ef�@q�"�!g�]I��Z�[��W}|�&Ah-�}|����髵v�|Qg��_������q������՟��?�=?�������Z�x�W���6�Q�]��=^`��
����Ο?����)���A����!�3y�ޛ颐FbR����e$6����S&r�X��36�w��m�w��Bg�}	b�������y�Rf�֥~~D)���p8.�3W0!e��A*0���v8�tE�,)�.h�a%��J����Y�������U����륬/ыe���źRz�R_d�j���Jf.Ͻ/d�_�G��	�{���B)�����%g�cȶD@�t��{!��އF�@���F�°�4���5�'��$�I�HA�����㩉c�	�44S���P���!���3}����ˁr���TƲ�S�B{���>��Fi�O.e����Q�����!KIGq�u�'""��:8�C���H2���/��/iܟ�+󌽈@�aU�ŝ�5���Nb�#2�(U<�=�G� ��HXQ:��-�\t�ѕr{�,�˫�T��������j=�|X@Ш9�E=��"��;�c���gj��������B�_�|A>��h��
�'U��b�6!�-�(������T�ͅa�A]��;�)^���+˘��ޮ�+B�����%���*�K�E}�����
���i�u��K)Ӣ��q�C~)^e�q�a�q!(�A@�$�[e�+�E<@�+�7�j�b�k3c��+���X-`.
B�����z)H�#��M�:���~逤�RwxD�O>~��V��I�6T���!�N���ea�ΐ(�'��b������Y����qE�U�,���������w����Vu7]כ�;x�	~���]��@����fеy j��<��⸄�y4�!�E`,	����y�����H-K�o��P�T0-dV�\W�З?N�ۋ�?RP(4��興�ؘ�?���(�Z�n��`��Q�!�z��4F�R��+���D�hb�T&=�W= u}��3�u,���$��f�|��;��8I�-���	F�/�і~�9A���W��49�a�DÁ�P?�x��j.�~}A�A�x-�lf��������f{c
�h�b,_�,�ʹ�}W��&�통d�(��{�[��
x{%S�)�O0y^H�j��>�ù�+��N`��E~����ſ�������zT���m���!�.�3����w~�eYZc�ܒ�z�u�c��z�=uF��
�X:B���u��h.,���i�7AmSK܆��T'�ċ����5S	��Y�Q�I��4S/�|���_�W.$ ��Jmӄ}?���?�[���ߍEZ��	�p"]�ٽ%qT���T>�Dg�J����A�+ԣ�ٽ��_�f~���_}�[�V���Ly��@ߋ�g��>���p��.R۹J�dܹJ������?�+��rT%�TW߬�7��ᙶ�6)�3���="�AL�.�/x��X���&5t�8	����������=��W˻m'�������-�W5�驏��'5��|q���OV/��? �5p_Ԅ>\��$ �j�>n����|��g�"G�^'��N�F`��2�H��E����J��;zs��he�M�.3=�a]��i�ejW?�xF'�Bi!=��p�$2�7�r���΃�&�Q�'K�Z=X�� ���������gp&� MaS)���a=�+D\r[� sL*k �Kܣ�uE �l��#�x�3
6<��l�9��e�c�V�#�f��k�x 
W]i6
���}#�W��_�;4���S�E�=#A�>q7\���q��^J�19u[�7�::�7�����z�+���S.������<�5\�5Ӎz{*#��Ep
k\�9_�%�1[��3庌�Θ_���)�<%pO0Q�"�_���B���m���u#��v[�F������@)9�p�~��[������z��3ot�����~Q�{�/����J h��fS�U��P_(+��J�5�,�K�2>fRڢ��^Wc��SWm*\!����b\O���
W�Qmxy��Bd��0=p�W��O]g�������4j���x�6��b&~Lg`u6�]� �!�%&�������-�F~���g�?������Y�\�R��s���������`�cE�]��B�m�a<��ҍ[�e�[���gtfc*�CI<&8"S�U0f�̹�i�%3kS��/���^��&�S�i�S�6AԻkr%�e N�R�r���t��<vK��5���:���T[�I�|��Mi<e�mJ�X%��-���cjl!�%�)�x�W�l&�6�5\��I{S�[N��Sa���Һu�$�4���.$�z�%�B�}r�)"�M�'��<%�LPދ ��4�%c���t%�46ΐW��x�:�+W�����d��M���� �
0!k��T`��_O��������������j馕��_��_�Nl���|�{ߝu0�ukҭ[[����U�K��E�A�ҷ��r�����&�U��Yl��c"ܙ~��L,%K�]���uE�3���-m'��D�3���O��v:&�KX�Ν�nD^�}���ѭ[�]!������$=�x�~�0�j�}�*"��q�FPi��
[�Jm��(,?dW��nLrzh���_�)�i�v�+��5|�C��P�/���FaXs�®š���A��*��)i3gTU��4�i6�!L��4�o���7; 03V/K|3����7�n~kmw8�Ŗ*�%�}W�ճx�����|����ov��?��uK%&uN�a�YJCVԅ'M���-�%>S*7r�-n��jez�%����W�Y7�[d����{�}���t�����N����/������;�~3n�����erBբތ�����6��p 5   nVg��b���o^�e��L;����^�?��+��@��k<�oe����$��B      .   �  x����N�@E�3_1{D�q��ɮ@jE-&Rܮ���e��Jl� ��j��F	I$�����	.�xQ%#�t�{ޛw�Z��ROwtFSZ�>-iDK30)v3ZPf�LjN��"�~��a,|����p[7��-��R�-�Z"IC�F�t�5�!��}��tr
���u]�F5t�֒�
���.�����|6}�f9�����6)�K�hfR��.�KJi�KaI��op���	�^gg�`��h���d�0��t�p�y����'��s��n�d�0��xH#���yToܔ��l��c��3�^�ʬ�vr��^#pfo-�P��uΑ�S4�a����'�đ�Ws�X��MS?�e�w����Q���hj�&%Ӫ��,I���Ec{��c�!.�a�;�V��/ ��~(<��]���}�MU�˷�2��X�G4�#�R��:���E�प�#�h�e��'n_���JR"i����u�X����הZ^��5*~��J�"��w6 #      0   �   x�}�AN�0E��)�G��I$g�04R)���D�j'H���r�?7�;H�,�=������;�CD�}5�E2������Є*�ř/���l�G|�Roq�����ʡ�^�$�m���z]���&�/��?�-ֈڎ��-����.:���~�.�@}���)f5�L�-h�6�E�3�)�<����8�Q�x��b��yt�Q�A��tz��t��S��3�](��j�2�BR���Z����|      2      x������ � �      4      x������ � �      6   �  x��V�N�@]{���V��G�g[�*K>&�RZ��Ї�����%RH1		�0�G=�N��:,�!���9�=�3�fdƦ���ڌm��|�6��y�����0\�5]�����(Yt�M��T�Cӱ;��7m��M��6���m�0�̽m�P��3m��T�o>Y�kⷋ��xR7������~�Gx>�n���0��"�g��(:}H�<g}C{P��e�m��!t��i�lZ�#��=s�.����;v$�~���$Wx�L�e~2��C��3�<#d��ng���l�Rz���U��|G��F����@Ce��g�&q���7G�DV�
Ȥ�%�)����n�`o��P�=���1e�X&&��<s���8���h��!�.BMe�l��,Љ�F&U]rӅ��{�L��1z� S鹾�p��m&�����^�1��
Kڍ�M/!e�Sy?dy�,/ey�%��n�N�L��1oO��ϭuC�<�;��&����Be�d-�Y3f����2?��~]n��W�Xq#9���9��:�D�S��kV�_��w)�MD�Y2�����%�O5��^�X�2�ps���e2y��I���B�-��v��=*�.����!��\	7K�c*o!6)�YL����O�y�[����wyɰIi��_�|0)������L+�6�#����DBkKK���H&��
�T�4{�yh��<;T���K�jB�K�i��6vYV�.b�
���܅si�q��M�ܱ���B4h �]�b�sV>�M8��������Ύ2ok�����N��j�N|�� ]�Y�<iRQ�@	e�1���d�D� ���%�Q*2��(i	JEF�҈�%�QR9,�3�@�JP2��o�(%��(lRq�@��(�HDa���i�"L��q&�����b�	�      8      x��ko����+��$�"��Ǒ�o��M�֑!)�� Q� �8.Т( 9q�ˊ�#Yv�(�/�D�;� �QgfI�\��h'N[҉����g���L� ���z�ߚ���zF4�N⵨���|�g���_�qԁ���GQ.9�����D��k @�	��t8�F�f.�����_glf�&L�2��N�<�7���K/=�t4�ܡ���D�ç.a'�7�p� �kx8~?^�oT`əi;wC���jyC4� ����s�P��w8�G� � z �v���Q8y!���c+pʃ ��.�`�z��q܇σh���Ah3��~����7���gM�2mz��C�i��3(%p�L���H�>�v�3IB�Y��#Vb���D�@��ia{(��-�9����:����D��~|�:��P~�\��.�
���=ʈ�M���<m.��K17<�xRȾns�5�@$��5d��\��P|C~޾A
�7�=�/0z6�G��}�f���[�)K��B�-�7�RV ��ښ+{�L c � �����+*�Hk�a}?~?%o��r(!�d�NÖ�\e/U"�8=Yp���'���}�8�E�<S�� +��2��|�׃���o���lߙ�m��ǂ�d�=&����cO���&���P���K�l�!���YB�d6(X�9B9�����>N���Op�v�Q=�(�7O�؀Oc/����V�{�Rw����D3�����s�A�����}9�M�L²�x��:��:cq�)VKL� ��~0qDqW�H��d��������&�k���"�`ј��8���h;���ؔ��d���=��-�u(wP|v�5x��u#���N��vv��HX�5�IU�<b��w���!�F`��E��$ݠ�6�Q|3	���	@�}Bء�<��G�	EƣC2� c$N��P�R�ϓc�N��8pݫ�i�>\t�����IRAi40%k~S��_''�g�P��I�$�sD�!�:�u�Cu |�MR"��F)�s,���ה���@�.�*�1}�����;e�q�+��!7Su�U/|s"L`���~5����mד'�rtнu�� ��Eҩ\�<�$VoV< �����ra��@��|��]�Q�	�u�-� ,C�aI1������+�C�̊>�	tU��T��=I�W���n�
��j��@��������D�p�Q#��	]���?��IPh�r������b�0G�nC��%����F�Ձ���*+Ƀ�ҩ+f��䔕aǶ�VKY� KG7 ���r���V�l�k��(����)�KZ
i�]n�9S+��n�� ~|����:с� ��U_��'����V����)�MI���'��nL�yD�y@��b��Ūe7���� e��6C׷���P�<���L�Q>�aB�ݖł��U��m��F�bQ� J���n�b�����0eR'��)1C�\���+@�AՎ˃p]u�EAβZ(�f�/�9�8
Z a����"w�W���Z��=�k�ţ����\�;����ì���ѭqk�v��-!��r�imX������Y���B�@��L����$t�����*(ҵ���
�
Aߧ�e��S�#�\�"kYV������F��B?��"�~��Yv͉�_i�����P�V�������.���꼬�D�IͺK��~�� �(9��m� Kwe��dM!k��Y�(-�P��؆�V����1G����T�A�ꮰ�����[���� L-�
����I/)SL��rn���@1B.�f?Z(N� �r:+BNP��[�$e&e�.!��(MY:p=���CeC��k	�hO�]�rmU�<BsSS�E �3@[9G?d�6�d�A���~��d*�,R��Ig��U%�3>�r�V��(¨�W��z���U|p���<��u_��N>�,Ԁ�q�l>$�o��-Jh��FeH
�Ttg'}�;��s�rXQ� �u�ݽĖ|R,��d���+��U�
$XK$F��u3�m§���~2Jm7i�u��{�NL�����
�u�ʉ�B��]�iT�Z\{T�����Pb�CG^�聮��3
���:��]uW��R���
���^�T�Dp��F3�u'����hQ���Z|=k|& ��E�k���V-��j�ڢč�s-����G<]�\aG�<��i!�qRX��(�!��.yA��V�u�f'��U��q�MuѠ+1��>���èW�J�ڥ]��_����N^��`���p�#IR���v���GfW�;vj�_����8�����X1��1��6�܍6�m�?�G�D��x��\�w��}�hWV��=�ރ#��v�(���v� �٦�K��b�zw�4�Rш$��W¶�����b{���������o�0
nv8V�
-o�X�A(��ixii�|ٶ+�|���!úb��+�he������ x}�7���o ���h�:�;�a���Pb~��г��D���5���PH���xa�����6.�{����^y�X������4~s�M�Auqd{NYG#��2�4��>�S���6.���]X�3~���o\}�������˿mI�@���d�%mq��� ��.	9eFߐ�`��G�{HM�#1���3GL)��;�$�� �L�X�!h 6k4T	k�Ў���mF�&�^	q;�<�� ��N-�&����.F�����AZ]�?F��w�~���2U�ĝ8���v&�WI+ �V��ݱ�(�c���H�:�
\���AD�\�@����"Ʒ��'i<��r$��	�0ﴘ��l~�d�DY�fS��9���,�vtǐm4n�TZ�-8� �t��pw�e���Y�8w������E�t�v�i��qs��W��y-����5��U1�Î�xJE������2��G���0�|���׍I˞�������S��Mm9��%1QF*�l�x��Ұ	��IU~�$��v�+@��\/�,O.�y���$T֢�z/�����tZ��qrn�O%�Ab]z�(@og�q�����
������~t�G�h�CPz��J�NB1Z���(��Iu=�@S����M�a�prn�����D9��	�%��"D�'��,�&�p�%
R-��k����}:�E��������C�Z� �d��S���$S�u<�N�h�/`cr�+/�����RϹ"�#��	�� ��������4xؘ���H�דS�!��z��ǫ��[�7x����]C4�����J�;��E�Bbn0�b�: �xH���O\��ܦ(ɖD� �1RKH��l��yv�<%NS��zr�*���T�m�M|})f�J�v`���3������>N|;���~D�p�мt���o�����~{���p���߿�ƪ�$-��������XYZ6l���r�����\c�}��+��o.-�f�'1�� Q��Vf9ٶ}X0��b�̰ӈ�5bVHЉ��A\�.=%�u�UvC�YM� I Ze� !E��y�\�2��m˪4��^�*�äh�3۴��m'��7�������}� "����'d+�~���;�����޽"�
��}�S4�-�z������r1b�[rMF1n1z]ґ����m�"�KedDq�%��8L�9�5�@D�NFoL��W-�2�G���k�Ӟ
�ݔ���ݬ�}{���դ�iG��d2��=���WV����V�8�� �-m�/N_�!�3������~��e�9i&7{/@>�T�?�^��k�����i/�/��2�`�pb�UP_ Ѷ~6	��l\\Z4η�e�·W��K���+U�d��6�*�$��N.2%�ɺ�	��o
z�X�kzr(���E��m����������U���78�A)�@D������+�*U��?���7o.�������r8$���NY �\�%�&�u`������q~� %\�hU�;�R�4�� ��^�j1�`@�����m�8"iyv�XK b�{*6M�}`$���m� 	  
>�A��W��<�0kݬg�-u��-��'2����
�p(�)���}��hk>q�n��n�Rε�2˛O\�K4�¬�yQ蟊�۩[��X������Sx�<��S�R��5�G%��/�����E�_*q{����
�@���׏A����حl�0NI[��-^��~��T^u�Ӯ�r�@�uSx��x��ť�T
�>����R�L����,W�%��#���+!&����!SQ׷x9Y�@��zj�>e���ۑxG�^Cz��~|{���i��O��"i�9("�R�$��4u`4i���r:Y���n3��,����&fxV�J&Fr�n���_A��]6��r%�����o��e/����l ��M	�>A<l˷Kq�"�ԍ�	�#h_�ï7u�B�[��`ipO,p;��f�D�r۲K#L2��9�ӈ���et�ަ(�sk/�J	Do�u�}X{I+M�T,[��uT���qRp$�6L�F��v8�LnF|�_�$�~pw��-7Ƿ�1�Z�\@	"&�n�]��:0fsCYz�<��3���S$ô����bi�+Q!���'������S�v�m�t���L�k���W&� "2&���T�*5��8�h=��L����\�V�hc��3�)K��Qo���	ZnO�_�#��U�m�b�I¡v�q�Gb�j]z���S��O*��)&�u5�0����y���t��i��O��~γ�]<��x�_@��\��X3��c(���?s�z����ν�      :   �  x����jA�ק�b��LY����.%���Q0�a&�����x�����\��
��ȿ��g�>��bz���:u�2ğx�'Xs��a|���}��︇��C<��Ymm_W}�{�_�u�v��2K���������U�^y+��I���8���S�p;[.���TJW�������=O��3>��vw}w �m�l�E|��(��)���;["�أ�m~A�����1֕\��Ǣ%��-m�*�a��
œ�����8��'ۢ����Bt�NR x�u�s��V���)�����HV�Q���+�5��F3j$'�_v%[��`�rb�D�M��t?���N;����^7眷�����{J��y<�I��u>�F�kUZ�*W��L�7�%$�S6Ć4�k�Lg�G���uq�S��j>���*\%��DhE�Rǧ"�/:�?��fw�l�q�쎵�(��>Ej�T��l�G��
�כw1s��b��lOeY���      <      x������ � �      >   �   x�}�=j1�z|��$K�=H�����	���Kȸ0�W�	>$ڞ������zm�q��lpO�3�(	Db��j����^���"#3`��]e'������"k��)j�"CA�T[hb�K�z��P�ʅK���N=C$k !!Th�QJ�R�X��z�+u��\�L�R	#��>?l�p�3��*�'��[mg��R����;�~ CJi�      @   I  x��͎�����S� �ܪ��/�@n���y�G�G'Q�� ���r��޵W���=��'I5gfE�0+Y�bgF��jvUw���MrH��ܾ�$	$h��y8
�	&��:_��ŝ���%�)���!���� ����@H�!� s@�3PW�R�w-!P�U!e�ؔ����
��si�DS��X���@'�1
] {��f#K�*���b v�s�p3��)EJ,���eMqw�VG�s5մ�)E�8�����c��+�r#�(�S�]��f��/�-�ͥ��!�M)��]���o�]��'�ʵӗ��dJ�%�-
���V��(��T����w��g�w�����4�g�4/9�s������U�h~��߄�</����/e\�8[�彯x���d][x���X�q��ы��Ń��e]�Q8�b�|�W.�����pλw����7~��'\����o�t��������w�tݔ���wk��
���x�%Wp7�]�q˲ş�3>���߇�v1,��7�)���гX�5'��שn��w��6^ꓬw<(|ʅE�,�+<9+�� <D cЁ�	�1��|(�r2�O�؋��'NO�<���~q�o���0|���'���s����l��@A���'�K.+y���.�5�͸1��g�O� u̝�?�����Ѫ�����Q��a8�)[>���̾�����ѯ�ݛ�t�ېQ+.h�Q�+�Z���TJ�$h�J�cz=Z'ؐ���%�1ݗG����H)�{���e�<<�fWg�2�0�r��u"��O�B��=��|���a��y���<]�D��k��"q��Y���j����1��}�-݇�e�=���"��ַ}���
Yk�Ӿ��<�Eo$	��B�I���Ĵ�5�w�����/�HH4�B��4�mߵ`ݫ���V���U�\��Ԃ�)U2Q`tz��ofַ(���q�����E�k�G̑{�r��ia��=����ụ�,����oC�����j娉k�d���|ݬs�F��MS�lBR�vڟQ�6Գ�`�h2�L�y=���ʏ�_ԍײ���*�����5�u��l�aF���u� d��I%�6��Xm��j��^��u>�����06�ʱ>���`ևkӇ���Ս��D ���6��)� �~Q6PM��KP%�=��ں����J�^[VYt-���&@�r��>YR�;�?/v��]���R�%���0�Uӑ,��{��&�K]
0�Eq$Qy�Ղ&�e[U��&ԁTA2Wfby04��nև�ӇYމRTC[�B7M����Xx��  �j�塮�I�i^@y�������#ۀ-����'�J�<L��,*Aggy�!y�.ʃ�� ��A��}���*"��_���>j�\	�v��bzhJ	�i?O�;9�_L{�Zp�M<�{�kx���t��ކ��vg�W���V�<�h:+��Z�ME����S���8����504�$R0��6H��!xӇ�N�<տ.>t�[@��5��jP���M�"XW��<�Jڒ0�Ѱ||Pڦ�����)y0�\��[CSJ��gy��aG��<��Ն/�Q*Q�����ںM#K���
�񺔠�DS�<����ԢVuYQ�K��[��_�����R"�9��,;ʇ�]��*ZY�����H��M�b�Ͽ;�]㴔� � �%_\4Rh^)�Uu��
P��hyYƦT�<H��Yn�W9�A}����wN&^8Z*=RA6���|eH%ۼK�y�ohx�WK&�_���/wD8��WC޲���D� Y(��o0:6���ǻ�j�t')%ՙ�mn��j�K"�z�ҡ)�:Q 3�3�ۘ�{O�-E7A���JÔ�L�L�6&�~S*�q3���-ƦTZ�TΔΔnc��=�� ����-M�tL��)�)���{JM|E�ۍ�ؔJϔ�|�wW)�Q݅�~̔NS��r�|�66�
�����ҭ��@��g1r>�5s:�i�&��a�i�MS��953�3�ۙ�{�i�X�h�Ӂ)U�9u����gmi�o�ױ޲W|�JaA.�fbB�Reb�_O�_O���[ί�R!u�nc����y�����S      B   n  x�͜M��F����y��u�W�6�y���| ���!h����7��#*�Ԥ�=�H`�Gr��⋌���ż��㟟~�?=Y��J�O��ǯ�_���6��_\�v�����7�w￺��������������_�O��O�����������[�w�����/���ߵ������g���w�MI��7�-��]��a[&�"g�d_��{��+WOc������U1���dq�}���x9{�e0,<�׈\�RX�>=ټ[��d�;g@���r�lw�&{�kD.m)�gw�Fr��W�\�R^�^�.l�L�kD�l�,f_T�b{��۷����R��P���W��۲[����%�O����y�e������&Y7�׈�lY��ݡuA;���o�����J�n�o����[^*��Q�u�M�^�|��R�>kY	i���o���j}~r�h"���t�"�[Y����+Xߔ�h_#b���j����.b��!�[Y��_��و����V�:�@��ԇK�D��}��e+K�T~ip����7�8le��:��т��F��T�C�=����w��r�w��oQ?��oѓ(c����Qc@$�1�(�g���$Ͽ!H���+:%�#2�e�5�=!A��i1��[�ĥ޾E$��{�1J����__��|{y{���5m��
������i�ZJ�B$��-j��!A9���N�<&'��.�޳E$���;S4��Ǚh�HP�?Q�����D�F$���3�G��i	�4�r|����-"A�d�
���4�L�+D�ڐ�r�����n�_#
��U��>��K2��~�(���W�������L	�կԗ�s-���7C�ԀXzt.ޯ�'D�d"_#
�8��yy��Xh�2��ԛ��}�|8���qDPo��~��P��;�Q@�ɯ���`�XG!N��w��M^,o�S)��6�%Pq��]���l���CQq�JG�G��ˋ�~�(����/�r7�;5����_%m�ӏ���u�CA�$�]�
��4��5���S^%q�wR;��(՟RZB:�*������h.����Vy���O�m6�g�"o���֧�'p��Eԛ�^�2�b1q�,Ԉt�U��[.����x��yXY/m�~OvN�H�de��<�'i[#��Y���fa�Mʜ�ec,�X�[D:%+��qJḊ��[�(���V*>P)��=ǳQ
P��u�R���$�̃R�(E(�J�*��g$�L�(%(�J�*��9S�P�ZD)C�V�<P��>��I��P*�������ر�he�[��@��9� ���F��V��^{0LfQ�졿کJ��.٤<�l�(�&n��8���67n�Q���]X[`7O�(���1�C�~�<-���Z{�C�*;�[D9A�9j�� ���׈r��j�3j3e�)c��"���N8����2d{��X�6�J�7zo�p׼CT�&�3��>E_�^2(*�
Q��_m Ǥ�o��-������nҾL��8Y�QA���R7��!�40Y�QA���R7����^x�_!*H]���}��&�I߾�Y��'F:D��?������gF�/C�o��_-uӏme�a��
R�����̓��1'�U#r��׋]���;Ά����n���W�D�B�G��z�����$�j�.���Y'kz�!C��Ň�y��3�!��^��m�tQl������֠����s�-|ڋ�?:�����h[Ȣ��=[��3��h[#�r�;]7�;�)Ɖn���B!�l]�{��ƺQ�F�EC.|��>dh��l�A�ȹ�E/~������h�%������	u�7C�E�-�l]}퉍O�fht�irZ�}pJǻib��,M�M4w�^ޠ�v�"�hrn����C�ԗ�A��ʹ��7�u}�u�ȴpn��#v�`�P�:]dZ87Ӯ�x���l�A���4����>|����ȴpn��=�MW����@��M4U���-}Dt�H�pn��I��5)Z���D�&��������"��ɉ���<,�6����c$Z89����Z�D�F�E�œ�_�}���P#�"��ɉƻD��	~�b-�.-��h���(���-�,�,��grL<�{��-�.�,��gr����>�5C��!��`�8      D   6  x��X�n�P}���>�����4-�R	!�!�xL7���@B@ix�%�u�fq�~��_�K83�n�6���q�.3sΙ���CG� l8��b��գش>�K����7me��
���շ�7J���/�Ѵ�P��|��1��{f�"�![<ƧlS��!�	։9:�}�d}������C���\�s��s�ν[W��|p=�u�&+��'z]��N����o*�p��/5���\���+��:�xGoA�ʡ8����}4���,;���%q1n_�# �/ޥ��d��wi�����.bt&��
�Vd�Q�xd��'bK f�]�	T#`���/6G�rU��Z��
�b�ϫs�=H���d��٦���W���A�"����C���^��e.E� X	��0ﲯk:�1/��͚���b��J)�!����{;b#������D2AYb��
��3��@xN�g�Z�U[��-�f�̳S�*I��衋\�<!�Y���R1��+�� �X6?�C_��	+q}7]:-��]��eG��:JwȎ#�3�I����� ��.��ʐ[of|kx~�[��d�����Di��;�>岫4�������mun*G�*��r�B�lq���0c�'<ټ�4��	�U�X�\�x9b��SG�E��1�/*8{R[���g�<�6˙m
�KSPh=�Œ��y/ul�҃��A��Q�e#(wk8�#? O������b9?<��t��,?R*��e6�-��C��q��޲�b{�p�z_jq�6��Ҙ�l�����FF�8��v_���瘫h"toZX�4�4���_į���! ͹U�b����6���YEg�ԇL�P��I�U�D3�3sp�����aP\P��I�:Lt�x��xg�d�;ܤ��Z����Z�פ*��(��b����Eɣ\3�.N��Kۧ��~�J�;��\�2��|#�}Rh���כ#�Mk�6��g����#�rF���	��F9�A=䲴K���Xp�E�;�qة��t�@,��1����9t��k��ռ���ѡ�\";�[����p�/��%�w���w&���      F   O  x��\͎��>s��G����d��[N�	A�o�.�8H|�q��b;vI[���jWk'@`h�3�XҎ ?A�+�IRU����p�`y�[d�W����A���7+�Ƽ5��¼Z�����tq�?��
�+{���,�s	�@3ss	߿��M�ynV�)���ܼ4��,� �p��\�o�9�?�{W����>	D��9Nzb�߃ >�D�BF�S�8�D,�H�4�����HKs?PB���g*�>��@�Q��ߊxi"a=N��WĪ�"��K�X��'d�@�'�y�.��g��S�F}����p��h���>��#�P���X?6w�y�3y�&Q��[�Id�6M}��Al��O�ч��F�;������A���2��oT p��Kֻ��k�^�0 _�3ռ�ә�c�R��?9��(I%�W �I ���B�������`/���f�!dR1+*T'�����%#픤i�K��Ӫ��<���f53O@�����6�7��特P3�������4?:�E�`�E���~L�aӼq$}���ل��бmM"�Y`~�7��T�1l�`T������ �� ͢$q�i�D���<���[9w��e#�K�1aF�w↠o�M"t�U�����C�5Hh��Z����8�tίG^�����?���+B|
�@��6h���c�%Ѵ$�T�4��0���O���y�$�,Ymk%��)� �����/ȗ������-@����K�k/vj�6n�*�גmBk�,45J���(�nm�H�6�ҢJU��$���b 沮�4̽ �m��O1��%�$�8�C�`��9�B�;A����&Y�[<r�[B�v�9H���_������7i�6s�;ԮM�ط8�AQ�̝iX(s�s�^��Q!/�q#�����V��@|�a]?���o-k�w�7a����IC��K�� 8DZD8Y����l#@��9�T�d����,�a}�nXYC ��˰b���+��.Y[�m�H�E�h�9#�M��z;��+%��lǜ�0���
�#�l�,VP�sr�O�h�c.̷��v4*M#U;��fRG �&M0�W�K�ݲ;�pR�Y��%�����5T�����|�6�=���}GR�H��}O�+p���*rg�w6 Z"Pr��\[��y���*��q�{��۲�jn^[Ҹ����ܯ<�Zt�Iﴈd��rZ>B{8��wZi�t�rL�W`w�-�ܰ��1�����T����f�W���Y8V+ņiK� Ү ��@AJP���8�������)2q�?O6H���Y@�$A�T�D�����'�[ȅ3˄�u��$�+�xE�ą��~�K�4>!�9'�ޡ��-�0���XDdY��v�\g{-�_��1��Ÿ́ޓ�ۉ�������Ŭ�E�%��y���.Hʇ*$ե{:ޫi�y��xD��
gGɀ����O"�vm�ѡ
Ϳ��.�>ϒ^IW2���Hoq��/��Nd�nP�k#�M��=����f-����d���K9�t�ǁ�T��|�H$ˁ�!�� ��T-Qe�T��U^�U_����U�ֵ;�&`$>�<��$�a<�i�z�.:Ay�0��׳�ѳ��+�i���q��C*���0�B�am=랛����;A��o������y�ҍt�O���J�'�B�̣N�U3��J���}�$96���mJ��tk��`��AR�F�t:�'7B>%�$��#�,��N���a�/q�n=D������N����Ўn�I�����4�"(����܅�o����{IX�S�#kՎ���ir�"rI�@R�tt��{3Ȳ��s�aa��jP�t����c���W����Z*d*"Ǿ���5'ұ�9�jJ�wHK�(,�BTC6x$Z�o��`��%Y�1S�]1�n@��2-X�nI����JޠȁZ���%�`1�B�{�D�q2�����6Q�ڔ��F~K�#�;���z���l$¼��0rTȀa	K�(���6�����R��nCQJf�n�5�;ȭ�5L6���z.��x��u�H��m�#C�\��Ŝ|��?�Y��~g�@ ��'"J�K�Z�:G$�*h?/�ܶV�n��t�����k� :�-ǣ/��'$�y��U���Ē,c�7��}�Y�G�#j�y!i��]D�w[G���V���׍m��Z';��~pyI$j���U3o��J%e�*��y_��p��,���$��}��
�G2����W��{�V�K�T��Օp�1p��8�w+�[I��q\�CEr�(g���9�u,a�y*��X5g��Vjs{kOvg�v��[�,��B�+xU�ݽ��ԙ'�1�ɢ��WUjTL�u��q�1[��$�~��TbTD#���hl�����Q�w%'�$�w�����D��>��iw�ݵ.����H8_X�
�%�R�6��H�-lX�D���S?.�U��s6J��=dw�Nx�O�"Y��3WX�X9y�+d�oR�����0��;p3�}TF��ټ�7��#$����w�I�3���
�gtt���/ "���1�P<�h���Fd@�I�D����`rT^(�y����D����σ�7B��{,�`I)��<���^s+g��FK�����ϱ2�����L�?�o�L���;��:l#�W�cG[a����Av8.���-�fe3�`g��_I]���oa��-Y���T`}i��o@G�R��x������|�eS\���3fPQ�{c�n$A�=%��t]3����0j<�c`�52�筇H���Kt�����c]Wy�}�@~���Ⱦ�b��uVmcgi�c����/n��+`�(�_F;�\J�_��<�P̪�e5C����d���^Ny����s�X�Sh�GV�����<�8�n��9�=aX�+�[�[�z΢�� �ی|�%Yxj�;dc�kr���1�O̒,S{:r/ŵQ�d� �1�K��>�+�8Nz�/��KX�E�X�Sd��c��ƒr��L�4��'v6���1	���c�~���n/��]��ܰcP�Q>#��f2��`J_ Kx��:3mw��a8_����w��;|�^����0c���Ʈ���V���)��|��g����a-dN��8Z��7�l�`�l䡪�a���ѯ������KL~�F�����"��	����m����[Ik��ᱽ�m���w��׍ ���|k�EkS�4��}������S��� �A,���«��_�kE�f2ͷZq6���L���4T�Xe��켡�9��}ek`��)�J���XF�^e��Cx���N����`[$|9(��Ӹ�b=?��Pw=x�0�xy
�46~������"Q�{;�����1%._�"Q�$E����P�)����_��}��C!?���#Xַd5����m��oѪ�&N���Z�O������*�ӮU����0Ɗ�%Qt)1��?��է�˱�r�4Ia���A��SjN'%]U[�� ҋ�#�DXM�D�ߏ<��.�T�q�w����"���J��-��Z�I�a*�������q��|���~����k.?����o\���J�/aD.� {��Zc�$�	��,�Τ3�r&���+ NR5Sڝ)v��31õ���4� �L&���>E      H   �
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
D�m�v�lE���c&FPr����Ϻ�z���0�e�3�GB�H�Z����3r��Ԩ�.��N�?yx����B������2Ut���9�Z�`����c����4~ڄ.�Jc-�b�u���<?��!9�;�e8����Ti�><��Q޹���=PI�ү�Ƙ���^       J   �  x��\ݎ���z�LS�]Uq�^6��b��$	!�J"�'�ܳ6�8F11( Dl���e��zm�Jy��W�Ir��g���j���vl�;��̩��:u���!�V�f|Dq��J~fec+�������Q�7~��__6?��N�S�h^������^����a���|>p	�� .܃O�G߇w~���C�ּ�Aų�W�k��S:"xDINXEˊ�Bb�4f3 D3���g@d�P:���/Ğ�({!��ls=��q%���é������6;]x&oׇ�m`y8�޺f�i�އW��L���m�@�n}P����MxW�����^�y� ���.w�!��G��(��-��L=��g8�������L����C;u�r�q���V�Ո�g�m,���Y��wV�QN��x?4�������w�s`��i�0�F`�q��h�����v!�Ih��(*�T,�tF�<�
]�J4�Y�"$�OB��B �.�*x&'�,��a��r�"C�$��(0���B�g���u�i�u\� .��B#�2�)3��]x�_&"r�Et�I=���[.G�X��@��A\�%_&�x�rt�ŗ	�(�e]f1.B�Z�.�F�P˄b��*4�
u�@�$a'�
��.b�Etᑔn!Z�=>�oCj�̻9�uY��BƗr��&]݁<�^}h��]���ts/��a�����|")�*et~9Q�s��!p2Uw4�MY�g�R���6������+�6�To��f�Ӌ}�l��IgI�'�:����k[}芈�=�USl@���%�B�^�yv|��AX���B��R�!�� D	;1��@�9�0B�E瘃Ǚ4�]�����u��ٍc��?��ʜ�
�J�Bv��i&Yb;PC��`hk�o�!�2)�=0r���
Pg�I�cUaZaY�t� �y&˞I2�p��B,��E&eϠ��RS:`�!^fR�L�!��T��Ѿ�6��̤}��|�E��o�!�2�{&UФ��������M��xZYQ
��w܃�����]̞�i�Wf"邖̷Յ� ɶd�WB����e� $��u>���Q[��2����K��B�!!�m�2j�BH�ɶxH�����f��> ⶄ��@��0�E]ߕUN����(I��z:ӽ�m�i��&�݃P�3Mz!�8����5@i�y���ރPI2�Z#����S�Oa���>M*�+!!{�t!T�L�� c(`Q����*!#,U���~7�fw��� go4�f�xϤ���^x���K[#L����߮Yj�-x�~���g m����ٍ�k6��3��3)F�އ���{��~��g�{���7eh�w�G����L��_o��?����f�͖7�~N��ffH��\�*!-�7�۱�m&eS����^6͏?���z#��5qو�R�!V'R����	���fӅ���#R2
�D6a�	C����]|����_���f�cZ,� $!C�L,���	�@���R��qx��e�u�q�w.^x������a�,ѐ?	\(��hB������6�������>�F�X�g~%ג�����͋o��Gw�>�$O���g�9i0!ȭ���<y��(�_�2�OB��'ҙ�?S:qyL�/}AZo�,�?�O'���VU��-5�(H$�v���IDBS�!�)�C#���A��^F�t��z$�ά��zPӨ
xPB�8>C"�Jp �(�Q}�M�w��9
QU�AH�]u 2ׁ�Д�N� ��O�3ˁ�|r�ʐ<-)��q ��@���z1�*S��p��<���I�>��	�r���y�Cy�	���iCH�T:����u�(c��!��!�C��i�D�6�4N�3Áh�M�L�6����j���#�+FaQL�6�4M�3˃Xʘ�f�L�6�4s����;�\��	ւ��df8Kr���@�چ�6�Y0>ׁ��-Dh��!�K�g�p�w�hI�ӆ���|�%O��U�ami�:`�f����M�"��mi�*��,�s��cs���@@lC�`��y��|j�-ֆ�ٺKdw!��BM�20fm�]��A��C�<�4*�|��0T����D����:$PB��De��fU(�!`$Rŝ�Lr���@nֆ�DF(�:���DWҋ��oC�G���Dr�5�����! ��AN$��5KC�em�S�H?d�5����KJ&8�A��7�o�C&�����;������Qv�q�#�b�nʡ��gys;�\!#�ޙ''�3"��f��RX?Ry�gB9?Y�r{�뾻�"i�&�&���������io�Np;��c�d�y��Ȝ_�ͳ�1�Y#ҙ�WI�n��7 �7�;9���"�cΕ]:>b�2�uw@����PB��Ӄ@(Xu�v�҄�''��M�K�_�x˳N�v[�Pt��i%H��_nz��N�bZ�PK�(.��~�m��ÁݱgEm�6}���lr~d�~<�I�\X��ן{�«��]����m��ƞY3&��m+w�Sr���	b=��^���ݴe�P����*�n�ũ9|HD�z�Z��`0���=�k֮m�����r��x}�c�'cDE�Fx��/0D�$�T\�W^z��A���w�m/������z�-/��\�bD�D��j�~��B���$�D�=N6�����`nJ��;>�6"]meGI�:�"Q	f���s��u!Ѝd,���dr$���R�Q_3b�7G�j�ߜ$zeS>Z��8�Ql���z��7cg�=�������]�ӟ�9�Qm���z*�~�څ�9Ke�/��m���8�y�|�	�@?x�{� M���6�g/�VVW�67Gg���N��/���"��ڗX�8�;���m���p}�u��+[k�3k+[���o�B�����`�Ci��.å�i<��\Y�:���"L�D�e*�/m�o4.r� ��H�a!�36��Q�i�FM�f�"f�Ξ;��ޝ	�*�����p�M����]�SK����o������Y���ĕţJ�v�A�	��v�@;}��:�[��"�	���sک�����A����p�����}��w��09 ̕�.a���7+�!(mxz���H^s�q؞��4��!⨊�u�m�%���>@�2i��%;�)3�~jekkm���O�މ-�ɋm���i�c�C3_�������Z]�'/���m��s*���P_7G�m�dGb�������W���]�~�Pl$&^J���XB�QV�qX�v��n2�4�&ŭ�S��=�`���ʝ�{� W�����Qs��e�v7���I���7��X�����
D<+��V�]�A�c�eF���6k?����ێ@��|��ĩ���r<[��d;�5��gx^e��	�ŕP���e���d|��2d%]Y�c +��yr�"�"���/GY���++}�ee�"��e]d% k�)���Zx��aY%xAY/#�B ,a{���v�叾�MB�;\�A ,a��K�����xtUa ^/w�B�+];�K��壯� F<ѿх@W�q��¥�Z����1���*8dm��b��Mf9�z�a�yV���^[a�c)_�{"�v�.����̃�X��ylB���&��|      L   �  x��S�N�@}�~��t[����XjB/&����
H�_��#�������;�2g�G��
��֔���(7��QB[ӡ��^�O����~��fY�J�oתm]��F��/�T���Dh�S� ����_m-�&�	�0�5���<l��+�У�"H4�DgXvi�(؎̓�Ӌ�T�����M�Ԃ2���2�Q�2
�Tͣ)�B�5cl��ސ[��q1Ό�����!#qI����Of�;e	'�bH��:1$��.�K4\�`���2v�X
..F`�L�ڒ��8�7�EKf�%���t-~Ɖ�o��/�����ߺ�(�1v�e��¦ű=`k�a"��>]�y���o��S@�L�0a�˪O,؆�����*��j��r��q�`��Ɠ���<[UЇ,��9~.�k�KJ���t�*��B�*�w[R�?} ��cW�����vc��N�`̉���=������]E)����      N   �  x��TMo1=;���V��ǳ���^
�.\���FUZR�JPJ�VZ�BӴa�1�Ti��F�J��x��f���S��Z��FtS�SE�tE��{�*�CE���Иn�x:��F���U����o�����^ݫw��ԧ#�<T4�ҥ�XS�:��Mh[��x�Y\u��b�U������@�ୁ�^�!u!��g(�ޙ2�z��	}�=ШaŢ�[���C�sp3�M$���ɐ���S1@�ep`Зf����8/9w2�u�i�+`���[zs�y�����d�)�T�%��ɂ�C
&��"������R-�)9~}wX+�����տxq.�Rsa8lj��=�9h]n%�"JW	����ռsLgt����i^U-��� ����H��}$ �s���Zq�\J���L�-��7����{Y'�߸d{1�[���s�]��DƦZ�'��J�3�C,�0�T�(Z�t^�1�,4�1�dYh�R�3ޥq�`dH��#ʭ�_���0�w�a LZB��b�K��Ҽ$����t�~�ˊO�7ᓞe�~}����.�E�Z�y��vm�XL8�:�3c��x}:�w 4���oS��B�M��Ĝ�Μ�?6��i$-��H��x�pWB�Iܕ����JN��[֕��)�>�[�,�\&�B�B�X�+,X��Ѥ�T4�e>kՈPg�t:�?,�      P   
  x��бj�0��z
�)�Bw>+��N�RS2�<��L��t�R�.����@���7��)&�(�2�B��A�/�K��+���W��_�͵��S?���	ּ�S�r}إ=~��g��'�2A���A�E
�+ȁ��`xn�"�wї��p������&�ZF#�{)��>�Z������3���gQIA�o#�'�����BI�R�_\�g�M��q9�h���9F��#��!c�)�������e+��,�ZW���D���D+�~��F      R      x��]ݎ�u��~���H��[�U=w�K�\-�ܕ��F��8@� �d�1dX�DE��$'΅�"�%����
y��S�3��U5�3�K)E��p�����9U�*�)�I�2I3���J�|v���͗����������a��dr�VE�y�M����ϭ��_4�7���h�7O����ٿ4�6����5O������������JHy�;�?1x<���<������o�E�<���Ap���>Z���|5�,����c%%%���&\T��C�Q�:lQ���ڷt1����d�~��� Di�SD9QλD���q�Z֣���?��RI�(LFͩk``�50���D��h�mg��<tG���c��m�k�6�K=,逮x���E9�!u
��jU�l�l(NΒ8�(׫����Cq�d�;QnV�)V�)��4I�(�롖��[CZ|fSDҦ��B�����p}ԡ���Ig�4Y����r�N2����<�����%���vgs��@�w���?�~��ڰ�ͻ͇K`M_۵=H��a;�3\�!�������m�<�^�h�&"9�8QNٸ����D'�唏�	?-M��4�D9�j"NEY��3QN帚���D�&V�S5�&�4I���(�z\M�ii�'3QN͸��S҄��,<�W���44���k�a���	��}�ņ����u��y�/�vZ��/�=��<=~�y|y���	�/�+x�G\��{~�|�s���E�� ��H��g���9Ol3��,�e�hҲ9Q����'�OC�y �'�h'�Ym2�H�L��2�N��ݖy��7�_�v7�vsW����c�pUgV�z�Nϳ����03es���N�pZ	�5v(�Uk2� �(A�o�ְ	��ʶZA��T��m  ��_9��1���e�����w�%6O�Zџ̂�����^s������5���%,��5�(pFJ�ho��^s{Ȃ�PM�&�ª�o�@�spX��6�Ҭ���5�g��8��s��N£�-�&TL��$�7�'�,���
g�%|�#�+�~��o�cy�y�h.����nK��=h���O�(W��]QΡ�����TsF� 񸀎q����W4GE����͇0�܂O���E>j�`g���w�U�q�I��vg{��ޤ�X$�+p��0}��Ka�@wW�ƆB�����.4�*�����<.)Í���"�ޝP	=x�"�0�,�ъ #_�1F_��p��ƥI�;'\�����]?��J��˭�I�}x�v�n���X���$F+���Q��G8��P�E�/Ң�j@tTX_P�R��f������V '�C؉ �^��K�u�hc�
-���É ���E��f�%��.�d�2���t��]�cd�&f+5�I����G��I�#�꺵�KÍ��um{�\�p��|LK���~I+R��K^6�	l�| 5�������Cr>���m���Vs^�{�RLH����Zu6���O�N��V@��n��:���w���s�;��_ނ�Y���s
xNU�}��(��日�b�o.���~]�)%ْ�lI~"K�A�M���N�xl	���E����ʡQ�������q�*à�)������U��Q��E0*�(V�n^c+�,Ò��:6�yU
�򕬫�:�Ԋ )�L��W�V�Lz+N �f�=G�W1�F��/`r$۰ 6�1�4ZN�<�I���+�,�neT�,���eZ������4����ʆ�#�6��^�o�x!��E�*'��Z�.T�_�)�[��R�⋦�6�a��KM���/�y��Rmu�N�ǿ+ �g8w~vy1�Ow�^���ݒL���u]��ko���J
�St!�0R��:"@�GCH �Y!̥/�f4�֫"d17�#��h% �@�%_���ǂ�-@��B��g:�C#A��9@d�B��hE� l4k��W�h�}����Gcg*V�3�s���9�ᵃ�q���;ݹ������R�[
�&{�0��k;��v�]�n�S��~�c����X��wD�N���ߠ'������c4�\�Q�Õ���k89���������U�핂�in���儂e�Rt*�tD��[_t��#ʅ��.��нj������ޢ�47K~ֹ��t�̹��[�_��w �45�IZ7'�������,�|�R'��������,o�&��N-�h�]��f��b�q���N��Q�nR���p�è ����,��"���;����lq(�E�R:�}�E�fw��'/:�����&=�����{�]:��П�*3"��c��RLd]I@_(��L/����*����(բΚwU�-9l�u��a�r�ź-���_	�o��Ƽ|c����VL�%Dڬ�G�W� �"���϶��񒄏
>F�U�L��pSq?��rm���ƙ?�1�n���TY���1�΂�`�5��]Q��5����=l��3����v���+"G"�F����
�E�!�t�5(0+R�ƣ@�C���P�P��hG�-���O�����㨋I	z�����P��Q�խ5|dG�s��Z<m���h�5��V0u.�T߃5�hz02a�=Y���D�=j�n7̜�+�$�m��.����.>Ц;}����|z�{��`۟�}�V��s�˿�?�1��'�u�O�9��:3*�NݏAq3a�+�#�wD93��浉����q�̆eF��=P�V��x����/a�u�<��k��	��,��w��m!a4[�"���6x�����6��d�P�&�~�?U���!�ћ�фU�ph���<�=x��|��T��D&(��+�r��q�0�]��Þ.$H����-/hZ�ų��	3�\�P�H�L��hS�8�X'\k�G3�D�+���^��2��n�:
�.����vR/@�⣱�(��Ga�"�Ȩ,�3�LI��/UI�,Jz����v|Ҧ���+k��(,G���ޚAX� ��
�������5���.L� 6���P~���vP|QΙ����k�,j��ʵ��e蛤ݘx��s�X=��FW�s��6��08�8^v�r4:�F;4�l�fY���J߭�� �͠x%M�s�E��m�fЮ������"@�7F#����}��Ј�Ѩ�hB#� ����&���E�Fm��E����E9�s����E������6�?��94�"�tH���R�@0���N����@49]:Q��iW�Z��Y�i��y��'�Sv�_.0��`��W����y�(e������-1e���r�t;3�=�E �;�����;g~����E~���}����t�p 8M�ə͉ `w֗'�Wv���Ѹ{m��^ٿ�(�V��6?{����\�W�ú�\?�F������i[�"�b\H#�k�����F�����𔒸S�W�Rm�#�six�N�vA�>s\�yh|M�x4��#xzm�^e�I�[0��\��%�@'|fm��Q,�|b]�xrt"�W�O4I�H����E9�dm�vL]S�'ץO�[םb�%ݠ�I%��OT�I [��=�S��	� ߤ��)x���ʀ��m`3(:?�O�I��VuD o}��*�2o }<��;���p0	�[�g֥/Zt��ǃ���җH՛� ����"7�6o�.}�e�h�mrÁenqx�K�5��ɕg6�pt�ŗ�4���$(��9��3�)t2�r���M�o7�"�n��r�dz�&ە�bk�G1���u�@�����m`8`�bR�u>)��͉r����L�z[n�/�j���Mmb:d�@�۾���Ujm/I%����:�^��v��61x:P�@�us����&PQ�&�غc�*�
<�L{9zκ�r�#6�:1��S�Y��2��X�U��ʅ���+����	�L�^����&�T&���r��_�-�[�- ��[@:�`������$�B��p�R8tΏY�B���� ���	�ėolH����S�(����PGX�Ԙ�?߈D$��6�:� }  �6�V.a�" ��`AMn�L5:SM�U�'B�s�B��C�:\�P5G�ZT�b���36��{0=�2�QuGH����'�'�U4���D��>�K�q�常�P�i=Q�Y��;�3	��Ò�a	�� 5�'���]
kP+.�;u,�2:�(� [k�6��QI�y�4ؕ�r<HdhJφ�2���%��]rO�qv����	4$�}�J�Q+	�����B�v�iB����W���?�㯊��׋����f�k��~zX�bo/s����_��v�| R�!���%1��+_��h�"�IDSY밪�"3"I�H"Rx����| �ZZ��LsF�MN�� ;��*q6c�	C5հ���WZ��C�2�O�"0�M��X����rV{�#q`��u����ʎ�Y�n�hL6C�E�W���6	SK|��k�����PqgYI#�+lXa%	6�b�M<D�5��f�E�D��	���'(|#(Bs��kc�#��|�Nې8�yNm�����p=��%�fQ,��K{
�y�E���][.��N9�|��q�jt��	�)}(�Vi:	�eP���-'`a
<,�}(�Wk9�s��In��H3Bd��re��,�,%�\;�0�_:�ٕb"9VL��ѿ�(W���;�t��~r�~�'�(�"N�r���9}Q��B�5<c�Y��^#�v>�J%�KY)q�r�2pBQj��������b��~�V(ʵ��:U>tQ�B�"�W(�\�a�Y�<W��j����D�&DW�G
��\�S��+R��0|�����J�zr�#��2BAW����k�z=�e��5;����?��hDcabV%��՗��l�����K����In��v�~�ݞ���i��VC�*$	tS�Ӥ'�k��$����e����G0B�<~�ݣ��[�u:jbɈ�To����5wSE��ׯ�T�̚#�Xa-��󢟧ͷ��+`ެ���u�jKX�k'�u��o��R��,�Ơ5�D�z=�#���3]�0E~�ۆv��}��T�]M�G0�c)nv[3�	ݾ��ny\�Wy����n�؞���nZ.�|��[��n�Db��$a�t�
h���K�F1�K?5"�xN����{���g���g}+��bqR6���7�-1����d?͵�����'���A%��qY�(�e�E�(-�h���lS��Y�>x�	&\_��y��[K~{wGx@n7ʓ�@7��!
���T�=��MlVV�N4�.���#�'�T�?�*���S��Tz�
^�Y�:\��㡿�v³F�������� ��bx��Mc*ƣJ�
�tM�E_,���p�#Q�Lbvᠴ�~�����{�VO5���E@A=����&�h�f[��Ƴ�	/w˗�����ca ��l=������)9�{�l)`ֻ�ܤ��r�y�l)�n�-����[�g��ϖ����x!��LHn�.]�s�Զb�T���/�Y����֠�.�n9�29</"��~�}�|"���.W��� |��x��P�Q7F��j����,��M��?�����Ŭ�ٜ���ͳ��P&�[���`k�q����.�+��D9_�
9�(v�Mx�<�8��C��S���=�x�E �v '�ŏ'��qKO��/;H��x���B�] �*FO.���;Q&��`�4��&JF<1;<�ɓ!����=r�8�7�
��3���Df�˃�)$:����Z?uobM$6˼T�/�|��S���hS�c%K�2/E2�։ �%K�|O�H�L([7�='R���X�� ���wD�o��%h��A���$���y�����sW�7�����"����Vl�TsW�GcUL�^D�K
�U�����Sѥ�)1�o��D�6]�Ѹ��V4�XI�.5K���Mja�)|Æ�Nb<@3�{�Wd+qDg�©-pқ8qW�C7�����sQ΍gh��d�"��P�s;-�to�����ʝ�e�.-��P�� ���4s�:1tÆx�uv7�a�9Ǉ��ɻ�/V�4���U�[���Ch�W�}�S�֜�	U�$��
�Q��#|6	�c��Z�>	ȴ'�&�
�Z�X��i��ӁfwB��J�\�x�@
��i'fcVx�{yz��S�c�����/^�v� _Q���.^���+��%��cOp��F�1� �gF؉hϟ;(�SX��d����۔�R��;xu�@�Å�/�y=�]%��U�a:���vf��=y=�U%0��__��&N�"@8�M%�8}��JF�ʯ�(�5!^��=%#��B1B�74�E�P���Q�"LSV�nf�jyV��@�}���f�]�:ҙ�"P����۔��,4�WeT�U�	w
�	'	��'�]�9���8���00����E��b�j���2��q�qSiB(��ި����/���Q�|����f٬|�Ă��?1{��+^I�k�1�[���wA�Om$Lb���a[�n?(l�w��i�m�A�V3+���=��,)**��䋀8y���hc~�8:�1�R?��F��\��勀7��ru�u��M=tJR^���2`�Z����o���#�{� W�.0:�,ًr�^{��O_��/_����Lx`�/���ݯ^O��fl���O�m�`z���d�ԑ]$�&i����"`{��}p.Ӳ�f�����r����Ou ��l�Mv��&����{�4��s��t�z4����B��P���г�E�Ww�#��YgN��k�x�� �}�i�A�6�t6<b�퟊dK�s�܊�0]0gN�9��qrF\���4fq��7����r_��ρ�%~������4x[�v�j��:�vE�p��S�{�LK[x^�̸3ω��/�ü�>CjBL��]_���A^����;^��ȣ�ɫ����K\_��A^h#:�Iђ���χ<��<�ɝ���	��/�f�j�39۪yj}�?t�[z˽��������]r�GO��>��Z��5k��khA9f�1L��W���¿Z,�w/ذ��Re�����8��tV,u\�?����]��̺Fo5�n�`F<85�Y��ӒP�@'1�Nv=Ϙ�כ��>~9~,r���^��B�!�����G�����r��Js�� <<��0U7�x��e��l��OᏇv�r?�=�H*��o�nL'&��*�uT��I]�����D�_,�S�v�y���v"�s8}a����|���ȯqz������1�����6�T���k�X��+tㅅVk�GD+�t��T�ZuE��
��_g�dY�� �����e��F���@=�c��x�%����E�C�,����޹����Q9M.�&z�����Z[����j�D�F}Jjl>Q!V�FP�?*z�\H��l��jwz	��qƃ;=	�W�� =�}���pf*��(2ʠ�|�D`�D�GGj����qݲ~ `%:GO-�]�d������y1��!�ɿ��4��|�YG)��RA[0{R��L���D������&���v"�Y#M�@��Eo����U�����1��ioGN�cχ��J���S�Ջ�����L��/�T���j1�v �B�w�/=����Y|��p��߱U�G�;`_'<��w���{"Щc�\���r��5p�zk�5Z���v���{"�������/�����}�j��&[_���ŃQ;�%1���\(�C��&^ӡ/x]+� |��]��ab���ow�6�uԞT��$�'BaT4�@W
t��^��3X�;9nm�;���<���kk!�]����/-��Z�4��`��F�B؝+XJ���POZtlkMl������&`���E�_����lq��lF�.O�5�rY׮�1+�#o~?{p�U�*pw<��J����(�Y����1,�/      T   �
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
�,��Q�,��V�ɗ�m��9!#���!�d����S����f"����5�S��gm��L��s`���)���"���rl;�%���w�95�+�e����!YJݜ�G\�Ú.����UꨋNx���Q&at	O�8�B��֖0��{�����̗����#��Џ�=�Ft+gLnv�"t�2� yV�oH|�#�[�hF�a`��/�"�#��@KdGgn��zݝDdCC5g̚�N���C���o1��!���&8pˀ��W0��@�P��Y���,{r������i�@�������iY�'l��s��ƨT��H���)����lF�u�Ms���z׏���&O�!޺���\G�ӘZm����-�k9)R�S�_�ݦ��RC$ri��H#��w��_��p�l�N[J�?[$E��j�Y0!��,�H#=-�*��X$����h#�+}zzu��&�(�,�e������\�"Q����x��:F�2ۿ����k;Չ�>�뺞a��׳L[�w]P6E⻾�WE��      U      x���ݎ#I�x�D^XV$��;KW�43��n�����I��Ҵ0?{��?�U�U�ݭ�Ъ���vX`F+��L`���Fkv�������̝t2��+�H��1�c�|���N���M��o��|�~���*_��]��_���W�b�~���|x��}���j���6��{6��}�%�����|��d�w�~�~g>�K�;���O�����g��K���`��7��62�����u�_������(��
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
c��,c	�O��1�W����@rH���7|4��_�w������B�1���e�T����~	PU�����:ЇP6;��xf�_�/�s@�Vɿ�JW��5X}�L=�0�ˠ���j����Ͽ��Xپ��>�bp�f�dśd���6b*����WM�f����4���8==����      X      x��}Is$G��9�W�͉��÷X`6�6�$����Om6�9�"����ҋ�j�6��A��i��YV`� !��K����x��L�`܊x��ϗ���\eJe��T�K�g��N�9k^��_���������yќ�O~j���6/�3K��������%���S�����[���鷖�{'_.�_ ����I�!��9���j��Ys�Qs���s�y���<������=�ۿ���Le*�|$��=�5�Ҽ���W���y#�	޾�>p��	�l����YsoV%ê<�"��>S�Y�,�[��us���Y�r��*�ۄ��9�q�9�[���5�V�a�ZU���m/2���e�!��'���5/�1o�?��'s����7�T�L���ZDD$޽*s���� ������s�� |��W����>�w������￁^�i}{m7����y��嵓���\l7l����E�0(@�u����pbo�~-�9������fp�<n�kfP�3��*�A	�"fj%�)��P~B(�zJ?>��f<�ht�$4L4ef����<�?����
�9�5�Z�W^��щ$�����"�� 4��W �kax�}t�_4�ã�	7w	�y�n��{fC��l`n|��l�q���e$M�<M�Q)Ϩ�f|�:���������3�3:ѿ��$������E!�+�v��S��	�{�T�\�zLjO�b�����+���D���(��r4�� �Fh�I �D���dN<�%|1"��JNK7�D��$Vh�p��fG�3���0��i�%=���s�x��~g��������S�_���< 3�N��Z��.VN��/M�����i�yC�q�����w� =�'o�����=d^���x�?O���
窆�@�k���k�(�"؁�?z�B�H{�5%.�)-GľG��57���(}ˁ�@�?�,^ukG�d�T���Z}�����L�^�"8"��hȶ{C�rk�GR��y�j�6O�ɇJ�����+&�;]G�j�E�/�%n͛��)I��@e��E�H���cd-nTG�~w��pL�x]@[�o�Adq�Ս?�:a0Yfi�A�j�;ǯ�iK��(x^�����_��q���d�����|f�xP��n�s�o$�I�Fr���1I�7���G��`��J��������|��43t|���0��f��@�Йb�����V>�D�Y4�`H��Rk�;+�R"�H{��Bۜ����E�<��4!����?����c�,�CL$�]t��he�pX1��ٟ��e�v��f,daX�ͽy}q;��
 ��[��5��9� ��:"Fu��x�\���>' D"��I�.+"�6���`�ψ�߶�/�[� ��i'��'���`wM>"/�d!������O����_y��P�����2$j	�w�f�Og��?�IC�� ���i<��IVc8��g ��2��6�z($��bDI�)�`��Ƈ�#Y�h�&�3Y^iV��3�I�2�/;�w�4C��cw)u
�?�4C���̘R�;�CxN����A�D���Ч�:���3P�,D$@�v`-������Gg+�����v�ۇ��	��Bti1��Q��xÌ�	
�c�vey�4{��͖���9�l�	�����,���P�NP]��5��6�GЛ� �^"�#�x����%Ҭd���#�J��s*P&[ӓ_o�K��~�\��Ï���� ��`}f�^��Q��H��5�$��4rV�^uV��I.J9Z�$������FE�i�Ѹd�v����3$9������2�iF�y0>l� _�\�^�K��"�U⥬��(�phڣ*���3��q�x�S�Hx r�)��,��$���XZ�b�0YӤZ"��?v��pLY�,�k��(��ܘ��=�Y��Kj�'U��tj�F���>��pe���H!��,zEx$��S�k	�s�h�Jw�_�}��U�Q��A��H���IW�3#�޷i�^-sB]{����c�LB����ܤ�,G��ǭA�A,D�(�5-�M.2�H��0���$y�p|@�'�"�����py��4��E&a���%�p��w��¸�B4ܘDF� ���<��G��ˋ/c�{��5�h�0������	���z��)V겂���(<������������p����>�cyF�e~V�N��SB��u^��a-<Zӎ|�D��I~T\��+�Q�'�Li��7ǻb���Z�kLVX���WQ��)�g�-�2�Z^���<�̓D�Rc""7sᲪ�2�]��h�#�j���+0!`w8d}�M�E���T�W���#U�Aa8F���}���$L��F��*T��̙���x�^�{@�z�;w T���9 9�jLw�J�[���#�� �py��%;�Xr�I8�EqY��,0�mG�~eO��K�A;	����73�:e$�ѧ)rVf�.\eph!��T�����E	V�8���㚅�=��_��VRH�hQVuV�1׆R�R�ꡬ���NV�N�DWvJ@���e¾�T�^�6�����N��'H��n�����
�`TV�e:yg ݖ�p?����9%[����toN�&�w��2gt����3 M�'���^�μ7���
�$EȑD&�Z �)�=�Гy�~�x�O6�Q}v~�^�#��qD&ўitiU.�	 .@�0����3��ك�8a�5���FX��S+��d�G��0Q�4d�šE\o����9�o�<5�����<����+��`�r/��1�7�`AA�ba�%n��Ck�^x�KX�R>�%{���*�[��[�h'�pR��[�hg_��U��2�S+Lw�o}I��4|/������i�0I!�'�&>9��$�FW�$Oѫ;���B�}�9��G�1'��z]=LXL��K�"H��ʁS&y�UV�z髛��<]�[R�Kj//_K2�Xx�7�hρYeR�a��%Q����
�RQ�����a�H�G��:�h�c���{�P��-�!WG=M�OWkv�j����D��q�s�ؚ"�b~�u�	"P��_Sh|�[]���Ucc+X���L��r�gMJA��C�ƇLe�eu͸�㨪��$w��.�l��6�F�cD�EK�+O�W4>�h���r~����s����cLH�K�I����sT�y��=�p�o�M���qE�������x�@A�2��~(��L/��)�,��rL��%y�e��K��X9�Ȥx��&X��vZ�+	�����g�0����/a"����Ĕ�Q)d����Q�Q��AwY9N�$o6"�Sj`2�sd;�W��&ج\�i�/�JFZ����r	5��t��j>�b��~��m�0�ѥx!�\�i���#K\��R��[4!C���t5��,���V�,94�Ew�0d7�L��� ������h� Y-��P�c�H�U�n&
���5E��q��Y{�jN'�6����{nX]�l�K#�
��ㄫ���V��\�ڗ}�[�j=�,
T1@�~4�,��e�Su���E?7r�G\����]ZU�W>�n��Gx�e������$���I�*+`��8��yZ��e�L�"5-�ƣm�Sl{Jz��õV������F}�B����EѸ$��'B�/��?�����Nx�r��ꖷ5����e�a�pu?�p��j��<"��rBd���Re�A�:�?!��k����E�VR���\w�| 1���J��Q]���Ih��@�\�luZ13�ˮ4��5�8�m�$n�Ӟ�Q,�F+M��'��á�&5�IRB��#����S�4�40Y\����&	�I	�V�[��5�8��w�1�������ps���-�ԭ)�p𜿟�+83�&�)��z���ܶ����φ8s�+�3S���n�{��}��p��nǤ�Oh���g�1^�<�3�sB�#��##���ʊ��!��@���o!�z�n�K�DY٢�D�+SԩD���U� Ż��V�F�	3_W��,�I���e�P�0qji���R�u�Q����v    �t�����R�I.�fR@�ݠ�3?��B&�K�P/"؆�U�m�z�tۍo��L���)	֙Z�hG:�Hh}�'Z����)p2n�[�̽L��f�� �A�H�F�����e�N'3�kk�����{ͶqG<�dq�n�̪�\�<�zL���'E*Ep�^�T�&S�y�0�ɔAQ\�d�M&#sr��L��P�A�5"�Ң�d��Y��y2S<P	�x[ȖiQzX�aZݫ^;%=v�qh��{W�k��,�lUlUV��.̊��	^��J�6�=��֪�;t{~��p�ש�@D��H>�<E�Y~C�,o���S^c�����)�%�X��R�ؓ�:�
�~7\)[�%[��\�yP�=R��V�k�L�39,W�*koL2�-לĲ?����ɖ�(k?+ʾP\[�Y��2=h�.\j����A�Oi]��S�J$s�o�l���˥_��E��~�Ҫ|���b�b���"�*��;U���s��C����!{9a�Vu��	�*���ցU�wz.=�O�m[�8��m]�}�в��kﭿ�pe������?j�o�4����M�즍��[�T XU{���%!�{h�xi=��<Xk&�g���5ȿ�n�Ɩ��3iF~�}|]���%ϧ�>�e���Hp���t}t�d�99ǈI8*>֠��l�	}oL��L����i�(,��!�L�v	�uBy���7�]�rWЯ��Y6LB<�d��9�Z���äzyhR��LJ�ܧ���Q\����U'��0	Ǥ�����#�n�WP���&!�{@�bD��'�7'7`��ёu;m9��l&���^�mλS��W`���tB���^����I���<*|k�3z� 
�Js���Z��Ӂϼ�@�Is��� � �ɩ:L���w�R��.p��sۻ�(@6�&�﹛����^��7;��6����Q�9�h�+ELR� #�i`�̪0���p��)5L�Y�hxi�ת�ə3L
�°���⸻5;9��I�>wM�Ҝ���$�Xcx�,�_�.��8��VS�V��-��H(�Q���K\;ï�y���4�l=r���b-}��y�":�쨲%Ł�����d+S[��$m�S��Q:��,d)�d�vqw�����Xe�,���\U���K?�����LB`ԕ�߽�i;O�u���E�����9"'�'��{�gTW$�7���B���,B�x��56�uO�;�IN�`�t�a�ծ��:9q�I30������!>N�(��
��n�'LN�`Ҭ4aV7�"���6P�Yݠ������6��Yݜ��NNa��9��j�٤1�t�MZ�''�8����F�ngHN�`�*c(v���9�
����a�u�f.�v�����(�T׻�4��L�9LK�0��7wzL����������f�l�������_�hrP���<J�g��mۙ	ɗ�Yjϯ�]o�	&��_��7F���L���o:�9�{'���$dwުt��[�0i������oP$Gn�¤��ȯ���_4%8��zx�Q�Os�4��q���V�π�L9#�{>�~�ä�"�+���G��
��ø{��'��g!�{0	'@G�6�|�j*rF����v�:L!gr0i���A��s)*�T&��'�/��<]F��s�*�a�����A���ԃ�7��|��p ��*L�qFn�'p��k[|,��0	gPҲ^"3<���L&ͨt�JU^��V���$�|Q]��SI��I�����
�i
�f��*l<���[!'W0	�Xj��NU�N��)KY��B�d&ᬼ|Ln�J壜�����G��q}]��BN�`b,��;�r��>M���<X����fֱ��;�`rgy&!J?����e^�:l��׈���)7H��u��D���C�I>��y���9��>7ѷ�ص�=��S���m��ɯ�� ����w�r~I��K��qK�V
e	���еAO���3�۪i.��&1j�ŏ��m��w�ar�������bi.W0��4r7&!�gfw2U�e;�@�g�ʎ���7����f}����u�.�&�t�ۻ�A��Q�vȇ3n�	
`��B��[s���C��0�)N!��0��Մ��교��
W�c���� ۓ�^��� ��Op��[7�EByЮ��rl��uJK�,��&� �& t* ���?I����x����u�G� lwA�B��S1 l��9�q�Z����&�prNΤNN6f�����Sx�}А�Eh<���x{ʹy�	,"��ä�O�T���9Z>�������]}�ku�5vH10��a�T�k����V�0OɐZ2y%e�P�P0�Z�wc
M��ޙ�������I���Z�/��ն�J{����}�Dۥy<u�ɘ����$�G���	�R*2-�V��#�z�\��z�oI�±�7t/{Im}g6��fD-�C[N��Sdwu��ƹ�%���d��/5�u��U*�g����*��b�\�M��a��y-)BT3�)����L<_��6ς>L	�����s? ȇ	��
��1y������4��hI��^?�̢}��% 0��uG{X�U�O��k������-e�r�v+�ǼH(�p2�>p�3�pǧ��Df�����E���C��GI��N�yT�.nH&A��pV�J0��\/��_C[��|<�W�+��舸��i���U�	��(|����hPp��3XJѣ�{� �A7�W��^�M�wy���Ȃ@A�/.E߹��G}�f�*�ɢQG�z��E����H&��?8E�44��2�p9���e��� S?gʫ��¢qd��� ���]bC3�6�k?#���6�HNDiF����zx�=N���2�=�f�U7.�~=R\����|q��@�Y�vu�zʎ?g�r_�}��IL����`��Vƞ��f�w��U�E�1�/=�A:�b �K�Rf2SF �G�c�G��Y���!��%�I�ɨ�h�<ECK�P�I�@����AVpS��)��&����_�a�Op= ��e#����S�5-���F�\��^I�miF��͖OV�dݍ��|���`�:+�3f۟l�Dx��Ⱥٶ���/�ʰn��wa����U���V3��$囋?�����A�e�O���e��Z����`�\���=�YYOӤ��lI�&���6���Wcmg�}�&~�h�N�ɞ�4���
[EO[�
�m�d�B�r5Yl����'+iW�H���j�Y��bB���y���ɘ�Ҷ�y�a��.V�˵$b�N����+yc��xqO��Y��~J����O}A����Bo����bf}?צS1�MG���� ��0^��|$�Yvo2)Y�p��\]��l�([�A���jА���aJ�/�b��Pz�bs�%&Ѕ�o������e�o�Wp�j���2?��ŃE�\d~ٗՓ�0e�-���>���wn/ߢ�?�J�%����F*��S�T&�n�/�O ?��kcU!2٠ܩ�;�������e�Vy�aZo���~�M\�g����6���~c&t���d"����H��;B�|g�w4�|�p��4\�����`'ڀ³-)�b.�E'c�eF�Z,
����{���G��>v�?B�1��%���tmZt�4J�+�'�����R���> E!	/����`�ew]t�	�|[/�&o�(�oB��DB
�(����.�]ݍ��U��C�n9/�7��ܵ�$�$?���|��)Np��`�w���r`R��+��5�x&��2W:Ϲ`x
B�%a{��
&�-�銡���h��F��{e��TZH�j�[�G�@�xzc&����X&@�~+��R�.)��䮘�kg6]����x�g���w������^�ZN�`�GU��Lq���dwc���l�p2]ʊɜ�\��A5=��kPVo���I'���������F��DV�G=����W�i,YpÀۻ����Lp��YCm��S
�Ld��C��RIG��4�u��g���Ҍm���H��;���mL��|�{�g2z䑩m<τC�\���k��     |��E;��(F����ɚַ��x�#H.."�X��]�c���&FGj9�ց��w�z���8N><��p�W��W��NdU����Ɛ�����C���w��WTS���+g�]�Q�a����2j��M���S�MYRL���-jy��M�S&�eꫯ��`	6����$�-Qˉ�U-�j\�|���Z(�nI� M`얯ܩ�Z΅�mˎ|����-��A_.s�uݸ���渲��U4_�\��q��F�uF�B���	����	�6.�j5��mtҫ!4�|<���%��#Ab���Ic˪�q�I|��
�x%�*~�2N`�~"^�)r>���ô˯��������j{�ы�a�E����"\�jL9�I�� @��bQN	l)������� �s�hܡ+���PQ��ߩ��IV_�u֑S�ZV_\A�6Ȁ�(����>z/��;�n�#<N\?�ۼY��c�a�&d���O�ƕ�.���YL�֭�T� �V�FS8�c��=���A��=��۸��[���m� �lhR�ω�?�:��������xn-�ޙ4ӹ�$z��-���C��OB�+3��Q�!��2�8N��ߐ��=Ɏ5��=I�D�iw�Fs�a��&���z���.��0g�ַ%E������<h�=DN`��[0\4s�<�d.��4�%4ԥ��J��e2���Nǵ�P�}\6s�q�t\2ÔU�˜~G\6��C� T!�H+"֤Q�q߻$KS.���k�k���G�C.���ˑ��*�v����柖`J��c�S\�����\r�C]vStmu��n\yJ���ظ//�&�����&L.��_ރ��F�j_���y �#Գ�'�:0i�o�c��7��$)�^���Ʒ#4�P8��ʌT�4Q�*�+~DὠT�gi~�5�˺=���}:y`:D��T�3�^���z� ����I��@oռ�*\Q��>D���<��k��B�;OH���n�����K�����a�\���\j�H�)EV�h+J�!T��h���~d�z��zb�pO��g�M�{pR�N �Nj ��+�5��N�/��@��ר���I�/\4)�_�hS]	~��_�\���k��^]d�4*�Ah�V[��1HdU�`�l�N��cҀP��Jwy1��f�c^�����q�>ukB<2˩��8��ɣ	���"EM���$C��{y\�KLlO�����ߗ����{�`��U ���9 �ݝ�ToT�S:�)2�K�=X.��HV*-D����_����M�$�z�p���e����2n�Ĥ#���n�@��ޘ��/�5����|J?|�����j� ��s�-�5ט�3u�C�1Hظ��|i��d��
��^mn���I)��a+L��ڗ.ߔ��p`�J���߻� G�Ac:8���e3��ڌ?>�i��r �4ݟ�ޥ���^8&�2;sf�1��T7�U1B.K"�P��}��6�6"�u�NX]��X��o�p������9Fԟ#��6,+_NH(�ϴ��^���6	�ӰkV),>Ŕ�z�U���zs��M���,�\�;�ׇ���R�Ъ]�5�he��e��j+h�d����<V�,j��L�y��!�KI��m�.g�^rW��r�>���&��c�
���ne�^+�v�7?h�,q;l�����������/�$8iN��h�q"��)��{ԋ{�Q	�������eYh&ޒf�-mv��1$KLj�u�'����?��-�7n��!g��\������FV�����	@���]�v`x�O�ML�(��GU�� tLG�OBMCJi(�+�p~��潮�#����B���;G��� v��"�L�.���7�1`B�����Ϯ�bҧ͠]O`I����0>�3���M� ��h��6?	��E6� +5�����/�%		��e5�j��,��l!��^����']6�8I�{Ja�@�������s���3Ϲ�=�X���ȓ49R�Z�H3Uq������np���Z����>a�ow���>�o�������/��o�g���`�|zea0b��8-	Q��5�X]�r��W�}~�[��R��=�`�zC��~��)>X)�H�~+*&{����N�ax��Б"�D����ʪ�U�P�B��+��\�n�u��/�,��rwt[�&�Z�r�M���"���l)<%n7o6=�N�]2��]&`����nz0 ���JSy������S�B�M��W���m��PɁn���z�\ߺ3��dW�f�^�/
׸�WϦLQ1	g��v�����_ɘ:���1]ӃÉ����`)����`��CT5*�`a[�7���(�g5��L(9���r� ����H�Jhv$3�"�Z�qs0O*Y@�2��.�W���X��¶Շs��)�Pz�+�V��*�=�,W�>#)�]I۫t�>����ro4b�Q(����.w��y�Qk("͌�gz,׫n��6ZK�"������ϲ��������|D�J�+��cR���o}Z�)&�HĘD�H�
/>���f��z�c�9"�Wh`R�/ǃ�k��Y��y�3C<ht�*�!A�Hu�'|�|���<c����z�5�	��fvCWmBwa?И��H3l�L�p�ǋG.
U&��-��K��5m졗|���`Ʈ�	���r�_�#��Nx�ˏ**&u������#PG� �T
�Il��N+��)�s�l�(�5�C�z}tm����E��@U�	(eFVm��D����d��j�Gu�<0�-��n��ԏ+�j�cl���0�Т{_������)jW����'����n��T{�j����M��ڔI��w0K]y$`K��Gf��S\@@8_W��G�(#E�|z�n���)��\�m$?�.�9�J��jYGk롰��u����EiVW��V�P�S�d�w�T��dN�IĊ1zˏ���y�\ę��RN�,�M?�;b�G�3�����L6�� d��Y�*���e���⇀=�5+hZ��Ef��aa�p�GfcND$��� ��B�/I��67�K[0B��v�x���p��F�\Sh,b�^������L�.G΃^գ�<�h���D�ʬ��]��Y�CD��F$L!�E°�R$wcX�fF��\V�a���8w�ʌ�x�$��9嫤��ߣZ�9�_Hf�ic�����w<�FE$8J�o2[lס�����1�P4gus\Rz4m0"E�I�$���ޫ�o�0��)`���C@�pY}|)""J�*Fb�t�qq�GGYB9v�xǴ�1�����D�-?=�>25O	My������h
�uv�{p�Ô�	�U���T�[���P*����{n%[m@b���X�H�7�����W怄�Ș.���j	�y��Z��$qU
�h�L�k��
�s�|i;R���)>%����]�Û�g���x[ޚ�V~ga?�����f�3��wŞ]I��Z��t�s��X��ڧ�@�����8<ho��҄�����y�7E�~�wm�l8p����Ԃ\D�`�G-�U��VL����+�"ڰ�<�u1F�U��0g%>5 ��;\K����qzŊ�> a�('Lh}�j)-a"��
���%q3LWg���R���Ѝ�Q)��)Ge-+ѽև���Xr��&[	�#�A�����O�����=�B��fUE��"�.�`5�@����ՇY����ʀn�4�*�ؘ�H�~�I��Z�V��S�PV,����)�7�2�'}���Z����|A�4f{�W~gj��w�<�[��z?7���3��>+$�����8Y����*�o�1^��t\�l�}�z�AGI�VQ�o����������؊���_q��~g���J�F��%a�*rd�y�eAc����!jV�F�0R�c�!o��RW�����	���L�|厏�f�R�ձS�I�@�̧[:#��<gN�?>n�Y��#0ʍ�(ϋ���y�Q^,`,/8�.lr��h�u��VI&R�г����- ' ,@F9��+�pf_�}�z�GI�wU�w�-O�l�n����/��0�"D�7 ����� s  �a��ލyw���W�zd��C�%�P�#b��������G59����(	���\���܃W{��U�ը�x�{����[���o�`�����P����v`��`z��~��yD���ī0��{��5U�z9��O�l)b XZ��E��ၽ����=�H���Cw?)�rr�	%?�N��摶Cܾe �BE�#L�Z�Ec׻Ʈ�budz�U���갗��G��� 	j��̜O��w`k�*;��1	�yLG{��FԤ����7s����Sx����'XR�%x��(v�Dߌ�K�q��5|�^��Q�s��LY;�n�Cm�ͺ�.v�$�nlL _^���ޗ[�r��˝��t*~�7���?՗ab      Z   �  x��YYsW~F���<D�t��y2;b_*U�h��ٚ-5U��mʩ��͸�I<vj�afd�Jd[��B����!�8��)�%sO�m�w��ۇ��/e3�j�L?3�����<��B��~e�O�����<����L�L�����������/�5����v�y���_���6\|j��ޝ~f���^�M�#hzn3��gט�����C�!4�LoMo��zk,u�^�P7kҤ��U�&W�Dװ}��/P`��0���"i�|�B�y��wm��{$���!jK'�c�ۃ�i�F�O�P��32Eu��aֹW�PE�>I�>v��ñp*�t������?��O�n�S�x2� p��ق�\��"��$}�i�Y"l��	���x?����tf�����f>��c�j>1����c��<"������ӯ�&��3�?"��x�_���kl���$��@��R��<U24�����m(�t`@�G 1�WV�ŃI>�V����Fr������C��\�bhf�5D���E��� >�k//�S�x|�q�5��.W��F�!�1�������JZ,Zvz%�!�l2֧�����d�������0��lyl��-�]�bx a�U���c3��}����#tD���H�B��|�P�$�!n���E0�ܰ��`��A�!������g6����{p�Ď~��a�~����
�onw�Ϳ!�c��!#1A�dGѱ����l}�T4B��K��"��F�O�,�pW�)-d�9o�[��,{�\����܄���&ա@�!�o*��w�b����a�d�
R�<�!�ĥt���Lo�?A�|�$�;r���}ӻ��ђ6�d;Ͱ`�4$<g?�Z��\=J&
���W|�r8P��	���$m�a��d���u#�����`R����������_r�iLpCk4 ayf��D�	�9�d~��}ݦ���z�yv������c��f�^��}--	|��>���5�A^|�V_��%U���g�Jzr| m�&r�&w&s0����6�
m_��-U�ъ�?М	�SϏ��8��P;���%���D�X�hꢛ��7A����	��L�/Ɋ���*���5'��gvEQtp�C8v�l��	2y�����S�����l�*�f�ID�q���K��0$ට;�������
�,���P������׈d[�d����X�K����KZ�{�J'���������^-mL�U-/y@��(�qN���;H�.x���XZL+Xr(�_�솱<�q�R?��2'J[O�I�?��Z��z���[����FP)z�c�C`�yr���F��$��l])&ӑq+Z����s���7�*��׵��zZ<�T�� B6�j1��ʣ����	��E2Gp�,ΰ@^�3z��A(U����Pu2"�J��HD$'��-��y��P�����&�s��|�qj��t6��I�B �$-�$�5z��	ubz�4��Z��4!7"(0�G:D����BC��_�B�Ώ)��*Fe|P�K0556�T�*0rZ��$����;o]h-a�\ (n�K�
~"�i�]��P���'\\#���-)J��Ƽ�i	A��yN�v�'�"4�=r��q'Hu�a��"D9B�W�
���'��`���`�zP� �A]XVZ[rVi΅�����g�g�,�3��_`Dp-��o	�M8�r]�4��$BkmW��T��k��JhF*O(itP�!���LCU>YO<��'��Qj7�U�D���X-�\)��/<3��c���`�n^���2�o�g������)=���Fm+̙�TUc;ɖ7�a�J�q�=V���`G)W��t&���j��4�a*@F|%ge{��IEB�PKYM+��)*�n/��B"��NQb����N�p�!�۸y��w�)�Ά��Z��:ݐ��C���%�}�)�"q��G�\&�vo0���I:Sg4YT��0q&�F1�:�Q#�D�����w�H)�(�Wۻ�&�h���Q�f?�A�Z��G�݅[��U�;S\���V���g�c��p�`����r 
�z���e�����ǿ[�~���/r
o�8��\}��W�_V�Gt��T#��+\�Q��>Oڥ���ՑHU�B���N�8!u�L@�<�Q�u�(�Jl'��wg�l ���>�fR���?�p-�)�H�EB`,��d�������_R���$
����{/��n�4��ӻp��s���۶�Ԗ�й�E<3��.%6�4�޼VOf��_�B��&�4�r){�P��4b�AB�ֹb�
���E��7x�bڡ���/h��[�����Xlg�׷�U�L[�`]���-v�޵����U`�U��څ��>�����w�����b�=v/��ej������k��Y�յJ#��kv<�I�.��$Pp/�g5Y�P	��q�� |������sR��@�q��� ǫ�o�~�l�ɧ�u��k�.F���o
���7jֻ���t�yAa9	�F-w{���m=]�ʂ�؂30��\���}ެ�_$��t j�(�l���u��3v1�!�o�2���O���Z3�1��KG���CH����NM�cyx>�Xg�m=�*wǒFH�e�$���,��s|����@]s��q F\�WP��l:+I�?�3ш&�����.����P��([��P�O���!]Fֿ�e1�></�o��Q��1ofÂ���(P��I�.��/'%��1M)�)2�	�����AY���t�J��q}�_Ե8Q���.�Wx��I�j��*�(,.?���������T&��u���x|�l8�ǖ��T8�V�~�fEVut��5���/����ᰜ��=_:]�⣐�Lk�r��#�`� �R���2т��p�������Ń[M;;;;�ٺ�E     