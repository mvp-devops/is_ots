PGDMP     ;        	        	    z            ots_test    14.5    14.5 �    A           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            B           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            C           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            D           1262    171342    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    171746    building-comments    TABLE     �  CREATE TABLE public."building-comments" (
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
       public         heap    postgres    false            �            1259    171745    building-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."building-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."building-comments_id_seq";
       public          postgres    false    216            E           0    0    building-comments_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."building-comments_id_seq" OWNED BY public."building-comments".id;
          public          postgres    false    215            �            1259    174269 	   cable-log    TABLE     f  CREATE TABLE public."cable-log" (
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
       public         heap    postgres    false            �            1259    174268    cable-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cable-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."cable-log_id_seq";
       public          postgres    false    254            F           0    0    cable-log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."cable-log_id_seq" OWNED BY public."cable-log".id;
          public          postgres    false    253            �            1259    171572    counterparties    TABLE       CREATE TABLE public.counterparties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.counterparties;
       public         heap    postgres    false            �            1259    171571    counterparties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.counterparties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counterparties_id_seq;
       public          postgres    false    212            G           0    0    counterparties_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counterparties_id_seq OWNED BY public.counterparties.id;
          public          postgres    false    211            �            1259    172182    criticalities    TABLE     m  CREATE TABLE public.criticalities (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    threshold character varying(255),
    goal character varying(255),
    "tenseGoal" character varying(255)
);
 !   DROP TABLE public.criticalities;
       public         heap    postgres    false            �            1259    172181    criticalities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.criticalities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.criticalities_id_seq;
       public          postgres    false    224            H           0    0    criticalities_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.criticalities_id_seq OWNED BY public.criticalities.id;
          public          postgres    false    223            �            1259    172824    design-documents    TABLE     $  CREATE TABLE public."design-documents" (
    id integer NOT NULL,
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
       public         heap    postgres    false            �            1259    172823    design-documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public."design-documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."design-documents_id_seq";
       public          postgres    false    246            I           0    0    design-documents_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."design-documents_id_seq" OWNED BY public."design-documents".id;
          public          postgres    false    245            �            1259    172206    designs    TABLE     
  CREATE TABLE public.designs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    172205    designs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.designs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    228            J           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    227            �            1259    172193 
   directions    TABLE       CREATE TABLE public.directions (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.directions;
       public         heap    postgres    false            �            1259    172192    directions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.directions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.directions_id_seq;
       public          postgres    false    226            K           0    0    directions_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.directions_id_seq OWNED BY public.directions.id;
          public          postgres    false    225            �            1259    171900    documentation-comments    TABLE     �  CREATE TABLE public."documentation-comments" (
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
       public         heap    postgres    false            �            1259    171899    documentation-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."documentation-comments_id_seq";
       public          postgres    false    222            L           0    0    documentation-comments_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."documentation-comments_id_seq" OWNED BY public."documentation-comments".id;
          public          postgres    false    221            �            1259    172618    documentation-solutions    TABLE     l  CREATE TABLE public."documentation-solutions" (
    id integer NOT NULL,
    "commentId" integer,
    "statusId" integer,
    answer text NOT NULL,
    "designContacts" text NOT NULL,
    "solutionId" integer,
    "userId" integer,
    solution text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 -   DROP TABLE public."documentation-solutions";
       public         heap    postgres    false            �            1259    172617    documentation-solutions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."documentation-solutions_id_seq";
       public          postgres    false    240            M           0    0    documentation-solutions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."documentation-solutions_id_seq" OWNED BY public."documentation-solutions".id;
          public          postgres    false    239            �            1259    171561 
   equipments    TABLE       CREATE TABLE public.equipments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.equipments;
       public         heap    postgres    false            �            1259    171560    equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.equipments_id_seq;
       public          postgres    false    210            N           0    0    equipments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.equipments_id_seq OWNED BY public.equipments.id;
          public          postgres    false    209            �            1259    171635 
   facilities    TABLE       CREATE TABLE public.facilities (
    id integer NOT NULL,
    country character varying(255) NOT NULL,
    vendor character varying(255) NOT NULL,
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
       public         heap    postgres    false            �            1259    171634    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    214            O           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    213            �            1259    172534    fields    TABLE     %  CREATE TABLE public.fields (
    "subsidiaryId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.fields;
       public         heap    postgres    false            �            1259    172533    fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.fields_id_seq;
       public          postgres    false    238            P           0    0    fields_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.fields_id_seq OWNED BY public.fields.id;
          public          postgres    false    237                        1259    174284    impulse-line-log    TABLE       CREATE TABLE public."impulse-line-log" (
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
       public         heap    postgres    false            �            1259    174283    impulse-line-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impulse-line-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impulse-line-log_id_seq";
       public          postgres    false    256            Q           0    0    impulse-line-log_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impulse-line-log_id_seq" OWNED BY public."impulse-line-log".id;
          public          postgres    false    255            �            1259    172504    logos    TABLE     �  CREATE TABLE public.logos (
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
       public         heap    postgres    false            �            1259    172503    logos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.logos_id_seq;
       public          postgres    false    236            R           0    0    logos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.logos_id_seq OWNED BY public.logos.id;
          public          postgres    false    235                       1259    174313    metrologies    TABLE     g  CREATE TABLE public.metrologies (
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
       public         heap    postgres    false                       1259    174312    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    258            S           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    257                       1259    174332    monitorings    TABLE     c  CREATE TABLE public.monitorings (
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
       public         heap    postgres    false                       1259    174331    monitorings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.monitorings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monitorings_id_seq;
       public          postgres    false    260            T           0    0    monitorings_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monitorings_id_seq OWNED BY public.monitorings.id;
          public          postgres    false    259            �            1259    172680 
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
       public         heap    postgres    false            �            1259    172679    normatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normatives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.normatives_id_seq;
       public          postgres    false    244            U           0    0    normatives_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.normatives_id_seq OWNED BY public.normatives.id;
          public          postgres    false    243            �            1259    172364    projects    TABLE     _  CREATE TABLE public.projects (
    "fieldId" integer,
    "designId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.projects;
       public         heap    postgres    false            �            1259    172363    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    232            V           0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    231            �            1259    171806    sections    TABLE       CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    171805    sections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sections_id_seq;
       public          postgres    false    220            W           0    0    sections_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;
          public          postgres    false    219                       1259    174397    signals    TABLE     �  CREATE TABLE public.signals (
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
       public         heap    postgres    false                       1259    174396    signals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.signals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.signals_id_seq;
       public          postgres    false    264            X           0    0    signals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.signals_id_seq OWNED BY public.signals.id;
          public          postgres    false    263            �            1259    171795    stages    TABLE     	  CREATE TABLE public.stages (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.stages;
       public         heap    postgres    false            �            1259    171794    stages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.stages_id_seq;
       public          postgres    false    218            Y           0    0    stages_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.stages_id_seq OWNED BY public.stages.id;
          public          postgres    false    217            �            1259    172411 	   sub-units    TABLE     �  CREATE TABLE public."sub-units" (
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
       public         heap    postgres    false            �            1259    172410    sub-units_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sub-units_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sub-units_id_seq";
       public          postgres    false    234            Z           0    0    sub-units_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sub-units_id_seq" OWNED BY public."sub-units".id;
          public          postgres    false    233            �            1259    172337    subsidiaries    TABLE       CREATE TABLE public.subsidiaries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.subsidiaries;
       public         heap    postgres    false            �            1259    172336    subsidiaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subsidiaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.subsidiaries_id_seq;
       public          postgres    false    230            [           0    0    subsidiaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.subsidiaries_id_seq OWNED BY public.subsidiaries.id;
          public          postgres    false    229                       1259    174360    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
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
       public         heap    postgres    false                       1259    174359 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    262            \           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    261            �            1259    174162    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false            �            1259    174173    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
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
       public         heap    postgres    false            �            1259    174172    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    252            ]           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    251            �            1259    174161    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    250            ^           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    249            �            1259    172637    units    TABLE     �  CREATE TABLE public.units (
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
       public         heap    postgres    false            �            1259    172636    units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.units_id_seq;
       public          postgres    false    242            _           0    0    units_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.units_id_seq OWNED BY public.units.id;
          public          postgres    false    241            �            1259    174010    users    TABLE     �  CREATE TABLE public.users (
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
       public         heap    postgres    false            �            1259    174009    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    248            `           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    247            �           2604    171749    building-comments id    DEFAULT     �   ALTER TABLE ONLY public."building-comments" ALTER COLUMN id SET DEFAULT nextval('public."building-comments_id_seq"'::regclass);
 E   ALTER TABLE public."building-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216                       2604    174272    cable-log id    DEFAULT     p   ALTER TABLE ONLY public."cable-log" ALTER COLUMN id SET DEFAULT nextval('public."cable-log_id_seq"'::regclass);
 =   ALTER TABLE public."cable-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    253    254    254            �           2604    171575    counterparties id    DEFAULT     v   ALTER TABLE ONLY public.counterparties ALTER COLUMN id SET DEFAULT nextval('public.counterparties_id_seq'::regclass);
 @   ALTER TABLE public.counterparties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �           2604    172185    criticalities id    DEFAULT     t   ALTER TABLE ONLY public.criticalities ALTER COLUMN id SET DEFAULT nextval('public.criticalities_id_seq'::regclass);
 ?   ALTER TABLE public.criticalities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    172827    design-documents id    DEFAULT     ~   ALTER TABLE ONLY public."design-documents" ALTER COLUMN id SET DEFAULT nextval('public."design-documents_id_seq"'::regclass);
 D   ALTER TABLE public."design-documents" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    246    246            �           2604    172209 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    172196    directions id    DEFAULT     n   ALTER TABLE ONLY public.directions ALTER COLUMN id SET DEFAULT nextval('public.directions_id_seq'::regclass);
 <   ALTER TABLE public.directions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    171903    documentation-comments id    DEFAULT     �   ALTER TABLE ONLY public."documentation-comments" ALTER COLUMN id SET DEFAULT nextval('public."documentation-comments_id_seq"'::regclass);
 J   ALTER TABLE public."documentation-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    172621    documentation-solutions id    DEFAULT     �   ALTER TABLE ONLY public."documentation-solutions" ALTER COLUMN id SET DEFAULT nextval('public."documentation-solutions_id_seq"'::regclass);
 K   ALTER TABLE public."documentation-solutions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239    240            �           2604    171564    equipments id    DEFAULT     n   ALTER TABLE ONLY public.equipments ALTER COLUMN id SET DEFAULT nextval('public.equipments_id_seq'::regclass);
 <   ALTER TABLE public.equipments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    171638    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    172537 	   fields id    DEFAULT     f   ALTER TABLE ONLY public.fields ALTER COLUMN id SET DEFAULT nextval('public.fields_id_seq'::regclass);
 8   ALTER TABLE public.fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237    238                       2604    174287    impulse-line-log id    DEFAULT     ~   ALTER TABLE ONLY public."impulse-line-log" ALTER COLUMN id SET DEFAULT nextval('public."impulse-line-log_id_seq"'::regclass);
 D   ALTER TABLE public."impulse-line-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    255    256    256            �           2604    172507    logos id    DEFAULT     d   ALTER TABLE ONLY public.logos ALTER COLUMN id SET DEFAULT nextval('public.logos_id_seq'::regclass);
 7   ALTER TABLE public.logos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235    236                       2604    174316    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    257    258    258                       2604    174335    monitorings id    DEFAULT     p   ALTER TABLE ONLY public.monitorings ALTER COLUMN id SET DEFAULT nextval('public.monitorings_id_seq'::regclass);
 =   ALTER TABLE public.monitorings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    259    260            �           2604    172683    normatives id    DEFAULT     n   ALTER TABLE ONLY public.normatives ALTER COLUMN id SET DEFAULT nextval('public.normatives_id_seq'::regclass);
 <   ALTER TABLE public.normatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    244    244            �           2604    172367    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    171809    sections id    DEFAULT     j   ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);
 :   ALTER TABLE public.sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220                       2604    174400 
   signals id    DEFAULT     h   ALTER TABLE ONLY public.signals ALTER COLUMN id SET DEFAULT nextval('public.signals_id_seq'::regclass);
 9   ALTER TABLE public.signals ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    263    264    264            �           2604    171798 	   stages id    DEFAULT     f   ALTER TABLE ONLY public.stages ALTER COLUMN id SET DEFAULT nextval('public.stages_id_seq'::regclass);
 8   ALTER TABLE public.stages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    172416    sub-units id    DEFAULT     p   ALTER TABLE ONLY public."sub-units" ALTER COLUMN id SET DEFAULT nextval('public."sub-units_id_seq"'::regclass);
 =   ALTER TABLE public."sub-units" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            �           2604    172340    subsidiaries id    DEFAULT     r   ALTER TABLE ONLY public.subsidiaries ALTER COLUMN id SET DEFAULT nextval('public.subsidiaries_id_seq'::regclass);
 >   ALTER TABLE public.subsidiaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230                       2604    174363    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261    262                        2604    174165    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    249    250                       2604    174176    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    251    252    252            �           2604    172642    units id    DEFAULT     d   ALTER TABLE ONLY public.units ALTER COLUMN id SET DEFAULT nextval('public.units_id_seq'::regclass);
 7   ALTER TABLE public.units ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    241    242            �           2604    174013    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    247    248    248                      0    171746    building-comments 
   TABLE DATA           �   COPY public."building-comments" (id, "projectId", "unitId", "subUnitId", "monitoringId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   LO      4          0    174269 	   cable-log 
   TABLE DATA           �   COPY public."cable-log" (id, "sloeId", "numberOfTrace", "cableMark", "cableSection", "fromUnit", "fromPlace", "toUnit", "toPlace", "cableLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    254   iO      
          0    171572    counterparties 
   TABLE DATA           `   COPY public.counterparties (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    212   �O                0    172182    criticalities 
   TABLE DATA           }   COPY public.criticalities (id, title, code, description, "createdAt", "updatedAt", threshold, goal, "tenseGoal") FROM stdin;
    public          postgres    false    224   `      ,          0    172824    design-documents 
   TABLE DATA             COPY public."design-documents" (id, code, "projectId", "unitId", "uqstId", "subUnitId", "suqstId", "supplierId", "stageId", "sectionId", "sloeId", "cableLogId", "monitoringId", title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    246   �k                0    172206    designs 
   TABLE DATA           Y   COPY public.designs (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   9s                0    172193 
   directions 
   TABLE DATA           \   COPY public.directions (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   u                0    171900    documentation-comments 
   TABLE DATA           �   COPY public."documentation-comments" (id, "pdcId", "udcId", "sudcId", "sdcId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �u      &          0    172618    documentation-solutions 
   TABLE DATA           �   COPY public."documentation-solutions" (id, "commentId", "statusId", answer, "designContacts", "solutionId", "userId", solution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    240   ��                0    171561 
   equipments 
   TABLE DATA           \   COPY public.equipments (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   4                0    171635 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214         $          0    172534    fields 
   TABLE DATA           h   COPY public.fields ("subsidiaryId", id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    238   w&      6          0    174284    impulse-line-log 
   TABLE DATA           �   COPY public."impulse-line-log" (id, "sloeId", "numberOfTrace", "impulseLineType", "fromPlace", "toPlace", "impulseLineLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    256   \(      "          0    172504    logos 
   TABLE DATA           �   COPY public.logos ("subsidiaryId", "counterpartyId", "designId", "userId", id, "filePath", "fileType", "fileName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    236   y(      8          0    174313    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    258   [)      :          0    174332    monitorings 
   TABLE DATA           �   COPY public.monitorings (id, "sloeId", "mountDate", "mountDocument", "connectDate", "connectDocument", "testDate", "testDocument", "awpDate", "awpDocument", "commisionDate", "commisionDocument", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    260   x)      *          0    172680 
   normatives 
   TABLE DATA           �   COPY public.normatives (id, code, title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    244   �)                0    172364    projects 
   TABLE DATA           {   COPY public.projects ("fieldId", "designId", id, title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    232   2-                0    171806    sections 
   TABLE DATA           Z   COPY public.sections (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   $;      >          0    174397    signals 
   TABLE DATA           �   COPY public.signals (id, "sloeId", "signalType", "signalProtocol", "signalParameter", "signalTag", ll, l, h, hh, "emergencyProtocol", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    264   F                0    171795    stages 
   TABLE DATA           X   COPY public.stages (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   @I                 0    172411 	   sub-units 
   TABLE DATA           �   COPY public."sub-units" ("unitId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    234   (K                0    172337    subsidiaries 
   TABLE DATA           ^   COPY public.subsidiaries (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   �K      <          0    174360    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    262   �L      0          0    174162    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    250   �O      2          0    174173    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    252   
[      (          0    172637    units 
   TABLE DATA           �   COPY public.units ("projectId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    242   ��      .          0    174010    users 
   TABLE DATA           �   COPY public.users ("subsidiaryId", "fieldId", "designId", "counterpartyId", id, "firstName", "secondName", "lastName", subdivision, "position", email, phone, password, roles, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    248   H�      a           0    0    building-comments_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."building-comments_id_seq"', 1, false);
          public          postgres    false    215            b           0    0    cable-log_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."cable-log_id_seq"', 4, true);
          public          postgres    false    253            c           0    0    counterparties_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.counterparties_id_seq', 169, true);
          public          postgres    false    211            d           0    0    criticalities_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.criticalities_id_seq', 33, true);
          public          postgres    false    223            e           0    0    design-documents_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."design-documents_id_seq"', 101, true);
          public          postgres    false    245            f           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 13, true);
          public          postgres    false    227            g           0    0    directions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.directions_id_seq', 8, true);
          public          postgres    false    225            h           0    0    documentation-comments_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."documentation-comments_id_seq"', 459, true);
          public          postgres    false    221            i           0    0    documentation-solutions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."documentation-solutions_id_seq"', 452, true);
          public          postgres    false    239            j           0    0    equipments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.equipments_id_seq', 43, true);
          public          postgres    false    209            k           0    0    facilities_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.facilities_id_seq', 94, true);
          public          postgres    false    213            l           0    0    fields_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.fields_id_seq', 32, true);
          public          postgres    false    237            m           0    0    impulse-line-log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."impulse-line-log_id_seq"', 2, true);
          public          postgres    false    255            n           0    0    logos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.logos_id_seq', 12, true);
          public          postgres    false    235            o           0    0    metrologies_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.metrologies_id_seq', 1, true);
          public          postgres    false    257            p           0    0    monitorings_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.monitorings_id_seq', 1, true);
          public          postgres    false    259            q           0    0    normatives_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.normatives_id_seq', 8, true);
          public          postgres    false    243            r           0    0    projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.projects_id_seq', 139, true);
          public          postgres    false    231            s           0    0    sections_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sections_id_seq', 76, true);
          public          postgres    false    219            t           0    0    signals_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.signals_id_seq', 35, true);
          public          postgres    false    263            u           0    0    stages_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.stages_id_seq', 11, true);
          public          postgres    false    217            v           0    0    sub-units_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."sub-units_id_seq"', 56, true);
          public          postgres    false    233            w           0    0    subsidiaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subsidiaries_id_seq', 11, true);
          public          postgres    false    229            x           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 56, true);
          public          postgres    false    261            y           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 882, true);
          public          postgres    false    251            z           0    0    technical-card_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."technical-card_id_seq"', 81, true);
          public          postgres    false    249            {           0    0    units_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.units_id_seq', 524, true);
          public          postgres    false    241            |           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 21, true);
          public          postgres    false    247                       2606    171753 (   building-comments building-comments_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_pkey";
       public            postgres    false    216            R           2606    174277    cable-log cable-log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_pkey";
       public            postgres    false    254                       2606    171579 "   counterparties counterparties_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_pkey;
       public            postgres    false    212                       2606    171581 '   counterparties counterparties_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_title_key UNIQUE (title);
 Q   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_title_key;
       public            postgres    false    212            $           2606    172189     criticalities criticalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_pkey;
       public            postgres    false    224            &           2606    172191 %   criticalities criticalities_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_title_key;
       public            postgres    false    224            F           2606    172834 &   design-documents design-documents_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_pkey";
       public            postgres    false    246            ,           2606    172213    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    228            .           2606    172215    designs designs_title_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_title_key UNIQUE (title);
 C   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_title_key;
       public            postgres    false    228            (           2606    172200    directions directions_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_pkey;
       public            postgres    false    226            *           2606    172202    directions directions_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_title_key;
       public            postgres    false    226            "           2606    171907 2   documentation-comments documentation-comments_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pkey";
       public            postgres    false    222            @           2606    172625 4   documentation-solutions documentation-solutions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_pkey";
       public            postgres    false    240                       2606    171568    equipments equipments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_pkey;
       public            postgres    false    210                       2606    171570    equipments equipments_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_title_key;
       public            postgres    false    210                       2606    171642    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    214            <           2606    172541    fields fields_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_pkey;
       public            postgres    false    238            >           2606    172543    fields fields_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_title_key;
       public            postgres    false    238            T           2606    174292 &   impulse-line-log impulse-line-log_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_pkey";
       public            postgres    false    256            :           2606    172511    logos logos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT logos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.logos DROP CONSTRAINT logos_pkey;
       public            postgres    false    236            V           2606    174320    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    258            X           2606    174339    monitorings monitorings_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT monitorings_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT monitorings_pkey;
       public            postgres    false    260            D           2606    172688    normatives normatives_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.normatives
    ADD CONSTRAINT normatives_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.normatives DROP CONSTRAINT normatives_pkey;
       public            postgres    false    244            4           2606    172371    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    232            6           2606    172373    projects projects_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_title_key;
       public            postgres    false    232                       2606    171813    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    220                        2606    171815    sections sections_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_title_key;
       public            postgres    false    220            \           2606    174404    signals signals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT signals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.signals DROP CONSTRAINT signals_pkey;
       public            postgres    false    264                       2606    171802    stages stages_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_pkey;
       public            postgres    false    218                       2606    171804    stages stages_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_title_key;
       public            postgres    false    218            8           2606    172420    sub-units sub-units_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_pkey";
       public            postgres    false    234            0           2606    172344    subsidiaries subsidiaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_pkey;
       public            postgres    false    230            2           2606    172346 #   subsidiaries subsidiaries_title_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_title_key UNIQUE (title);
 M   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_title_key;
       public            postgres    false    230            Z           2606    174370 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    262            P           2606    174180 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    252            L           2606    174169 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    250            N           2606    174171 '   technical-card technical-card_title_key 
   CONSTRAINT     g   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_title_key" UNIQUE (title);
 U   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_title_key";
       public            postgres    false    250            B           2606    172646    units units_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.units DROP CONSTRAINT units_pkey;
       public            postgres    false    242            H           2606    174020    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    248            J           2606    174018    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    248            h           2606    172835 0   design-documents design-documents_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_projectId_fkey";
       public          postgres    false    246    232    3380            o           2606    172870 0   design-documents design-documents_sectionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.sections(id) ON UPDATE CASCADE;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sectionId_fkey";
       public          postgres    false    220    246    3358            n           2606    172865 .   design-documents design-documents_stageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES public.stages(id) ON UPDATE CASCADE;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_stageId_fkey";
       public          postgres    false    246    3354    218            k           2606    172850 0   design-documents design-documents_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_subUnitId_fkey";
       public          postgres    false    234    3384    246            m           2606    172860 1   design-documents design-documents_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_supplierId_fkey";
       public          postgres    false    3346    212    246            l           2606    172855 .   design-documents design-documents_suqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_suqstId_fkey" FOREIGN KEY ("suqstId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_suqstId_fkey";
       public          postgres    false    3384    246    234            i           2606    172840 -   design-documents design-documents_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_unitId_fkey";
       public          postgres    false    246    3394    242            j           2606    172845 -   design-documents design-documents_uqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_uqstId_fkey" FOREIGN KEY ("uqstId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_uqstId_fkey";
       public          postgres    false    242    3394    246            d           2606    172626 >   documentation-solutions documentation-solutions_commentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."documentation-comments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_commentId_fkey";
       public          postgres    false    222    3362    240            c           2606    172544    fields fields_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT "fields_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.fields DROP CONSTRAINT "fields_subsidiaryId_fkey";
       public          postgres    false    230    238    3376            a           2606    172517    logos logos_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_counterpartyId_fkey";
       public          postgres    false    3346    236    212            b           2606    172522    logos logos_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_designId_fkey";
       public          postgres    false    228    236    3372            `           2606    172512    logos logos_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_subsidiaryId_fkey";
       public          postgres    false    3376    236    230            u           2606    174326 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    212    3346    258            ]           2606    172379    projects projects_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_designId_fkey";
       public          postgres    false    228    232    3372            {           2606    174405    signals signals_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT "signals_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.signals DROP CONSTRAINT "signals_sloeId_fkey";
       public          postgres    false    264    3418    262            ^           2606    172426 $   sub-units sub-units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_equipmentId_fkey";
       public          postgres    false    210    234    3342            _           2606    172431 #   sub-units sub-units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_supplierId_fkey";
       public          postgres    false    212    234    3346            v           2606    174386 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    3350    214    262            w           2606    174371 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    262    232    3380            x           2606    174381 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    3384    262    234            y           2606    174391 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    262    3404    250            z           2606    174376 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    262    3394    242            t           2606    174181 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    250    3404    252            f           2606    172652    units units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_equipmentId_fkey";
       public          postgres    false    210    242    3342            e           2606    172647    units units_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_projectId_fkey";
       public          postgres    false    232    242    3380            g           2606    172657    units units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_supplierId_fkey";
       public          postgres    false    212    242    3346            s           2606    174036    users users_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_counterpartyId_fkey";
       public          postgres    false    212    248    3346            r           2606    174031    users users_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_designId_fkey";
       public          postgres    false    228    248    3372            q           2606    174026    users users_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_fieldId_fkey";
       public          postgres    false    248    3388    238            p           2606    174021    users users_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_subsidiaryId_fkey";
       public          postgres    false    230    248    3376                  x������ � �      4      x������ � �      
      x��\�n���>�\.�$s�'�U�ޤ��m�i�[YvҴ�cY�#U�D��� Z�bZ?�'�}�<I�����r�%�,��wfv�;?sF�94�35wٚ�4�uM_�+���v��n���x�h>j�?���q�w��F�W̦9j|��ymn����i��0g��U�NHs�ằ���ϿZ��O��e��_|q�� (K�$��A��c���U-Apm�Ǣ��b��C��I�0[��o�'s��P6f�0o�ؼ�p�B��6��`8Ei>�S�~l�.����-#z�4��M�CfOH<���	�R�UkŢ��kES`ޘ+��FǚD}��oE}o�7�9�w*ʮS�����hҟ5�M�������3�O*�slF��&�;C��,-Y[O�C������͸�=��m���=�"�Q�����}CC��~��}��y�Ȟ�{l��ߘir�=�&<o���\��?�4m�ݥU�s�v]�����w�md�D���_�̈��M�-��Y�&���xD`�(�A�x����K��Z/�܈�>PτND⭏��kю��+Z8G�-L�s�w]&��~��cA�8�*x�D�4�M�a��Z힟� �`H7+H�p1�(�
�
"�;W[�����i��#3Ô�Ǎ���p�(ހ#3�3B&X�D4,�pdNi�y�_��K�ڑ�eJh���^ 0lD�>?VqOH�	�ɘ�X�ӸD���Q��l.�1殛�C����TF�[��~>׷d.pn#�
�P"��-O�}�od�\��u��ψ�ؘgNv̭,�i�d+��u7i��w��`)x*�q.;���B�¶QDQ;&x���A���#��'�����R�x4��.!dlE�ہ�32���&�Ǿ&��U+����hձ,{y'�g�Kw��FuD/�_�	O�}����u�܃����βG5^�3E�n��6�k!�v�ܑ�s�;-��;�n��F�S���*O���y���+A<�#�[#E��̴�#޷�Ȋ�@3��V"�ڃ�b��-��Dp���G�EI+�|x�6Pט�E%���������F�di���FY���[9����j�1���Q�$%M�x�<��Å�OE�i��^DQ�	�-3lҌӞ��Qj�-����1S@�@h�ŷ����6B�`+c���X�ή�J�@}�DhĹ�B��\��i�Ç����CZn���?�tp�Pʎ��߫j0@CBA���|�I8(�F����J�{� c'�:EH�ɑ7��#�/k�,�:O��B���XQ��w�q���N�=�)Ez�Q<�{��I\Sa���1�f��H؉�NGǮ�.M�f�|�w����c��6l���b���>�M'�:�� �z��ؒ�c�5a��wȮ���Z�bi]�ߚ���w���B�Ie��:c�؀ϝ(��f-˶���3�N'�:��yf�����ǥ���If������,��o��H1@�Nu}'$p'g�z��w���:%?�ħʤ��!}G�"%Q���k3$��'��>?�����^x]�h[�6
b���"���'�ۓpuD����;p���aB��W�0��,�A,h���pi@�Cgw�Ȳ>lj@�F8��z��[�M��lNm� �w"�������7%�=Bt�Ԉ�/��}�5�1>���S�o�a=���t����=zn������ v����K鎍c�'9~FjKҀ�7��w4/�^!Xl�D�>A��4�gTC�ue�k�2�5e��c�%�(m�RN�b$�ߺ�է��I+��0��휈���=�gq6%奨�-�4Է@�`��i7�;�t\�ֺƞ����Ҥ�.,Q��0�E�#�)�1l�D�~��c��f�k�>� bjfL�CIδ��P@�F�	�$/�(�ݽ2d��[7�K��������a�����ᑨFt�H�k�O&��*���d��Y�4?Mf�|��^m�c��{fx�=k�&�gR^��)��_DQ/�D)���iSqx�����s(��k���T.���Sۑ,�gd5ֲ�y�0��@%%��:�!{8��ɯo���6����a����*��Y�_7�9B���sه�g�)��^DQ/���4�e��R%�	ޖ"�z~��Y�)��HQ�m�T�� �]0���Bu�ne[V��ȑxM�(�W�|�Y��F����� �	^w"��q �Xa�v��
K���]�`� +�z ��ޅ��~R��n�g"j��.���~'�g~ҵ��.�D�e���E}?@��U!<��r ^��L���̍���\R.�VCn�"��D��5Sx`��6�<a�_R�0U,�\���mN��2E}?x۟�����'t�_׶����Ʋ��ԾT4G�`wCDQ�\^e�w_J��HB��!<̝"��ސ�d&\;�T�S�	aԼey̓�����
S�H#�B��8�kJ�.N����IM�x�4�2����mN�=]�)�`Q4HV�X����Ƌb��ܼB�c�Q4�Toq�6W��(��m�����lO<@�-��)��d@)ǆ��5�i`���
�s�̀����c#!�h�J�8չ!��$�w4D��n]<�7��g؆�(��K��r�Mpz�� 4�/~��䄎�)�S��|�}d�ĭ��sX1�sv�|�r��C|��.6]-�k�N׉&�l1峦$�/���R�����]�-��:�71��9H�%���CW��ZI�Y�0%������kO2U��E\��[��V�|�Bg�vsM^E5�֮�4�6a���p�Ԉ����ԬW̾""�^�^O��-�A����:���d��׵.�J�q�EU��53�M��}P�~�B�q��C���q+H���I���<�\2��λ
�r���v��yXl���`�]f4�}����m�&x��*	
�_�N�K�pY�-�y�; �xZ�\��-�(	W����SlNR5'q��Qr��>ж��c{��=�ӊ\�F���?!�b�Ӻ阯O�V���=�{�(�$���QU�=�İ�[~I�t=��Ӥ�Ɲ���*UcUԝk�ω9m��֢��O�ڧxB��7B�ST�x�p��4�����}v�H�6���ym�&ؚ�jM�a��Ⱥ�/Ĝ�s����լ�L&�Qb�5̢�Ү*x(N���_|��X:Ŷ$U[�N�����r��Aٚ�A��b�>��|�+w���=���fPg Ҏ��(f��|t�\cXR�`�e�
���JUN1��R� i��DO�D;�ũ86Ȱ���δ#?�>��1��}и�{_[D�\�|�)���Q#,��!TL�=���{Ͼ��b%�3nz��������ӿ�p1'�u�8(�#���h��k��k��$֬#t̃z�4N��"��X��#�
���WR�"����x�eD�Zph~��{��lW4E*��QݤA9���8p��������Bg��~��N�Rj�ރ�R��'�4��@=c��A�^���|�0��K��ǯFiˁxhvd~깼��6�޹�j;�9M��b��b5�I6�Ww��-{��JpI ��ڋ�n���貨�.���#�͎������<
|�o�n��Ep�W
�P�]7u"�N*�+�?�޼�l�.z:� �[Gwn�[�zf�Vx��mF%���%���pH��IsU{^����U�X]�{ݶް)ݝM2�	[�Xw(����>�E�b�\Ï#:t�ԉh\������͝+��*�����ǎ�ؗ�����-��D�;aF\��K*�{�N�݊�u9��3���U��B tԉ5�������ri=]��e��ԉO�l��$/ctr �-`m�Dr�)�X�|����Wߠ��ؿL������틏�\}���_-�y�E���h��v��St�ԉۯi��v�w]��q����zf��������M���.-��9��/��*��]����wV����K�qQ^튂G|'6�óc�,�ft�|v,'��jgf�5B1RC�ׯyD����"��'�?��߾����V lB�F��|jM�ٍ��y��-L<;Q�C q   3�3)��R������v��<p��J�<��W<{E��J��^���R�+q�.�˼�9�66�"�z��5�_ٝ)���Q����Ë|BE8�'`���߹����Yl�D��^E�J�a�         �  x��[Ko#�>�\H%s��(m��1�/�eOA�b�.��jyWN�@�z�:�F|,G�8�z�Q���g�P������鮪��WU���k�T��TE鑚�����D��C�L�0=S_-�C������az�������AzL���9��S<O��˱/3���6��$}M_�����ԍ���Nnu���}���"�{t����_v�MS��zA��� ���ߜ����<���'�%O|�!�j�T��#M�5ND������%=?6�~)���y��C�s�����sZ��2��{%��6���EI�FV���b��l���c���z�Ȥ����1�9b:ޮ��
����WT�L.� }+�3=KO�I"hI_�4��۾�Ѣ<��d=12!�a�9/$L|��\�2r�'�K����l"����%�3������X��|���$H���}�
B�� |p#�V㜔�����|>ɑ^vZ$?�X`(�:v_�C9�3�ɺD67�x2�Ҕ,��`o�̙��5�V]����?7��Ǌ�^���C�s��L퐦���y��Ƞ`.8��Q�ʢf��Z��
:�_���i6�)ҳ�,�[���1iN��O�Kc��	dҴj`s��V%B���Sf��'h?�>����<`�L���&��ꆭ�9�b�S�T�h!,�_9ͩ�ԩ�a6��F"��'��1�^�T��9�+����|�R�U���,�19�s�=�|˅9Ec�9�1������\�}Љ���"�+��'�.	�u$}�0��v�A��Eơ�����6^�2�n��T��mТ����Ŀ�d�-��Ǥ0R)��D�U�����"oaQ1��ۺE�6j�{�!�d�G���6<��d�a8����}E^��W��%�H�|�=�[{)v ���r��|������f�|Ū����wtb�X4)D��e#���S�'��BǍ_��e�ZQEG8bhd�B�Y,�Lgu�ї@ePrWp �!�)�bX�j3�{:cn�[��ʂH\[�	~K,\��}�A�5��ya+$�z����$*:��e
� ��k�����itW8�=7�2�g�Nj��	��E�R�L~pKtl{^�R�q�����M���Up?hpky�dM|MO�� ���B�@�=�AS��rrtt+��Ò���9Y�G��ռw�#���>��7[�`������MIۮ\G��8�T��x����x[�&�|�E�<s�/@j�x�db�*X3�8D���,wQ��0=���M�X��Vl"Y�c)��GHE/dY�F��ID��L4L��^��%XĲ��������3�m_�F�QG�N��NϡV���LJ�~YV�NjX�npRY�kqMXt�}�NDR9������ڭ�X��'{����V	��BLeN�7k�ƁF�NX�0Ɲ+W)���$�sE��x�ta �itfH��%��7���߬1�[e���PrzcC�~T�*�@wֽ�'_ ��nJan{��@m�AIj�eM[��1ی��/ɥ��l��3�Ee,��dH315z�@[~~D�- ��~�W��:�teO�������_d(�����˿~���o�����o����y��/7!���+ j8"q�e}��,�Y�N��R�	��Q�\�F���l�ƿ��p+����$�!_�25Bg�KQ�M����=r�O�x[���{6	�������v��S��"���7���U�����Q����F�<E�7$ �HUS�/�}��5�4��t%>Z�s�,�.W����)~�z[��RrVഹKJ�����iv��19ABʅ��;�I���QK�ߨH�:Bl�2XMjjiJ[��<��̄�ɋ&}�<���E�_S����Y
�ܷpH�� X�;n-�1�N���+#Q�P�NC���^\�>���m��>{���>�e�^����h#8�,���n媁^ 4KgC�5{d�j�R��7�bY#�ps�]\oy����UC7��ʫ��g�����v�.w���?B��>��a�c�x~�{�yp��������b�ǟb��-��8`G:4����:�~=z��9O2q�?��ƾ�ۥ��za�kr�(���Ə?��Y/����V��2��?jI�46��-S��]>Ѭ�����-j�_��8K��Es�?��;����|��^U�
|�M@n
���c_����ۨFC�V�%G�is���~��������)����U����Y��R��X��)���J�`�O�G�z/W�!��Pý��Sݬ*[svQ͂��<&��#�:3Ie]��42�����������uY������˙�-ٵ�3\����z˺t* ����&�̇�v�BS��q%���Z
����4Jcڭ��0o���J��f���9.q�5a���	!骊���N���^+�;R��)��=�s���m'��c�����d�^C�vYD�׉$���ԃ���w �n|*�	�wyl�f9�7���9O�����e4�
%�U�ׅ�J�@X��V��k���āU�iv���7U�I�[K+�z4̴�Ʌ�On�+nҤp/�[캈moT�O�ִ��<0t�zX4u^�ߐ���j�4�<kp�Z�(ԉ.��42�j�a�IIW�*^K�o�89���\%	��Յ�_7�����(^[qR��(
C<h5T�H�a��h�c-�	�aE�ew��{	jؘ��u!,e�AWDpP�A����@�Hʞ�M֠y0
`��>߶�fۢ��˂��m:h�R�^FT͜�#�L�����ȎQ~)�R�J(�U;�R<�`6�[�y=&�����=f'�؁���e]M�"=kS�FTT��S�� 7�r1YzX��ʞT�idܝ��T��.��iQֱMK�r므�JUB�|�M�瑜��J����,Mw� ,���ψ2�`t�b }�mloSo�wm�זr�cp��&
�O�>�S�HE�Q�C:�iV��6oRB�rz5�+Ǜ������ٷLu�O���V��0��      ,   0  x�ՙ�r����O���Z�U�����P��K�g?��AҒ�
�H�|$���j��Y=$�
 ��< ��Ξ�or����,�o�����W�a=�?�ߋ��'{��x��Z߮/�I�e�Y]M�|s�F���
}8�{���������>�߯_������q=�#�܍P�{�Q=����O8oGփO8z�M�������y}N�A�?^��|��QZ䞳 >3�2�5g�[�q6E��Z.�	�b�j�`4���R� &R���=T�=�=�?�����������A����~�n����N 2gQ3e}b6��,/�)��'^�)���G�k��M�|�Tiw���Gd}��C�6h/�w	*yx����[���ݩ�L�	���/m	��,X:�X�'��S�M������D�u������́,���im��z��R��Zt��L�ꧮ<���{�������A���a��(�YAi��F�-2��K�Z�]Pv)-�R�әe�Ӽ���tY����q�����F���G��Pqf��S��C�U(�����iЗ��]E��*�%����<Q{g���AJo�s*]��z��Csf�i4�&�������(�w	C�L�@(����)D!�\N"uQ���ʙi�g(�MAyD0ߡhf,\a*,_���S��d��&c�.J\J>Z��.s���Pވ$�&�O�+��m����\��� ]	�et���
)���K�;�}�#����47����Ma+>��
Ads0��ub�c��d�(����
�Tzt�Ӛ榁�����v��n+!�7���kζu��+Ҕ���W���I����{��z�:��]ۿ������� C�Ap�RD/UQQ�eL�IR�w�wn@����N�~;��Ty�#�*2U�L5B"��
~	c�k:�ln@^��!����������Z���?�����v� l��,T�,J� �\�	�<E�Y�٪I��a;3�Zi��i���s��囡�m��#_���)yO��]�����wh*=�D�q�q
��S�\��lVWW7����4��,�Q�(�k�Ҙ�OQ9^d�� Gyo$����7��=�i�-�ۊ?��r�}���@9��v�4�BGqn�N��A1�����]ʸ*�;�g�t��A}���M��޴�j�-�(o�LUg5����ƙ�	�U��S� L^0��H�����H��蘙0�*��^h}Ĳ��ۛM���b�BVLiC4���"�ҙ �*���J�tۼҮ��f�N�8�2B/ʋ��co��IC�~�=��3O�#こ4s�!���hl>*��Kf��E���L��U�4�����4w"�ߓ�� S<"�@t�fV�F�Q�h	u_��%A3�׶f�A��ת�J�;��{�&&XV��ڠ`�ςT�$�U�s�#��3� ����T��H��D+����7� hR�Tks�/]_����#t6yf�A�rn�*-7��G�Y�c�u����"+S6p��0mI�R�B��M	K$/���nn������n<]�_��lJ��hw�=&J^4)��}�)���H/Kr(��Pr7��XR�޹�77B��&������v\�I��=S���k
D��%*�TW|J�6�MO��M�8��Ezl�9>�s�o�O��T�K�f#,2�E��=�6�{U��r�q�0������]���~�.��D��'f�7�B�o�0����"'�]~HqF-�3� f�����������;�_�P��&*%Iv���ѣ(�֎]Q)���c���L��ݴ���os�j�]��0�͌4/��Ռ+�(�&sw\�fIރ��i��a����V         �  x����J�P�׹O��(�ilSw*ZD��+��.\�
n�_q#Jm-�m�O0��<s��(L�\r���̏v����]P�F�NCj��4L�[���#��qߩT�#� r|���p^�]��<��B1�B����.��MM��u{��rj��Z�J�R!�hI��yW�4�eh�L�^ʶ~���&%���z&F*��('���
K*�@��Qw7VVw�Ÿ��ZI-fZwC.Ꚛ���c����ߗ㳤������Բ���n��Z�)�*��Jǂ/L��Y�k�q�J�8{I����sL�)�$h���s�jQE�-�<�Tyf��g�>b�y���:E�uM�ZN��2�%�=���N	up��΁��X�$+)�3��Fm������n ��3�K��'�}�qT�n�m��n����(�Ȧؚ���	R��Z�FJ�o�+�         �   x�}�An�0E��)���l����p�)��]v�@� @]" p�?7�w*!5�<�����UXc'���G�s�yKm��b����[�^L�D�Na#��"��L����e�{)�ĲD�#��,����ƈ��V�R��3���5o�8��	î/o�u�Pf]ac�qf��P�6?��'��5�L^��~Ǔ�Ȕ��7s�=�#�t�?��6��k�� ��@k�+��            x���{��u/���)�S�[�hv7/�N�dY�UI]['Ǖ�?:����cWIN���pF�P&)���"9�����	D3���'h|���c�ޯ���!�HHdJ���c����W����蹢���:��s��j6�4?[�W�����fR�O�U�jo���7�au�?'Վ���UQ�W̷������~5�o�W�d~v�<@��T���y��y�L���e��&|G����l��7V/>������{����xL�%��g8}�i�~3�G��?���v��+���feZdE�&�'����T��O�l���﫹�s�E+뷊A��g��L�N�A����`�Q<�����ڶ�j@}������ۥ��o��I���;�0��q����m�)�i֏m�5�h�ۮ�Ϟ�nݭ��z�T}�T����f'���|SM�Sw��ˊ~�H�n�f��G��j��~����x�P��L������ɽ�����&�$=�����b�g�=�i�Qz���c~���취�":��֮�u��Ɯcf��hw۠�$ݓ�j/�D��;���n�/ �#���L�>��GpA���c�=�5���7�<�o�,8��<l�gS��z0��o�f5l���s�i�K��~Q]M�2�v�Ymd��I�~��fw��Ym��os��J�LC�n��
dZ�X5��d �y���ڸ�0�W*��)1X�'x-q�w�O�4".��V�I3�O��i�?�%����P�'�d<��x
�P����Љ SQ�m�a�@��E_��d��)0� ���g�'=�Ɗ���U�z�E�p~�d�^��ӎJRSP��>�@���<��mp�#��)��=���).7B�h���7ժԉ͢SW\ٙ:�mx�z���n��g�!�G}���ɝ��ϳH?@;pIQO����¾2��Ҙ�RvQ��鯟E�c��>J�ا�J(�W3������O�7�*��v��P_xȥi��2�#�����>��^�>���m�cV/Sc�t�h,m�F6@�ҫ\
���ᛋ	���������*�%�s���C���l�+^�/�@o8�2�]��Tg��
G�?��p��R��w5����R�˄�F���y���>0���oh�$2�$��/ �8�R��i�D��K,�- j���.�G��b��^�z�p%�.G�C�_�l�t�s�q�D�[,/�lQ{���0�4��~7A]�d�&Jxkצ�K�l�X�$Q���]$ �KCx���2I8�G����z 4wK� ��U~�����
��o�ib�FJB䏠��7b4��K�dw-�MOx���ޟ_&&9Ѹo��'���-mݑQ����>3�˲ku�
�*mb_j2�����HI�����kb���D��%��fȜ�9���َ�c�����&Z>jQ�bnV.rs�:dk�6�`��������L0��*���l�(1��%܈��TT;c��8�	�
�,� �W�9�&���p�F�B�^�C?��Tך-NM%_O������C1�N��Q\���
#�h�&���OA�9��oC�P�&�����P#�x]�v�cu!3u!�+�k��$���>�kM<��tq�� ���Ő��'61� ��2��`��C�Z�|u���IdݑW���v��{���5w���>Qk�F�2�s ����g=Ei������`�G+i�#z���-���|W��Ȏ�Bz��5�9�% k���C�Dt$hl uH��� �r�(4�<�k���S������-���!���:�,tsI�%�����D--�7����6�#��f�5��l|k0Ь�b`��ձ�A→l�a�sԍ���q̊S��p��{`,�P#�y��#��5Lp�h%���O���cf>f&��Ȁ���|��x-��F\�f�G�-������a��\�����d-`R{xhds�.���=�p�d�#ÝJｴ޴���vu�����7E2��	����疘�צ	��k��E;S#/�������P�{a ��&������e��$�����<�E�-�W��5!+����H��o�!��Ymp�������6���w���J,�Ύ0N=�S��ȬPG�7%�Y!/ Xǎ�/1M�"֑���6X��3�M�,x�[5��!ic|�(��59T�j �-�	R��Jl�?��T͘8���yLuo]�M����	J�	�`�ֲc���ڵ	�afo�^;̐�@�M�2x�(O�Zu�������(8�d�1+ ��a�>G�!�9ڂմ�S�j�!��f��c}I�z:a�='�`��@w�N�6
��W�����~��/'�b_x�����6�r0T�<���[�E���)if����,Zb�[;Қ�'0Eo"��T�uA�����r���Y����Z>�o`���w��/���5h�O��
�6�I�1�:�
�[\�A^�۰�?���)�4Ķ�j����f�q���-Fˀ�r�\�xM�k}Q�У+[�$H��%uN֑����Ϝ=���1�Z�_� <xf%3mh�ړ�����b1"���Aj8�T	���fR�h"���H?�ܳ�H|�+�.���[XX闁��l�P���
��+�w���D>�&���sx7�h�Zi��dS�L��A�����E�<�i�������m#ߦ-
��=VRY�(�aγ$�t�M4`�'Iκ��|��s�@m�4��!0�Lf,1�v|A�&m����|��g>��S��Q�;Ib
`�Mki��?2&GT��EMk�Q��ϋ1��7ٕ�)�A��A�A�2��j�9#��l$�qLk),[��b���j�E����k�����X[ق��7#M���SƔ���c����K�ϰe?ڿ7���!s�t�M�IM�l�Il]Q{&��_�;� p�F��.��	2&v�Z�rz�<�����9��4��1v���=K�H�C���F�Ä�A�L��Kr�-~~Ϝ���;xr_"^:!vX��^������>�`d�현��h�.,9�٭�F���[i��f(�&��'��TP���x
� ��
:S�HSv�r�,�_k��(�+�p�<8���������C���F�l�����?�>`}Umf����<�P�;D{[���������� +{�^HbZ]QzU	��p#�d.�af7��}��8�}�P^�`<�.��}���8.9�~�s6�㓌y��F{y3&p�zw�V�`8_���{��`
a���tJk$��G�;,pۮ�m�EW�cK70��\#��VO;6�Ls�hbP62�ƚ�.�)ơD4� $�raz��W�8$nW�[������DN��B+/g�h����j��t�1/�5�h�VB��!2zs�"��y�*��]�M����"��ꌾ�"�=�ZW%�����X_3�`�j�,d�V��=a�Bۥ�8�׍'�.��-g�� �Q�?���f�;@1o����Q���=�Q;�{���q�ĉ��+^_Y=��F۷�����LP���v�.Y6h�ۗ�c*t/�y^�YX�P��,�q��@�����e�� x�a�����1u�j�(�j���X���⿄%�b��N|u�[�,	rx.S�E���:�.���"���������^���l�[�ܷL�1D���*?�)�RE���{�;��*��e4=,���ބa�0.B��S�i�?D��,3�����/b�t�Rxk�WN�T�j��eZ'R�z��_nx�b�pcxk]��4S��
�G8��'+H=ҐzqB6�-p �
[~�ݡ-���N��m�Rd�H���#rW���c-�o6�ֈ�-B�$��1��Rܯ�^��8%ǻ��DX���*�3�F�{�i�Ld~�覾�3`�.YQj5h;��^'z� ݙQ��NL
�;��_�Q�S�ߣ��'4 l�1��v~+\����C�z3��b	7�ϳ��vK�8�Z곻��ZY��>��A���?Rlҗ����P��.�1�=Yl�Hl���6�K1�O(L�    tD	[C�:LF�#�v�\��)����#�D����\� �u'2���щA!p�Q��X*���IaS�2
�'�c�Ԧ�_頂�|�n�ki���C�2��3<:�X3P��G]� ��G;�0��@�4oY��P�,˞�,	w���҃����t�w�c���B�9h�YuE���"��vib�K������[�Gd)�*Qʕ�W��ѧl������=�0PZq�WA}L��,�M�*}���/����f��Z/�n�1K���b�W�v��y�B�@��U�∪���㍀���6BXߔ�iM6��c�@?��H�0���F,k6tv�c�Tcr:�tAH���O�ec�^Z��׫�@q��<����1�5�(}�x�g�G� 0]&Z�:�x�v��Tu7���"{�"����")c����s�q�q�F���8�i��Ց�*��H{�bE�|�	���b����a��<g�"
��v�z{��&�x�e[U˅؆�W|�d�d��b-���B	�Տ�H�f�9 �����]O�������;�Aώk�e2-	e5�V�����z��CaI��(jt|M�@a�f�yW������=J�ښ�FDA�� ����:�FR�Q��%N�B{�:�)� �����N�XqR�҃��s�Q���R���s��A�w~��0�,1����6�avQw��������*�տW�����{��_����Wc
��ўGGV�f'��B�ٟw ��GO�(y��g�?�A��	v�$͐'��gM?�v'B����hl�w�û�����&����9��衽�n0Ôc:�C��D��AO�G���EJ���Fhr}�_Naz�{���u��c�;i��"���>��ʒ�]o��ҏŎx��!�d�0�����GJʣln#B(�t���_�����w������O�����(�Ik�J
�����\A����^��L�_�?�'�����jy���wK�	���rQJ����Ύs�/ ��
�kt���L�B13w!��
�a��Ɓ���ρ�>'F�ΫK�����u�1�O2�}�^}v�W��A�4(4��W�g7���6�� �
l��"��kgsEI"�G{p��)�8pي�����A�o4�t��`Ɣ��=�΃i��E[-i �1I��ʋ�WGސ��9ƍ�!����Ջ:��Һ��7{L2�+aPJ�t�̜\��Ap��C�.)F݆ z��^ ��/�	L�����j�X��ڷ�Q5�+%�W�(�"E)r��a?�)��`D��m�[��-zǮ�s�a<>G׹R��0�q���v$������d��YM������[
�-��LQ�(��弙t��9qvK���b&,�����_jʩv��6��jt|�@��Ml��הU�§�x�p��j�ߊ�r�!_�v���A�e�����c �{i�5-O>��!:NG���v�/�(b�l�E���P8�x$� b5Ѫ� ����O*�ÉD�	��b�Cm|�(���1ܜ�|H�n�?�O}�fxė��D�/�����eE��]:4����&��^��/�,ʃdM'�ӏ��:�ϐB����Y�AƼ&�����2�I���$���'t��/��H�3��\]��Y]����c�EWEs�&&}CWw��T�K�N$��E�35:Bt�A����
H�X�P�C^�n�^�̽Q$�xQ��0�\�Y	+:�ㅍ6�"�ծ��ŭ�*�avg�.\��0�
��N���dv嚷��J"y�V8a���0�l���yuJ�����)L�C�9�쮺�M֯P�-����}#f���Έ7� ��:8%��d��h���q����rNj�3� 伥{WA��)��5ࠫڱ#���s]��^�W���Ys�s����ԣ�)���|��p2�Y�e?��5;�0Z��{X=�+�e�o�n:�J��K:�i�`u5^P��Xę��yP���9%3:��ȧBu��dj!a!f�b�5:]O����t/JW"b ��xj$�=,|�Xx$睡:�.���Qۦ��2Re��4H�4PDב6Q�A�P�׋J��p=�����:���f@�$��@5삎�ќ"_9��\�X�M��B%i�j
_j�f2���f�����d�C�^?��7���{�"S�][I�*2��\nƶ��+t)8���Z�_��ka���_ç��1�%�x	e��+"zD$�w��R�\S����LuN&RΏXy��SZZ��^M^��^����2�B��C���S��!��I�WR
��s�2w�-�/�*�"�.'�ݑk�IѰ��D���F�R0)��`cV�êc��$��4�>��E��H�2��@�S�٢KC����`��׸���ąk�&d����R`^�����ou��翭>��?��[�o���o%�Gh�p�g}B��D9Ơ����s&��B �&�2�G&�����.S�u��`����<0a���GM�Qj���ʋ�+9z�4j p
g��+�3ǹi�f(��5v��<����X��yvN<�����:���׫? �~�b��&(Ռ�xq�:���G:`��ԙ��l=�}I�_T��V��36���4�k	\L�}B���;P�-��ֱ����#Ad�a�׋֖=���K����cY'��ޭ���A�rs��*�9��C`]܉1)pMNԟw������RP5�N�{~�.N�����]��߰�����b.]�DtRd�)G�G�}机.Y��&�P���;�z��[(�5x�AI�>�;+��$�P��6�r�]��iO�A9��b�"�8��s�MGjt�8�蓖���W�UD;eYC�n�ۉ�v�N�� �}�"2i\:���p9�t���K�ho��Ѩ�-*Q�?��	�㞋��a�nW����Y5�H/eX��VO?�qK��UHփ�\T7����?���n�R�������U�^�{W���86!L��h}���(8��R��cR�:�6/S������ۡ.Z�$�Fx���T���{o��[�z�����/�-y����}�P����{��G��P�뻱:��u��Nr.�ŢV�I�*��A҂6�� ���N4�~��_9Ա��uAe�p6�4���A�I���mYE\��������m�e7���JPW`XLD��[ �҉��[�@JNߎ�W:'i7��Z�K*���Y��M���<��g�e#y헿����֯���Y��Eb:p� �������^���I�s�{o�3������d�FK�[C���FLns_���m�A4�v�OOO�zi�=���^m��8E���;ܮ7��˾jt}s-h�o&����C��B]ڮ�j��0 ��ڧ��m�w�Ǉ=Z�.���VZ�P���,F�B��6��[�юٜo&��E�jj
�/h`� Pj-?��� �?��l�\�����8�,�h�t�	
0�r��(ץ���#� ��I�/�5jo��m��S_k[?�;�m���> V��n�ɠB�_�фIu][�����_[����E]�Q79%:<���=z<3T'v�B�3<��i��R%����N����B2���3O)�/���j�|sM��+�qzA=�wS��Ô	�a����N�H�{HŹ�h;(k���M/���>��Q����18��Q6x�y�7xN��V����u+/�Ѽ��FO��{q�����,���,a����U;X�߸nl��^�/+$x��T ̭@k9d���n���j�}�huG��������j����2^�pi_�DV�|�M��)*��U������4��
ъ��DD�*�Օn�$�Y�;T|�/�f�m>�6�d��UP��fY��H�0�j���Ͳ���O���˘�Pc��x�� 5R0ʉ "Y�Ru����xD$���MCc��G�dY��Pc�[<�p�U�Miw������cW��hrz\�&�y��؏��� �#�2`�C���N�?v��IUTP���:�3O�s;*N���m&Ts�s,)�d�p`�z�����h���ʔd��X���� �    ���=a��0��>U����A�d��	��bz��Ԝ[ '���!�U�j��V�/t��K�@Gt�	��z�T"W�?��C�:����z
�G�u�ɺ�}�H���{��T�O�E���{���
�_�k���2�u�uM���7�E���w�s��k�3a��Pƶ?��͑��\���p�U�˂��aڭ):��Jc+؋�*n
�ˢ}M�WW�����"�sܫRg�ѡ���������׌�|�Z���෫[��yG�CE��7'�����m��`�~��3�Wr�*1|@�T�ALI��xڑQWh3	ۣJG���*�>��O9vh��_��^@��,���X�`����R��fR{�ĭ��m�Q?_�h�惜߆+إB����p�!��c���c{�0�q1ƦP�b�ډ{�0�/���Y��t	����������H������^���|�3���N�u�w�C����o�H6Ǩ)�@�/\iE+�h�����V�ҊVZ�7]+Z��$'�u�u"��J�����.`%)��U���c��Bq�U$�\�L"�.�%ܖ\�?�+��)2��憲N���0)ٳ�C�<��3��
�A���L����^�8q���߃4i��su}�IpF��L�;Օj��&���(�4�������Dz[��/�D8ͼ5u�k� �H]��jRU�]��%���d��#��`�+M�F�v�M��U7���Z6��:�^\?f ���1�D��n�]�&r���v�XL!�ʌ��T���D 句gy��)�
m���
�T\Ls��7���TqW�v���g�IZ�X����Ӫ�nhk���6W���3V@�������9~���{���ԡޡ���:U?1�r��ލ��,)��� ��R�rݷl�H+�=��+.��ޢ���i����+����E!����Q�mu�L:ل��eyVƧw��M��o�u����&��u�-���K3P���BJ˭>���3��p��0w�<�3i�m�hHM�L��d�@�9?|5��o�ދ/>�O�o�E��$Y�p>�~��Z�z��&�W��މ�����S7�;=-�HW���={�h0UO7 �`�������J��]��}:�p�aV���y��d �h�Tڋ�@.����Αۧ*(D�MY��k��e&�&M�Ȗ0�ecS�����-/CލxP����GU��TU�L���u�Qx��m�i�@v�W}��{J[����k-]���Jtήk�#��D���������2B�b����>�fn�C�ʢ!�����C��X3����ד��?�%�n��_|1붲���q~�Z��%�1R�����ӷ(s~	B��Nt�2n���l�̼luԟ	�w՟W �U����V�U�'���J`������u,���qe�ie�b�փO���i��뷗y����/a�^�n��~��rWm�e.G�ｍ�����oUw�	?�K�����_�i;S;�rF/)"	Z9���G<@�Z ���W����^y��hb�w_��0��8�ߪI|���O5��E"���e��_�!�����M��O��4�-qmq��-�֠�F����� ����&.(M�{f��1B����B��c2��K�r}^M �af�	���N五��'��!���x<@QX�Ȼ��?ɲV��KE�^������O_��~����o$������J�}���{�W?��&�~0(��k��>^	HA�tD9�o ��?xPk������uG#�#H"#����R��#(YfHM���;Z�:���7�(�+M n�!5_�^<���GÎ�C����7�z���͟��ͷ�	�9�R�biB�����W��$�ϛ���v��ovҼ��R�����d5d�١�ê���V3R둌�i��JM-R �8�;�Bhlb��b}��;���D�#Zi���6ʘ1�x��C�t���n��Q�k�����ͼ�C�<�m�[�>����,Yo�)�o��p	�ظ�m�Ԟ����#[��i��_[3���ќB|I/�J��F��H��;՝V^��V���	Q���r
�K֪W`�F#	�1�}s>�+��흼F*���p����W/X��1u����9Րb%%��x�q���c�5��jG;呹Z����Z�Z���W�|O���ӻV����b�]p�dy��<)|-�d�3�6a%�K/�U^S��ݬ�);�o�5����>�'#K��$Z!�>��O�QT����N��{�N��x�P������P/��R�՟%�����{����i�o��M�9����3���?U�_{z�!�	5Cj2�F�a BJɉ:�8m���}e�)��4
fgF�w��A(hh���}����PF������)NF��m��m_��Z��e��j�D�Mw�k��56.�&o�L+K�X�u�E��2o��[Q7n���Q�J;h��-�xL�֨ǿ_�h�}Mmͪō��kD�ȫ���K����c�݂����^��X�⩱W��'��Ⱥ��&�W�����o���?�����?;/�5�jm_�?'U+�k����K�6�K��F*w���ꏏ�qI���?�a��C����$����k����G��,��~[��,�(|�ہb�'�h�њ`.�h���+�ﱀ&�^
A��~� �l�儀2�[wlO�'V��4�aDd�e���CVu,}ufIݝ�O�B��<r�-��}K�[�3.���C�C
*sk�r��|�t���ҫ��69� gƁng���f�MRt��[�z�� �/Y���y���W �c�8m������V��j+��8m�tn�������� N)%m�}z��P����|u�a)%�q�A�`�R����YrRA���R���lD���j���6�	qJ�I�Ĥ˯l�/݋�pU�DB8�Yv�Y��B�A�p��l^~u�������2m�ķKv�t��S
�y1�D�>ъ�>Զ����G���#�	���u����
ݫ�/Z�#�Iއ
�&�p�q&z�ں���<@���X�S���������n�:Dk��?��/�I6C�P��Y� ��؎$y7ey�M�M%��3u��h3�!;��j� 8>�QeT���Y���|��2_qXlߊ��e��0'���r0.�4������=.y+�cȝ�pNlADy/�:����D�Up��m�Qݒ6M�P�d�t� F�ᅽ�v6'J��'��t󟫊�o�{�n��j�nbǴ���T%"���">�����c�����K�RW�]��8\���鸭��z�ڜGC�!�<_O ��$���^b.��lW�q���S'�;��j�O��O�V�+��a"r9$�����\o��;�����o�iq{#Bw�>w{[pӑ!_��Օ�x���A���Nw{H����W�;L;0jI�!�p�!��i��r�r���.1
S� ��+rmT5x� ��IN�E9�n8eCoy�y�����sb�*��:���X�o#඘@.�Uu��IuY-�<��<P���&�Hd��K�G��Dk�����Kz���/%9%TM�g2���$>���5n�J���Y	����K�Ӊ��fDq��a�!��P+�H��\߀�}���a�*��9��)ph�R>���-ۺT�:�t�u�!�%"\�GI�ĥS
0O���#;�3���͐ZJO �m�,��`� ���@���>n��:b�]�����.��
�9�o_��)[m��x)�,�ʐ���PZY��%���^�U ڹOz��;��/H���z�^�ҩ��ip4��m�+�&H򚢟v������xc�/�A\��.3���wCEp��EW}�")�[��k��d)�lpC��EZ.�+�8�{�m^`�Օ���tC��5jN���[�Q��ʴ�!�M��YNl��޾�� M�|�����v	�5#�b �1(w�%\��9�6=O�;ٵ�$'�J�fH�X��Ҋ?�t�2>aw���4BJ�/��wB�S�/s�>q�� �u,�p%�O,��4C�]AC�mT�mT���*��k�J���'�]_����>�IV\�    Hh�ə�<yP�b?a�z7���@WI��7I��G�Z�⥕�r*4�wb��)��?����7��p��(�` ��C��`�����z��B����O���`^e�hN�^���9H$��>��#��Gؠ}�>-+@�Q�|��yǼ��LQ-��
�
�*��F�;�������/t?LLI<��>V<���[�C�e�C>^����.K0���;B�f�v���}���zZ녵|�m8b!v+FDԺ��DŽa�)Dt^���*��fjR@n�i�\��h��՛oI;(�N.��;�r�`�sk~v!!�j��W|�ڏ��q�)N�/.0+m�,w�<NO@��ي62��@b��G8SS6̔�31g:�8��7�;1S�(�)p�G��xT7}�d����3�A�p̀����f���Ƥ�.He��]0�7_����WH�~��#MLp1�>V?jO�r��"��,�$�zG�s��l=Z���Ӧ��_M�ij�aB+ �hd?0%��(@�1���9�
�g�hGQ�S;���YC��ex������^���#
u��}�r���>���|�=W�T:7��!aʙ�А�v�<?�iS�}2x�"с����x{��E7�EY�:��cB�N�2�^z�_�y3y�o$/��?���_%�{��|��^O�B�
��pŅ���%w	$1�h� Ys����`8��2ÙP	��و�7�N���(!g �zp�������#qh��^p�N�D�6c�(�o���\�ҪE�w�u��GT��=�EB=O�h�,Rx�X��IK՗���Q~K��2�tg'K-G�siH-'���}�G!T}.ʒ�W���ۿx�W���k+�3�j{_�g�vZ�3���!*	}�6!+� 0�c����0��IFƫw��@r&�Q�ŞQ�[����H�2���׎r?�޻�q��@(�d����u��c1����8L?��a՚U��W� �%����C�-��DO���tj.�~>@}��*���������ƫ��<2�՘��j?L���[A{YF�d co��dn%P�r�	;�2vLp�����1<:9}.P]��L;Irx�e�S5�߭>n}7�	U�q3D�h�Uu�p�O��6��ݪ�J���e�,ʴw+�h��a�j�Tw�~�kW�s��ė���\����׏�v���������c��2�z�1�	���g��}\�t��ښ��J���0�@굫��$���V�������Qڙ�NTǾ
���T����o��(�Y��p�Q���S�!OL+�;Dzh܇�'R/�B�1�e+݄�`����Z�	����ѿe|�~�d[L[��\ �z$S8�K�N�F��&^�>�t@�H�6�򯉨��u9Ӵ$�J>��\�h����Ir�y�-�6����'Y�>��/�^!�u��@�m��yu�JޓJC�SJt�9��U��V6
ǩ���"��~~E�6��s��p�v�����.l�l2�d2PO����x߭���֐�3�s�O�Lk��=㬍H�s��s��X��v�]ɤ�#���!\<�!���¿X�Z:�e��EE+����z}	�w�=&>G��V��NB��p%w�#����������4n{�����ݬ��$r�t�<����b��u.J(�Au�6��>G�u\G���������'�Gju�[�!��8)�P'�j������璍�F���;�7rB\ps#�5<�%�w40�������U�A��� ĭi��� ��6b>2JNA	�u��D���&F�Y���w,���}������P7�Wk��%��J𭱆� Y�o}��3�nFт5_�>i��G�7��Η)@��	>��R	���X�!�&�������w��ɣ�o�Lt�Ć��lА=C��t�/�r3=N����3C�^a�|Z�$ov��4��ڹ�TYP�8䮉�\+�˼A��;��
ހ��Q���{�]�Q�Nܣ��H���)R�����ok}p�F�ùߩ>����K��/~������GI�/{IR��)�8a����+�(�L�S$���\Xo����ky��W����T��A��#�xg<+�[V+�˕����J�n� B��C���<%�<�gk���Q� Fh�����bMQ-��߉S�X��&�S��G3��M�m��l���W �KNvZ
�s�]צ.6�;��)�J+W��o�l;�2�4�v���߮�$�Z���W_{�'�W^Jz�,[�TPw���)�5�^bk�c���t*�G�2�ٸ|�°� ��r�	.�+��m8��#�e������6��N*��F�Q�Bޕ��g����⢅Ȫdh�+=R�� �1M�|%Y�<�����, DCM̤j+���u�fv������,�k3������ۥ�E&��g���\+�	�bQzXoF\8����L*��(����j�U0dA� ���	��&�Ad���]q{Z&�	xM��x�;UZ���MOm
C�Ro����+W�!�Z��^
��Zm��_�I�I���2Y{�!5�61��8��CzO�Tr8+,S]�-y����FNz3a���BuG�,��]~YӒ/�ϐ��SG`p'1�6����k����y��I��=A�^����ᐚ��0F�ܦa+L���;C�A¤��JU�+2_eԙ׏h��vrVc}���UCk�Q(A��'ɜfX8���xd6�f6�l����P��wi�����$��Hi_�T�#`0��p.�&_�t��t��(��4/=7xH�@0)8\�VKH�䰬�aK��˂�%{{�����Xl��n�S�A�6��;��lZ�Ӕ
�;t7m+4�2�7M�:���4:d��qtT���	����&��"s� �$���yS8�NB�/$[c���-�<Ӭ{��R�L��Q�f=�Hi#��8-��3�v
&�u��2I�d45=b���K��8'�&���mN��σ��
m�O���R;��h���FA���-�Z[��B�Y@vQ�w����&�0|�f���q���a�K$-��>`p��.��y������~sD55��WP=��.�E����Ϲ���a����}�X.�0K'�t9�a��(<���5���G��� 7ps{m�n�*
ewÚALb1+�jT(���8䧔�n���ڍ�V&��2M�ۘ�o˯�lB�n���B�����;g���t]w��!r��b_2�4}u������3��H��.,����y��AJm�p��k�QP�|�<�iǜ�T���X_s+*�wFۓZ$g�e(A�鋸���8���K���C������{�� �An�?�z�i�iH��z�x)���!Œ�8K�U}��C��峤
c������d�Qݶ�]0f�\�;ZĊ��|��ST��$�/�e��2���Q[�<�\9��E�&á{����YD�j�E7���=�)���<2��::fb#�M���v����N܌�y�N���'<պ�w��pN|,W�'���nd, ��"�jc��?�H�e�%�i�C��j�Ⳇ!��oXHA�鮹���6�(n��M�Mt���4�1���@F�{gpHl�K�7�u�ﰜ��R�o2(�S�(��EkYC�&�M��5ئ]�����Q��2(!F<���ǰ�`��\�"t3׍>t3���E_|�E�֋����:<Î�H4%�쟸V3Zig��,]9.�0�H5���ۢ���!EG�B:�ȕ�򼲙�/ľ#X�$;�˦266���G��v��ua�=F�|���^)m�U�T��H5r�C����ROݩ�X�$֑���0�9ir��̪�Y�Í��{���)ڹncdu�ˬ F�Rl2^�]ӬpE�Q�[Rm�쩨�2��vbA$2�FKr �:����X'/j�y>�#�j�S�M~���fbɕ��49ڂմ��-�6�,�� R��bŲ��`����H96�(<�G�<!+2��m)&։218�X�7��ŉ��h���t�V�<�bTd�'��&_SI����!��n|�bf���h�x���t    �<47)�̱����	o�ɶ{�m��㬎 ���]B�Įk�7��<2��)q"@B�Sw6M�wT���SN҅�+���f�k�=W�q\��F�J��k���`�i=y��tu�m��v��`�'���q��}+X;V�#���D$�=L��B�`� b���w@I�Vq�N+f�j7B�M)|�y��Ǝ��V���9���q��V;&�Xb���cx���6i�9��H���y���������$wY�5׏�.�t�+�H)�@8{��*����^���%)�T����	h�`t�I `ÜMkp�3y�P��d_�Y,���a2�q�)�ִ�*�u$�'f����u����i�$=۲ק��8B|^��P1Ƣ�!^�-:[B�FP�+7	UNݜ
RXX��K+�^��ց�[с��\+���qu����N4���ߨ�@���(�Tñ(�pCL{��m��!y�k啾����IC�<aI˱�R�	�**�$�_���*~Xq9�vc�r\�^�bq�Z��_2�S�l��W�I�H��Uw��uP���,~�|SG>N��sY5��4#���BŜB9�#��n���[�sTȱ(|S"�贵?�C}K�q��Hgq�#2�F�F6���ב?��a�)��rK�;!�L�S���#���)&��h��=�E�9�����W�E�ƚ�����ۭ��ˈ��Դ�r����Ӗe�Iz�Q�fFt��N���:	�\�Z��/�_ab$��Yi���d�H�#+V�����)=H�Cg��m�6�06�)� ,og)�vZrQE����pw�&��$ݥ˱�h4�9�T\�r����C&P�K�B��`\W�:΀���3"��eU��}����D|�&r��i�ⶏP�$b\0|���*�%��Vw��3Q3��.^�,:�pb#ԍ8�IWTc$�	���u/Ui#�{���a��%���D�s�nLU�T9~ �a��^�S�A��~x����gr��z�g�#_Q
�C��S�v�)N8E���5�����ö�w\��*u�����C�k4p0aE���[�jQE��j�j%����2����pF���e��̫����Y_�)%��z��w0�ژ�V�(�J�Q������ʳB���
iH͵���L��+�&0Y���@�.��y�,�h�:kHͽ�ͽ��6�!Z��pO����"ܱ��n��$�H4AhHM�l7ZZhH�}pl�.�1j����=�9iN���ǹ�L�j�ܵ�8\N9*��xn4|7Z��T����q�"&ECj<6s���b*�c+9���!5w���B��6�<9��٨�+;
�.P�^k��=^���=b��2�Dg�v�G'�Pj�2:��#=���4�JeCdݔ�M\7��w%o�+h�Ҧ~��):{��^D��XC��z��t��?҆�"�ʂɅm)�N���S��x�d�G�z���8�c�8(�8�"��
G�i:M��W�m��D�Ȑ�:��[$W��RP������r�c��+��H�x��o�H6l+�����(�#�5*�֔�g�� c��^{���&�T������	���N�l�kXeb�S����{��G�:�8E�]���� *^�:ngO�[W&8�٦W�ƚV��q({�Mr;L��`�J���� ��	uQ��u܌l��B�ƍ8�|D��݊��l�ж�L��%�M��pҲ�U��E�" �����nY�ngh�e�*����|u�R}`M$E�ob�7��oҥ��7*�SP�bg?�f?
]��gQa��{m�wPÕr���vג�m/�Xق�(ԞXX�U��l���C'���>�%��(Y���v.t*�T���[4� ���-�b�����}y��?j^j�u������dv�}��_������\p#I7�E���3���������6)+�=��}̰s���ە�͟[�+.��SÉ;��G�+�b9WI�� ��d��u_�y��>'4�}���e��aʠ���\��m�r��``/�W�����O�j[{t��B�Y�a[U������G{�#ᓟ����
�n�9wX�'�	a����kk��58ȵ�o��I�hkH@%$�s1g������_Г�&��x���F��zs@<����X�
<_�������ǻ)ɸg/%�������nW����k���ϒ�Oj�\��d�=���N�6����b�$1D͛���(��b7֩p�8ua�1�)�(<Iq��Z���R���A���	�,�JK��8X�R�{�\օH�b&ȝ��i� 	����8l3�&�lgDVP縐D#��.rPK��y%�!T�ʵ���x���k-r�1�^�uZ��fu	{����G�a|�����A�
�h��1Y5�SLz�d��L)���Vu65�jӤ���Z�N�I�>��|l�-C�6p�S��3��q��I��<��U|��A
�冋� e�`Ө�)ʡ���T/4'��3&�f���D i��+��~ձ����頾�����UnڴQ�����t�<��yY�  �r"����V��Vyz�iu�V����T��A	�#K�@ع��2�^�N����b�}������am<��&��S�9�X.�X��QӶ9��MF��� �}l��w��h"a��fGv����aN���A��0���v��>I��[����ӊ�`�/���_�aV�̰S@�*��#d'���Z����0��x4��%�}��8�F76�f~3� �=�J�^�:�VoJ�Y��Nz�EAB��D7J�D��at,�,u�\�(P�KY�2J=����k���N�;z�"�a~��C�w����z����|��/+�ŗ�T7@�Uۘ���⠖X�,��/Կo
�([r2�x��(�jQ	ْ�{�Xz�і%����L��rl����^���Td�凔��]s���B@���gY�萲��Fg�.)���՝EԦ(��d{Q��5D�~�:O/��eHbN�q#�K:]�p��9�|&TQN���T��t5{�j&nJM���8.�u*����+r�(yܴ���|�&:�#0;e-��~jy���0Cy��&��� ��?�(Sd^E#��Q�ޠs����j�m'�
t'oeY�d��R ���we�K u1/�*ϫbX�bXO��@w���e�i������|),�0"�`���b��k;V^�/og�`���r���G��SV�����J���.���|������պ��8ت8�ӣ�tW62�dd��8;���
�|�������O@q�B.�[pY�~�8�[���Ӑ\a��
�����h�� 5n�zR��ܩm��=%���&��ͤ�?:�_=��<˞�<B�����ňV�X�_�;O�,�9�\l��b�����2`EO��zl'�Wq�o!�B.�Ypq̾ؘ#�2]���-N��W���~j�+�o&�q+�d�\ز�}��_U]:iU�
��g�u>>XaZ��2϶��/?��w���g����9.V9����B^����@x��eA�q�5�^����'�q �]+���
2�/��}R��y��^W��
{]a�_!�*�)ٶ��B9�Ы\�����(9	Ы\��r�4YA�+�u!��.R��#��D���a�0k�e�Ԋ�k�W7�P��	�&�c��	��R��V���De�1��P�
>[�gO>��"3�h�	!E'>Õǁ3�hK�_i):�y!@��RV����fH��B8jj~�AM��q��)*�*V��
�\��+P�X�Mš/3�8� �hL�'��}6��{v�&.A��l
��
�\a��b�����'`������F;_�av����@f�b��`�>STs/~d�Դs�j�8Ts
4C�}i�j�Pͧ��p��9>!��� �}���R���XAg+�L���Rc�v.�+�l����t�L��O�#)& H';��R͐Z�c�K�;��T͐Z���z+�l��y4$�4�hbxٱ���BS\3�V�|e�Fs�1���d������F��h�&F#��5C�$�$q�p�k�R�    ���^�4�(�F�эLC����'��iV0�
�Y�4���T�!������4B�i3���X@Ƴ�i�֠f��nv�
�Y�4��4B�D3��K��9�0��:��-,os�C���l�d��&�]�͐���?W����ڲ:�&u��c+�l�=��;���)�|BP�	�τ��fHm�B�c��}��3���Z$5�ow�������[���5���a�V?���&k,�,��.��E��6(}��B;���g�t_��v��}�,�G+ �0]k�;㷩��b�PԮ6:#��B��7�uW3�ka�5��V^�/��Y
�a{��N�n�ٳ�`��M�n���N�D�J˖���&,G�H]�H�JW`�
�_��+0����m1	���Ʒ尯6�}��W?[0�-Com���勏����ѐ��	"-�2C��/e��$��\X,�؃�l��d����L��R6�J��J!�le��8���er�2�GgV`�
������H��H=!��a�,�K�������~Gv�v��Z.Q�z����~��Ϟ	~֑��;;���g���!�G��g��udk��~���\��~�ѐ��ww��?��8M���K4�;��YG�&:�Mt ��g�~�����F)� )��]1>xR[x%�f���ؠ��%ɑ.3�.1ۮ E�$�+
0%�w�
��	 *�&�9��a�����;��m%8�C��.�<�K<�+\�$Ku���"�I}pO}iv��ڦh��Z�#Y�u2���Y��X�C,�+��pn�G������F-��1�%ÄmL^��=�kr���U4��Q.~�-��m%�.W���J�(32���
�� �;i�E7˝�Q�fx�#ܒ� cp` �ܔf*�.� S�D)�	���~ϑE&���P��iE�1qCC��Q-��S��:HhV$���07��y�Z
�~��V�%�js���hW�]�_��9�E�,�3B�'�ti�=�L�����Ճ�ʳ�y�^8�i�櫣�q9���t@�	A��L�f%k�l(�:ZKN%�fX�e�LkՍ�c�i�5K�T�Q�j���C�6�K.�jPs�A5�^���G	+�ﻶl���k)�j
�}��(-V��z��uh� �FX�#���=��r�l#�4�1m� ��y~Q�L��M�w���pYB����K��Ĥ���ӲSQ�&����*ERO�`��$��}����_�D"�=?���@1��̾�v�>�}�K�x�"e~Q"x��ޏ�����p����«���.]n-D�`i:���#��'��eZ��X�Q�Q�����H�IͳV���,�V�����w�b��±���hjݝ�){�4S�M��"˲�Zc�B��x��~���NM�N��j>�z��v%��'k�=�b{�������e�=��(-����T�fд��aP��`v��68�d�����V����|�-T�<�o.�%�;�d��"ӟv�O��]���.�����+�&Mþ"龎�[��0���]+��"�n�%M���������ȇ�CAJ�>�`����&�Ⱝz.����_A���nj��4���~=A�V�Bn���V���:�vr�����1˵5���J���)J����GȺ���-[���J���C�>���Z`��OB8�����
��RV0��YM��u�yL�d�q��,"�hgOQ~`�~R���q�kjuW���k��t��*�R�(9�7��dzE �I7�˴�	:24��=�m��F�	��Y�I�!F%��t�Rqb�t��^�_X �0f��b��@v�xETA�  �8�c���1�!;f0��d]�����F���i�X�Q(#[��{:q���^7 �7�W�Cen9���e��a��\���E����ޜ�e�Δ�p{�j���;�Gw�q!Cwc<H��f��zP��u֦�~;p��iC��}�|g�Q��=�EU9X�TX�wf=����<U�����^p6ϻ�,��}aק�\�7�@#�&�r��W���� ���_�4�ޒ����5����Nقh������;��2�2<�S��.�8
���Wv4(t����Z4ϸg"6�|�<)���!�X�7u�ƀ��9��fg�,��w����5B���
Ӊ>�0�����Iɬ<[�"��U�FK�W6⧦����b)�&��}eL��E���=�F�{���磄%�X��u4ev��%:��G;v7��}�8��#i�
KK&;��-��gYGi�?I��ϰ�z{�؁���v4�m�V��I� d�Z���o_���[K����0����6�h�f�@|��rk9�f�z�~�UV�6p�ú��!�վ9}���v�	�UqD P??TmV*P�b�u��B������_Gהe��u�6��/af�Oϱ/���"i߲��
����-b7#썂��~��nA�&:+�݋=�W��+�Y�uKC�2#$���W���qѭ���������v8���/Ř>��j�겕?�T�Kd�e�
�zDl;z��8,�,�ś�l'<Fb�*��!T���,B3�
<�ue�` 5ÝjY��!g�6����$�gD���BL/��"��wvY��K�ٜ���S���s.���)�4,;�'>)�z�[����F�:E���7x�/ϐ&Λ`7\O��o��ĵ7�d�����߃K�=�/$�#C����e�Z~U�!����( ��˻�a�4�rR��D����m����&���s[�~����,r/�u�0Z�>�ƹqTN��۩��0]K� �p�]ŵ.3��p������!���|]�E��(17Q�����6��7*0T�*[�Wt_���~��A�����dc@� ��x��������W��
�_��+|����}Q�d2?\i�Z����D�����Kl܉B��ѐZt;���B�W��c#�Q��P�U��KY>[�&���l@op�	�̐ڮ��&�e	]�̐Zq�.��7�B�{f������Ľqmq���e����UU�UUۧU��.�4C�$A��e{�gW��;勈kV�q��T�nX�$c`�3�\�	 ��&L��F<T�'Ҩw�F�e��l�� 6�ڞS�S���U_Q˨K�z�~.&ZhvLn�ɩ?��)�s�{�̐�v?:���x�+�Y�$����I�L��M9k"��H<7�3Cj��O$H�(aaF�N0gj�Sn��:��BФ�0Y�*9����)2����B+5��-"�B�H)����M#+�\�"�M�кi�	g����0���o�U�B�Ԃ;��=ݡƖ]�eX0H��EM�4]�\3Xf�VXr�T��;��,	�a�1��}�����!�5�@&�Dh�p_���L�-��{*���I�cW���Z**��c)�7JP+qY�FN�7�;E6�jD���Ye%jY=Y�t��ߗ�[����G��y���J�"��Q"���B�Ԣ{�s� �3�;�*�֤����*�r�r�N�-��,�Jo��]*Dj�=�8U�5	]Z�,�J�Q��K����x�>ty�Ѥ�8���Q%-�M	�&p�^@s����`e�]Am�i�H3�u-^��oV����L��FH3rq���9�!5�P�bңj$����N�|�x"�	>S�eR�>Z�_+=��\�~��VQq>~�r��ZX�7���	#O�$7��a3�9F�mtXԃ�	ܐ|<Y���:��.u밢�K�o��������U/��	�]��>�m.�ڷU2H��k�r�/��pI���޸�ƕ�c�厾�S�f��r]����Si�dC�J����K�,"��X�a],��C�VJ�m���^keY_�+Z���`���ĉ�b��񖹯�t%�\x�'��8��.�6������������3_��"�a�]7����Ғ��ch#Q#y|$�@JWE�E�0�ڒ�;}���7���8�h�^�o��R[u�`�lr�P?L�]-��)u#B6j�����}�%�<���k����Z�h"=�
�C�-��,��s�;�!�8��������զK �  P�ՖEᬛ��i=�!�Lw��1U��q�]�xy@���W�aBr�NѺq�8��~��X%�:��<�v1�����F1�(�,Ќ�Z��5Z��O�b�&�o�W�K��[�R#�-��һ�����"��|<����P��J��A��)�M���&T��f��B=v�Lx{��i��%�/\��,i,.��(j;Bz3�n�`u]��q���B����~$H�h���p�5�B��x�r`�GV�(:��x�=K�=�h5�O�9^�>N�����.�w�M&����nv��a�6ߚ�����b!�^q�xJ�UMo�\�5��L��0lϚ�]��lc�M�C6D��AY�����14-�<�B�� �Σ}��/�gx�7�{�4k�J�e�ۛ}�Zq;�r[!�H;�W_#���%��V�xyZ���'��׬vD p>p�`�/6j����l^P�����H}|א-�V~�ra3
ތ^l3����#��_q��H�������|N|L��7Q�)��;3Sw	��W�w$k�M��n�Q���I%g�c;�����k����`��/9
�~��Vo���D[��h ��K��+�D�Ep������ٜk��\tjZ�p��֦��� J�5f�`�Cݘ@����Y����߭�z"�ˊ7�/�:~ցT�c{7dM�곗��x���pS��k��MVmz�������J��8���*K�KI� ����辞	�hg�.x����
��!E$�K$Zc����n	����N��o��u'G ꠰�4��Yԥ��fa�*Ζ��%2X�'�u7Cj��s%/�/E�L�ֳ�j����w?I�����4J�[Y��Ѱ,6�)���f���M/p"\ˁra�0}��U�.�R�i�N�ܱ��_����/�$?~�6��������L^}����|��V;�p�w�� &h�;͎%���l����i��LC>�0�b��;��HD�n�'�&ڥA�8)Ivz�k�ǧ>Q3�ŜW��N�]��K^o��Ƭ�@n��-�c;D��ӡ��sq��a���AZ�-V)[P���̼Ӽ�8۾�,��&�CEm�&&��Kr 4�j!f�]	��O�CkX[�x���vZ^�D?e�`�m���y�����֜D�>C弋Im\k���0t�e�������w�m��D[4 ��Z�H'� �4�dK"E��yݔAl�V�i��)�L�yb�����&<���@?&�S�/<x��������q���� d�&���5�&�I�Lh�`�Բ;�e_	��Y��B�j���πN�R�v�@q"�&�1h�m/d� �5���u�8ݰh|7;��U�Ȏ��&~r��S���ŝf��R�A��̍�n��4����VE���v7&�W"z%�W"z%�%~/��Ԍ�l�������Q��_G!-�}1+!�,��P���V��JJ���JJIJˆ4�F/���Jiy�<� \��h���Rˎc+�te�P��5ʎ�Ƕ}2�}��o����;o�+?a�*���δ�g�~Zd�:Ro;/�e����;?��_��)zi�FebC�ﱔ"����I�C�̳V�N���Nq���R�����F�����2/�j�2�����C�}��:�S=��w�g��Y����3�!�́�̶���Ａ��ه%fV Zt���i�����&�      &      x��}[�Ǒ�s��(X���i׭��i,�׃���>�E�/0Vc/lώ�e��#��P)��Z��3��B��![l���T����[feUgT����!DR���ʨ̈/"#�F)��|�̛�f���?i��"n^�/�_N�����$nn��a�Y�,���!����=&jN��<a���FY�e{I����8�d�|�OӿJ�Qe�|��@�q�>��/����NE��|QO�l���Q~J��6��U����1}�u�N���8%u��;��<n���'���C���Z��雫�z�y�L?���O�o��UL�.i#.6sy/��;@�w;����o����xO�����b����y� ����kH]5G�5 u��P��ϟ���/����x�"����H>��������βÚ�k�gEG�C�i4}�#�����Q��g�{4Ǉ�ګ�8�����U�|/2a�l����cX�Yx��1<�g�o��0n�7����hυJ $~	xMX��S���o��:-��藺��n�z?&6:�G\��;"�i�N裼ʸn�K��˴aG�K1�z�.:n�:L�>@4d|��(�-�#!����s��Ohoq@���EO�N��{ksȏ�o��E?`"h��#�,O`�!0��M_E<��}B�v���_��B�K�L�D���}��3��$��O��#��ܛL�{^�	������O~ԕ<��O��c��Vso�\yL{M@r����F�.Ǹc��߂|6�R�Aʅ5��[�?v�l}�9�E��!l���t�r�������d}y����5k���t�&\��]�D-z_z��m_�P�y~�o���K�<�����!-�Y����i����9n��b�L�tz_�O������E��ӊ1p��^r��O�3�s��b��͗�}�?�C�i�� ���M�Up�/�� ,x��^:�$�+�_{I�4��69��g$W��d�}��K���"bI|�{v9��{�Ү�����xM���M�%O�@�2�c�j�	
.1��j��qf��c�|�`�f1�����*��d�J��;�W�&F9����2ⰵ�1���,��^s���ƾ(/�XT��$�~�X� ��6��^n[�ZᳺHX?�ݵ��cG�y�o��OL�"�xz��~d��kF�<!����wy�4�vm"q߄��y�md'��8��c�A��?\㧈���d�L*��t��`r�/�W�VL�������2���*E<�H��������3ۣG6t�p�y=�.�h���|��rC�qm�:��
��Gr�0�A�g��,�
��(M.��~��I�_�>h�y�~:�g�\��b\&j�K����C��{1=��lC������M�
��*�&	\�J���榎�6�Ԋ��ܱ2w�ve�<x\"�yb-�c��!x���@�M�oG��6 K1 ��o�x�J u�Uk���8�Y'	�>8�Rw̃��[x��<�B5�6�q������gg�Q�FUT�Y):�%ėy�X��}��.��d���A�u�O�xN"�!vv�!с7d+�y�G�z�~�a7�Nt�������6����X�[Ϳ�n�� l���"=��s|&f"ؓ��㘦3K�5U��X�w��(�sd)��������d8=3�����6�N,3!�I[�R�C���r��.�W�t�K~k�!�H+�O��|�;��QMf�6^��5��dr)��Yu@+m��⏙%a�"_�is��n��)=�^,�;ȶ �d6�K�b ��������r��̦��j�~�Ņ�Oc��_@���7~�]4(i�� <X�?6^/|�e�Ve8fҊ����5��5�>2���c����ZA���5����HP�i�g��
X���d�ߊ�-/��1~�j����Mw�]F�	��Sy������{���J�Wɠ$k^^qz���F����G>1DcvMʏ�qΧd�3�����{���A��!C�����e�3�9c��ǽ#�/s�s4韢ea@���\��W�O>��ih���"Q�2�f��:x�:"�l�uŒ���g�;�y�2��h����ubģS��|� f3HA*���R��L,�!4��S�.t�l-�*��i�B�2�G��R�Q�ȳVKv R\�%��Ӊ���Q�AtW��G�~���ݍC��Oo��=��3]sVK�W�R����=��Ӄ�xD�{Aǝ}9�a����ݘS�fx6��k�+�-Ǚ�cc����|��@Ħ�[r]!_�_&Ġmk���k�1�}��O��Hkd�fNn@��-�|к\N��}�l>��� Sr�_�����E�����ǭ������M��]'}��'-[�u(��5U���m�Hǣֆ��g��&�,��pO�**W9y�#84�E32F��Q�;��t���pK��\1����	�Q�;gj���4��> Y����#\@F���x����}��؜j�> �������_ �>��Ӥ��"�ނ�|������_�1�N�~�$V�b���n�؃���vw㎿;4J�E���Sb�<('���rC��������&G���s/3ɱ��<�"N�0��M��ݔ}��+����e�SW��!�;
�ho~�|�e1������Ǳi�ܢm,����0��Z�/ą�^:2g���� x4w��A������^L��ɗ�]v�l�l��X1;=g{�$�:b炏:te<��76���j�w��J�W,���'I:J������uƪj%���Gt���*ei�2�C^*�H���9�/A���Υ>]@�NY �#w������!0�xF����4��Q��Q
[t��q7�G����^�p�y��N�i��Ah����,���G���bY�="���d�k���S�=��I�xE�x. �]ܒ+�P����O��B�#��S҈�H1��~����5��i2��I1)��,Ig�Xp�Ƞ�QZDi���]�r�	��0�N�BDC�t�Ӑ�:%PF�+amݡQZEi� ]��:�_��-6H�̝��>���(&3�ѐ�2@C�,��4$���(ˢ,B��|�M��g�9C�F��d�eE���A�e30�;4ʦQe:C����08(����eU���A�����(��,�,:N�	gQ	y�RgB�I��AB��g�8C�<��0H(��t�34ʳ(�П`G�����#|�S�d�:Β��v�&U��͖���%�Y>��h!A����ֵKw�x�yDN�C{�j�+�	���Ʌ{��s�;�Y��x�n.9���ܘ�.���M��)'aW��I�s��`cYر�E"� ��Av���OȜ~��&��^�|��}�zҩ�m�nxƯ��3�{����R>F;��ӯ�o��d�[=�O�d<�ұ�H^��w6�)ְ�s��	�%_f�|k=�_�ޝM�g�����Q�G9�)g�x�ج�ϥ�#�E��IrCB������$� q�u2��"�+�F�t�ɶ�^UK�`0�!�aT�s�oo��&��~��;8;�	�10h|^K��e��ᅸ�y���\�j�b5XFyi�]]�'?&w̅�S�o�^�#����h]l�����>�(��9_���E�9�h��2-,qvg:|^2.���i^w`�y��('��E�/)�g�\�^�@�$܉�ŭ��*r�K�M�8���_�U[����*�Ӽ����7���o��+�τ�@�-�����
:�#����G��F^8��{b�i؛K�v&b]K��yPl�yb*��:�����>�4��g&wU��]_�>��h���$*Ƞ�=_@�w5���F��9��.��o�]��-!��/�;h;���IC�"�
k�� ��}�n2��G��ȃ��r���X�#��zb���J���q׿����t衡Q�EE�c��D������7���Y�47��`=���_�G�O�[���u�_���9I���������?S�����2�YQQ��1�L��4*����3{����m�Ba�WV�>    �`�<���}�Ը�\o>c�����W�׽�� ��0���l(��A��xho�\{�\jH@]h�NA��>tN��m���~L��QQFEفUZ�Xdԣr9�����F[���k(��d;�(�r��O1�RĒ(i�O(�k�ƴ��r(�:O(I��tM�3<w
��l�VEO�]S���B�X�P17R�D�����4�	%�`Nz�,p� �_m )*�؍u ?���Q1�
�}�2s���C�iMz��D=E��h�FӀ^�,Q5��Y4���R���C�iM���T�7M�h�ߟ�����Fe�/LտO�tI�d	��4��h�o���^��K&`���i��$$�C�8�ҵF0����(��6F�Z3�#|���̶!(�[?����s}�'[������fKP�}��̀E����S} ��3VhLJ,ٟ�K}N���7Vr����'��¹�^v���=ȸd�m��tZ�én6��`��9���/�W�� �ŉd�ض6����,_t�^���%�m~�2N�9s2�L�A�al�Qh��-Ng���_��w)����$Ofq���X!��{���f[�X^���7rf�S�g}���$ ߩ������/�AI�"�s<��͝�uK+����a���i4�n�87#�lפ<�	k]Gb	�	��b,a���^k
C�R=��L�������i6J��)�6_���6���2Iŷ�����󭅽ps�me5Ķ{S�8�ݏ�sz�*����ذ�$+��o��d%
�=2o*����,u�B�nQ)?��d�e���.9�,m�=�ﳯ��Ӛ��)�oc3$�iW�xLEz��u��{ �p�y��^}��}���u����?���p���aR�x3�nۏ�o>'o�B�ye`�s�"f�~o��d{�a���N� b��k#�'�Q �FD��J
����%Ga�wz'6��M�[(e ~eWce#�;YL}ƥ#�i%A��{+R��K,M�F猭ԯQ2F�]8pr��9�s:TL���C�iM�@��'�ju���K��]�.|%,HJa/�����_?:�C���^�J�Ҋ��|!����I>�<پݎr�'x��W781��}�]�ͼ������'��'I:�m �Y0�A8���u�0ƒc�oYAY́�R��M�BcDg����ܘt4o�W�Ӻ���F�*�ҡ~{e3���Gw����Q����VC���xh4��i-
�}������(��qbȕܩ0�rZ���~��nN�@���	U�@�����Ͷ%:�`�]9!�yL.����I>@wP����4���K�߷i����������5��^�/��꺁��#��i����	� ���]M���o�'[^�3��枅��z5a$]�1�hS΃��2���D�4�vs�?c�1��(/;�������o��$ ��^�kc��W3�!`o��Y�qr�������{:�-���⦷Q%Vo0��G>��sf+6��X��8��:�bN&!۱G��親�YvdS�GqN�8N��ٍ��N9�N��=��g�j���=@�������'kH0��W>i>K��#������B;'9�[Ås�M>�+�xn��*���N		�Ln/|�Hzg�8+�!���(��)��|��fє�EL���-Y5�6E����S��!���A���ɸ��X1˟�;S=�l=a.��w�s:� ��60���6�Oz��Gc�lJ�\��t��r���b8�[����_��;�}�{�+>�������{���?��߿���Gr^2�mYc��hf�������������ßw�9f�S��CJ�e%r���Y�]�j��O�[�i��C�L ���!���I�ĦWL�^�'wV�)�nn��)���a�Y�?�\=�p�>�8�;_�gZ�b�m8*�$Y����(n���U�w@�n7�Nb_�x�)xb�|�桮W`��t�y�W����
E�0��C�b���KK9�ÆK(�|[[��:5o͞�/��x��c��@FS�0���"�<{��,v��jt�v�t�U�/U	O�� /9 !��b�$���ى{l)���]�I�}��M��:�|P�c���"�Mq�jI�8Ꜳ�;�C�̅� ".�םlW�}!}J5l0�q=�����?a���z�V�z��,ı2��H�ȑ�=ya��lʂREz:^���Be��Η�!�`W��9��@�u-�8�����(���1k%��_��[�����F���g�l�DDx{V���H��u��H�������*��O��7͝��br��j'lG�]���^#�7Q|N��l��o�F(��ެ�&��~�JC�2��W�u��l�IL: ����v7���34*�~����sm�9H?s��=��->���GlBk�O�ևs�z��\�?u>��]1��:0G�b%?�X'����2�?y3���	\X����pr�j~�����7�e��RC��l�[�k|l���Z=�o����7�2�xߍ{8s�{�*=�/�Fck:�o��q�|2�\�l��l8�OUSbЙ�y�tR� Y�#[J� 78�o��C������]�
��!`��\�#��E�s�S�V�by�%�&�i����.�xe��c��w
?���>�ѩժj>2]ִU�Ȍ�+_���W��-�I֢�w�C����N-����BB��!:�>6J�x�&�6{�M��u�@���r	FW{t�ާ�_*������i9��W(}���<gu^Fenz]��Ϋ�����zH��:*��f��'�Ш�Ee��߬�9��FUU!�"��@��Q�FUȨ�B7&hhTeQ2*R���C�*���Q�zUET���ԫ �Ш�FU�*���34�ʨ
X!��1b44���
��S]
�,uT�DB���YT�DB���$�C"�� ��u�!q��e��Fu�!qP��C�:��8�W��Q]DuH�s�yhTO�:$ꚈQ]FuH�3�yhTWQ+�+f�:�C�`�[C44�gQ+�hh4K�YHԓ�yh4K�YH�tk��F�,����Z���h��i͊hk]
hh4�F��8X�RP���,$�I�<4�U�,$ֺ�,u4����<�,���A=s��Fi�������>�L��f����hϙ����j��sō��jI��J���ن�A=l>9���t=Ǚ�i_N�&���us�e�zOKK���DZ���onN�ؐ
���*��^�|-I�im�L�����������u����Fw5��A���o�^�u��� �'�:���Nļ�5� �{���$&{��^�|'.�0���p��:=>h��8=M"qL��}��?���c'�Ɔ#^�{k5'���l�[c#�^�@Py�j��!.&.�#W7s���m/6�b�������xS���q�KT�\>�3)��&��{#r��#{�3�7I6�m��G��/����Cs�D�a/��&�CVL��^ح����^��q�h��o�����Jx��R+*��i����x�ˤ�]���2Kw�/{MW�����Ĥ�|�?��;�m���D=�����dJen�h��� {R���[���aK,�^�NIiߥq҉ҳ��#֙���p�G��|��f��>KI�^G�!,����e��iŝ����pۑ��Y�([����X�/��������j��NE2&��Nt6���jw��4�r=g7�Q�P9���m1���}���ƞn���������a@K���X:��n��M�Ŧ6c���zD�!�2��"b�z�x�"�m��P�M'���I�m����S��T/��^H˾�X�an��mC���ƺȬߋ�y��wc�^e>�g��oi��[���[��t������Y��/�Y�l6{]+�*�tp�T?��c�\'U'&P���J*�u�y���/Mfc�8|�C�O�̥��l�bݦ�Kv�pՆ�y�
S9����[�/��I�Y�����؃����~1��D �z�I�M���f�½���'��0%^���$�n�S��{b+�oF�K��^������\/��C �uD�7��>�ʦ[    |͖|�=��t^s������M=�4��=�]*m�4`�Z����%|�?>H�!���9�-�|�U�h���y<�7��/H����4Q'����Nk��a.M�Ԭݔ��K�����t�����C@v�K�t�7�b$��(���Cq��z�ߣ��i��9-w<���b��!x	�R%�1���JY=;t��8�,��.���]p�H����t�E�]p�H7B��������0Y:�/J�'�Sǣ�	�&��I��<+��:��9���n���m��ι¸`"�^3�Kn�Z�����\=��ٹ=���B��RϦ(Px��e���z��l�[%�*=�Z��r;�.7��uq�Q�<a�,%���ZN�[9N�'��А�}�g�u�z<K�7z��m�V�Ȫ�}Q��8{)���9&��}��G;�6F�.h2��S����@��d��D�}��B�y�.!;$��uC�yt�a��Nh����4	�E��C�yteε
S��#��7��� �1XO4�G��L��U��h8��� �����4:3�������<� � ��3ͣ��4�ľh�z��<�<p�J��тuG�y��	��yHl��(v��luS�-lʔ�DF%U�	��yHd��v��@�<$2*�BvH \�Cb��w�3$ .�!�Q��C@�b����Q�-v��ب�3�3��)B"���d��@�"$2*�KvH T,B"��C�	��EHlTҗ�� �X��F%��	��EHlTR��� �X��F��� ��ب�l�b�L*;4J1����n�J,��<i��Ή�LܩM=ߌ�r�	Q�E,�T�4�>X)�V��\���8 	y���	zf���^����Wʴ*8�>�g����	Q8��D���ݣ_��~}�g��ɦj��;����^�h�|���&���k�Q�se�*�$5�#�=9�*����r���a�R�Y��(�Z�y|���Rl�3���uߧ{Ƕw�yo"���%q�N4��'�g>�/'/�:��1|O`�RȦX2aa���{�2�p��k���h3�� ο�\�K3׆��M�*���4Q6�����F磟�/�m��\����K��b3Z�_ˍ?\�4_O�=�f����HW�RF阊��K�~�jn?c�f#�B6RQ��I���Sl����v9�i�;�:���e�Z��2��МJ�O�I���ݰ�~�)E[p�6O������	�Q緥�@�M�z�];`Y�i��۸���ۨMJ��)T�q��k�O��������j�S=���QH6f�y*OR�;�3�=���苗.A{d���l� 8ێ <Zs8xqv��0ă�a�MҤ������/u5�=cb�R`�{7IG�K��1�7;�x��Vʧ��°v���ѽQ��w���p��X��s�0����}�D�����x�#zSS����"��.W7`�na�=^���z���W����J�W"h'�>��}b�R����I��]+ٻ�M�Q� �o)��\�q[�q{��P,�.���چ.���<�J_Y�2J���hC3:{��4�fW��"�8�����]N*�c;,U�q���66m��-�٭����5^ٕ�v(�#�5݆-Ԑ�=�ui���&еJ%Ze��v���cA,#0�MK�x/����5���1*� 1�p,�W/����Z��rSf��,Ce[r�%7e 4Jb�J �RT����wV0���h���1��MO���=nD�HJ����G���*A��ў�����'T{���˰�_� �e���eP��K��r�>pc(W�%�z�۷Ϥ˶�WJ����L���z��;����jG5ɷ��n���,}qw�n� -}�[`�۵��f���3v�ɞ��Y�FՕRv���HnsI��`%�O����"� ��o[,72<��N$�q�=yG��#o�����F����/�-�����K�J�;4J��gE^�7���vI�"3�"X�J���k�%]Ku,!�ed_A�~�����h,&Ke�l9S�?��9��1ڞ*������0���3��'��Z�Z�*gp)����cG{2���s�H �E��N	��i|���$5
��o@��ԟ{.e0A&yJ���Ƙ� I�nNO_�m�L)�m"0�d�CZ/������}r��;G;�e�):0�vD���M��X����q̅5����īu�V���d�ڢ ��b��H�o���-�OcJ+e8�VQ_�v��O�$�8)NRt� ��6��ER�e������@yr���&8C �p�����tԖFax��!ɟp��!�3w*j�Ls>5��m���_gT'�i�Z\��)F�&J�߿$����ǌ1K��yY��s��˯�u�j�r.Zu�����s���D�(�&�0w���O�[]�3=�u&I�X+~�1�_c��R���.sQ�W`��N����<�\d,,_owx�2!��L�*`�y.3���2�,h,5_��y����y	{̰�|�������73V�Xx�~u��,�Hf�Fi��7�_"�e�F�%�������ÛR��!s�N'���ګj[(si�ֺ�שО��LG0��g��mz�\��Lޛ�/��p�Y�G�!�ھ�t�;t+�بy	;�Z2�NA#�֕�QWr�����@�'}�l�
�hqR��-����~��z�W�6�q}Rd�H�I>�RD�YQ}|t�c����#�G�\�F��N�m��@m��Jc�>'ퟻْ�������oc/K�d/-������~�,�{��v��-깢*Aw��n{�_媒�w���g�k���'qZ�W7���^�1�i�$�+An�2��N\��n}�G�|L���IX�A��yp����������+?�\yl�P{��Ma�4��Dh6�Ⱥ��(�O����5�
vF�����n-2S[�S�Yl�DW��͏����*bӘ̦��B�i�V�����t�5�F�_�*i~ݲ_����q�J`J�%�rhKY��`�&;��&f��s��ǋ�`y��31�m<$`�q���m?a�fR{Pp������MR�.�J����Jq@uL�F����S���=�I�c3W�U*�Q���T?�d�������D�5�yt{N*[`;�`-Eh��.�-��H��"4����kq�-E���yt-%�5��H��"4�����/��`�Eh[3�V���ڋ�<:7rJV�DY0uz��@C@B��$,��B��!I��*܀6��ب��! ���$$6��HC@�4��I�Q�K�dIeIHl�K���PEYunf��,	��|M�M=q���Y�%!/������(KӐ��6��� ؘ�̘�A� �1��2��ds��N� �̣'.s�|�2�a�Q��偃��1��2��ds��@�42�<�(�Ș�AF����� ��P�\���D@"�>�L�sW��2TP�XY�@�y���d��2�e�W5Y�:�̣#��2�@�e���	 ����<:8s�e����>�̣##�Zf9+���<�Hr_����>��3 �,�9`c���4�j�����`�ڀ<�78� U�yTL�! �1Pu@�GH U�yT�C@ c��2��	<$ 2�(��C@ c��<��$�����j�4	�����<:*pCV .�(�訐2*0�:�̣�_�f`c��2��
|9������<:*ȑ� lTP��QA�0`c��2�j)db������<�d�	�1P}@�G��˰�4$:z�Ü! �q3��C@��4$:z�Ü! ��!��[k� �!��{#�	��Ӑ�s�0#`�4$6z�Ü! �q���! �q��a�� �8����0gh����eHl�V�w���F.2�wK4�<P�=��*� ȫΥo.�m	�\a�gҥ�`i*Ը��+ϥc���J@/����s,��! �ٸ�o��`So�?E֚�G��.k[�.>뭦�UP�q��N+'�>�P�sn��m�b�I
����MT,�ymmurT�)v���s9w����5�R���Y�U[Hb˻rsJ U  J�Vf�n4-������!��$��Mi�f��ߖJ�M�
A!Pe������/C⾷��3$ (c+yQ�����ߠ�d�`�$���q�+�FA�C��2�~V(����)*o7�[N��&l�O�r�q,�P���u��e��
�����u�2V0\�4e�5��! P�
i�NuF�2#c��*�)���	�#��Ƭ��3$ zU!��R� J� 09�
	j�
��� �V�4fK�^(�^���Ƭ�f�3$ ��!�zDO&=5@_�G�d�S�p�E�5 l�Cb�ѓIDO�X��F=�'��������.���$`c���L��j��:$6�AE�Հ�uHlԃ�2	*�6�Bb�T�IP��qu\bX�2�B"�^3����"���ĵ?�`c���GG.ՙ� e��<:*p�l�(;D��QA�f����C��y6�s�	����Cd?0�! �1Pvϣh;4ʓ$���<~d�C@B��Cx�! ��@�!2�����Gy����o1�! ���@�!2�Ό�0�4�e��<�Hr��<)�<Pv��3��U���y�֊�(�B���0y�Ey���ǯ���(O�e��<���! �1Xvͣ����)`c���g��S��`�!0�*�,�)�b���%�[�vH \�B��C@�b���GH ���<���! �1Xnͣb	����?�<�<p�g�2�4I��C@ c�N�8��i��@�`i:4�.\�(� ����<�Dp�e�:KӡyT�C@�c�D�Gg�T��1X�Σ�3�s�,M����!y l��C�G ����<�Hr�K�6Kӡyt����<l��C��"�wy�,M��ѕ;<��1X�Σs#3c�,Q���E�C��1X�ͣ���9 c�D�g`d# �%��<�H�"����uh�n�P�<l��C����?��1X�ͣ+j������Rup%b�	���Ruh](��1X�ͣK����c�T�Gg�B��1X�ͣ+���T�,U���%�� t����� � �,Q���Er*"	�,Q��ѕ��S��`�:4�n�N�t�6KԡyX�ya
�,Q��������1X�ͣ��S��`�:4�LZ�O�%��<:0qha>l����(��vH l��C�誺dU=t�����S�+�b�
�o��4�߶S�#W)��9��#�#Q��F�%`k���#Q��C�K�^�zM���y	�,�_�:dq�e^ps�џ,��뜫��(�1�{��%�>g8�
+�+����E���_����4.E��5t���ټ��	A���՟u��8��5P�#}%H����^u:�K�Uz�ӌ^u:�s�n^��^��ôj�Ӫ@U�u�(!��_���~�M��f���f��1��g��|���o�#i�X�)q�6U���w��XN۸`]���,�$IӫR��Y�3�*��A�*P��kT�:�����^�����{�
l\�"��6"j6nތѥi\l���m�y�O9i�v�0M���*u�hzm�c������ms���I>I�IR%�Rc��;̓8˓dR�u[]ܕ�����?�f�[/I��(=y�����q��;���S=�ic�8g5^��X�Ur+�3�o{����E�}��n1�{�6��ay������!7K�����q�{�B4D��b-��vu�����·�<8��ps`�N��_}�'��Twor�V��ȩ����b������4����	����
��H��@-� �QmBc�3����4�tv�*~��+	m�7W�-������m���.�;|�5������O�8�x;���Y��`"� �q���S ������פ�k�v��8@��D%8�5���t�����2H�a�k��5@�2H��\� �q�Kf�% �;�p a@&E(,w�ᨒ���� Mw�ݨO��'�$>y�����TL�����q��$�6�tj�g��;�o��P�B	z�C@ ��u��`F� ��d7�gF;$ .� �q���E�U \�Av� 	~e����d7��WPvH \�Av� 	~;���$��d7���$�]+�4*v��8@�_?�! !���7�$��X0yT� �q� �~�C@B;�n AG��"�F��H�و2*v��8@�.���d;�n �o��! ����7���d!"9���7�$(AOvhT���;�o AJ�TV���;�o AJ��*R���7���Iz*R@��7��%=)��rH��$G)��ru�E�5 l�A�� �H�"���;�p A�RD�q�$�"Y�H6� �q�]Or�P�6� �q�8$�� w��8@@�Dd��;�p AG�)2��d8���j��)2��d8�$��
�+ ��Ё��n��q��$��ā'Eظ��tT� w��8@��
��`�2H�Q��D��q�$KDظ��t`�X�"l�A��N�N� ȸ���tT��nEȸ��tT�x�"ll3;�q�b��|6�L�"���G�	�*9�`��蝭ȶϣ�/9`��������tI���j�p�W�|�ר_��(�`��>h�G�����B���N�I|]]䀊mn�Q����S� ���;�/�����U ʵ��/�պu�7�[pB�k�j���� zm���n�r�k�`��6?�e_inj�F�6�r}~�n����W�����}��!�������������ȓf{Yg���<�U����}{2��?�I&         �  x��X�N�X}��
?v4j�	q�}��>�cH�7����h*�@+��u�@�/�Ѭ��sg#u*H���Z���9��o����!~��e�]��1>�6����A+x�W���a+}��(z��<N:�ZQ��V�1�8�{6��c���oa/mQm���V@W}<��|no�A�X�a�5�E�>k��\��3��Wxҷlz�z)��x=����kD[ZL"ѹ�sl^��u�vFz��3Rʅ���מ�h�'&��]�T���w�HL�w�O<���G:~���tDl9ę"s�t�����J��+G>��@���e����Z�AA2� ��o�u��� ���@g���d�nKPW�noÞ��H���~��u�,&����2��ڴN�5 �.B-eN�c{�tGG��m��B��7�d�d�KYJ��m�:ۂR��չ�o������Pg�i7�[��QQ�rN�N����^�;�N�=j�Hz{��![k,���uR�8Q�ST�'k���5�U�ݲ��N�F"n�j&�g:Yu"9���w�p��\�/��ǟdz�"n_���!�?�(��?�����ǢQ8�^�M�[sD77:�I�ppP��M&���A�@P����̈��\����Jx�Ǯ>�h2�X��ߟ���
����>dh2��x>�˪�е���a�C��!�{�	����Tt }��d�Q\�a�qx�R�C�!�"�q�4�ƾ�
B�E4�xSՖ�j�"���\юzEM!"��+#���Yy=@�pR�~���=��ΎE��1Y"�!i���3�@:w�d� �5����`�����Ъ���%���㠏�h��Q�҇D�][�SR�2�놡&��+G��u`63��J}�:OәL��8��W��� ���x$�y)�/�K��ҥ���d��U�\ʘ�ޚ���4���Z}�O��Ϙ��Yu�{���N�o)+O���@�I��+�<��-H�?�cA 4��-�+[�z��Յ�K�ԡ�|���L�I 	?�]5�?|9h�
�<��擧�ֺ��?��e�6Ȥ�������	])i2I*�^��Y�?�yd��w	E�y$���%M����~ѩx��Jӆ&����s�R��S1O�t��ɴ�ES"v��FY#�n^+���c#X}ÚRt�˒�׷u�&�k��+�Ŏ�l��*L�y���WR�         d	  x��[Ko�V^����c�|?��@W]��uҮf1	�E�i���L��E�M�f�Њ��z����s/�K��:�� 
Ė�sI~���N��^f���Q������l�-�l�]��~f��4��@�f)|���ng��ʤ���~�@�O��H�Nv�=�|����7�vݮw��t������r��^3�=&�t��g���o��G&}�f@~���{�Q~� ѱ��g:~�u{Al%A�QK2".�sz� ���� ��
�Mq��u���X��j )$#�2D5<SI��yv�ÉM;�qϵ-'�T�$#f��$6#�h��X�g �)1l��?6�N�#Ŝ�A��P?9w���'�pC~��L�>�k��3�� Kϣ�@}���� ���F��I#ۉdp����e��Y򷓮Ko�^Z��U��#��D�4?�2�e�]-�j?����mh����Ć��P��7�=�� $�:����UH�!�$���U��*D']<���n��>(^qP-�/����q�6I��ف.���NE{����~ 7G*mސ�yBbE}�2�n�Q7W�˷{�c�N��_*��R}�
�o!�I��U�e��'����G���z���}
$��2���:܂%��:��,���h ��f�nVS--�t�C���X&ebo�~P���7�.7�����n�
�'{�.H߆�гm�-3]�m0�O������HF��r*�%�@\@f�aa���al��\��A���l�+�r�hN�G�r5v�qcLh�;��Y?wa�����v�s+NMz�����~CM��lB8R��!݇�V�P�]�]Q���nO�&IM�HM�m���ϵ��s|+�5h*��p��Sr�Q�����=�~޹bs��8E�c'=ƈF�c�*s!���3��r3�S��"Sͤ���C�*�MQq��	9�1���i�[c7-x����B�Y;��!AC?y�w��uɝ1yw�+R!�CTa��t�͆��M!A��1z
@���p=���=c�R���l�]�׏��)�}�!3�jA�o*c 0���r�;��+�'��e�O��:ӏ"�����9��Ԉ���ݭ�_i��u�����s�ޫ'Ap�beaEb[�R��$r��AQ/���[��$��c���h)��A��BT��Za+�p��At7�Jg[���.Ra;7��^L|�k�J�f'���{���Z��e��0�v�y�U�J�ޛp�][��;d���_�J;Iϋ�ЉW�W�d|�OȱM�#�x��$#�F����W-]��C]u���p�R���qU��,2^��c��A)a9���PHF�U���#ϵ�$�@TH��ͩ���ղi�C.���k^��	��k�dc`~]5�f���PFܒ�%|��3���Ε)�a�4ApOeJ�u�����[V�{*�Ҭ�K���}�-�DP���ϝPad�i�úW��g�.�l�YI/p��᷊�m:�J�'P
{"�"�N)��*�t������<�Zk3$�C�\d|���!�E�n�a���"ʋ�Ϝzv��Om�;ۃ@�-��%����>�9�nQMEJyAp%���)n1߰��[#��׭M�<T (U)�i��}�iZȵ�ƃ�%jlF����~�����M!�}��m6ou����@<�,Pu���m��+/D�%��0f�m���v_�u)O�e���wTҴl]739��� �а/~�&����[V��}7 ���W�I'�(&�w�c�!u�g�N6��T�aϏ�8��H[%	�E��̜��4��P�\*=�
ĩ�R�u��	�N��
�QC�d���@Mʁ����Cu���V�i:'*�p����4��m���S�xO_�Z*YJߍ-x\/��{����c{�r���ځ�s�#�7G�zK�S�WG���~_�)G�\��p;���`C�5z��AC0+�T���Z�ĭ�ռw}r��pcK�z�1���hW���ㆼW�b�a���>����V��}�Ui�Aĝ���������~`muh�}��7�I����I8x�nVv#*���4x6��>-v��嚃;�"~;��h�u���5���ns q���>�#��� �s�����;wo޹}���g�~I�֞q���p#ݡK�d�[ա�i�B�jt �=��^/�s���C!!�o�訬g㋬ ҍ#�m5!�,���{c|~�q,�4��r�����
�Ϧ��h�� �̕�]�@EOvP�@���G���+IF��Z�[CK,�ՙ�B2�2�Ί�Є0�ٶ�:mTHF̶��	�*��P��<Pm���;�����u�2��H�>��ŭ���]���`�B2n���䒪-��}rC� ��!�X�a�	�6�u      $   �  x����jA��5O1Ǆ�N/�Y�&�]��,�0R�틍B'�,���qY�+T���y$e
�C�?|_WMM)P�_q�t�8�C�.��#�oS���)�^�n�Ժ%�����Φ���y&�Q�A�������agNZa5�^&��K?��*V��+'NJ�2!���zD�6�'������N��~�c�:�mY|��a�Op�W<���MBwT,���� ~�:R���3�{�񖵴	��:����d��5
'��-%��~[;�-�asad�:�*� ?xN�� �����mߠ�Y�SJ����Dd�W���\�c�הt���)��0��D$Q�9�������ሟ�/��s^�D����P~����)�z���*a[�Ts�r%
w�M���d�OJ�H�F5V�z��~.j�$2��7<?��x�}D��L��Ф���?b�m4���SF�͵�E�"��;!T��      6      x������ � �      "   �   x�}�=j1�z|��$K�=H�����	���Kȸ0�W�	>$ڞ������zm�q��lpO�3�(	Db��j����^���"#3`��]e'������"k��)j�"CA�T[hb�K�z��P�ʅK���N=C$k !!Th�QJ�R�X��z�+u��\�L�R	#��>?l�p�3��*�'��[mg��R����;�~ CJi�      8      x������ � �      :      x������ � �      *   �  x��T�r�6]�_�}.�u��~@7�H�t��4���nҺ��i�ɴi����XcY���?�$y���#�p�sϽ�p����fn�Gn�n�q\%��$���o������W?�O����\�vH�eE��B�(N��x&�&��a�f�J5e��Ox�H(��������8%�[���	��x��y�&��?���M0��F��,s��w�u"z�����ݐU��nXMT��Jw]SJ.�� $%����8:oݥ�ȦY��+��N�iP�?ǿ7��B"��2�����M2�\�_��g�S��㍱��P��ɺ���fu�
!eaH��6��0}�T�) v�{�G�9|t?�I�3���?�/�]����Gi^en���{��u��h�/>�|����В�IT
��QEU��pk��DIy�{���2���9�1�}ٜg�G�Bd��h/�rW��P�]G�+0�
r�a�ǛJE�^�h�� �4��QE(z��sp s�[ǜLܝ�5^�����fD�IBQ_��m/��*��PCϮ��նfT�"�������r�m��{�TU�zX��p\Q�=��l̴��,Lbݍ������V�K�u�/�&�
�ڞ�����;�g�!�2�&ɤ)���X�VCo�RW�򔃒��u�<{�T'0����`�� �aiW)A�5j.��@���zc��P�A��U�W���e�4V�o��	,s���ο���1�<�9�9�8�b��+7;pn��ݭG��{�>�ЭM�u��*8Osf�<,45VT��T��zPRN�W�{��$�����"s�2�K&8���4w�����%�l��l��Nb��S�n�˱�%	kQ]h��Vg�6��pA���ֶ�)1��G?�_�i��JƢ`         �  x��\]��F~�>����rUI*I�O~�>� fm/^� "�a�a�݈�0�n"|��+�$�������5����I�|����j9�&rb����l��Ofa�7���n��p�_@[���92Kx]�+��ܬ���:�\��fmς�|���f����
Y��涙�a��	�Ƴ7G�L ���'������\��9����D
�D���\!o��4�'J(5�L%�ԇR�$�3�W�����V�yM�ZpW���b��O�6w�:'NJ��]��g��{��\�c`^���������.|��b=* ���c�؜w9��I�i�`�A�F�ئ[���&���7|��Bs���qs/ fP>��W��=U \��/Xo?�'@��3` �<7g�~r�3��&*L�~|�a�H��@��	�dnO��-����^��yłCɤb���NP��[��J�کI�E��B�I�20/��'����`y�v�S��7G8歹P3+Z���"��3�8�h�H�ڏ�.l�oJ����9ې�:r��H�6��_���}J�U;�a0j���ދt ��0I�8v�i�D貉yc���r�r��Z{�>�#���A;�t�D��8�!�����2�I�I�kt��^�a:�呕��/�7@wc�vM��,0$��ȟxm+M"A��}��2�Ad�ݼ��KZ�Z	�zJ9��gp�+��kd���PW�=x��N�ٖÍ!TE�X�mhM���Fز��x���ܖ,-�D�`K��}�.&`.����_�,+bK���=d
6ޛc/���$��v��&ɂ��M�_	��͏����<�ץ��hҌm��0r�]�d���AUIͣ� W��)��T!��Q��)����^���@|�@�?�^cD������V�_�p$kMd�Pe�Rlٗ��!ެ�9�J�Jt�0�$Y�y�����޶�U7(�!�Y�Ǡd��k��.Yy�>~�NC����Q��J�=�՝Hĕ7�F�1g̮��H:�$������.����¼�G��$TU,Nan�H䚤)��Jy��[w'��E`h=�E��W�8���������-�;�B
���\X���01�;[�C�)��R�p؟�ʣ��G��7�DV�����{�֒D,�@�~�мUM2h��E$tT��Q��#h%|�J���'*ò~g�P�-?�8(!�PU�}�,5Kp��'U��k5Jl�maX@��cx�+H�y97^�U6����3E&O���&���V<�62��E�|�_ܧ�A�i�ҹQ��������{(gr�
� ��l4I�WN�}�7�1�m�vb�mj���R�V��z�����Åk>	���hT�UQC�+y�o �|ӊ	�'߹���q�)o�D��Q��<3�1��IqR������4M&�$�`��Ҡ5�5R�k�����l�y�
̿����>K�N�X2���.�Ho~��/����nP|�$ፅ�?����Z�=!�SM"Yh�_�#�r~T��1���J�d9P;T��2�UCU7��v�UvG7��~p�G�u�{5I XNb�!ת�At�A�;o����F�β���D�1ͧ�j�=7��Q|��ør�׎�q���|��+P�&��81bf^�ڭ�A�[����t��<��R%������w�q��,:��wٯ����H���س��<#�=�p�=B�p����L���/�Вn�J�����{�4�� ��ys���_H�.��G��܅'6��E-���2f���<��|&�P��]�g=vB���P�}Vn�)G\��k��=���D�*NQYG�+N�c=s4$U���H����d!�!W9����Z��Ȓ,҈��n��k���I6�[����!<�Ϩr��VoqEuI!<�;(H���VNFr��=$
ל҂�^Q�oG?��C?�h����F"�j/W�2`�xoI���IR��#��(�R
�$~JY�(�x����ղ���A��U?b<�����±�t�(O*��w]�*A;G���`������.y�����D[K�Gi�#���8ԙ6?���)�_n���:���9�&u�E����}���f���z�ux��8��{��a �H�mE-ǣ/��'Śy�%���T˒,c�W�}���K�j��$Y��cQ���#}}s�YL���f����e?���$͍���Ǹ��2����ܼ���ſV=�VU٧=+��c�X�I��s����s/@k~˒
����n:�����+]�_i���k��P*�����F�Җ'l��@�3UM���Vj�wȼ���G���3W�D+0��*���QU��ۊS�Og�d�� �*5*'hNńΈ��X�E?>t*1*�팆��g4v��Џ�kQ�(͉ښq�Çx;RF���<ݲOF�>i��ݻ����4�z�I���;g�7��.Ve���o�JT�2.�:+_�J�AYI�f�Q��L�����<[M���{�TǼ���暴���65l㬝���!
&EIL^�{�?��������6䆶2�Kfp��˾#�|��>��}J��S��v������x����@u;�<�+���8�%�����H9����Sr�g�G"Mq?N�#��h�����x��8
p����wg�s���%Mq/\�:����!���/��1KU���bX�����-Y����;Pv�;L񹠑@)'Ԭ�����#�Z�Y�4O�M^ mۈ�%�і�O�FS���x����-:WdP�A��ā��Ϡ��oƴ�H��7J>��˞�E�a�x�@�
�:���H��tdt���ㇷc]���}l�@~���Ȯ�b��uZq�W�r��xn:��b@��V��~����%.N{ɷ�'�U��xd�/��7g�U�r�-3�h�D=�ܽv���sv�d��\7�G�,��S{_��\]R����i�d��ӏHqk7i7���F��R���]��J:���_J9F���#V���q�t�r����ꉢ�wd���O���lk���� �=���T���N�t\�a�/X���A���L����{�i"�N5{l��e�,O�qk4����
?�a����<P�8����C����.K��YZs��Y�*�T�,��e��smK��s2��~/>�bE�c )�[�D��%֦��ߏ����PG�]~��6�J�����-�5����~�u�������O�"�
�̼0碱*v�.�>���;�bLRLR��� B,���+��G6?5[9�l?�hI��û����8*gy�,R)��;��m_�a���b�1�n����5�>٫WנB�
�vL�ӯ)'�	jo�t�\�ϩ��ݮ]8� ~<�sjߣ��A��67H4Q+�����k.�g'N��+�5HT1I��y^��E6���;i��/�p(��Pu�����%=`�zF��I�q���	�qⳍ����NP�W�6%��0����dW[�Ȫ5���
��}=�ko�(��X����5�+\��i�m8�N�N��         �
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
D�m�v�lE���c&FPr����Ϻ�z���0�e�3�GB�H�Z����3r��Ԩ�.��N�?yx����B������2Ut���9�Z�`����c����4~ڄ.�Jc-�b�u���<?��!9�;�e8����Ti�><��Q޹���=PI�ү�Ƙ���^       >   $  x�͘�jA��]O�ݤ��;�
~@�1G��A��PA�!F_`ݸ��f7�Լ��݌�dk�a������M���UE�Ze��=w��+����cE��O�tF�r���v���5Q���AO�;<R���7��n�����όxb���M~�>�1�j��d��P/�� v���6Z�t9�3�4�	P��=�c��Cd���O�q"�{	"����jm��~�����}�k���[�ܢq�Ŕ��͹9wL=�hT�r��m9|>�h�s�&?E��DM��J�^�X�ח=�&H�����'�H�%HU~}�N��L�����t����Oݾ���[:�+g��I������讪�F�.�0�)	re�卼g�Po���|N�|��G7ӥ�>_F����E�D/A��Z^��%�+���	�*L���%mX.�b���2L�aP�h6����%`�6,��%Y4F��J+~]�/� �,X�V,M|A!^*	l�g&��B�TجK_!�+	,W�t6�H����X��"՗J�����T�m���k"�%H�\w��bQDAO�"i�
ʮ`p���&�*\�e[��KҊ��/���U`ʪ��H�!w���<ּ֘�dׅ���c�w�j���!�]3��Mjh7�z��}�}��?�j5Ќ���$��_PN1�6j&Z-�����z�v�����㞿�3�a��]�.�����)���� ����N�.u#Xu��>UX�8�ݮ���=P�k<����K�Z�6��0Z8HY�Z�6��8s,H�� ?ESr         �  x��S�N�@}�~��t[����XjB/&����
H�_��#�������;�2g�G��
��֔���(7��QB[ӡ��^�O����~��fY�J�oתm]��F��/�T���Dh�S� ����_m-�&�	�0�5���<l��+�У�"H4�DgXvi�(؎̓�Ӌ�T�����M�Ԃ2���2�Q�2
�Tͣ)�B�5cl��ސ[��q1Ό�����!#qI����Of�;e	'�bH��:1$��.�K4\�`���2v�X
..F`�L�ڒ��8�7�EKf�%���t-~Ɖ�o��/�����ߺ�(�1v�e��¦ű=`k�a"��>]�y���o��S@�L�0a�˪O,؆�����*��j��r��q�`��Ɠ���<[UЇ,��9~.�k�KJ���t�*��B�*�w[R�?} ��cW�����vc��N�`̉���=������]E)����          �   x�}�A
�@EיS�^Z3F���=�`Rq�҅�EK��z���� ����?I"lR f&�1c�^(^;Lfo��cYƂ�2G+�z��io��f�M��i���S<p3�JX��=��H���y߄ԄX���p���v�}u]�         �   x���Ak�0�s�)z��k�7O=���)�<�x�e8�^��(�)�	��F{�C<�!I���^t��_�y�%�pr���Z7uW'Xw�{7���?`��?��F�2"E��^BY��<3��2���T�O$�{�wN\<���\�}ώ�͵�dl������}Ö��Ŧ{����`~�A�'#��A�	��?X��0��r7=�ŗ�aY4�JڔZ?7$��>y,��.��      <   �  x��W�jA}���yTd6S�s�[� �xy����� ��"�%����w���/������j�53�K3g�����U5&ʉ��"Z[��G��l�O��f]~�;���8����y�g�\w�c>�i��c��g<��������/xr��8y���,ISL������'ӝ�L���f�ٲ�1������0:�2�t֚�yT'��J�~(%J0Mc4�T,�lT����̀�:n!�;�V�]d��.Z7����0�̌f���t�*"L�1jVD���I(
U�� �H�"�W���R��C�w�.X���D؝��
?Y���.�$Mŕ�m,��<���xz�yy�<<)��!����������	噫��!�����3�Y�4-uh��O�okJ�֔۩P6o6�q�vlA=M::Ai�N3�����$�V��>�Ah<դƓ� ������Ig|�|rqu�j�.�����.�*$s����*�;"{�l�矯w���� %��i<H�*����j����W�JI��f�*�Q��RRNs��*ɇR����*)�R���,�UR�D;'-X���H	���[��WI=��U%��o9�����R�e�B=��Q�͌���u_!�/;7��[��e��l6���߱5�>�|���$�5y�r��3����|��������}�����Dw�)�u>���C@��d��SH?/f5G{�F ���?      0   K  x��\]r�~N1�RE"	̿N�U��!g�(��-{covk�r��?/yIE���~�+�\!'I�`8� ���rٔ������˝�s=o���zQ���>/�sR_�O�zҌ��M�:j��椾�������G|\�k^շQ=m^5gp�R_h�몞�|R���[�.,������0Л�>�`�IT����?F�;�����=��Ύ)u GRErt(�aR�"��(~@$�V�F��?����f�����_�B�M�f��,�i�[�i�!��� -��6x@�أj�xU%�H~���0{��R�^,$�N}��ߍ[��K���  R7�L��'��B���	�<���$��w�4��<kA�d���K�8G�s������, �ݓ��	��* ������@��4>̱3�D��'4��}4 �Kҡ��Ǩo3���`�C�9r�CPy�c�W`y\�k�*`<�6�_є5��hx�W�+�#����7 c�^�)����Id�M�HH�Yl[X\���ܛ�X$d�<��9|N�&���'�̇��L���6&��0�wձHȵթ/�:�hf�����a�,��H$�Z��@ۘByb !?��S�p����䀆�<ּA$���
F�	ũ��,U����x0*r�%�����7��l�A���S���7��j٦�RxE+�]!��X��	^a_܋ ��`��J�XI$�a�|%U�D�'Ѣ�#�4���������!J>F�-� e�����"�;�=���qæ���Vƕm�P���܆�mR�ږ~�)�g���ƽ#�۶ 9��
�w�#2���j�bk�H( �l
�zz��W�q�Q>s�ǂ�|�vU�Fֆ��Y���m4DB�O�{����*�fe	Y���?PP�)Ȉ��F�怴�P��T�p��Z;�
��;`������,J������	*�Fu	4�=Ѭ�F���.����B{�.&~�z�^�ۆcx������D"j��?9n��{�����N"�����y��3T_��F��c���A��UD"+LhUsF����t��Uz�$�D?N�m���9$�A��NK���9�w���A������sK��8}��ۘK@͝{+�H���N��ؕ�9�ܱc)qn��y�Ů�N:���R$���tX����r6��]��T��)C$�rA�}TC�:�`O~��{f ���c��D(r�S�:vӅ�H$�N�B
e~��֢=���,� 7� fq�؟�u�ʙ�Z≇�H$��'&;]�W\QE�T3$p��̹CwM%�=5:&���f��r'芷�N��ޕvb�G�2z�G���>�m�Q�W������)?�Ja�M��@��G�	Q�Jo��F]��v���_���?�Q�K��'��4�&0�)��W1�����B���4��U �N2 �
��-x���5�:�h��w�M+��4��͝����-y~�58�$���Wt�!�8�"2'��)��E"�6����=G��|�"���I䮵Dێ���@ش'?��"��x�6e_��YP<��+&��;,��.Zv���!�æ?�n�"p�H$eH$k�*���--�&9���,�A��A-��� ��&Ul��Us"����m+:�ͣy��t�_�Fg���1�6�bE��jC$R�X?�Љ�	�qC�Tsf�O˄�kD�D�E�~DLi�8��Y�� �ͪ4*��q� �m�
��)��bh7��mM��X\�Q�/C�B��.Tݚڜ�8˖N"�Ā��7פ�=#	�����J�(�"�f��#�ǍqD��p� Zک�UI�Z&�%���w�x߯�X@46Bƴy~�zа��<��JT7��g�CL�'q�����H��@���`N�h�'Ź�ˆH��#1���[^DT��w��l��i�b�+� 6�<�E9��"�I��!������Y��)� �'W�ҿ�I$2���M��ۼ��������P�Թ|������6X��2�9��~ԑ\��T/�[�L��I�@�ҵT���B��Bd�'�xM���p��Y�m��ޘ�#G:����ǭu���+4ﵶ�ˎ��x��Ø����}[��s'ĥ?����w�';��d���Dd|6 ��w��.>�ga?��S��杺P O���鿽���a: |��g��f�!�Q�?~aEP�©���q�~.Nl�D��rT>6I%�y,!B��0W&�$"+�ș붮Q�����~G�_w�&�󊡂:�m���_>R郒xp�F��]0^�q�#���,��~3�]m��s��3D"+{���Tx���˴�~@����VΛ3Y$r<^`wL�43sF�/��)�
|ks�Z���ŒH��B�>��h>x��2�|߂ �'t+{�Z�1w�=�;�2Rn�76E�ڛ6D"W�Y����yI�`�UH�y@m�+��DC$��(�>}�<�xe �=4�yc,�D��K"�J�]���ү�d�����f�	%Gr�^�0E"2��HAܜ��K�� >�X���t]���.��5ln1���ؚ)9d�h�c$B�~��U����.��E`� ,&��t��e�D^PL7AMj�`=�#������d� 
Y�U�(��(<]����h���ӑ�m��(����襚"��ߡ1��6�a�ȯ���_
Y־��n-a�f�ډ��H�h_��3�P����@��	�gR�v��:��ڬ��R�t��9��/�%��P�(k@��@�kQ���)�
s��/	����a���zM)`�(@ݶ]!��Jk�0�G�W�9U����Ii�c�v���G>���w�\W�aLTkG�);C��I��m�no��*�4D�ہ��6���      2      x���ݎ$ɑz]�����������h��,����f%Q����s����g{8=�C`.g�C�dWuNgUWU��o$w3w�?�HO����L���tyfF��������g�Y�m�X�)o����_����|���|X�,�����|͇�/٧�?������Ŭ|`��ؗ>e��լ|_.�W��>�?d�����+�;W���?*��?c�^�=�ֿ`��}�F��8z9c]��W��_�p���^�?��Qx]��ߗ����;��;�����W>��a�=���̀��{�56�,߈�_��-�����1��/@r��qFJ,8�n���8��{l~z�~���-By�E�d��z����{���?w�S��5*q=�u��ͅ�8̹�u��K��[-�D�5�.[�jV������ �x�>���ç�����������͟g�<?��,�� �ϒ8���g�}�U�h5x�/qI��o,����Y���@� <6=.$��%���G��>l���װ�o�o����A���V������w��\��d֟��O�� ��?��[4w��ec3�o'����τ}�m�|��S���z�w
���+���:�^�} �����&��
"P�^�}�l��K��>El�O��?e�}��G�,�,���h�{�l��"S;��>�]ޫ�'L��u��F>�W[�� j�K�j=�-E�����>d�|!v��;��x�71�h�d��+���;߮l��Ya=��d'��#������a6&����qU@�����?�����lޠt0w�����a\�J�.�Z	�s;TmZ���`�+�*�������>��2�y+�{�2�� �T�f6���K�da�fb�.�&y�����_����@ͷ��eF����q�돞�Â6��h<c���53L�AG�Y�l��]�����C��f'�)'�0�E�싼��k����J(Ċ��Fy߫�����.�Ka�`��6�7>~zٵ�:�����=��Ī�*i��Z��5{s��n�r��dKl��9��IH/k�뚌��l��Uk�Td�V�M�m���|ނ-��?�Ǟ��������Ԩ�w0ID�/B�C�����\wv�13����l�wvV~Ɏ�b]�K��'w�ܞƶ�	�\9���Jz\� v���\7 �ߛ��U��j<��w����{L�����P:*p�� h�\P6���E���d���3�|1�!�-/����*����Sʞ��Kq~���`��1]s�|�;'x3�c�=78��������/�ߕ��A`ɟ� M�Xx،�
K���S�4�p�rߵ;\/ͦ��q�4����ch	3|'|�U�[�Rc�y�>���R��l;���^�q�9߮j;
l����B���`Z����?��jx���h?���ɓ�5z��7P�PX:�MD���Td��+Su�90����ft���b�$?�o_�pW�����j� �n����Xu�RK]L��l�0�qZ�3�2�lM��8�Vy"pK |��XF��OG�����3%�ŗ��z
�r-�����k�9X����* >�~Q4tu���!J]0t��QWۥ��I����ʄ�9Ƕ����==�#��/��/����A�EtF���h���8�Q~���h���f��턁��c�?���x,&n�����'�s,�L*_soKD���Y*VW�nܰy/h`�?��~��pb8����2   ���+6��S��&����Ya��1��YiO�yS)M�~��5[�NF.v�'`[�I�Ǹ<�t<�Mie�/G��L�N�&�F�|�;��F�8�m�?��U7��^��S � �4v�2Ǟp� 2�����BOn��RK�c" r|��s6��y� 5Ţ#�:��z
�S ���AP &�8
 �1b��8<
 ��$��^dw�@���B~�c]��?`2qC(�(���a�K%>�hz~rzɮS�/�Ҫ�K+ʝ��u��ϗ�`�U��f���<TZ	��
~E��J)���3u`��/?&���30`�<>�F�<p�+\y�j"�������3J�[��At�
C\�!�r��(������_�]c���˽��hq�tNN8���ޠdz8d:'C�7����4�Jz�����霌.q�KѰ��qf"�s� ���,{~�L�L�tN��8�oی�g"{p}���&ʜ�f$��z:�}��ߌ����9�,�C\|�Ԍ$��
�'g�oF�s��EN:�����,3,��S�r9�2�4���r�,<��%�����7���'=yx��aА!qkx`Mo`ei��7H2�[C|a}ϛ3A;M�t����M� �\ϛ4�%bRI{�L2��h���h|ʻG��������4��N�o�vzT��&��eM#��S�|@���}�	��'�����xTޣ�b���C\��a��z��c�+�<Vjb�A���JC�	�?�	y�t�Xi�,�չ��;��#}���g�1�#B�L�b���g��d�F4�C\�;l)2�L_�AEK(�9ªX�+u;+u_�_��K�QN�̉@��0�7�uk]�Qn'h�(��Q:@�����u[�)B�i��yq��{��!ʘN�!�s���(=D�!��(c:\�!f�����8�i,��8|7��(c��!���u�9�|Θ��`��o��)��1����!�vD(oLn��r�����i�
��;���ن.O����DqM"��6��&��Eլ�IC��r�~���j�d^&t����8&Xs㄃�Y�~��5=�YӬ�� �J��z`������ %��u�Rܚ������ce�Q��0� �k|�K���wV4��I#3x2�H��~��9��ٓ�9�\�|��{6-�8�_���� ��j�0n�_$��]Z��Nޥ�\����#|�{��=�z"�>�Í4�����s�cr�F��^RdFN<�L��&̈́����������~�\M}�<w�8���p[�֩�V塸|bcS�9�{�-�F��&m|^۝z��]�t��?e_^j<`E}���pM����!�D,,M����a�#��0��e-�4�4hCW�9ۢ7�u�g~������B�?����]C����$>���7B���9��1�y�*!?b���S	]u=�)u]wY>"<V�{[�Z�A;�SJDq�C�贌,T���������ш:4�8���k3�kC&_x�I�!I���Ti�/��,�g	<K��J���ٞ�8�f68������\	�W� S`����8+�Md4F�J�GY�G�N�9�W�oc��퉂񈂜m�@�����ӸH*�L��i\����J�����7���~��9��P��r��E�HO�M��S�M��̕�&�r:1O���/�/=	6>	��(|�P�pg����i�,G�,b����{lH��c�c��,�|r+%�lN�68������YD�"z����E4=�hL���=���]XĂ���H	���~�,bA�E��v���O�'3�Q^�^�H�����Ϗ�#r�3��
O�(E*W=:�˿
S)��\rT�y��?#�j3_t���)�-��#rsW[�dzS�k��$n�C(~�U��ZF�Z�9D��������9��j����r��{����!75�$�ChfO�W6��y�2J?.������-m|���9Y!�C8��V��B�Q�]��G�Rt��'e$�nR�\$�=��$i۶�(�D��FN��Ė7��"��"�, pEo{��/��N�D��LN�!�瓹'o�ą���o�+=q1>q�r�r��=������j�Ժd��5��������űth*#;�=�S�-L�1^)OZ�FZ�4�ji�|�5��P��=�&���=V�2�[������g�57>���	i'��\�Z�4�c&I��W=1�!1?!=�
zJ,{Ty槏�1}jX������	��0U�lޟ��ڞ��e~B:i,�    ���;M�����1[4�2/�=)Wn��$��/d`ж��ܽ��x5��p�ȨPb��X �1	{n�D���i׳ ��f�!Ժ��?7�Y.�ry���Y.au�m�U���Ĭu�]m2^�#�t��tm���U^93]������eՆPX���������j&��qmk ����d�ژHLC��ֆp��eK��0�7u�����h���m�#d�Du�mme`{�us��.M{@�МP"E\B�2��s������1ɕM6�¾�1>l������I��Iq��L�A��7�Ն΃��{g^�z@�R-�M�΍���ñ��p���X�U� ��0���H)n�CM�\��a(#�OXh��BLt<��J����-d2T��R�O�>g7�#�$R���{AS��r)�+���uv����p0Q�`�̠M�$��:���a|s�1�O)14��)]�'q#��4^����� JR:bKC���m�	%)���֑�~&�GSxi����
d"�b�uw�'��t�&j���7ON	)�����|rʑ$��th�)���Q�`JC��2
�T��@�g�lf>��C�CB�}\�j�Oo��A��y��#ǂ���C��p����5a����c��_F{���8��xeB��˞n�?�<.����:]���n(�|�w �	W� ����>�S ��]��m|���i���m��l��-������Hy��p�
%	��g>Ĩµ�?{�����%!���yV;���w^�1�Z����@��3�s�i�WkM8�i��p�tǔ�<M<���喩�ނ����I+Z����I��/PL�f`�a{S�$��ƾa�hyѓ=(z!�]�_�òY�������������O7QĖ��FʟN=1���z9C���Я�3B.lN*0�⳾٩�U4ڳ	�G����Ԥ����.R3�_�ji�,��?�@
�|	��@o�_yS�pB�~	��Pm�75M`�������A�Ю��/]���-���܇��8�͎[���j<���'�z:|����G�8��(X��8:ϔ
�ߎe(L�]�Q�'�0��UQ��QG♦�P�W�;�V��=x0����{����9���q�9xgŝ�O���`�=cuҌUA�J0t�gQb� �!�����YA�O��Z ��y��3~����<{�|/��0~�U��x�iy�o4Ư���"QK����3~��+ḫH���_�6Aί���"SS?�����i�ȕ\�_LGjշ����7�f���>���nv$�@�bj�۩�����*��6�?�'sA
�	��z�o`[{�{Zw�7#�<�����n�s2E�P|�����g�=�=���F�pe��)��n
о߸g��W�9���9[�0����)�����p�<,����L���`�:f;@����D����;�`�ГS~67&��V�n�w���3�3���I�p�u4ξ�DHw��!4?#�k�zO�{���� ��9ɪ���[L��7�x��'��"��9	��.�xU׃��3�h�f�TAä́7�f���-n����I���C����)=b��b��'����M�e�����A�/���C����| /t�q���W��_��P��f\-�.���h"��8g*m����8(�0���@��a5�w�� �gg�/ �����RŇ������K��.��_�:6�[}qEbY=�z����p%o���3|�¾3���8�
m]L~��
f�/d��
>[�$[af��X{5���{�t�Jg~�|�$MT�/��<��������p�/��"�h�W0*@z۟V��XA�MV=�.,KXx�[����`�X"�,�
���;�	ݕ-��_��N�5!᠍k��w�w�� �Y��q�<�R�{�F����� ̙�Ӂ���s�Ń7H��F'�j�`\*����g���a�3L&�aҸ{){����p2LBuc%������2L̖���v�0A����tq�ÊW��E�x�,�hjV�#��p����+��x��4 �x�.��d�\&�t�ǽŃQ�tM��u��)䗄42�j���(��L.�e�'�a��˦��E��9�hg��U����	3*s"�!���BJ��#s��i�K�f���	�ܩ��������^��&|�Ď�&"-�Z�X�x{ބ���+���ϛ�y�˛p`��g��V�����o&@�{f<��}��H[KF�0�I� �:�B4�&g��5����:��6tfl�:ױ�������#:�(ʕ֍x����=��~��O��h�8*�=tγ<���Rc)�t���=�?��@t��u�-�I/	�K����P�sc��C�Eι��l.��h�5��S�F�sdTg�a��I���:g/5�n`f�s�¶��IR�����,; �$��$��N݊S%zÔ�I����|��	f�l�9��b�1�3%>�rg�@��i"V,Df]q~�LÖ��-3��v<��}L�����#�7�{<�hB��$�Z���<3�Qόzft"�hBcbI��s���0�	�&��x����M�:��Ҏw��z~S�m��)�tEϷrt�l��bήs9P�#�4t���jiO����A^R��[�*��[��5��df-^ܰO@7>�}K⪵Zx25�R�tCO<���O������X��W�߰����_��;��	���#�x��n�!��y�����~�ަtN(yY��
��@Mj���9p�i�KRW�0�W�My���ı���=?6�����5x��8�h�;W�=��l$�p�;#mC1D�����t~L*ݶ����y3�����N(�kd\�\]�i�%�Ԥ� ��F�H�cuo�51x���:�Ĥ�諸�r�Ǥ=&�1��c�f�pĻ���I�4p�fJ ��Ǥw�Io��=�΢���x����ζ�V	�(�Ɗ�u�0η��A�,$C��Wt?�_|�N"����^P��_��v�)�jK����U@��#)����.��u�&~	i��-�P��9� �՟X�v���Ɨ�gM_	� E*�L�v}E�e6I��>�O�������� am�ټ!��T�B�6q;�� *I=���,PB���ӗ�0e���a��1�Kv%SJK�m��ߺ�׮��YJ&`c�cZ;�a��Nz$���l�9x?"�~������A0)�>�Ў�?��C/�5l�;��ܡO�p��1 g:7��vg��N� ngt��Gs&?ߊʃ�C���f��:ߊʃ���������ChO�}>��!��VTm�4RC��{lE5)kTO�!1��/���\�ˤ���7�{��=��x���!��fq}�`��Ll�B�I�3��ᠻIQ1kNcv0�S?�nRNb����n(�'X� [z�Аp��k�m��w%��Z*�M���I���s4,av+ܦ�:�:괶R���4>C�ԧ�^�B��e{)O��Gf������<}4}D4���N0��|��<{d�͟e��3R��Z���tR&�G�Y�5�=��QM�h�4/��9cH�=��g�<{TG�'��氲��@��pG&�p��'�=���X�QASE��ֽ�sG�(=���"Tz0ݛ#]l'���!Rz��Պ�L.�8�����̂���X�ްU��}m�pK���&���C�q�]���Rjk`p�e.�F��G���E�,����='ʣ�EU�E:L�*07<�ЍԈĨ�6�P��=��e,OX�pDp[8����9�>�
d<���c�ќq�v���X��l��=ƺ;a��r4����2�� �F��It�P.��ǕiT�P�]�=��q�	��ќĕq�:��J�
W��$.�C(,�.�W��d�:B��������pe��}i�j��LӃ�D� �q��`���L����L�4=���P �2�R͗�@�@�T�ԘXm=���P    ����i���]8��p�h]B�zd*�m�����i�����L�#��=��&�m�x��Ij%o{��o����݁�\iiCR��K+'e�^&a�����K��|�B�=j�/f���̓�'�r�j݈��y0߃���`�D�|3{�|]���D05�q��Ã�����.WK�|)��'�;�A2x��}gE��h�Nt��S7�J�$+�O�K%K�C�TJ���-�Y�)�E��LtsRC�����qd���QX	��J<i�hP��P�F�z=
�Q@�zp"(`A����#^_;5�'@�p��yp4�/�,�Ҧ����Q�)����R�������8eC�� a?�)�͉8j�b?}퓺}R�Ƥn�Z�!�P��=ʤnc!Y^3�!y2��˗h)�P���W��n�����J�ﻣ�P��#��}^�m^7�	"#J��X߸y�y�F�˘�ܡ��xF��Z�#�Σ�,�}��vl�B��c��G���l�̖f�X��)=O�yJ�S�������xm����$O����G%�~���ٹ���g����W�RN�V�X�/i����8t��R HZjk��� ��C|޳���,MXK3�����'�:(�2���@a����
���c-"�[��moW�g-w�ZDJ�}�'���ED\ D��BY�{(�.�ɓ�"O��^�c!�B:HC�~��Ox����O���S���Ϛ���H	�.C����z�(���+��Z#��|�%�����{��Sߎ�x�YLh'L��Sy]v
��.�ؖ=:�h6�рр�I���Y����<���(VZw 1�F��H|��4��#���ո��V��G�>�����V��"�~�D	��%`�^D�+Q��v�u	F�	��t�ej�
(��O�PG6�'���<�� UY�=�����!�Lt(U��%���_U[�����`R	��5���7Zu� wN�����)x"R-"���
�K
kإn+�����oH3�d	�`�rU��S�x��Ƨ��f�>gskӣ;��1�6h$�Us�!�ze�r�
��s]�"�a5�����[��+:�%��-���$hd�E�P<�,�Z������I`��"�_�g�R���
��x$gjHN�s0V'�3�2������9fb�.o<G#���ub��!\�,��iH�p�C���6�>��8M�A�!�(��1B��>�%Q'��"�7�,��Q�YJ ?#���VŀX�|6�T-�Z�GD����� R��ח��+Q��#����P�x�[�U�T|�p��0���V�Gfb��!��Ȍ��3��wJF�Y�� ss��`�q]Y�;8�M=h@��%z������Z�?�ڰ;�Ѷ�R�E�����D[�z3��ɥ��(|��>f��*�q^9�k�gҴ>
�B���[��kM�tB�����88��L�Ih�8���M�Q��Q�����_Nz���H���:�p1^tؓ��xM�f�6�r�1D ��AL�)���`E �E�4nv�i�%:�k�W� g鐢�� ����q�!K�s��A�9�@���#?����3���^䢩t$��j]ܱ���Oǎ&���sX�m���#��x��j� ��v�<�݇M�h���3���s�|�?�a�
��փ���W�-D�S�K������(�����7�����'z�$t�j�3͋>�c�B��8e/�4������	[yX���vUe�3���k^K�0Aq½�l��j��DgzhC���;��ǰ~�!�?Y�ʴ�7�U���:�c봊�m���g�o�}q�j�T�R-d�����.�o)]C8o����I�Ze
կT�KJ'O���O8��%u���W��E����w�o��~e�e9!*�H�fR�5(��@<�z�2/\~'�^WV�))n�HJX�6�����K�w5�@��S7�0<�cCj5���P����M������a�%��Igb�	id�3�)g$4�ȯ#�n�j�g�t�i�����1�f����^;KU:m��/�<t�U�2����Ҋ�{s�,�BJ��i����2�c�f�2�?IF�b�18d?�K�v5��O���Bt�+H�=�i�H�.k rÿe��RE��N���5:�(!�x�ʭg>��e��fplr�a�oY��Z8ǂ���wխr�<����l��K�ɔ��R����(�򞭭Pr�+�k�Dz�mG5�O�Lmy|g��D�	�U��NG�7�	n�5,�����7�G�7�_mJ�n�� ��=�o$�u�v�܈�H�ki.�����������Md�Z?���<m�icO��62C��vE�)K�g4���J"�I@�k��w_�-�j�g��'�0g4(�Ej�N�cg��Vl��S�avc�3���M��ąa6��aŉ���1g4(�%jm�^��1��{�F8�͔����T�ҺL�Xt�z�!w��Hh�)�fHt����uxۅ�6Wl�0a�o#L����f4�)�96$��Z�3W���^�GOLn��MnL�M)��KpK�7�'���삫�UI��s���D�� cSANZeg�� �m�4{�2�q�\ጱ5_?]Y+������<{���9�O�Z����'(=A��'OPN���il*O��rN�9 ��L"��&�)A�<�z>�xC���=~�����Y��[/�<`J�i`0O�%��A<'9'��HY�����8�m����H�-��WhM���{��\�ݴ��d��팑��R��P�hX&r@��ټmuA�~�����lr�Wu�-\c���M���eZ�Ԑ���dz7P�ѵ[D�yţ1!��ЃB(��>��Ѷ5�L�ZA�[�B�뎑�B���/.<�*�4�h�\H�+3	���Y�P	ʐ�4e�RLh$�t�9��]A�q��9s:�l2��cޝ��`�?�nՆP���C�܃�+�+�py���&'�\T��I���4���y�͋�����-��-�)2�~#]����[*��󖞷�����F`�\ٮQ[fN��4��{�'��"��İP+6b��0{��%���zL�}2��0�	u���31��&U��FS��~��I�մ2ê��%R�˘o�_*o�I^�O��C�j�
6<���ڪ���MN�i|Ǵ�����ee��(ѓ��X�\�+� L��l{!
f�����V���:o������� �-;h"0�?�<����
o�*�8)0Ѐ��9�+�!3$m5L�{k!����
�P�?l ݚG�>�*��[j����å

��7�s4�e=P���Fq�����"�e#@��md����ʺ�)�-�&�7R�i��۸�6E��5��R���]#�X�����e����T�<�w1k�A�K��-������"�(l%�4 �RZIf�E=��3ͭ���@㊶��o�?</U��!��pƶ��W]g��W��OH �p���븩��r$��zx�����Q��"�Ʈ������`�p�ܘ�<a�<�S���\rk�qcu���H���Iw�5\8�*oߍwg�q@=��$l!oc�)�a(� �� R�7"��)��Sƞ2������q� V�˙ =��P"���������F�D�ب��M��op�t�q@��A*�^�WH�:h|)�ԴIJOD���%��@UƢ�wr5ۻ�&@�Mв��@�@4�j����-�c:O#T�b_<{jı�4-	ϓ��C�TYX��M^`"�qأ6��x:u�tjH#��D`��!��R��|���AHa���S�)�#�0Q�4�N��<O�6�����T��'P�@�-İ-cK�)��Q�Ж Htxm��S��B���P�B�
�skCh�N�B�F"�B��*�E�
׆pŦM�����)T����S�A˄�t|Om�zlĪ���#��܃��W[!�4I@1{�RB��^?��.�2$75t���-:��/�5m�Eƫ!��o�5�b!ttDmɐ�=^�waY_�u���W�
�R����%w���e���K.��̪��9[��[�x�w �7    ��ƴP��"��A�x&uk�	��-��[��5�Q���G�񦥥�OE�T!6�B��Əp��	��~��݈T��C�/{�#	,��^��C<^}*x5Je���N	��vx5P���$�$g�{�H��h%QR������Y�L,H[[�65`���\�l�%�����+��ڵ,�����N�6��&dԆP7�.?C��30�ߣ��i���f�-��~F�_��I�}z����mT�m���.dEFY������q��1K�iէ�ą�Iz!���!��s;z8��=��z<��+��@w���o@r�i]�\3)8�	��rJ(*��mEŸ�v4ڑEj�����񩗾3p7�}N�Y�ȧ?@I�L���6}d
�-��Ə:��^��;A6-U�(�(5���'d�z��z^�īmr@�ufR6�
��A��d�����LLm�&��vI��7�p��x��\�U�j����W�C��x���Y�+�E�uPq���7�1��4ӖUn_>1щ�Ly�&y�(y|A��i�m䏮��V����Due��@�>�?[��������y���d݄����`��)جU��}}�hUa�U�a�Qr%q|�0�ք�:]d ����7��fT�����5`��u{_�_+|�4���Y��G�n����1�����rgI4|Y������\�ވ��{J�S����Q���Ǫn���j�0���8���4��J�w8�.�yb�^y}vJ]����$7��p�!��D>hh���?���|�V����$��Y�)\JHÙy��s�;*'
�)�9~��saaW�J����~���S�}��	�v��6�д�ƫ_6�(��X�r��Л즵�@��j����ӊ�Mk��%��4�E2j�i@3��Z6�����:ml��>~t'���@[�ύ�]��rLd� ���S�
�1��R*�����D-��(=[�£�Qw�F���$� f[�ok�]�u8&� ���y��H����틴]0�,�ﳙ�l>^[��=wj���ϛ���:Y�4ɶ'ҕ������3�A�h����e����&�Q�^a0Rվ-�y6�g�nZBX4D��R��a�\g{����~xӠ֛�.e��7����Qd��s��k�AuM��+T���G�B�ƃ~�4��mfI�v�g�,��E���7�s�ʥ��~Vld�4H�m��R����y���XI���Bʼ��1
����K�J���n�5������%���,���
���e ��' ��'��hc��2ۛM����v��B!��h���d($f��E�4E�T����n���om��Lg�Ob�2.����Mj��������M��oC#B$}�t]M^(�lU��nC,hrAAjHr��c����P���R?�9��5���;�3�_�����O���7T�:��0��sU#a �j%h3g�{��O/i}{��afBqn�3"?V�5�+���$�:5^ݓ�E����W�!4���چ-nW�4,DE��:*hH�P"�}�v�����(�͐Vvm�!Y3Z�d���It�*ht�p��D]熰H&���zߕ8�;gZ^ȳcIti9����9>�2_	�L�����k��6a�n���~�u��h���C���lY_\�,�z\$�nōT���x�hR�B'4�C(Uc�K2��!p�JC-,RP(`����n <�⻯���x:�ځɰ�O�)4�|��ްBj��H�]�F��<�/֟���D��Ls�R�m���i�N�wۜc-`+U�e'�!�ބ#�7k��"���Y�U�uK�\pjUi��z��,��5�5*�%	�������0�G��-��x� ��'�.Sz?��.q�I2xꑇXv�L�r��lB�q#v���~#����=^s2x�/n���s2���*�c��W9 �qo�����.e^�#�䗪��A�8��a���� �C"7ڢEY#�	|��$a$pf�=��L�u+���X�0�p�B���R�C��}�-�sV�!��P׊75ge'ƾ�Pv���8�N)����������Ɖ^���*��G"�8�2�l�߳�j��.�@c�t��Y">-����K6���"y�N��`�ku�/fO�P ��I��Q�$��[~���ʆ�!W���}�����Am���*�هr(@ �2���;�p7�"���A	�$�v[��*E����?����_����`��Vj	�Ɗ�T��a0��v6�B��[-���%gL��8�3�l�eX�Ĵ�-�y)3+�N�b����`����j�+���k��fݟ�L�3�o7=��߂�K��
���%�!��_2�N�B���pe]�VB ��
�tO+�_�l��b��B�;��Rz���G�6�v��{1&6��/�M�^��k�z��0����Bmsx�^#�Q]߃�X�����"�q���5��|�.�������B<t���
�A�������P�	q2�dj(�'��Ra�@@�;A����M�$�V������=������a��M��ݻ��:�"���:7��J`w�]((�l�#�O�Ժ���%�#*�K,eg+���36{R6��>'����÷����!@�&����j��G�㭀��D��E��1M��u�h��v�b�F�_�ZyY+��-=�p�ڍF�1��=�%�
?]퐕b�2��hIɔ-��$f2u�E�ǡ#š4<�]%a��p�]^��#Q��H�G�.�FV�BY�Q/;�v�%�1I>�u�{����s:�*TK;�m~-{4إ[.�R&s�L�6:71g�id-�,-0�{J���j�������!ūoѫU�!�D�@�B0c����\�{���R�n{�����e���\�%�:^�U(�H6"$��n{~g�r,�b,�R�c(�"�{�!���R�IWc�V��^���EH�#��>��G;V�Uk�]��IF�?�r��j�F�}�|,X8nf^�E�1�&�F�e1ih;L�s�a[ץ��A��n�U�:iU�$���
�6�7����to�p	��6=aQ���8�)�]�m���&���5�����\��<@�H$��%��?�	?H9q��(�<�|:�:��B)��TҀ��`6w�����>N�W��S3i>'̕�%[ ����������C���`��RG��̜�����Z�������?�����:t�
CY5)ӄ��v�:c�R�|��bQ�q'��9�s�O�x�Z�3�����6��e��ۣ7..*UA�
���/�����7��k�^�<�N �KHd/�h����S��ku����Y�i���+#B:Q*R��2i�xUG7��7�"oa�n��]�����E�(q�w��j�����/�լ����+qy��U���,�2Yɕ8�>E�N�#ga����A`ɍ��^ݤv�֮v��ލ�{�n�d���*�:5�y
�����q�F4gj��٬����@C�mٖP�/��"Q�&�@ʋ[G>������f�r�kD����[ź��o��ٿ��������w�Q������<~U΅��J�*|���n =i�.�*P��-�r�RR�"9�W�J�4�6|�}�T��u�c"+i{3����B0��r�g��,f4�%�ԸMBt/��&��"܈�""	E�s˻���������O�)CVb�<��o��NA���w�]Cõ����U�^k��&Um:���U��3�OKXM�ak�i!'�lV�+a�5uw�N�ޫ����X�pU*hRI>��f�&͕�$ ]��n3}�άe��#��>�˩D���X���h�2J�,l;�P7��H�[
�B�wU�?�C&�n-��u�X��:x����ϥ������O��ُ�7ۜ�a��0`�l��#͹t���џ��<bu4xQ�����o���)��;M��~�L�4�<�ZD�G�Z�
���^6m�L�K��ou���ρ���"~���N���@��+    ۽~�$'��1 	� i�@+� |Β�e^���f&���g��UA����г�ejd7��~������� :*e�d�����!��z�QS:g|���P�}:��
�� ��}�gU�E���YtO
��t��$���k���T��X�*/
]�.�R]3�������7?���_��ٿ����'��og������o&�xL�MnD��H�>97��	dX	&]���:1��(K��Q�&k�=H&�����?� ��Wl�|	����NozF�����������(�B���E����^�w\���Nt���+��<rh�B�b��� 7cXF�>�j�7���r5۠鴕b�tȫg�m3'5�����%`ne��`a��w�(&36�K��'����Y�ŢP�1��ƁZ���ot����U���C�F�8�:x~�A7�4���Q�A,@� i�Y���w���������s�Ԯ�](E�#�_��G�迯LA7;@�!����'i	�z�P�('8!pR�!|GAL��q���6*��k��ܗ�)�oiљH� �3	�W�ID#W�铋$����?�(�bj������/ё^���l\��ר/�=ޗ�9$U^f��I��O5���
��A׮�6J�"�5
cz�#�|[ݸ�t�j��#��M�wWXHP^�ޔdKr�O����zI��\�K�bK�w��ƕ����ҿ�ޠpc�] �V7yͪt����Qc4J�OKx܁Z�B������J������/��P׸V�9N��<�޹��=����1�L6Г��afj�4�o��bfU�af��3���� :2]�a�
��^/�6t����E!�>gM�.�� �V�oky��F3���X\E`����E�:kpm�!����'���jhP��,� ��f���r03ha(�,��+8��'�ڲ�����~��_Ws�_�i`�/��*]A*V��1��\�Ƴ���A�u���y��yz�����~@��i�/.��9���؍{7 ����"AW�3�ڭ@k�-	�o0�จ�&P����|ئ�]���
z'ҤV �V)� �,k����z8`e�b�.j��M������e��!E'�rj�|ښ��k��@�T���V�w�I#��Ih4	�X��_��՛�C4͠�˨=.4�c-�"�q�$Tӏ��x5mm3�9��C�AB�8I�t�8�t��>b�Ű����� O�IZ�tI�֝+���^^�$�0a����Hm��>Of±�2(��̢_8Fh,����=�j�mWYӮ�ݲX�b���2zevyӷ������].rr(�.���<c��^��C�qB��NJr�~�3�B�t��}^M��xz=�|^���AH
eGB"����%c  F��>��{;�C�)A�"�q��_�Գ���Y��ς(���_�=��N�NvIu�=#�E���F��ճz����bܟҰ`���L&U9��/�����!��uY�'~+qч�Z���F�����mU���͚w�>tm��1���rGѳ�JQ;�F��H�����Zi-��i�A����]}�`f7<��7,�^�\K���ՠ/j��xz���X���K�����3E�8�Tq����K3�~��Y<��q��-�bfOgIi�=͕@<�҇��PUZ(z����XT��8���ΒѨR��Z�,���[�T�ċ���F-�E�:�4�d���m���dt�K��2-�� �т4�L�a%Pq�&�e� MF;�Y��o��dl��/2X�Gޥ�?���4+
�Y����g��5vD��-�[)�m�h�G[����ٳ�T�� m�h� +�@���E/�#A\����cq�Fe/���%�Q�<Ps�R�KM�o�E�{
��il"�0H�N}q Ur�&�#��Ufڋ ��-{-�['(�}[~sr�LNc2y��c2'��lT(���T1���B`��1mLP.=��!�LR13G'��=!c��!��JNC*0�b��ʄ!�À�ʎ���#��#�������G�����B��ީE!0�r��p�x{]]ІE R������B�R��Q������1��~�&������PȇB�
�H{�L����Gs�>�!�xqᡅANb�Y�IN���g�s��ɧ�N�Gw�����2�Δ9�{$��)r����97�I:Y��e{���m� v��ם��&�꿇�x�T��:������i��e��Y�l�4R�9�x^,W;�g�`������Ϟn�7��Q�DMڋ�ž��k�=\8Ӹ*�f$�oֳ8�Y�x��i�9�nYCvZSg'M�҄s�΄�Z�E]HS=����������\,�����:�c����0lp�K�rFs����Ӑ��4��# �����L��!X�� ,8}� ֣�Ij�c�@ց�Q빜y��ڴ�ȍ���� ���7��t��!�3Ld�o���$ s�֯�\����k��o�.�Y�4)1T�Iy�f_����p�W!�pA8%��#��T|Y���Xދ1�wx��ǀ#����kC�i�6o6�����"�j����'��&�w�7���������Wy�s\�i0<���{�"D�ۢ��xI���Z̕H���O����tBd!��:�	2e�P����x�ll�2�kC �b�J-�ظ!6����cP���:Y�=�I>�k��M�H����?{ڟ63�@�QO�.�����]�׉~M��O����
8F��1D�s�џ3�6+���nY1q��w�D�a�uح-�c2�Q�JG{[vL`U�0�ݡ�u��p�ۈ��Z՞�* G����cg{�? >���0겋jC87��M>�v�枟�3��3�������Ji�k��|7��9b�*��B��M���6��2jC8�º�HCi��պ��cN���4�`m��&��Ԁ���DH&��m�\�f*�� ��0rG�-�����uZԬ�>����d�?|/�y	��Fl9�JЉ�����wp�>#�2��dCZ��*��^�K�����ѻ����0U�	}��-i�FQ"kE�ی��d��P�Uid&��,b�A�FK��y���\5�\���|+��%��;6����b�ğ���~Zs��?��o����M��Zv�*�߯�s�h`��»� ��Y+('6�(�e]�s�!�b���z�l����c��^I���doq�#�
�L��ɥ��%�q���9�Fxji�:�!�!_���3'J>E4��B9'/U�K�3�4�E44��J4�����rf��Ä�{r�s�䢞]�����sr3$���$�"��b%g�Rz�܃�PQ���-7�袃����ٽ��ThL(J�,=�xx����z�1�h@'J���x$��G*N�y4�n���H�8uL7�V�Y��	���J\���� &@3�kD��D���}i�u����L ו�Y�_Z��=����v�"{@g]�J�E����եb �w��>W>���0��'�06�� qf�q	�%�Y���SE�c9�C�~ۻ��澨�U��k�4LGʂ�^~� �y��5Z�c�s�W缯�7涆�`�+���S����|���Mr>h&���8U���u��#�&�oJgk!Q�}w{ O�}BCr1Br)�4��؇-�ą\�hʽ�N:��-c��NCv�ҁ|�s21�]&�N죱Z��O65%�Ӟ�@	ow�a�ʥ�'6��pܒ��P	d��`~3A�g�kųa���G�����Ցа��τ��=|�+����[_κ�`Y/Jj�����Y]{-��ƍ�H���g]B�w�|>/k ��*�0�-����?ل�o�Rd1�z.g:��#Q�v����H������M̄{ĸ�JT8�2N#m�dMC5I�dmX�<PVȳ��j���e<������Ey��_����y[���� W�b}�V}q��o`aD�I�����al���=
+#v�[p-����#@0���
�>6Ԩ�@�(�������x��;kX����O��d~��%4�S��n�t��
��~ɽ��� �  .;�\%��cl[�M�Vm�"fe&ۢk]����HLv��Z�SU�kp]��#_�$��֫~b��7�B;EC�+���-�����+����0��{ٶ>�M�d�J�K����Y-��G��f�,�;hٯ0�">�s`�z޵ZB�ȯ�k2�4Jt��/AM����/]��A��e����������O��O���;�>F�
�v�Za�u���^��B�z���o�g�u�
���3���AQ����=���hN����>#�9:�3ɕtG�W�B�W���ȼ=ڏ=:��;��l���h}�TJ��i��ϗ�O���e��:n���@M�j��iO?���4T�G����)��ށթ�4��rRɩԩ�I�p�ԩi� j��iX�����C�g]��#��:�TΔFB�T��0��O���l��8ʝg��4��fJ4�%��jSܦ3z�4� FR��&m_m�)�QR�$׊Y��	�i����𖻯���s��ᄉ��f�5�W��O�:�8G6�j~���8|��4eh�p]4U��w�����o`C�h��� ��R_�M����Y���O}��g�qKغ�f2���k��9�B�����ʵ��=~�B��M�|R|`2ʹ(��G���-|+Ֆ���q�X,�֚��?�JI��Dg.�a����� �_��9��Gy^����w.GЅ%�n�Q9�
{/(Ӳ�P�z���}R�xN3WU^�P7���g�c�����x�q-C���s�yl�8K��u8g��+s����Z8`�=eV�Ί��Hu;�T�dB�$1�)t/м�=(�[����Q�Q{%'�����҂��s���b\�� ��,W��La�$���}W�kǏ,�94# �2���Ad���RF���B�D64ک���㝀�D��k�;�9�Z���x�K��E���}�9�g�J �哬�x�LP��#0|��Oq�6��-q����A�Ƕ�O��T��jQ�����[�yp��89� 瑒��׭;�f�M-��u�9��汚��X\Lnp-�YN6,��ye���b'ג��;@#��qwW�S�����D
:����^RZh$�� ��Zպ�T�>�����nk�>����N�*�_�H����d���FC乂�s������]Bn6�"~�K�OZ}����w&��C�ٜ�����'�"�r��!\?gN|�x���sW#��2��g��g��Pr-&k��5z�V;w�����t�H��
�!�3{_�?:�?�A��v�D�vHS�ieԧ��'�r��ӝƳ��[���*�7:u ��G�V�\ө�����5βoL�w,h��p��|cbyOGv��e����x#��b�+0t����{��މ���I;�>��Ѹ1�=�G=ǔ��N�
ow���A�Ml�:��H*hȮȔ@�+�X�6�!m�LR��{�j�����,<��C� ��S��)z��B��0�a�=u�N֎��'�b3�&-��y�w����N�v�Bs�&H�~�@�>7�3�����F��2T�W�,(ꠚ�Ƚ���k����%�yS���b�O�p�9Z��XU������4j�E����M����/�+���ny�u3qA<�������ǟ���ߔ�^��3�ܚD6�:>+����S�+p�>ӫ���B�h�Uݘ��=��[�I�.خQ��ȷ��(���ɸ�p����}_[�5�ɨ��mź�T���Dz�G���	>�ڷ�:��hv���m*�c�y���P�fvt3̅�3�$�)_n"bzޯa��=3�"j�)�x��������ƀ*q(��,�7!OfUƅ��`��Ee&�;V�0Z��Pg\G]Z/g��{��)jUq-\PS�e�@@�[���K�'��<��ki-0��4S��&})��gz�[Mض��UE�܈�ոM��a b�8D<�Dt.�8�ʍ��QYb�, �* �B���; D��h�1��!^��}� `Jim�!G;�A���3`��6��6u�i�W�����ۤv�{��#�#p���WB����W�/=�K��]�4�!l�'H�����
��WOL"�i�5T�kh�8��\��0-�(��hE���f-\���)�7q�}�~�G��M\��މ�4B�a�p}"�Ao��şq�R�|��=��;u�_�+	��_=�\�q�K縀hb!�"�Ae��zj�=G��업C(Z����2��B.A;\v���23ಹ"#Q'���{jCRG�-t��!Kq�<K�r�[��匄����(��g���,a�>8�q4WM,R�9n�C���e/��Ϣ��B�`�JcƆ��V���s+k׈�4�J5�ګ���C�Y~��_l0�M��ݧ>�:��u��\%Xp�ri��?j+���[B2^s��Dm��h�W�w���v�;�L�ˮ�����ȃAF�lM=~}���p�Z����ؚ"4ͭ��'��[~���_~��rSi3X�^_��Į�t\�� 0o�8�������I���.��h����n����kR!�C(�6�M�Y�gآh�&��4VBc�dV����.���S"R�`�����|�����,r���w&-_)�N���;"�BtC�aGM���wScx{ծ:�c���L�����C6t�0�՚�`m\�^C�A�qj�k3�c�;�3��@�j��`�H��K����ve��O�Dq�oq����@��t/ބ�zq$U몛�*��34��Y��n�|�j�~�L���y��eî�՗�(,	�Ѡ������>$U�W*@x%4I�U]�R��v;9p�a?p�m[�zfWMo�}�)�)$4��Dj���zz�y��>��G���'4,�T|�HM��=6;<�k۷w��F�*���G`5	c%�Z�����2�fG�,p�u����	R��I]i�*ɔ@,/��s�h�dx��s�._���?
�Uk�A��f�#�z\�S�&��8�F�NV9���Fo`�|���X�3|��CP��������%|��p^�������6�ѮE����\3�l!c�0L�f((�t��Fj�F�N�E�g�#�Í��x�t���av+�G�]�~(rJ�i����{:��U*�=�[�M�f�E1��>��w�Tʞ�h@�IѤ�7�w�ߠ�	��� h�LQc�|^8ف��~�6K��C�*�^�sh,!͕��I�	�	\5kN�[����m�G��cY�"�4N5��4���!\���F@�7��q���yf�|<��㼌.��B%��e��]�����������Y6��q��[x/��G�9��^c��d_Ujo�*ׄ�^�-O2��4?fta���iT%K��m�W.W��ָ醨E2�)#b2�l��F�����F���E�e4���jJ�l�djt�t([(W������Ͼ��9�}!&�f��㩼2U����e��?��v�������^����:	R%ak&gwF����Qd�td4�eJ��9�o���/�-�t{l�m���Th���h�����~����œ�+X�O���ŵ_r�4�C����ý(��]��]����!\���Nw�K�S�A3�%�R��_��o�s�{���.��(�+.���L5�Ď�0�d�w�L|�/��Ȗu�d=H֩�w봒�P������W q= q+�`N!�F�Y׼P��*�w� �����=���-p�с�/%�- RB?W�㧚������Q'_�Ϧn��.�b���ޒ�v�j�Jc���������`��;CT4��1F[@���q�P�k����j'ܷ�;��zAe�?��?�X]���F���B��z+�~��;����EVHW�DC�	�x�dQ�0�C�����?\�Y~5FM��4dC�������?�i      (      x��}�rG��s�W��S�5��B�~(���~趮������jii��*%.��.��YD$�_�B���=�#2n�'�	&�q���]�n�2�2Wf*ӥ�3Y�yߜ7�s��9���Y^�oN�����9�_>h��g���������f	����ry�� ����~����9����@<�O�7q����u��<Κ��k���:�z�W]����w�|O��os��4S��3��zOe�4���s����7�c�4�{�_��p"o ��f�?��^5O�aU2���*����3E�5?��|��N������W�P�#�������o����'X��@�2�گl{����.k`��sضS^�c�V~�O洹��q�p���FTk�x���e����rB؎��_��[��Y8Fs\IZBZ>��!�$ ��_�J?��{7���}�������Yʖ�N���sq�ݰ���V�à ���q������f��t>�x���A����O�A%Ϡ�3�p%�A��J�3d�}/��O(�zF�>��f<�ht�$4L4ef����<�/��ei��ؚX��+/���DW�i�SJ��u�?p��k�x��0<�>���/���������ϼo7	�/<�!�n607>�p6�8���2��p
^&̨�gTv3�\�ROZ�S�A����9��?t�zS�s~S���N;��%����>�:���S�X��5���J��<Q�i%�D&���4 �� oH|0����Z�����VrZ�i%J7&�B��>��3;�����WO+-�9���	�m^����:~1���'��0�sĹOf£���*#]�,������⽳����1�e@�����j���:��2[��y�
2�~?A��*�����a�o`���`.��B����kJ\�34Z��}��k6n�ۿW��{�~��вxխU��R��Bk�%��?�2�"8$EpD�ѐm������+R���s_7��	��C��XE��5�ŝ�#`��"�W�w�Ϳ������r���E�b��N�1�7���s����cd8�e�.�-�7n?�����o}�0�,3�4ӠI5����iK��(x���{���_��q�?���ik[��	�f��0	�
�HX����	�c��[��+��`��J�_��5A��Dif���mm	6`���dU���3��ã�1�|l�4�h��.u���vV��D���.���9���o�`y�?�iBx��=6���Yȇ�H0��'���6�b�?�?Am˜���
X�*°��{szy/��
 ��[�����V�;��p�Q�$ޅ�jשg)��� �5p���ʳC����9q�����EkD��,�:��:B��G�%�,���_����x
��)�ȋ��*d�g~�9 Q�H��5�}:�mC'=�m��߼��N'Y�	�dp�Ђˌ�x桐,F�%�X!���G�NѼL<g��&Ҭ@�g2��en^v2�i�N8��R�2i�E��1��w$��CxA�z�߂��w��E0�����K�(d" E;�|J��Kr�����L�t��v�ۯ������bR��L��y2ǖ=���i��#�-+��Ks:٪!"Aw��Y���s�ҝ����k"�l��7AV�DjGP�f��K�Yɶ�շG~�2	�T�L��'�>x�x��Z�~ᇿo��F ����Y{S�G%x"Ѧ׀�d���Y6x�Y��'�(�h�pp�&�"�~�5G㒭
ع��~�ΐ�g�%����G�]����}|�r-{�.�G�<W���J��D¡i���J,���x΁3ལN#�ȅ����Y��$���XZ�b�0YӤZ"��?v��gpLY�,�k��(��ܘ���Y��Kj�'U��tj�F���>��pe���H!<�,zEx$��S�k	�sk�Jw����3��9�.=6�RՑ\�����8gF��o�L�Z愺�,�MIw#���Veu��I�Y�j��[�\�X�j�STkZ�\d&�B-aB�I���� ��@�E6������>0?'h0��L�$���KJ�)-L�����4�h�1��A��{�X�K��o/���}B���M�$�G*s�'�+{뽳>�X��
�#ϣ�誋w���g�9���p�K�5�d}L��5>8��� ��ԧ�,��9��Zx���F������.z�W8��3N���|;)n�w��Z�#�8ט���S�_}D�Rg�����B�|k9%-B7y24�g	�D��$DDn��eU/e`�և�2Gj���W`B��p��F�v�G��r�s{G����p��X����#JI�6y�6>2 U��= �3u����j��d��w� ��P�s@r�՘��`��E]G\��r��-;�Xr�I8�EqY��,0�mG�~eO��K�A;	����73�:e$�ї)rVf�.\eph!n�T�����E	V�8��n㚅�=��_��VRH�hQVuV�17�R�R�ꡬ���NV�N�DWvJ@���e¾�T�^�6�?���N��'H��n�����I�U�R��lxm��#[p�c���H�'@��ݛ7�<ȑS&�(��xѓ�07����g�I~Bߧ�P�����9�d�#���O���L���h�h����;>�U{����'�Z��y������~׺τ����8��'	>_#�<�D{���V��& � !6����񘱳�y��kV?,�ʺ*2��V�vP�M�#Z)Ӑel�Y�U����*G1�|�*��T ���
���7\;��&�\)�@�,`��]�8y>���eN�Ҏ���pݖ��LbD��
��᷾%}A���h1G�/�����&����|�!(G�����P�*z�r�WpZH�F�&�:�dL%godW��������r��Iu����^��f��OFW�����+��;��C�w��h��fR�a��Q~���
�RQи���a]K�G�ǼN�� �rd�+�a�,�B��w̯���e��Z��U��`��%J�����Jǖ	@�K.M�r���RH���V/.v���R���H�OU�jR�p��5>�k(91�k�EFGUM�,�&y��	Hdˬ��6��.Z�]9��p���P��r�c����_�̘C�_ƔOR]��ԘZ���뜯���s}gnRo�V��\u�����c
�q�Y�&D���F�*�&u\�x���ᘘه{�c4�p�$�g��(��	Z�`��o��$����[��´�2�[�<D���)��R�d#��������rx�I�lD����d �v�_y	�.�$^��\�j�/�JFZ�-��r	5�a���Y��|�}D?�֋�����R�'V�M�y���%��
Se)h�-��XB�j��\psZ�e�r�Q�Z��1�8�L��� �����Hjũ���yB����V�nd��(F`��������e�9�����s$����a-t�jG������V+[es�"ev�ny�1�t�(P� 9���!�I �9N�r�M����q��>*�iU�Ϸ��]<����k�P4�%�+�a�5<WV�[q0�d��$b�2S�HM�%�h���`ƞ��d�(��f�;����:�N�>B������h\��f��j���?~�����4�����mMmv��lCX,\�k�����Ii����u��Tn�!�����z�=Z�a��/L
6Y��ΐ/  �#�`\��>ꢸ�4	��ȭ�k��BCs�Ӏ����޴f�簍��-r��5���h�)_�Ek�p�I�b���n� �5�}9UV.6Lm�?��I��~R���s �	�Ś�
�
�;ht�F�X�vt��qU��3�)�p��Q+�e3���)�u�z��ɔ��~�gC�9�`��ڙ���et7z���D�M8�A[��F��cR�'�rQ��+�/\����P�k������v����6B�a6$h��[H)*���R7Q�C��/���Tu*�!im�!@�k����}��k�Td��ɀ�3b�N�j���    b����c��o���W:Or�9�*8�u ��a�2q�҆z�6��7�
���"H���r�3)�3�ю4Ƒ��jU��ߵ�S�2��>}�
w͎�\���1�">A�I��_�Nfd�22�f*c�O}��m�F~����U�<�W���yx��<yO��T���֩�M�"�ja��)����ɔ�LF��9����S��pD�es=d��y��z2S< P�	�x[ȖiQzX��[�+�;#=v�qh�_{W�)GSF�*}VH�M��¬��� ���4��Ѓ�s��}D��)gy��$@�2�ǀ��i�S�������[���'7N�/9?����*Ğ�ա��ͻ�J��,���`�̃���:��a+grX��a�HVY{k�yl��$��Yݞ^U���@Y�YQ������^α��Y�r�R�-��b}:H�
��Z@U: ��|�i|-\/�%ӆ��-���K�V�l�[��V�eީ�p������L��	+���P�N�V�P�޶�����s��s�|:n�	��m����MD�2��+���<�������H3��,5��n����M�U��(Z�}
�[v�H[�-Ι4#������%�������xĴ�o1]R�%YWN��a���;(.�߰y�ޘ����Mӱa�$B�Q��!�J{w	�uBy߸��1�Ër�����.LB<ԗ��=-^���¤zXhR��LJ�ܧ��uQ�-`E�NN%a�I-I����_C���F��kl�����D��ܫ�I8GG���K��3Y�43�~,kUl���N�G�9x s��U\햕z�rr�|&!~%���d�鑃(7���I�S7�6G>sHA���ǳ��<'��0ifs��K��~L�<a�=�ʡ�� ����'�Gv�?r�w�����$\)b��i���fV�Yݞ�NNga��G�K���>N�ZaR�%�4C�e����+LB���j���\&!�C3e��v9���p }��r��]n��$DB񅒔�_�~h�`��פ�d�s@��k��\/"���UG�-)�Шx?ηe&[��ں7$i��K�a��1�^ KA%��󘈻+}Sܽ�*�f����2W��_��5'?�$F��������$[�noYt[�����qr#� �>_]������
Y���	�Uw��,�<u��$9��I3����V�j���&��@�v���!��|�8E�D�*�f�E�09�I�҄Yݢ���� �f�s�gu�.*r��fؿ�gu{�p:9%�I3��6�}�g�� �	/i�B��������Q��I 99�Iȫ����J�*pc(w�A�ID���c؝J��#`b�@R]���$�0i�0%�´��W�9+ϛo�Wp��������o��7�8w���AeG��(�y���mg$_df�=�z�7v���4s��1V��q.�B0i�J�y���������y�n�uJn[¤��:�E��1
�f�"����b|є�,��ŏ8F�5��XC��í�� �xr6t���;���%UV�(���X1�>��6t����C�'<��G;9݃I8�8j���T(�&!~hI��A�B��`�L��V��RTȩL�Y�O�y����a�U�#�(�)��?�(z����7�����p ��&L�q6l�'p��k[|,��0	gPҲ^!+;���L&ͨl�JU޸�V���$�|Qݔ�SI��I�����
�a	�f�*l����[!'W0	�Xj��o�NU��E��)CX�[�B�d&ᬼ|L��Z壜�����w��ur}S��BN�`b,��;�r���f���<X��"�fֱ��;�`r�w&!J?��0�U�:h^�����)7'��u��B���C�I>��y���=��=7���ص�=���h��k��S���'�s룄�A��_R��� ��l���BYB�B��$tmЫ�z�r���9��I��Z\�鏛W𻿎��B�`�����X��+&3��ɄI���ٝL�o��#Pd���#4P��3"d�Q��^�i]�9��I3]�֪zP�~���[j`�¯0�p��ԝ���ܝ����:�!M!��0��Մ���o��
Wdcӑ�ˎ� ۋ�I��� ���wp��[7�EBy�*��rl��uJK�,��&� �& t* ���7H����x���}m�G��kwA�B��S1 l��9�q�Z����&�prNΤNN6f�����Sx�}��04}n�㽽Fփ<����aRȧF*]��-���G��ǅ�:�u��;�
�r�0u*�5gwxx�t�gdH�����@(�@(a-�1�&w�J�]�IELBp� Ls}�>-��`����)�l&�viO]2f!��0	�QƟv��k��
�LK�U���^+��������p���[RK���M|�Q�Ж�*��]�@i�q�iI��9��KMs�,w���[v������jm��;~�kI��(\�p/���I���N[R�*�0��y��AS~z��%�s�&<yF8��
��1���)��Í4��jI~��
�g�7�^��}w��p�����	~�>Gr����l�B��vF�8�E�x@���9Q�>��>�1k|j;j�����>x��o.�����T2o����.nI6A5�pV�J0��\�|Ȃ��-�F^����pt���W��������vOx˾��vM4j��V����-�ݿ�F֠��`I��&��<`GHdA�� 𗧢��j�ľ�_3x	�d�*�#s�v}�Bp�q��V$�����w���Su��pO��2��r���4�YKr��82G�j A��.���W�ᵟ��X	&�|$'�4��i�q=�P'ܔi�i��n3�x��x��Ea�_`=�J"k�]�G�����٥ܙ�g膔 S�)�:�h��q�!���}��y��{��O�E�g�N��"S��aIS@�Lf�$>��|���=���[:Y�2)>�t���hh��_�,P�x�%y�\���{
d�I�?0��q�\��2و�*��T9hM˽j��47��WR[�Ѹ��%œU0Yw�'+�jm1��Ί����'�:2>b.�n��n����2��o�]X'k��z�g��A��ՌDB:I���O�#�D��n�s�œ}i`Y�V�k�3���z{O�FV��4�-Q[�	%�j�c��U��X�Yz_���,Z�c��,��f��V��V��w�84�а\MX$�%�jE��Jڕ-86��vf�oƘ��Fhd�t�'k2&���z�cش��b�-���j|8�Z����=^�Ӷxq�߄ܷ.������-�7hI��(f�Osm:�1g�dqd�Q�nq0Q���=|�G�e�&����q�"�յA_�&����EJ�)��*��/v,��Q$6��b]X���_~AN^6��������0h)�CiZ<P�B�����YZ�$���.��m��|�"~?|19�lKr}?��TJ��X�L<�N�P>��t�1�U��xd�r�r�4���2lt��u[�!p�k��ʾ��œ6q���
��s�L����&t���d"����H���R�|g�4�|�p��4\����;q'ڀ³-)�b��E'c�eF�Z,
����{���ã^O���o�?!�����g�6-:�G%ƵÓEtm{�WiH������eO��R0Ȳ�.��W���|���[�ɷ
�)��DB
�(Ɠ�>�.�]ݍ��U��d�n9/�7��ܵ���$?���|��*Np��`�w���3������m�+�I&E����?r>�hI�^9��Ia�q�b��{5�毆Q��FY*}������"P;�bك	7�����w�i�	D�ߊ��T�K���,�3��ڙM+�<B$��Dh+�].��(Gg�ײ��>��QxG,S��l�-�G�X��`�;�З�b2�+�aCcP�FO�����0�t�I-�g0if5E���Q�!���Q���|�UtK����0��n��y22\/q�P����B2���Q�ĨTґi1�e~��Y( ��4���q���<ҧ��}� S�5�|_�癌ydj�3�P2W���d6���G}iю�<�n z  ;�$�D�����5^���Y9.V��V�X�~�ёZθ�u`A��]��9�B��O8;�t�p��5f�Y��:�1dbt�i�q'��]��U���E#��J�cb�z�"�伌���p����`S�S��t��EG^$s[j�	�l��
plnX�Mc��'IuK�rbEmU��J_뵿
�[�+@��+w�E��s!j۲#_��{�z�/�9Һn\�[Wls\Y��*�/y.��Ҹ�t��:�V!�{���!�vߧ��eT1�7�-�Nz�������R�dZ}�H�u�1ilY�:n���� �ZA��@Q��/Q�	,��%�"�s�� 8H���� L�`*Am�7^������]t�l�)¥����� ���
$=B�,�����yJ��z���.H�q��Ђ�!BE���zl&Y}q�[GN�kY}q͇ F��^��轘F$�h����8q��n�fA���Q����;t>=W�'gI0)Z�"Ri�d�/[�M�$�ɯv	n,vMv!D�n�B�nQG\��Ă$��I)�&�� ���e�ʾ�⹵zg�L瞓�i��:���e�G
�^�y}�4	&����q�}���W��Iv�Q��E�%"O��5��4�Hd֋]�w���9��-)P��E���A�!r� ��ނ�࢙c��s|�1-��.e=W�>.�9���t:�5���㲙3�ˤ�����\��G�ɸdX*�
�DbX�&��{�%Y�r�X]^�X��c{�\"5��#�9�U`5윉�Q��?-����g���,s;����d��
�����]��*�?��/o�&�����&L.��_ރ��F�j_���y �+ի�'�:0i��c��w��%)�^�����+4�P8��ʌT�4Q�,�+~DὠT�Wi~�5�˺=���}�y`:D��T�3�^�|�zv����$NY��j^g�(�@�C���<��k��B?;OH�%�n�����l�>���a�\���\j/H�)EV�h+J�!T��h*��~d����zb�pO{�3��8�S' A
'5�b��ׂ_��dw ��k��ׂߤ�.���/s����M�/h�@��5��T��?2sB�� 4�t�-�y��$2��D0y�	Q�C\�1i�(Mf����j3�1�L\�K�8�M��5!��T�r���ф�im��&pDA��!�[��<��%�&��x�	Qa����VK�=_�i�*�`�� ����7*�)���%�,�M��o�
+������]I�H��Hk�p8���2FR��7Cbґ�Z@�Z��`oL�����t~�7;�_��4p�ew�Sx�nxB0&���Ҕ/-��}>VAJn���)=A ��bH��T�j���񍁩�0���`!+���	pd4����I�_6�pN�f��L�&��i������1��v��2�ٙ3ஈ�7��%/�rY2	'�
�[~::�Y��u����z����濂��z>Ǩ�s$t���e��		���V��5��&�xv�*�e��2S��,�>]o���~�ˋ��e��Ky����|w�^
Z�+�&��޶��^mm��V6r��J�Em��)3O�9�|�@"�B�!�����K�*�B.��>�5Iz���X�B�?�[�׊�<��A>K܎ [��4x!9��y7.�!�'��1M0N��} E�mL�7�@���J�Q&ܙ���-iV���fGo*�@���6���|��7���7��e��-�9�2�KY9����J�� �9������/�	��)� �r��j����h�I�iH)m�ey�n���ؼ�yz$��r��]h�|�h�Q����Qd����%���<HL��1:c5�ٵ\L����	,IU�|�',~�V�����p���'A����&`�&6�f�F�$!A�����#R��eג-D�+��c����a��')~O)lH3�a����z훁u�9ᵇK_� y�&G*Y+i�*.C�\��s��\�W�VAr���?��~��CP�}�����������?��B��������`�~�yZ8��9�k�����>�=��ҷ"C��{b�v��J?��ȟS|�R;��YTL�:�i��A��d#�#E���uQ]�U;��¡d�R����������_^Y
�����3LR=���f�܇�0���l)<%n7o6=O�]2��]&`�����nz� ���JSy����o�~T�B�M������C��PɁn���z�\ߺ3��dW�f�^�/
׸~RO�LQ1	g��v�����_ɘ:��?1]ӃÉ����`)����`��CT5*�`a[�7��G�(�g5��L(9���r� ����H�Jhv$3�2�Z�y�?O*Y@�2��.�W���X��¶�s��)�Pz�[�V��U�C�@{ZY�t}ER����W�l}���k˽шyG�T&�ֺ܁��F���43��
�\����N<�h-}D�pH^�}�g�ʺ/&;\	5����
NW��Ǥ0�?���SL��<�1��f^|����(K����sD����4_�Q��e�^y��#k4�x��U
C�8���O��:��y� Ջ�Nj4$"!�8솮ڄ��~�1I�f؞�^���\�L�9<[��Wx�k��C/������]�#
����ҿ(6'FH����UTL� ����G��`p)��~l��N+���)�s�l�(�5�C�zum����E��@U�	(eFVm��D����d��j�Gu�<0�-��n��ԏ+�j�cl���0�Т{㶋����)jW�����d�Te�^N���j��j��&�Em�$^�	�;����<��RO�#�J�).  �o�~֣Y��"L>
�f7T���_g.�6�����%qs�����PX��&��h뢈4�+�?@��C(�)S2��d*{@2�s�$b����G�<�f.�L�W)�L�Ϧ�1٣��HD��x&Ox���,C���
��`N]�c�ƚ4-B�"�N谰�P��#�1'"Tt�U��t!��$�|��Х-��k�g�l~J�cj#s�)41�ǂ�R�����L�.G΃^���<�h���D�ʬ��]��Y�CD��F$L!�E°�R$wcX�fF��\V�a���8��ʌ�x�$��9嫤��ߣZ�9�_Hf�oc������w<�FE$8J�o2[lס�����1�P4gu{\Rz4m0"E�I�$���޻�o�0��)`����w�(�4��RD"D��U��r�T��F���>�O9v�xǴ�1�����D�-?=�>25O	My������h
�uv}|p�Ô�	�U���T_���ԍ�R�]]�5zϭd�H,pq����াk�jŕ9 !.2���Z-A��[K~�$�J�o�����Z����߹h��/FAZsW��wJ��j{�������s�Ur�-�̇��x+��W���`~������+��J�����ܦ�h8��k��N�}J��ʸˈÃ���/Mxk�y����~Stj�/����.p`���ZP���#L���]U�Sz@j��ʿ�6l?O��?/ƈ・�.6�Y�OH������z��k�^�b�H�7�	Z_�ZJK���B�?lI����Y�ꦔ��!7t�wT
~�QY�Jt���y��/�\l��VB��pP"����O�����=�B��f��7���?4 ��      .   �  x���Yo�Vǟ�O��<�hD�����Œ��w��)��D�ڊbm�h�t�b&hg&��Ӽ'�Q���
�ߨ�RK%�Nc��l�<���;�s��%>��4���Wp���3���������)�F'[�/�?�����pߠk��K|/Q�?�+�����[�+:�D��o�~_��k��f�k�k��F�k����:�Ή�ޙȆ�o���<����j�i�ħ�'"],+�)�-Q�O�+��/H� ��!q��Qܽ��l��E�Ys��XG7�GT��?{�k�"���Qh��<(f�М��/|�ӓ�I:��e�?��M�O]��e%/%�`>����-�<@�=G��c����]��Љ�(���t�O������/���	��g.��t�����B�����%|����B�����k�>A9�����꓎>$��T��C�n�s3�!�L��T$���J)��L:�b��ox�G}i\�fFeN;����|�b_�g���Lz��ܴ�$/`�, %Q؀s���a}`�m��ƅ�wu'��M*m�ɑ���<�h7֔Ė�H-���6S��� b(fu��<H�56��K*0�Z��$���1½�3%�K�� ��a$ي����z�������Z��>\¬�������]�!�~�ҬeES4r�Ȏ� 8�8�uS�\7�:�4��^U�[�6�Q��#d�O�`9'R���M��R[�?Pn�J$p��l��l]��c���um�yeC[��xa=�W�Wv`���8�҇���iJ[ʤ�qbŰ8�$7#�i޵�m��	�5�T{\'53] C�<N4��1e�y1�REH5A��(���jD#��/�H��B;�c��.�°>p7��E2ے�O}li�l<Z5F�5���}ַD���mRq�ʛ�mjT)����X	+b0T9	5�ZR��5�1Gʨ��p�BČ�8)t�8c����B�(���D��2<��ŭ��;Ev�X/�1>��%:���mS�Z֫��"~ֹ�}m���.|��7������篗1�i�ctf�'�9�Ͽ W~z����o�r��PF�ep���-�̅�e��CU5�'m���gY�;�~�(�(��8NA+E-�r�@7PԇC�R��dC��T�6��6ݣA�%#�t���K?�/�
�%izߪ�BH�� Y�l��9��i���!>D���(�6�V%�Ύ�&Vq��5%7-��X��	ȠG�Tl@�|�5�c_ ���q��-�&�Q�3ѹ�Ĭŝ)Q^V (m�vʟ���\�(=�Y�E"�ܡ�te���u���G��f�5/FU��j/�>�zg�t�7VZƜ��ZA��^7YΓ2q��2ӹ]2^N �i��
�X��������K�K��9��U��ݒ���q5.1Vk�ҷAN�ƭ�*����Ku?�V��O�s���{J�z�d��Q,�P�t����!*,{���!Cyi
�7��\�C;:D�W�^�R<�+�6��Z�Ǩp�G�j�=�$��Knq�AC�u�0[�H�f��7�h�1��Ʃ�կF�6)e�Ff �zS�`)�� r��q ���c���"��-e��}�~fXfֹE��N!��3:aߊz�f�y.�~o[�/�d���}�5[��V�ʞ��}�\�x�t?o��u~|�lb�Tc"��X�(��Ѫ|��<I��,Lj�I�l)��:u3�O��Z��)C�����N�@c��77���+�w�CӦ�8aaL�Q
t�Ըz,`6�S���А�Ar
�@M=)%��W0���N|T}�V�C{��p �`��h7�#c�1�5;��Z���M����h湶uu7���G��h�H������ 5�TDV�f7���.\:$���J/3:1�m��t���d)�i��o�	8/IH�`+t�9ypp�"o#     